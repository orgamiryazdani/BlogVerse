'use client'
import { Suspense } from 'react'
import { Recipes } from './_components/recipes'
import { Loading } from '@/app/_components/loading'
import { FilterBar } from '@/app/_components/filter-bar'
import { sortRecipesOptions } from '@/data/sort-recipes'
import { useGetRecipesTagsList } from '@/hooks/use-recipes'

const RecipesPage = () => {
    const { data, isLoading } = useGetRecipesTagsList()
    return (
        <>
            <link rel="canonical" href="https://blog-verse-a.vercel.app/recipes" />
            <section className="flex lg:gap-x-12 gap-x-5">
                <Suspense fallback={<Loading />}>
                    <Recipes />
                    {isLoading ? (
                        <div className="w-[30%] hidden md:block">
                            <Loading />
                        </div>
                    ) : data !== undefined ? (
                        <FilterBar sortOptions={sortRecipesOptions} filterData={data} />
                    ) : (
                        <span className="text-xl font-bold text-emerald-300 h-fit mt-5">
                            Recipes not found !
                        </span>
                    )}
                </Suspense>
            </section>
        </>
    )
}

export default RecipesPage
