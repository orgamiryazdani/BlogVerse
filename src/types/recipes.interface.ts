export interface Recipes {
    recipes: {
        id: number
        name: string
        prepTimeMinutes: number
        cookTimeMinutes: number
        servings: number
        difficulty: string
        cuisine: string
        caloriesPerServing: number
        userId: number
        image: string
        rating: number
        reviewCount: number
        mealType: string[]
    }[]
    total: number
    skip: number
    limit: number
}

export type RecipesQueryValue = {
    skip: number
    search: string
    order: string
    sortBy: string
    recipes: string
}
