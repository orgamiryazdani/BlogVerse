import useQueryParam from '@/hooks/use-query-param'
import { ClearFilterSort } from './clear-filter-sort'
import { usePathname } from 'next/navigation'

export const Filter: React.FC<{ filterData: string[] }> = ({ filterData }) => {
    const { addQueryParam, searchParams } = useQueryParam()
    const pathname = usePathname()
    const splitPathname = pathname.split('/') || 'category'
    const selectedValue = searchParams.get(splitPathname[1].length > 0 ? splitPathname[1] : 'category') || ''

    const filterHandler = (value: string) => {
        addQueryParam(splitPathname[1] || 'category', value)
        addQueryParam('skip', '0')
    }

    return (
        <section className="w-full mt-3">
            <span className="w-full mb-1 flex justify-center text-2xl font-bold text-emerald-500">
                Filter by category
            </span>
            <div className="w-full h-32 overflow-y-auto flex flex-wrap gap-2 pt-1">
                {filterData?.map((item) => (
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
