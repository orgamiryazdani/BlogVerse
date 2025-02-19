'use server'
import { OperationResult } from '@/types/operation-result'
import { AuthorizeError, signIn } from '@/auth'

export async function logInAction(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    try {
        await signIn('credentials', {
            username,
            password,
            redirect: false,
        })
        return {
            isSuccess: true,
        } satisfies OperationResult<void>
    } catch (error) {
        if (error instanceof AuthorizeError) {
            return {
                isSuccess: false,
                error: error.problem!,
            } satisfies OperationResult<void>
        }
        throw new Error('')
    }
}
