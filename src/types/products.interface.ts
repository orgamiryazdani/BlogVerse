export interface Products {
    products: {
        id: number
        title: string
        description: string
        thumbnail: string
    }[]
    limit: number
    skip: number
    total: number
}
