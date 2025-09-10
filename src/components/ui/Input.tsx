import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'text' | 'search';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  label?: string;
  error?: string;
  helperText?: string;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * CareReward Input Component
 * 
 * @example
 * ```tsx
 * <Input 
 *   variant="text" 
 *   label="Email Address" 
 *   placeholder="Enter your email"
 *   icon={Mail}
 *   iconPosition="left"
 * />
 * ```
 */
export const Input: React.FC<InputProps> = ({
  variant = 'text',
  icon: Icon,
  iconPosition = 'left',
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    text: 'h-14 rounded-lg border border-gray-500 focus:border-green-600 focus:border-2 bg-gray-700 text-gray-50 px-4',
    search: 'h-12 rounded-full bg-gray-700 border border-gray-500 focus:border-green-600 px-4',
  };
  
  const iconClasses = {
    left: 'pl-10',
    right: 'pr-10',
  };
  
  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${
    Icon ? iconClasses[iconPosition] : ''
  } ${error ? 'border-red-600' : ''} ${className}`;
  
  const iconElement = Icon && (
    <Icon 
      className={`w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 ${
        iconPosition === 'left' ? 'left-3' : 'right-3'
      }`}
      aria-hidden="true"
    />
  );
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-50 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {iconElement}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * CareReward TextArea Component
 * 
 * @example
 * ```tsx
 * <TextArea 
 *   label="Description" 
 *   placeholder="Enter description"
 *   rows={4}
 * />
 * ```
 */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full h-14 rounded-lg border border-gray-500 focus:border-green-600 focus:border-2 bg-gray-700 text-gray-50 px-4 py-3 transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed resize-vertical';
  
  const textareaClasses = `${baseClasses} ${error ? 'border-red-600' : ''} ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-50 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={textareaClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className="mt-1 text-sm text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
