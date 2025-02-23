import { getProductsApi } from '@/services/products-service'
import { Products } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = () => {
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsApi(),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
