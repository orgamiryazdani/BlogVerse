'use client'
import { useGetProducts } from '@/hooks/use-products'
import { ProductsPlaceholder } from '../placeholders/products'
import ProductsCard from './products-card'
import { useSearchParams } from 'next/navigation'
import { Pagination } from '../filter-bar/pagination'

export const Products: React.FC = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search') || ''
    const skip = Number(searchParams.get('skip')) || 0
    const sortBy = searchParams.get('sortBy') || ''
    const order = searchParams.get('order') || ''
    const category = searchParams.get('category') || ''

    const { data, isLoading } = useGetProducts({ search, skip, sortBy, order, category })

    if (isLoading) return <ProductsPlaceholder />

    return (
        <div className="md:w-[70%] w-full px-3 md:px-0 my-5 flex flex-wrap justify-between gap-5">
            {data !== undefined && data.products.length > 0 ? (
                <>
                    {data?.products.map(
                        ({
                            id,
                            title,
                            thumbnail,
                            description,
                            discountPercentage,
                            price,
                            rating,
                            reviews,
                        }) => (
                            <ProductsCard
                                key={id}
                                id={id}
                                discountPercentage={discountPercentage}
                                title={title}
                                price={price}
                                rating={rating}
                                reviews={reviews}
                                thumbnail={thumbnail}
                                description={description}
                            />
                        )
                    )}
                    {data?.total > 10 && <Pagination totalPage={data?.total || 0} />}
                </>
            ) : (
                <span className="text-xl font-bold text-emerald-300 h-fit">No products found !</span>
            )}
        </div>
    )
}
