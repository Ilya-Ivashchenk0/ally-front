import cn from 'classnames'
import classes from './styles.module.scss'
import { typeInputProps } from './types'
import { useFormContext } from 'react-hook-form';
import { ForwardRefExoticComponent, forwardRef } from 'react';

const Input: ForwardRefExoticComponent<typeInputProps> = forwardRef<
  HTMLInputElement,
  typeInputProps
>(({
  className,
  name,
  label,
  type,
  required,
  setPasswordInputType,
  ...otherProps
}, ref) => {
  const {
    watch,
    formState: { errors },
    setValue
  } = useFormContext()

  const value = watch(name)
  const error = errors[name]?.message || ''

  const wisiblePassword = () => {
    if (setPasswordInputType) {
      if (type === 'text') {
        setPasswordInputType('password')
      } else {
        setPasswordInputType('text')
      }
    }
  }

  return (
    <>
      <div className={cn(className, classes.inputWrapper)}>
        <label className={cn(className, classes.inputLabel)} htmlFor={name}>
          {label}
        </label>
        <input
          className={cn(className, classes.input, {
            [classes.required]: required
          })}
          id={name}
          name={name}
          value={value}
          type={type}
          onChange={e => setValue(name, e.target.value)}
          required={required}
          ref={ref}
          {...otherProps}
          autoComplete='off'
        />
        {name === 'password' && (
          <button className={cn(className, classes.inputButton)} onClick={wisiblePassword} type='button'>👁️</button>
        )}
      </div>
      <p className={cn(className, classes.inputError)}>
        {typeof error === 'string' && error !== '' ? error : ''}
      </p>
    </>
  )
})

Input.displayName = 'Input'

export { Input }
