'use client'
import { useGetRecipes } from '@/hooks/use-recipes'
import RecipesCard from './recipes-card'
import { ProductsPlaceholder } from '@/app/_components/placeholders/products'
import { Pagination } from '@/app/_components/filter-bar/pagination'
import { useSearchParams } from 'next/navigation'

export const Recipes: React.FC = () => {
    const searchParams = useSearchParams()
    const skip = Number(searchParams.get('skip')) || 0
    const search = searchParams.get('search') || ''
    const order = searchParams.get('order') || ''
    const sortBy = searchParams.get('sortBy') || ''
    const recipes = searchParams.get('recipes') || ''
    const { data, isLoading } = useGetRecipes({ skip, search, order, sortBy, recipes })

    if (isLoading) return <ProductsPlaceholder />

    return (
        <div className="md:w-[70%] w-full px-3 md:px-0 my-5 flex flex-wrap justify-between gap-5">
            {data !== undefined && data.recipes.length > 0 ? (
                data?.recipes?.map(
                    ({
                        id,
                        name,
                        image,
                        rating,
                        reviewCount,
                        difficulty,
                        prepTimeMinutes,
                        cookTimeMinutes,
                        cuisine,
                    }) => (
                        <RecipesCard
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            rating={rating}
                            reviewCount={reviewCount}
                            difficulty={difficulty}
                            prepTimeMinutes={prepTimeMinutes}
                            cookTimeMinutes={cookTimeMinutes}
                            cuisine={cuisine}
                        />
                    )
                )
            ) : (
                <span className="text-xl font-bold text-emerald-300 h-fit">No products found !</span>
            )}
            {(data?.total as number) > 10 && <Pagination totalPage={data?.total || 0} />}
        </div>
    )
}
