export type ProductCardProps = {
    id: number
    thumbnail: string
    title: string
    description: string
    discountPercentage: number
    price: number
    rating: number
    reviews: {
        rating: number
        comment: string
        date: string
        reviewerName: string
        reviewerEmail: string
    }[]
}
