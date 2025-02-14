import { SignUpForm } from './_components/signup-form'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center gap-y-7 flex-col h-full">
            <h1 className="font-bold text-3xl">Sign up for BlogVerse</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUp
