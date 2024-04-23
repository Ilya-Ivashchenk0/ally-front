import { ChangeEventHandler } from "react"

export interface inputType {
  name: string
  type: string
  label: string
  defaultValue: string
  handleChange?: ChangeEventHandler<HTMLInputElement>
  options?: {
    min?: {
      value: number
      message: string
    }
    max?: {
      value: number
      message: string
    }
    minLength?: {
      value: number
      message: string
    }
    maxLength?: {
      value: number
      message: string
    }
    pattern?: {
      value: RegExp
      message: string
    }
    validate?: (value: string | number | Date) => boolean | string
    required?: {
      value: boolean
      message: string
    }
  }
}