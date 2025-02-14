import { FieldValues, get } from 'react-hook-form'
import { InputProps } from './input.types'

export const Input = <TFormValues extends FieldValues>({
    label,
    register,
    errors,
    name,
    placeholder,
    autoFocus,
}: InputProps<TFormValues>) => {
    const error = get(errors, name)
    const hasError = !!error
    return (
        <div className="flex flex-col w-full">
            <label className="mb-1">{label}</label>
            <input
                autoFocus={autoFocus}
                {...register(name)}
                className="focus:ring-2 ring-emerald-500 rounded-sm p-2 text-black"
                placeholder={placeholder}
            />
            {hasError && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    )
}
