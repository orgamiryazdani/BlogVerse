import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async authorized({ auth, request }) {
            const { nextUrl } = request

            const isAuthenticated = !!auth?.user

            const authRoutes = ['/login']
            const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

            if (isAuthRoutes && isAuthenticated) {
                return Response.redirect(new URL('/', nextUrl))
            }

            const isProtectedRoute = nextUrl.pathname.startsWith('/profile')

            if (isProtectedRoute && !isAuthenticated) {
                return Response.redirect(new URL('/login', nextUrl))
            }

            return true
        },
    },
    providers: [],
} satisfies NextAuthConfig
