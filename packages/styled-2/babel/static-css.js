// const css = require('@linaria/mp-styled-2/dist/lib/styled/utils/css.js')
const css = require('../dist/lib/styled/utils/css.js')
const reactToCSS = require('react-style-object-to-css')
const _template = require('@babel/template')
const template = _template.default
const JSXOpeningElementVisiter = {
  JSXOpeningElement(path) {
    // 从组件中删除样式 props
    if (!/^[A-Z]/.test(path.node.name.name)) {
      return
    }
    const styledProps = path.node.attributes.filter(node => {
      if (node.type === 'JSXAttribute' && (!node.value || node.value.type !== 'JSXExpressionContainer') && !node.name.name.includes('color') && css.cssProps[node.name.name]) {
        return true
      }
      return false
    })
    const nonStyledProps = path.node.attributes.filter(node => !styledProps.includes(node))

    path.node.attributes = nonStyledProps
    // 构建对应的 css
    if (styledProps.length > 0) {
      const _styledProps = styledProps.reduce((before, after) => {
        before[after.name.name] = after?.value?.value || true
        return before
      }, {})

      const cssString = reactToCSS(css.default(_styledProps)())

      const originComponentName = path.node.name.name
      const data = { path: path, css: cssString }
      if (this.needAddComponent[originComponentName]) {
        this.needAddComponent[originComponentName].needChange.push(data)
      } else {
        this.needAddComponent[originComponentName] = { needChange: [data] }
      }
    }
  }
}

const ImportDeclarationVisiter = {
  ImportDeclaration(path) {
    const result = path.node.specifiers.filter(node => node.local.name === 'styled')
    this.state.lastImportPath = path
    if (result.length > 0) {
      this.state.needImport = false
      console.log(result[0].local)
      this.state.styledNode = result[0].local
    }
  },
  Identifier(path) {
    // find NeedChangeComponentSource
    const needChangeComponentNames = Object.keys(this.state.needAddComponent)
    const currentName = path.node.name
    const index = needChangeComponentNames.indexOf(currentName)
    if (index > -1) {
      this.state.needAddComponent[currentName].from = path
    }
  }
}

module.exports = babel => {

  const { types: t } = babel
  return {
    visitor: {
      Program: {
        enter: (path) => {
          const needAddComponent = {}
          path.traverse(JSXOpeningElementVisiter, { needAddComponent })
          if (Object.keys(needAddComponent).length > 0) {
            // 检查是否 import styled
            let state = { needImport: true, lastImportPath: null, needAddComponent, styledNode: null }
            path.traverse(ImportDeclarationVisiter, { state })
            if (state.needImport) {
              // const identifier = t.identifier('styled');
              // const importDefaultSpecifier = t.importDefaultSpecifier(identifier);
              // const importDeclaration = t.importDeclaration([importDefaultSpecifier], t.stringLiteral('@linaria/mp-styled-2'));
              const buildImport = template(`
                    import styled from "styled-components"
                    `)
              const result = buildImport()
              state.styledNode = result.specifiers[0].local
              console.log(result)
              state.lastImportPath.insertAfter(result)
            }
            Object.entries(state.needAddComponent).forEach(([key, { needChange, from }]) => {
              needChange.map(({ path, css }, index) => {
                // 新建组件
                const newComponentName = `${key}AutoMaticCreate${index}`
                const idn = t.identifier(newComponentName)
                // const template = t.templateLiteral([t.templateElement({ raw: css })], [])
                // const call = t.callExpression(t.identifier('styled'), [t.identifier(key)])
                // const expression = t.taggedTemplateExpression(call, template)
                // // create a VariableDeclarator
                // const variable = t.variableDeclaration("const", [t.VariableDeclarator(idn, expression)])
                const buildVar = template(`
                    const ${newComponentName} = STYLED_NODE(${key})\`${css}\`;
                    `)
                path.node.name = idn
                if (path.parent.closingElement) {
                  path.parent.closingElement.name = idn
                }
                if (from.parent.type === 'VariableDeclarator') {
                  const insertPath = from.findParent(path => path.isVariableDeclaration)
                  const data = buildVar({ STYLED_NODE: state.styledNode })
                  // debugger
                  insertPath.parentPath.insertAfter(data)
                }
                else if (from.find(path => path.isImport)) {
                  const insertPath = from.findParent(path => path.isImport)
                  state.lastImportPath.getSibling(state.lastImportPath.key + 1).insertAfter(buildVar(
                    { STYLED_NODE: state.styledNode }
                  ))
                }
              })
            })
          }
        },
        exit: (path) => {
          // debugger
        }
      }
    }
  }
}
