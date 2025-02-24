import { InputHTMLAttributes } from 'react'
import { DeepMap, FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    register?: UseFormRegister<T>
    errors?: Partial<DeepMap<T, FieldError>>
    name?: Path<T>
}
