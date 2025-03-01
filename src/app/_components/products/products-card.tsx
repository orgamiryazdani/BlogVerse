import Image from 'next/image'
import { ProductCardProps } from './product.type'
import Link from 'next/link'

const ProductsCard: React.FC<ProductCardProps> = ({ id, thumbnail, title, description }) => {
    return (
        <Link href={`/product/${id}`} className="h-fit bg-gray-700/40 rounded-md grow basis-[365px]">
            <div className="w-full h-auto flex items-center justify-center">
                <Image width={200} height={200} src={thumbnail} alt={title} loading="lazy" />
            </div>
            <div className="flex flex-col p-3">
                <h2 className="text-lg font-bold">{title}</h2>
                <h3 className="text-sm">{description}</h3>
            </div>
        </Link>
    )
}

export default ProductsCard
