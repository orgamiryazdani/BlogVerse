import useQueryParam from '@/hooks/use-query-param'
import { RemoveFilter } from './clear-filter-sort'
import { orderOptions, sortOptions } from '@/data/sort'

export const Sort: React.FC = () => {
    const { addQueryParam, searchParams } = useQueryParam()
    const sortSelected = searchParams.get('sortBy') || ''
    const orderSelected = searchParams.get('order') || ''

    const sortHandler = (key: string, value: string) => {
        addQueryParam(key, value)
    }

    return (
        <section className="flex flex-col">
            <span className="mt-2 text-2xl font-bold w-full text-center text-emerald-500">sort products</span>
            <span className="text-xl font-bold">sort by</span>
            <div className="w-full h-auto max-h-28 overflow-y-auto flex flex-wrap gap-2 pt-1">
                {sortOptions.map(({ value, label }) => (
                    <div
                        key={value}
                        onClick={() => sortHandler('sortBy', value)}
                        className={`px-4 py-3 rounded-md relative md:bg-gray-700 bg-gray-600 cursor-pointer ${sortSelected === value ? 'border border-emerald-500' : ''}`}
                    >
                        {label}
                        <RemoveFilter
                            selected={sortSelected}
                            value={value}
                            sortHandler={() => sortHandler('sortBy', '')}
                        />
                    </div>
                ))}
            </div>
            <span className="mt-1 mb-1 font-bold text-xl">order</span>
            <div className="flex gap-x-3">
                {orderOptions.map(({ value, label }) => (
                    <div
                        key={value}
                        onClick={() => sortHandler('order', value)}
                        className={`w-1/2 h-11 md:bg-gray-700 bg-gray-600 relative cursor-pointer rounded-md flex items-center justify-center text-lg font-bold ${orderSelected === value ? 'border border-emerald-500' : ''}`}
                    >
                        {label}
                        <RemoveFilter
                            selected={orderSelected}
                            value={value}
                            sortHandler={() => sortHandler('order', '')}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
