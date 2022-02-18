import React from 'react'
import { Component } from 'react'
import { PathProvider } from './context'
import './app.scss'
import { WebviewProvider } from '@binance/mp-pancake-uikit'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <PathProvider>
        <WebviewProvider webviewFilePath="pages/web-view/index">{this.props.children}</WebviewProvider>
      </PathProvider>
    )
  }
}

export default App
