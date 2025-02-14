'use client'
import { Input } from '@/app/_components/input'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().email('Email format is invalid').required('Email is required'),
    password: yup.string().required('Password is required'),
})

type FormValues = {
    email: string
    password: string
}

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 h-72 flex flex-col items-center justify-between px-5 md:px-0"
        >
            <Input<FormValues>
                label="email"
                register={register}
                name={'email'}
                errors={errors}
                placeholder="jake@jake.jake"
                autoFocus
            />
            <Input<FormValues>
                label="password"
                register={register}
                errors={errors}
                name={'password'}
                placeholder="jakejake"
            />
            <button className="bg-emerald-600 w-full h-10 rounded-md font-semibold" type="submit">
                login
            </button>
            <p className="text-gray-300">
                Don&apos;t have an account?{' '}
                <Link className="text-emerald-500" href="/signup">
                    Sign up
                </Link>
            </p>
        </form>
    )
}
