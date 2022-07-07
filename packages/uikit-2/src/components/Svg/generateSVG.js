const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'Icons')

const fileNames = fs.readdirSync(directoryPath)

fileNames.forEach((name) => {
  if (name !== 'Warning2.tsx') {
    const iconPath = path.join(directoryPath, name)
    const data = fs.readFileSync(iconPath, 'utf-8')
    const [iconName, fileSuffix] = name.split('.')
    const svgString = data
      .match(/<Svg (.|\n)* <\/Svg>/m)[0]
      .replace('<Svg', "<svg xmlns='http://www.w3.org/2000/svg'")
      .replace('</Svg>', '</svg>')
      .replace('{...props}', '')
      .replace(/width={.*}/, '')
      .replace(/height={.*}/, '')
      .replace(/_\d+:\d+/g, '')
      .replace(/"/g, "'")
      .replace(/%/g, '%25')
      .replace(/#/g, '%23')
      .replace(/</g, '%3C')
      .replace(/>/g, '%3E')
    const alreadyFilled = svgString.includes("fill='%23")
    const template = `
import { styled } from '@pancakeswap/mp-styled-2'
import Svg from '../Svg2'
const ${iconName}Icon = styled(Svg)\`
	${alreadyFilled ? 'background-image' : 'mask-image'}: url("data:image/svg+xml, ${svgString}");
\`
  
${!alreadyFilled ? `${iconName}Icon.defaultProps = { color: "text" }` : ''}
export default ${iconName}Icon
  `
    fs.writeFileSync(path.join(__dirname, 'Icons2', name), template, 'utf-8')
  }
  //   if (['Split.tsx', 'Lock.tsx', 'Unlock.tsx', 'Hot.tsx'].includes(name)) {
  //     const iconPath = path.join(directoryPath, name)
  //     const data = fs.readFileSync(iconPath, 'utf-8')
  //     const [iconName, fileSuffix] = name.split('.')
  //     const svgString = data
  //       .match(/<Svg (.|\n)* <\/Svg>/m)[0]
  //       .replace('<Svg', "<svg xmlns='http://www.w3.org/2000/svg'")
  //       .replace('</Svg>', '</svg>')
  //       .replace('{...props}', '')
  //       .replace(/_\d+:\d+/g, '')
  //       .replace(/"/g, "'")
  //       .replace(/%/g, '%25')
  //       .replace(/#/g, '%23')
  //       .replace(/</g, '%3C')
  //       .replace(/>/g, '%3E')
  //     // const alreadyFilled = String.includes("fill='%23")
  //     const template = `
  // import { styled } from '@pancakeswap/mp-styled-2'
  // import Svg from '../Svg2'
  // const ${iconName}WhiteIcon = styled(Svg)\`
  // 	${alreadyFilled ? 'background-image' : 'mask-image'}: url("data:image/svg+xml, ${svgString}");
  // \`
  //
  // ${!alreadyFilled ? `${iconName}Icon.defaultProps = { color: "text" }` : ''}
  // export default ${iconName}Icon
  //   `
  //     fs.writeFileSync(path.join(__dirname, 'Icons2', name), template, 'utf-8')
  //   }
})
