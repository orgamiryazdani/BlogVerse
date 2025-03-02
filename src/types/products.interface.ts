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

interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

interface Dimensions {
    width: number
    height: number
    depth: number
}

interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}

export interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    thumbnail: string
    images: string[]
}
