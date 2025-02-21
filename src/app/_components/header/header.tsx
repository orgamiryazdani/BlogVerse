'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const Header: React.FC = () => {
    const { data } = useSession()
    return (
        <header className="w-full h-[10vh] bg-gray-800 text-white flex items-center justify-center">
            <div className="w-[77%] flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    BlogVerse
                </Link>
                {data ? (
                    // user profile
                    <Link href="/profile" className="flex items-center justify-center gap-x-2">
                        <img src={data?.user.image} alt={data?.user.email} className="w-12" />
                        <div className="flex flex-col text-sm pt-[3px]">
                            <span>{data?.user.firstName}</span>
                            <span>{data?.user.email}</span>
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
