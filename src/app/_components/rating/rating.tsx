import { TiStarFullOutline } from 'react-icons/ti'
import { RatingProps } from './rating.types'

export const Rating: React.FC<RatingProps> = ({ rate, className }) => {
    return (
        <div className={`flex gap-1 ${className}`}>
            {[1, 2, 3, 4, 5].map((index) => (
                <TiStarFullOutline key={`star-${index}`} fill={rate >= index ? '#d1d420' : '#e4e4e4b3'} />
            ))}
        </div>
    )
}
