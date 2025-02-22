'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
    { id: 1, name: 'Products', to: '/' },
    { id: 2, name: 'Posts', to: '/posts' },
    { id: 3, name: 'Recipes', to: '/recipes' },
    { id: 4, name: 'Users', to: '/users' },
]

export const TabsNavigation: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className="flex w-fit rounded-md h-10 md:mt-2 overflow-hidden ml-3 md:ml-0">
            {menuItems.map(({ id, name, to }) => {
                const isActive = pathname === to
                return (
                    <Link
                        key={id}
                        className={`border-gray-500 last:border-0 h-full text-sm md:text-base font-bold flex items-center justify-center border-r md:px-5 px-3
                            ${isActive ? 'bg-emerald-500 text-gray-800' : 'bg-gray-400/25'}`}
                        href={to}
                    >
                        {name}
                    </Link>
                )
            })}
        </div>
    )
}
