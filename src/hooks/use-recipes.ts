import { getRecipesApi, getRecipesTagsListApi } from '@/services/recipes-service'
import { Recipes, RecipesQueryValue } from '@/types/recipes.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useGetRecipes = ({ skip, search, order, sortBy, recipes }: RecipesQueryValue) => {
    const queryResult: UseQueryResult<Recipes> = useQuery({
        queryKey: ['recipes', skip, search, order, sortBy, recipes],
        queryFn: () => getRecipesApi({ skip, search, order, sortBy, recipes }),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}

export const useGetRecipesTagsList = () => {
    const queryResult: UseQueryResult<string[]> = useQuery({
        queryKey: ['recipes-tags-list'],
        queryFn: () => getRecipesTagsListApi(),
    })
    const { data, isLoading, refetch } = queryResult
    return { data, isLoading, refetch }
}
