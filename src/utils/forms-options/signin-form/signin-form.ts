import { inputType } from "../types"

const REQUIRED = 'Поле должно быть обязательно заполнено'
const PASSWORD = 'Пароль должен состоять минимум из 8 символов'
const EMAIL = 'Введите Email в формате admin@admin.ru'

export const signinInputs: inputType[] = [
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    defaultValue: '',
    options: {
      pattern: {
        value: /^.+@.+\..+$/,
        message: EMAIL
      },
      required: {
        value: true,
        message: REQUIRED
      }
    }
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    defaultValue: '',
    options: {
      pattern: {
        value: /.{8,}/,
        message: PASSWORD
      },
      required: {
        value: true,
        message: REQUIRED
      }
    }
  }
]