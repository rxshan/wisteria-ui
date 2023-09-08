import { Component, isValidElement, type ErrorInfo } from 'preact';
import type { ErrorBoundaryProps } from './types';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (isValidElement(fallback)) {
        return fallback;
      }
      return (
        <main>
          <h1>Something went wrong.</h1>
          <div>{fallback}</div>
        </main>
      );
    }
    return children;
  }
}
