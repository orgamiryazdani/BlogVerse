'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const entityList = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Posts' },
    { id: 3, name: 'Recipes' },
    { id: 4, name: 'Users' },
]

export const EntitySelector: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const selectedEntity = searchParams.get('entity') || 'Products'

    const setEntityHandler = (name: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('entity', name)
        router.replace(`?${params.toString()}`)
    }

    return (
        <div className="w-full h-10 rounded-lg mt-2">
            <ul className="flex w-fit rounded-md h-full items-center overflow-hidden">
                {entityList.map(({ id, name }) => (
                    <li
                        key={id}
                        onClick={() => setEntityHandler(name)}
                        className={`border-gray-500 last:border-0 cursor-pointer h-full flex items-center justify-center border-r px-5 
                            ${name === selectedEntity ? 'bg-emerald-500 font-black text-lg text-gray-800' : 'bg-gray-400/25 font-semibold'}`}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
