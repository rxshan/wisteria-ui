import { ErrorBoundary } from './ErrorBoundary';
import { ConfigProvider, useWisteriaConfig } from './ConfigProvider';

ErrorBoundary.displayName = 'WisErrorBoundary';
ConfigProvider.displayName = 'WisConfigProvider';

export { ErrorBoundary };
export { ConfigProvider, useWisteriaConfig };
export type { ConfigProviderProps, ErrorBoundaryProps } from './types';
