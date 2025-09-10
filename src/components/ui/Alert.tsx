import React from 'react';
import { LucideIcon, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

/**
 * CareReward Alert Component
 * 
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!" dismissible onDismiss={handleDismiss}>
 *   Your changes have been saved successfully.
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = '',
  ...props
}) => {
  const baseClasses = 'p-4 rounded-lg border transition-all duration-200';
  
  const variantConfig = {
    success: {
      classes: 'bg-emerald-900 border-emerald-600 text-emerald-300',
      icon: CheckCircle,
    },
    warning: {
      classes: 'bg-amber-900 border-amber-500 text-amber-300',
      icon: AlertTriangle,
    },
    error: {
      classes: 'bg-red-900 border-red-600 text-red-300',
      icon: AlertCircle,
    },
    info: {
      classes: 'bg-blue-900 border-blue-500 text-blue-300',
      icon: Info,
    },
  };
  
  const config = variantConfig[variant];
  const Icon = config.icon;
  
  const classes = `${baseClasses} ${config.classes} ${className}`;
  
  return (
    <div className={classes} role="alert" {...props}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
        <div className="flex-1">
          {title && (
            <h3 className="text-sm font-semibold mb-1">
              {title}
            </h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-3 flex-shrink-0 p-1 rounded-md hover:bg-gray-700 transition-colors duration-200"
            aria-label="Dismiss alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
