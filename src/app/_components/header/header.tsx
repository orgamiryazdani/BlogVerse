'use client'
import truncateText from '@/utils/truncateText'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const Header: React.FC = () => {
    const { data } = useSession()
    return (
        <header className="w-full min-h-[10vh] bg-gray-800 text-white flex items-center justify-center">
            <div className="md:w-[83%] w-full px-3 md:px-0 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    BlogVerse
                </Link>
                {data ? (
                    // user profile
                    <Link href="/profile" className="flex items-center justify-center gap-x-2">
                        <img src={data?.user.image} alt={data?.user.email} className="md:w-12 w-10" />
                        <div className="flex flex-col md:text-sm text-[11px] pt-1">
                            <span>{data?.user.firstName}</span>
                            <span>{truncateText(data?.user.email, 15)}</span>
                        </div>
                    </Link>
                ) : (
                    //login btn
                    <Link href="/login">
                        <button className="w-20 h-9 rounded-sm bg-emerald-500 font-semibold">Log in</button>
                    </Link>
                )}
            </div>
        </header>
    )
}
