import { readData } from '@/core/http-service'
import { Products } from '@/types/products.interface'

export const getProductsApi = async ({
    search,
    skip,
    sortBy,
    order,
}: {
    search: string
    skip: number
    sortBy: string
    order: string
}) => {
    return await readData<Products>(
        `/products/search?q=${search}&limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
    )
}
