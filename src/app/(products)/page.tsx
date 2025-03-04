'use client'
import { Suspense } from 'react'
import { Products } from '../_components/products'
import { Loading } from '../_components/loading'
import { FilterBar } from '../_components/filter-bar'

export default function Home() {
    return (
        <>
            <title>BlogVerse | product and Recipes</title>
            <meta name="description" content="Ability to view products, recipes, users, and related posts" />
            <link rel="canonical" href="https://blog-verse-a.vercel.app" />
            <div className="flex lg:gap-x-12 gap-x-5">
                <Suspense fallback={<Loading />}>
                    <Products />
                    <FilterBar />
                </Suspense>
            </div>
        </>
    )
}
