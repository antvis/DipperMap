import React from 'react';

export default class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
