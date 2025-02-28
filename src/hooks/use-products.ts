import { getProductsApi } from '@/services/products-service'
import { Products, ProductsQueryValue } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = ({ search, skip, sortBy, order }: ProductsQueryValue) => {
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products', search, skip, sortBy, order],
        queryFn: () => getProductsApi({ search, skip, sortBy, order }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
