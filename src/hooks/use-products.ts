import { getProductsApi, getProductsCategoryListApi } from '@/services/products-service'
import { Products, ProductsQueryValue } from '@/types/products.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetProducts = ({ search, skip, sortBy, order, category }: ProductsQueryValue) => {
    const queryResult: UseQueryResult<Products> = useQuery({
        queryKey: ['products', search, skip, sortBy, order, category],
        queryFn: () => getProductsApi({ search, skip, sortBy, order, category }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}

export const useGetProductsCategoryList = () => {
    const queryResult: UseQueryResult<string[]> = useQuery({
        queryKey: ['products-category-list'],
        queryFn: () => getProductsCategoryListApi(),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
