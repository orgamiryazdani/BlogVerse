import NextAuth, { CredentialsSignin } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User, UserSession, UserToken } from './types/user.interface'
import { jwtDecode } from 'jwt-decode'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt'
import { Problem } from './types/http-errors.interface'
import { authConfig } from './auth.config'
import { createData } from './core/http-service'
import { LoginUserModel } from './app/(auth)/login/_types/login.type'

declare module 'next-auth' {
    interface User {
        accessToken: string
    }

    interface Session {
        user: UserSession
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: UserToken
    }
}

export class AuthorizeError extends CredentialsSignin {
    problem: Problem
    constructor(err: Problem) {
        super()
        this.problem = err
    }
}

export const {
    signIn,
    signOut,
    auth,
    handlers: { GET, POST },
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const user = await createData<LoginUserModel, User>(`/auth/login`, {
                        username: credentials.username as string,
                        password: credentials.password as string,
                    })

                    return {
                        ...user,
                        accessToken: user.accessToken,
                    }
                } catch (error: unknown) {
                    throw new AuthorizeError(error as Problem)
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user?.accessToken) {
                token.user = jwtDecode<UserToken>(user.accessToken)
                token.user.accessToken = user.accessToken
            }
            return token
        },
        async session({ session, token }) {
            Object.assign(session.user, token.user ?? {})
            return session
        },
    },
})
