import { getProductsApi } from '@/services/products-service'
import { Products } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = ({ search }: { search: string }) => {
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products', search],
        queryFn: () => getProductsApi({ search }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
