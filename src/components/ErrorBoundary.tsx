import React from 'react';
import { message } from 'antd';

export default class ErrorBoundary extends React.Component<
  any,
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
    message.error('图层数据有误，请检查数据');
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
