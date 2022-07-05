const { default: generate } = require('@babel/generator');
const _template = require('@babel/template')
const template = _template.default
const KeyframeVisitor = {
  TaggedTemplateExpression(path) {
    debugger
    if (path.node.tag.name === "keyframes") {
      this.state.keyframes[path.parent.id.name] = `\n@keyframes ${path.parent.id.name} { ${path.node.quasi.quasis[0].value.raw} };\n`
    } else {
      debugger
      let deleteIndex = []
      path.node.quasi.expressions.map((node, index) => {
        if (node.type === 'Identifier' && Object.keys(this.state.keyframes).includes(node.name)) {
          deleteIndex.push(index)
          let needChangeQusisIndex = null
          path.node.quasi.quasis.map((quasiNode, index) => {
            debugger
            if (quasiNode.start > node.end && needChangeQusisIndex === null) {
              needChangeQusisIndex = index - 1
            }
          })
          // 将 keyframes 插到最前面
          path.node.quasi.quasis[0].value.raw = this.state.keyframes[node.name] + path.node.quasi.quasis[0].value.raw
          path.node.quasi.quasis[0].value.cooked = this.state.keyframes[node.name] + path.node.quasi.quasis[0].value.cooked
          // 修改 animation
          path.node.quasi.quasis[needChangeQusisIndex].value.raw += ` ${node.name} `
          path.node.quasi.quasis[needChangeQusisIndex].value.cooked += ` ${node.name} `
          debugger
        }
      })
      debugger
      path.node.quasi.expressions = path.node.quasi.expressions.filter((_, index) => { return !deleteIndex.includes(index) })
      // template(````)
      const newTemplateString = generate(path.node.tag).code + "`" + path.node.quasi.quasis.map((node, index, allNode) => {
        const needConfirmExpression = path.node.quasi.expressions[0]
        if (needConfirmExpression && needConfirmExpression.start > node.end && needConfirmExpression.end < allNode[index + 1].start) {
          const [_, ...rest] = path.node.quasi.expressions
          path.node.quasi.expressions = rest
          return node.value.raw + "${" + generate(needConfirmExpression).code + "}"
        } else {
          return node.value.raw
        }

      }).join('') + "`"
      debugger
      const result = template(newTemplateString)
      path.replaceWithSourceString(newTemplateString)
      path.skip()
      // path.replaceWith(result().expression)
      // const test = generate(result)
      debugger
    }
  }
}

module.exports = babel => {

  const { types: t } = babel
  return {
    visitor: {
      Program: {
        enter: (path, state) => {
          state.keyframes = {}
          path.traverse(KeyframeVisitor, { state })
        },
        exit: () => {
        }
      }
    }
  }

}
