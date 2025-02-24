'use client'
import { Suspense } from 'react'
import { Filter } from './_components/filter'
import { Products } from './_components/products'

export default function Home() {
    return (
        <div className="flex gap-x-12">
            <Suspense fallback="loading...">
                <Products />
                <Filter />
            </Suspense>
        </div>
    )
}
