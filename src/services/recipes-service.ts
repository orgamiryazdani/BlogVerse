import { readData } from '@/core/http-service'
import { Recipe } from '@/types/products.interface'
import { Recipes, RecipesQueryValue } from '@/types/recipes.interface'

export const getRecipesApi = async ({ skip, search, order, sortBy, recipes }: RecipesQueryValue) => {
    const query = recipes
        ? `/tag/${recipes}/?limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
        : `/search?q=${search}&limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
    return await readData<Recipes>(`/recipes${query}`)
}

export const getRecipesTagsListApi = async () => {
    return await readData<string[]>('/recipes/tags')
}

export const getSingleRecipesApi = async (id: number) => {
    return await readData<Recipe>(`/recipes/${id}`)
}
