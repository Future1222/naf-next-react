import classNames from 'classnames'
import { ReactNode } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

export interface InputFieldProps {
  placeholder?: string
  form: UseFormReturn<any>
  name: any
  className?: string
  formLabel?: string
  iconAfter?: ReactNode
  iconBefore?: ReactNode
}
export default function GroupFromInput(props: InputFieldProps) {
  const { placeholder, form, name, className, formLabel, iconAfter, iconBefore } = props
  const {
    formState: { errors },
  } = form
  const hasError: any = errors[name]
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="">
            <div className={classNames('', className)}>
              {!!formLabel && (
                <div className="">
                  <span>{formLabel}</span>
                </div>
              )}
              <div className="">
                {!!iconBefore && <span>{iconBefore}</span>}
                <input
                  className={classNames('input', { 'input--error': hasError?.message })}
                  placeholder={placeholder}
                  value={value}
                  onBlur={onBlur}
                  onChange={(val) => onChange(val)}
                />
                {!!iconAfter && <span>{iconAfter}</span>}
              </div>
            </div>
            {hasError?.message && (
              <span className="form-input__error-text">{hasError?.message}</span>
            )}
          </div>
        )}
      />
    </>
  )
}
