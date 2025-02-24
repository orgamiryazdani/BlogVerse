import { readData } from '@/core/http-service'
import { Products } from '@/types/products.interface'

export const getProductsApi = async ({ search }: { search: string }) => {
    return await readData<Products>(`/products/search?q=${search}`)
}
