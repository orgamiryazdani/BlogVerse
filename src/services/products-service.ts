import { readData } from '@/core/http-service'
import { Product, Products, ProductsQueryValue } from '@/types/products.interface'

export const getProductsApi = async ({ search, skip, sortBy, order, category }: ProductsQueryValue) => {
    const query = category
        ? `/category/${category}/?limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
        : `/search?q=${search}&limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
    return await readData<Products>(`/products${query}`)
}

export const getProductsCategoryListApi = async () => {
    return await readData<string[]>('/products/category-List')
}

export const getSingleProductsApi = async (id: number) => {
    return await readData<Product>(`/products/${id}`)
}
