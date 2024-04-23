import {
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  PropsWithoutRef,
  RefAttributes,
  SetStateAction
} from 'react'

interface inputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  label: string
  setPasswordInputType?: Dispatch<SetStateAction<string>>
  type?: 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'date'
    | string
}

export type typeInputProps = PropsWithoutRef<inputProps> & RefAttributes<HTMLInputElement>