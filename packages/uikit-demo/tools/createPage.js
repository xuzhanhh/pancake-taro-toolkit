const { Command } = require('commander')
const fs = require('fs')
const path = require('path')
const program = new Command()
program.option('-n, --name <type>', "file's name")

program.parse(process.argv)
const options = program.opts()

const template = `
import React from 'react'
import { Box } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'

export default function Page() {
  return (
    <Provider>
      <Box>123</Box>
    </Provider>
  )
}

`
const getPagePath = (subPath) => `${path.resolve(__dirname, '../src/pages')}/${subPath}`
fs.mkdirSync(getPagePath(options.name))
fs.writeFileSync(getPagePath(`${options.name}/index.tsx`), template, 'utf8')
fs.writeFileSync(
  getPagePath(`${options.name}/index.config.ts`),
  `
export default {
  navigationBarTitleText: '',
}
`,
  'utf8',
)
console.log('create page success!')
