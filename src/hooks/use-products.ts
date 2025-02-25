import { getProductsApi } from '@/services/products-service'
import { Products } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = ({ search, skip }: { search: string; skip: number }) => {
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products', search, skip],
        queryFn: () => getProductsApi({ search, skip }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
