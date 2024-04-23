import { inputType } from "@/utils/forms-options/types";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface signinFormProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>, HTMLFormElement
> {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  passwordInputType: string
  setPasswordInputType: Dispatch<SetStateAction<string>>
  inputs: inputType[]
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}