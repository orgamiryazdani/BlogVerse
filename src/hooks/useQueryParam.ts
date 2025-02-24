import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useQueryParam = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = new URLSearchParams(useSearchParams().toString())

    const addQueryParam = (key: string, value: string) => {
        searchParams.set(key, value.trim())
        router.push(`${pathname}?${searchParams.toString()}`, { scroll: false })
    }

    return { addQueryParam, searchParams }
}

export default useQueryParam
