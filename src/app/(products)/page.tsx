'use client'
import { Suspense } from 'react'
import { Products } from '../_components/products'
import { Loading } from '../_components/loading'
import { FilterBar } from '../_components/filter-bar'
import { sortProductsOptions } from '@/data/sort-products'
import { useGetProductsCategoryList } from '@/hooks/use-products'

export default function Home() {
    const { data, isLoading } = useGetProductsCategoryList()

    return (
        <>
            <link rel="canonical" href="https://blog-verse-a.vercel.app" />
            <section className="flex lg:gap-x-12 gap-x-5">
                <Suspense fallback={<Loading />}>
                    <Products />
                    {isLoading ? (
                        <div className="w-[30%] hidden md:block">
                            <Loading />
                        </div>
                    ) : data !== undefined ? (
                        <FilterBar
                            sortOptions={sortProductsOptions}
                            filterData={data}
                            filterTitle="Category"
                            sortTitle="Products"
                        />
                    ) : (
                        <span className="text-xl font-bold text-emerald-300 h-fit mt-5">
                            Category not found !
                        </span>
                    )}
                </Suspense>
            </section>
        </>
    )
}
