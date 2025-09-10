import React from 'react';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'pulse' | 'dots';
  text?: string;
}

/**
 * CareReward Loading Component
 * 
 * @example
 * ```tsx
 * <Loading size="md" variant="spinner" text="Loading data..." />
 * ```
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  text,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  const renderSpinner = () => (
    <div 
      className={`${sizeClasses[size]} border-2 border-gray-400 border-t-green-600 rounded-full animate-spin`}
      aria-hidden="true"
    />
  );
  
  const renderPulse = () => (
    <div 
      className={`${sizeClasses[size]} bg-green-600 rounded-full animate-pulse`}
      aria-hidden="true"
    />
  );
  
  const renderDots = () => (
    <div className="flex space-x-1" aria-hidden="true">
      <div className={`${sizeClasses[size]} bg-green-600 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
      <div className={`${sizeClasses[size]} bg-green-600 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
      <div className={`${sizeClasses[size]} bg-green-600 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
    </div>
  );
  
  const renderLoading = () => {
    switch (variant) {
      case 'pulse':
        return renderPulse();
      case 'dots':
        return renderDots();
      default:
        return renderSpinner();
    }
  };
  
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label={text || 'Loading'}
      {...props}
    >
      {renderLoading()}
      {text && (
        <span className={`ml-3 text-gray-400 ${textSizeClasses[size]}`}>
          {text}
        </span>
      )}
      <span className="sr-only">{text || 'Loading'}</span>
    </div>
  );
};

/**
 * Loading Overlay Component
 */
export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  children: React.ReactNode;
  text?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  text = 'Loading...',
  className = '',
  ...props
}) => {
  return (
    <div className={`relative ${className}`} {...props}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Loading size="lg" text={text} />
        </div>
      )}
    </div>
  );
};

export default Loading;
