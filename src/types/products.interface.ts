export interface Products {
    products: {
        id: number
        title: string
        description: string
        thumbnail: string
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
    }[]
    limit: number
    skip: number
    total: number
}

export type ProductsQueryValue = {
    search: string
    skip: number
    sortBy: string
    order: string
    category: string
}
