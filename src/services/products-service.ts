import { readData } from '@/core/http-service'
import { Products, ProductsQueryValue } from '@/types/products.interface'

export const getProductsApi = async ({ search, skip, sortBy, order }: ProductsQueryValue) => {
    return await readData<Products>(
        `/products/search?q=${search}&limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
    )
}
