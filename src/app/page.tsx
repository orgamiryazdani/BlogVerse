'use client'
import { Suspense } from 'react'
import { Products } from './_components/products'
import { Loading } from './_components/loading'
import { FilterBar } from './_components/filter-bar'

export default function Home() {
    return (
        <div className="flex lg:gap-x-12 gap-x-5">
            <Suspense fallback={<Loading />}>
                <Products />
                <FilterBar />
            </Suspense>
        </div>
    )
}
