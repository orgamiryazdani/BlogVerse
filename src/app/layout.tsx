import './globals.css'
import { Header } from './_components/header'
import { Figtree } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/providers/auth-provider'
import { TabsNavigation } from './_components/tabs-navigation'

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={figtree.variable}>
            <body className="bg-gray-800 text-white w-screen h-screen flex flex-col items-center justify-center">
                <NextTopLoader showSpinner={false} color="#10b981" />
                <AuthProvider>
                    <Header />
                    <Toaster />
                    <div className="md:w-[77%] w-full min-h-[90vh]">
                        <TabsNavigation />
                        {children}
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
}
