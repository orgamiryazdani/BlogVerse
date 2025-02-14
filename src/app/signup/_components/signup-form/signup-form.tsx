'use client'
import { Input } from '@/app/_components/input'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email format is invalid').required('Email is required'),
    password: yup.string().required('Password is required'),
})

type FormValues = {
    username: string
    email: string
    password: string
}

export const SignUpForm: React.FC = () => {
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
            className="w-96 h-96 flex flex-col items-center justify-between px-5 md:px-0"
        >
            <Input<FormValues>
                label="username"
                register={register}
                name={'username'}
                errors={errors}
                placeholder="Jacob"
                autoFocus
            />
            <Input<FormValues>
                label="email"
                register={register}
                name={'email'}
                errors={errors}
                placeholder="jake@jake.jake"
            />
            <Input<FormValues>
                label="password"
                register={register}
                name={'password'}
                errors={errors}
                placeholder="jakejake"
            />
            <button className="bg-emerald-600 w-full h-10 rounded-md font-semibold" type="submit">
                Sign up
            </button>
            <p className="text-gray-300">
                Already have an account?{' '}
                <Link className="text-emerald-500" href="/login">
                    Log in
                </Link>
            </p>
        </form>
    )
}
