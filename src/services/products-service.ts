import { readData } from '@/core/http-service'
import { Products } from '@/types/products.interface'

export const getProductsApi = async ({ search, skip }: { search: string; skip: number }) => {
    return await readData<Products>(`/products/search?q=${search}&limit=10&skip=${skip}`)
}
