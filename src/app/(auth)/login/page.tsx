import { LoginForm } from './_components/login-form'

const Login = () => {
    return (
        <div className="flex items-center justify-center gap-y-7 flex-col md:h-[82vh] h-auto mt-10 md:mt-0">
            <h1 className="font-bold text-4xl">Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login
