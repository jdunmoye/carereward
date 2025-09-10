// User & Authentication Types

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  organization: string;
  department?: string;
  avatar?: string;
  lastLogin: Date;
  isActive: boolean;
  permissions: Permission[];
  preferences: UserPreferences;
}

export type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer';

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: 'read' | 'write' | 'delete' | 'admin';
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  timezone: string;
  dateFormat: string;
  notifications: NotificationPreferences;
  dashboard: DashboardPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  frequency: 'immediate' | 'daily' | 'weekly';
  categories: string[];
}

export interface DashboardPreferences {
  defaultView: 'overview' | 'detailed' | 'compact';
  widgets: string[];
  refreshInterval: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  refreshToken: string | null;
  expiresAt: Date | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  newPassword: string;
  confirmPassword: string;
}
