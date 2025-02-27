import { getProductsApi } from '@/services/products-service'
import { Products } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = ({
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
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products', search, skip, sortBy, order],
        queryFn: () => getProductsApi({ search, skip, sortBy, order }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
