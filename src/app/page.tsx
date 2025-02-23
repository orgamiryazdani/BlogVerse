'use client'
import Image from 'next/image'
import { useGetProducts } from '../hooks/use-products'
import { ProductsPlaceholder } from './_components/placeholders/products'

export default function Home() {
    const { data, isLoading } = useGetProducts()

    if (isLoading) return <ProductsPlaceholder />

    return (
        <div className="md:w-[70%] w-full px-3 md:px-0 mt-5 flex flex-wrap justify-between gap-5">
            {data?.products.map(({ id, title, thumbnail, description }) => (
                <div key={id} className="md:w-[385px] w-full h-fit cursor-pointer bg-gray-700/40 rounded-md">
                    <div className="w-full h-auto flex items-center justify-center">
                        <Image width={200} height={200} src={thumbnail} alt={title} loading="lazy" />
                    </div>
                    <div className="flex flex-col p-3">
                        <h2 className="text-lg font-bold">{title}</h2>
                        <h3 className="text-sm">{description}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
