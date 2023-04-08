export type DefaultColors =
  | 'error'
  | 'warning'
  | 'success'
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'neutral'
export const DynamicTextColor: Record<DefaultColors, string> = {
  accent: 'text-accent',
  error: 'text-error',
  success: 'text-success',
  primary: 'text-primary',
  secondary: 'text-secondary',
  info: 'text-info',
  warning: 'text-warning',
  neutral: 'text-slate-300',
}
export const DynamicBgColor: Record<DefaultColors, string> = {
  accent: 'bg-accent',
  error: 'bg-error',
  success: 'bg-success',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  info: 'bg-info',
  warning: 'bg-warning',
  neutral: 'bg-slate-300',
}
export const ColorVariants: Record<DefaultColors, string> = {
  accent: 'progress-accent',
  error: 'progress-error',
  success: 'progress-success',
  primary: 'progress-primary',
  secondary: 'progress-secondary',
  info: 'progress-info',
  warning: 'progress-warning',
  neutral: 'progress-slate-300',
}
