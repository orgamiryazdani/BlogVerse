import Image from 'next/image'
import { ProductCardProps } from './product.type'

const ProductsCard: React.FC<ProductCardProps> = ({ thumbnail, title, description }) => {
    return (
        <div className="md:w-[365px] w-full h-fit cursor-pointer bg-gray-700/40 rounded-md">
            <div className="w-full h-auto flex items-center justify-center">
                <Image width={200} height={200} src={thumbnail} alt={title} loading="lazy" />
            </div>
            <div className="flex flex-col p-3">
                <h2 className="text-lg font-bold">{title}</h2>
                <h3 className="text-sm">{description}</h3>
            </div>
        </div>
    )
}

export default ProductsCard
