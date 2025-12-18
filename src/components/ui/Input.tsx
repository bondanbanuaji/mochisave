import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'input input-bordered w-full',
            error && 'input-error',
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <label className="label">
            <span className={clsx('label-text-alt', error && 'text-error')}>
              {error || helperText}
            </span>
          </label>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
