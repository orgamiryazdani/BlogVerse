'use client'
import { Suspense } from 'react'
import { Filter } from './_components/filter'
import { Products } from './_components/products'
import { Loading } from './_components/loading'

export default function Home() {
    return (
        <div className="flex lg:gap-x-12 gap-x-5">
            <Suspense fallback={<Loading />}>
                <Products />
                <Filter />
            </Suspense>
        </div>
    )
}
