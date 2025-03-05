'use client'
import { Input } from '@/app/_components/input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { LoginUserModel } from '../../_types/login.type'
import { logInAction } from '@/actions/auth'
import { useActionState, useEffect, useTransition } from 'react'
import { OperationResult } from '@/types/operation-result'
import toast from 'react-hot-toast'

const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
})

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserModel>({ resolver: yupResolver(schema) })

    const [formState, action] = useActionState(
        async (_: OperationResult<string> | null, formData: FormData) => {
            const response = await logInAction(formData)
            return response
        },
        null
    )

    useEffect(() => {
        if (formState && !formState.isSuccess && formState.error) {
            toast.error(formState.error.message!)
        } else if (formState && formState.isSuccess) {
            toast.success('welcome')
        }
    }, [formState])

    const [isPending, startTransition] = useTransition()

    const onSubmit = async (data: LoginUserModel) => {
        const formData = new FormData()
        formData.append('username', data.username)
        formData.append('password', data.password)
        startTransition(() => action(formData))
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-96 w-full h-72 flex flex-col items-center justify-between px-5 md:px-0"
        >
            <Input<LoginUserModel>
                label="username"
                register={register}
                name={'username'}
                errors={errors}
                placeholder="emilys"
                autoFocus
            />
            <Input<LoginUserModel>
                label="password"
                register={register}
                errors={errors}
                name={'password'}
                placeholder="emilyspass"
            />
            <button className="bg-emerald-600 w-full h-10 rounded-md font-semibold" type="submit">
                {isPending ? 'loading...' : 'login'}
            </button>
        </form>
    )
}
