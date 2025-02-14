import Link from 'next/link'

export const Header: React.FC = () => {
    return (
        <header className="w-full h-[10vh] bg-gray-800 text-white flex items-center justify-center">
            <div className="w-[77%] flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    BlogVerse
                </Link>
                <div className="space-x-6">
                    <Link href="/login" className="font-semibold">
                        Log in
                    </Link>
                    <Link href="/signup">
                        <button className="w-20 h-9 rounded-sm bg-emerald-500 font-semibold">Sign up</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
