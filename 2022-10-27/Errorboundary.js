import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false, error: null, errorInfo: ' '}
  }

  static getDerivedStateFromError(error) {
    console.log((`getDerivedStateFromError: ${error}`))

    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo})
    console.log(`componentDidCatch : ${(error, errorInfo)}`)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent) {
        return this.props.fallbackComponent
      }

      return (
        <div>
          <h2>
            Error occured!
          </h2>
          <details style={{ whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }
  }
}

export default ErrorBoundary