import { readData } from '@/core/http-service'

export const getProductsApi = async () => {
    return await readData('/products')
}
