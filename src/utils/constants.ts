// Application constants and configuration

export const APP_CONFIG = {
  name: 'CareAlign Rewards',
  version: '1.0.0',
  description: 'Healthcare Performance and Rewards Platform',
  author: 'CareAlign Team',
  supportEmail: 'support@carealign.com',
  website: 'https://carealign.com',
};

export const API_ENDPOINTS = {
  base: '/api/v1',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/auth/profile',
  },
  dashboard: {
    metrics: '/dashboard/metrics',
    activity: '/dashboard/activity',
  },
  financial: {
    metrics: '/financial/metrics',
    trends: '/financial/trends',
    budget: '/financial/budget',
  },
  clinical: {
    metrics: '/clinical/metrics',
    outcomes: '/clinical/outcomes',
    departments: '/clinical/departments',
  },
  behavior: {
    drivers: '/behavior/drivers',
    participants: '/behavior/participants',
  },
  opportunities: {
    list: '/opportunities',
    create: '/opportunities',
    update: '/opportunities/:id',
    delete: '/opportunities/:id',
  },
  rewards: {
    systems: '/rewards/systems',
    awards: '/rewards/awards',
    categories: '/rewards/categories',
  },
  stories: {
    list: '/stories',
    create: '/stories',
    update: '/stories/:id',
    delete: '/stories/:id',
  },
  reports: {
    list: '/reports',
    generate: '/reports/generate',
    schedule: '/reports/schedule',
    download: '/reports/:id/download',
  },
  settings: {
    profile: '/settings/profile',
    notifications: '/settings/notifications',
    security: '/settings/security',
    system: '/settings/system',
  },
};

export const ROUTES = {
  dashboard: '/dashboard',
  financial: '/financial-metrics',
  clinical: '/clinical-metrics',
  behavior: '/behavior-drivers',
  opportunity: '/opportunity-analysis',
  rewards: '/reward-system',
  stories: '/success-stories',
  reports: '/reports',
  settings: '/settings',
};

export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  PROVIDER: 'provider',
  ANALYST: 'analyst',
} as const;

export const PERMISSIONS = {
  DASHBOARD_VIEW: 'dashboard:view',
  DASHBOARD_EDIT: 'dashboard:edit',
  FINANCIAL_VIEW: 'financial:view',
  FINANCIAL_EDIT: 'financial:edit',
  CLINICAL_VIEW: 'clinical:view',
  CLINICAL_EDIT: 'clinical:edit',
  BEHAVIOR_VIEW: 'behavior:view',
  BEHAVIOR_EDIT: 'behavior:edit',
  OPPORTUNITY_VIEW: 'opportunity:view',
  OPPORTUNITY_EDIT: 'opportunity:edit',
  REWARDS_VIEW: 'rewards:view',
  REWARDS_EDIT: 'rewards:edit',
  STORIES_VIEW: 'stories:view',
  STORIES_EDIT: 'stories:edit',
  REPORTS_VIEW: 'reports:view',
  REPORTS_GENERATE: 'reports:generate',
  SETTINGS_VIEW: 'settings:view',
  SETTINGS_EDIT: 'settings:edit',
} as const;

export const REWARD_TYPES = {
  POINTS: 'points',
  MONETARY: 'monetary',
  BADGE: 'badge',
  CERTIFICATE: 'certificate',
  RECOGNITION: 'recognition',
} as const;

export const REWARD_CATEGORIES = {
  CLINICAL_EXCELLENCE: 'Clinical Excellence',
  FINANCIAL_PERFORMANCE: 'Financial Performance',
  INNOVATION: 'Innovation',
  TEAMWORK: 'Teamwork',
  QUALITY: 'Quality',
  SAFETY: 'Safety',
} as const;

export const BEHAVIOR_CATEGORIES = {
  CLINICAL: 'clinical',
  OPERATIONAL: 'operational',
  PATIENT_CARE: 'patient_care',
  INNOVATION: 'innovation',
} as const;

export const OPPORTUNITY_CATEGORIES = {
  COST_SAVINGS: 'cost_savings',
  QUALITY_IMPROVEMENT: 'quality_improvement',
  EFFICIENCY: 'efficiency',
  INNOVATION: 'innovation',
  PATIENT_CARE: 'patient_care',
} as const;

export const OPPORTUNITY_PRIORITIES = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;

export const OPPORTUNITY_STATUS = {
  IDENTIFIED: 'identified',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const REPORT_TYPES = {
  FINANCIAL: 'financial',
  CLINICAL: 'clinical',
  ENGAGEMENT: 'engagement',
  CUSTOM: 'custom',
} as const;

export const REPORT_SCHEDULES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
} as const;

export const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
  AREA: 'area',
  SCATTER: 'scatter',
} as const;

export const THEME_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
} as const;

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export const DATE_FORMATS = {
  SHORT: 'MM/DD/YYYY',
  LONG: 'MMMM DD, YYYY',
  ISO: 'YYYY-MM-DD',
  DATETIME: 'MM/DD/YYYY HH:mm',
} as const;

export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 50,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 25,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  MAX_PAGE_SIZE: 100,
} as const;

export const DEBOUNCE_DELAYS = {
  SEARCH: 300,
  INPUT: 500,
  API_CALL: 1000,
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;
