import { readData } from '@/core/http-service'
import { Products } from '@/types/products.interface'
import Image from 'next/image'

export default async function Home() {
    const products: Products = await readData('/products?limit=12&skip=50')

    return (
        <div className="md:w-[70%] w-full px-3 md:px-0 mt-5 flex flex-wrap justify-between gap-5">
            {products?.products.map(({ id, title, thumbnail, description }) => (
                <div key={id} className="md:w-[385px] w-full h-fit bg-gray-700/40 rounded-md">
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
