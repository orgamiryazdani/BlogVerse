'use client'
import { Suspense } from 'react'
import { Filter } from './_components/filter'
import { Products } from './_components/products'

export default function Home() {
    return (
        <div className="flex lg:gap-x-12 gap-x-5">
            <Suspense fallback="loading...">
                <Products />
                <Filter />
            </Suspense>
        </div>
    )
}
