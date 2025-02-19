import { LoginForm } from './_components/login-form'

const Login = () => {
    return (
        <div className="flex items-center justify-center gap-y-7 flex-col h-full">
            <h1 className="font-bold text-4xl">Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login
