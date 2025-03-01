import Image from 'next/image'
import { ProductCardProps } from './product.type'
import Link from 'next/link'
import { FaDollarSign } from 'react-icons/fa6'
import { Rating } from '../rating/rating'
import { TfiCommentAlt } from 'react-icons/tfi'

const ProductsCard: React.FC<ProductCardProps> = ({
    id,
    thumbnail,
    title,
    description,
    discountPercentage,
    price,
    rating,
    reviews,
}) => {
    return (
        <>
            <Link
                href={`/product/${id}`}
                className="relative h-fit bg-gray-700/40 rounded-md grow basis-[365px] overflow-hidden"
            >
                {discountPercentage > 0 && (
                    <div className="absolute top-4 -left-[26px] bg-red-500 text-white text-xs font-bold px-6 py-1 transform -rotate-45">
                        {discountPercentage}% OFF
                    </div>
                )}
                <div className="w-full h-auto flex items-center justify-center">
                    <Image width={200} height={200} src={thumbnail} alt={title} loading="lazy" />
                </div>
                <div className="flex flex-col p-3 pb-1">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <h3 className="text-sm">{description}</h3>
                </div>
                <div className="flex items-center justify-between px-2 pb-1">
                    <div className="flex items-center text-emerald-500">
                        {price}
                        <FaDollarSign />
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Rating rate={rating} />
                        <span className="flex items-center gap-x-1 text-sm mt-1">
                            <TfiCommentAlt /> {reviews.length}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductsCard
