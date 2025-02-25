import './globals.css'
import { Header } from './_components/header'
import { Figtree } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/providers/auth-provider'
import { TabsNavigation } from './_components/tabs-navigation'
import QueryProvider from '@/providers/react-query-provider'

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
                    <QueryProvider>
                        <div className="w-full h-full overflow-y-auto flex items-center justify-center flex-col">
                            <Header />
                            <Toaster />
                            <div className="lg:w-[88%] md:w-[95%] w-full min-h-[90vh] max-w-[1700px]">
                                <TabsNavigation />
                                {children}
                            </div>
                        </div>
                    </QueryProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
