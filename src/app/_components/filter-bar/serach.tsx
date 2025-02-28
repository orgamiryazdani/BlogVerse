'use client'
import { Input } from '../input'
import { useDebouncedCallback } from 'use-debounce'
import useQueryParam from '@/hooks/use-query-param'

const Search: React.FC = () => {
    const { addQueryParam, searchParams } = useQueryParam()

    const searchHandler = useDebouncedCallback((value: string) => {
        addQueryParam('search', value)
        addQueryParam('skip', '0')
    }, 600)

    return (
        <Input
            defaultValue={searchParams.get('search') || ''}
            onChange={(e) => searchHandler(e.target.value)}
            placeholder="search..."
            className="h-9 p-3 rounded-md placeholder:text-white focus:border border-emerald-500 bg-gray-600"
        />
    )
}

export default Search
