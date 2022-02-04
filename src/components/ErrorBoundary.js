import React, { Component } from 'react'
import { deleteUser } from '../auth'
export class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
    deleteUser()
  }
  render() {
    return this.state.hasError ? (
      <h1>The Error ,Please Reload The page </h1>
    ) : (
      this.props.children
    )
  }
}
