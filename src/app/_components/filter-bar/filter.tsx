import { useGetProductsCategoryList } from '@/hooks/use-products'
import useQueryParam from '@/hooks/use-query-param'
import { CategoryPlaceholder } from '../placeholders/category'
import { ClearFilterSort } from './clear-filter-sort'

export const Filter: React.FC = () => {
    const { data, isLoading } = useGetProductsCategoryList()
    const { addQueryParam, searchParams } = useQueryParam()
    const selectedValue = searchParams.get('category') || ''

    const filterHandler = (value: string) => {
        addQueryParam('category', value)
        addQueryParam('skip', '0')
    }

    if (isLoading) return <CategoryPlaceholder />

    return (
        <section className="w-full mt-3">
            <span className="w-full mb-1 flex justify-center text-2xl font-bold text-emerald-500">
                Filter by category
            </span>
            <div className="w-full h-32 overflow-y-auto flex flex-wrap gap-2 pt-1">
                {data?.map((item) => (
                    <span
                        key={item}
                        onClick={() => filterHandler(item)}
                        className={`md:bg-gray-700 bg-gray-600 px-4 py-3 relative rounded-md cursor-pointer ${selectedValue === item ? 'border border-emerald-500' : ''}`}
                    >
                        {item}
                        <ClearFilterSort
                            selected={selectedValue}
                            value={item}
                            sortHandler={() => filterHandler('')}
                        />
                    </span>
                ))}
            </div>
        </section>
    )
}
