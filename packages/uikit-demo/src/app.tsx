import React from 'react'
import { Component } from 'react'
import { PathProvider } from './context'
import './app.scss'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <PathProvider>{this.props.children}</PathProvider>
  }
}

export default App
