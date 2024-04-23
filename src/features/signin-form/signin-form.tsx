import { Input } from "@/shared/ui/input"
import { signinFormProps } from "./types"
import cn from 'classnames'
import classes from './styles.module.scss'
import { Controller, useFormContext } from "react-hook-form"

export const SigninForm: React.FC<signinFormProps> = ({
  step,
  setStep,
  passwordInputType,
  setPasswordInputType,
  className,
  inputs,
  onSubmit
}) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext()
  const email = watch('email')
  const password = watch('password')

  return (
    <form className={cn(className, classes.form)} onSubmit={onSubmit}>
      <h1 className={cn(className, classes.formHeading)}>Шаг {step}</h1>
      {step < 2 && inputs && (
        <Controller
          key={inputs[0].name}
          name={inputs[0].name}
          control={control}
          rules={inputs[0].options}
          render={({ field }) => (
            <Input
              label={inputs[0].label}
              type={inputs[0].type}
              {...field}
            />
          )}
        />
      )}
      {step === 2 && inputs && (
        <Controller
          key={inputs[1].name}
          name={inputs[1].name}
          control={control}
          rules={inputs[1].options}
          render={({ field }) => (
            <Input
              label={inputs[1].label}
              type={passwordInputType}
              setPasswordInputType={setPasswordInputType}
              {...field}
            />
          )}
        />
      )}
      <button
        className={cn(className, classes.formButton, {
          [classes.active]: !(step !== 2
            ? !!errors.email || email === '' || !/^.+@.+\..+$/.test(email)
            : !!errors.password || password === '' || password.length < 8)
        })}
        type={step !== 2
          ? 'button'
          : 'submit'
        }
        onClick={() => {
          if (step !== 2) setStep(2)
        }}
        disabled={
          step !== 2
            ? !!errors.email || email === '' || !/^.+@.+\..+$/.test(email)
            : !!errors.password || password === '' || password.length < 8
        }
      >
        {step < 2 ? 'Далее' : 'Войти'}
      </button>
    </form>
  )
}