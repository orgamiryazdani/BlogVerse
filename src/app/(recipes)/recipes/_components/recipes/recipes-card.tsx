import Link from 'next/link'
import { RecipesCardProps } from './recipes.types'
import Image from 'next/image'
import { TfiCommentAlt } from 'react-icons/tfi'
import { Rating } from '@/app/_components/rating/rating'
import { MdDeliveryDining } from 'react-icons/md'
import { PiCookingPotFill } from 'react-icons/pi'
import truncateText from '@/utils/truncateText'

const RecipesCard: React.FC<RecipesCardProps> = ({
    id,
    name,
    image,
    rating,
    reviewCount,
    difficulty,
    prepTimeMinutes,
    cookTimeMinutes,
    cuisine,
}) => {
    return (
        <Link
            href={`/recipe/${id}`}
            className="relative h-fit bg-gray-700/40 rounded-md grow basis-[365px] overflow-hidden"
        >
            <div className="w-full h-auto flex items-center justify-center">
                <Image width={200} height={200} src={image} alt={name} loading="lazy" />
            </div>
            <div className="flex flex-col p-3 pb-1">
                <h2 className="text-lg font-bold">{name}</h2>
            </div>
            <div className="flex items-center justify-between px-2 pb-1">
                <div className="flex items-center gap-x-[10px] text-sm">
                    <span className="flex items-center gap-x-[2px]">
                        {prepTimeMinutes}
                        <p className="text-xs">m</p>
                        <MdDeliveryDining />
                    </span>
                    <span className="flex items-center gap-x-[2px]">
                        {cookTimeMinutes}
                        <p className="text-xs">m</p>
                        <PiCookingPotFill />
                    </span>
                    <span>{difficulty}</span>
                    <span>{truncateText(cuisine, 10)}</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <Rating rate={rating} />
                    <span className="flex items-center gap-x-1 text-sm mt-1">
                        <TfiCommentAlt /> {reviewCount}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default RecipesCard
