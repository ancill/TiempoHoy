export type DefaultColors =
  | 'error'
  | 'warning'
  | 'success'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'info'
export const DynamicTextColor: Record<DefaultColors, string> = {
  accent: 'text-accent',
  error: 'text-error',
  success: 'text-success',
  primary: 'text-primary',
  secondary: 'text-secondary',
  info: 'text-info',
  warning: 'text-warning',
}
export const ColorVariants: Record<DefaultColors, string> = {
  accent: 'progress-accent',
  error: 'progress-error',
  success: 'progress-success',
  primary: 'progress-primary',
  secondary: 'progress-secondary',
  info: 'progress-info',
  warning: 'progress-warning',
}
