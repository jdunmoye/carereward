// Common Types

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface MetricComparison {
  current: number;
  previous: number;
  benchmark: number;
  target: number;
  change: number;
  changePercent: number;
  trend: 'up' | 'down' | 'stable';
  performance: 'above' | 'below' | 'at';
}

export interface FilterOptions {
  dateRange?: DateRange;
  categories?: string[];
  status?: string[];
  priority?: string[];
  tags?: string[];
  search?: string;
}

export interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  pagination?: PaginationData;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationData;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
  category?: string;
  date?: Date;
}

export interface TimeSeriesDataPoint {
  date: Date;
  value: number;
  category?: string;
  metadata?: Record<string, any>;
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'donut';
  title: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  data: ChartDataPoint[] | TimeSeriesDataPoint[];
  colors?: string[];
  height?: number;
  width?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableConfig {
  columns: TableColumn[];
  data: any[];
  pagination?: PaginationData;
  sorting?: SortOptions;
  filtering?: FilterOptions;
  loading?: boolean;
  emptyMessage?: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
  expiresAt?: Date;
}

export interface SearchResult {
  id: string;
  type: 'user' | 'metric' | 'report' | 'story' | 'activity';
  title: string;
  description: string;
  url: string;
  relevance: number;
  metadata?: Record<string, any>;
}

export interface ExportOptions {
  format: 'csv' | 'excel' | 'pdf' | 'json';
  dateRange?: DateRange;
  filters?: FilterOptions;
  columns?: string[];
  includeCharts?: boolean;
}

export interface ImportResult {
  success: boolean;
  recordsProcessed: number;
  recordsImported: number;
  errors: ImportError[];
  warnings: ImportWarning[];
}

export interface ImportError {
  row: number;
  field: string;
  message: string;
  value: any;
}

export interface ImportWarning {
  row: number;
  field: string;
  message: string;
  value: any;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  metadata?: Record<string, any>;
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  services: ServiceHealth[];
  lastChecked: Date;
  uptime: number;
  version: string;
}

export interface ServiceHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime: number;
  lastChecked: Date;
  error?: string;
}
