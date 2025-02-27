import useQueryParam from '@/hooks/use-query-param'

const sortOptions = [
    { value: 'id', label: 'ID' },
    { value: 'title', label: 'Title' },
    { value: 'description', label: 'Description' },
    { value: 'category', label: 'Category' },
    { value: 'price', label: 'Price' },
    { value: 'discountPercentage', label: 'Discount Percentage' },
    { value: 'rating', label: 'Rating' },
    { value: 'stock', label: 'Stock' },
    { value: 'tags', label: 'Tags' },
    { value: 'brand', label: 'Brand' },
    { value: 'sku', label: 'Product Code (SKU)' },
    { value: 'weight', label: 'Weight' },
    { value: 'dimensions', label: 'Dimensions' },
    { value: 'warrantyInformation', label: 'Warranty Information' },
    { value: 'shippingInformation', label: 'Shipping Information' },
    { value: 'availabilityStatus', label: 'Availability Status' },
    { value: 'reviews', label: 'Reviews' },
    { value: 'returnPolicy', label: 'Return Policy' },
    { value: 'minimumOrderQuantity', label: 'Minimum Order Quantity' },
]

const orderOptions = [
    { value: 'asc', label: 'ascending' },
    { value: 'desc', label: 'Descending' },
]

export const Sort: React.FC = () => {
    const { addQueryParam, searchParams } = useQueryParam()
    const sortSelected = searchParams.get('sortBy') || ''
    const orderSelected = searchParams.get('order') || ''

    const sortHandler = (key: string, value: string) => {
        addQueryParam(key, value)
    }

    return (
        <section className="flex flex-col">
            <span className="mt-3 text-2xl font-bold w-full text-center">sort products</span>
            <span className="mb-1 text-xl font-bold">sort by</span>
            <div className="w-full h-auto max-h-36 overflow-y-auto flex flex-wrap gap-3">
                {sortOptions.map(({ value, label }) => (
                    <div
                        key={value}
                        onClick={() => sortHandler('sortBy', value)}
                        className={`px-5 py-3 rounded-md md:bg-gray-700 bg-gray-600 cursor-pointer ${sortSelected === value ? 'border border-emerald-500' : ''}`}
                    >
                        {label}
                    </div>
                ))}
            </div>
            <span className="mt-1 mb-1 font-bold text-xl">order</span>
            <div className="flex gap-x-3">
                {orderOptions.map(({ value, label }) => (
                    <div
                        key={value}
                        onClick={() => sortHandler('order', value)}
                        className={`w-1/2 h-11 md:bg-gray-700 bg-gray-600 cursor-pointer rounded-md flex items-center justify-center text-lg font-bold ${orderSelected === value ? 'border border-emerald-500' : ''}`}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </section>
    )
}
