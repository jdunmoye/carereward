import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children: React.ReactNode;
}

/**
 * CareReward Button Component
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" icon={Plus} iconPosition="left">
 *   Add New Item
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-green-600 hover:bg-teal-500 text-gray-50 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-green-600 text-green-600 hover:bg-teal-50 bg-transparent',
    ghost: 'text-gray-400 hover:text-gray-50 hover:bg-gray-700 bg-transparent',
  };
  
  const sizeClasses = {
    sm: 'h-10 px-4 text-sm rounded-lg',
    md: 'h-12 px-6 text-base rounded-lg',
    lg: 'h-14 px-8 text-lg rounded-lg',
  };
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const iconElement = Icon && (
    <Icon 
      className={`${iconSizeClasses[size]} ${loading ? 'animate-pulse' : ''}`} 
      aria-hidden="true"
    />
  );
  
  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {!loading && iconElement && iconPosition === 'left' && (
        <span className="mr-2">{iconElement}</span>
      )}
      <span>{children}</span>
      {!loading && iconElement && iconPosition === 'right' && (
        <span className="ml-2">{iconElement}</span>
      )}
    </button>
  );
};

export default Button;
