import { Rating } from '@/app/_components/rating/rating'
import { Review } from '@/types/products.interface'

export const Comments: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
    return (
        <div className="flex gap-5 lg:py-7 py-3 flex-wrap px-3 md:px-0">
            {reviews.map(({ comment, date, rating, reviewerEmail, reviewerName }, index) => (
                <div key={index} className="flex flex-col bg-gray-700/50 w-fit p-3 rounded-md gap-y-2">
                    <div className="flex items-center gap-x-5">
                        <h2 className="font-bold text-xl">{comment}</h2>
                        <Rating rate={rating} />
                    </div>
                    <span>{reviewerName}</span>
                    <span>
                        {new Date(date).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false,
                        })}
                    </span>
                    <span>{reviewerEmail}</span>
                </div>
            ))}
        </div>
    )
}
