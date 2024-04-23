'use client'

import { SigninForm } from "@/features/signin-form/signin-form"
import { signinInputs } from "@/utils/forms-options"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

export const Signin: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(signinInputs.map(input => [input.name, input.defaultValue])),
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log(data)
    fetch('https://api.build-store-test.test-tasks.ru/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  const [step, setStep] = useState(1)
  const [passwordInputType, setPasswordInputType] = useState(signinInputs[1].type)

  return (
    <FormProvider {...methods}>
      <SigninForm
        className='signin-form'
        step={step}
        setStep={setStep}
        passwordInputType={passwordInputType}
        setPasswordInputType={setPasswordInputType}
        inputs={signinInputs}
        onSubmit={methods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}