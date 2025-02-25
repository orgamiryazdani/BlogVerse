import useQueryParam from '@/hooks/use-query-param'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type PageType = number | '...'

export const Pagination: React.FC<{ totalPage: number }> = ({ totalPage }) => {
    const { addQueryParam, searchParams } = useQueryParam()
    const currentPage = Number(searchParams.get('skip')) / 10 || 1
    const pageCount = Math.floor(totalPage / 10)

    const getPageNumbers = (): PageType[] => {
        if (pageCount <= 3) return [...Array(pageCount)].map((_, i) => i + 1)
        if (currentPage <= 2) {
            return [1, 2, 3, '...', pageCount - 1, pageCount]
        } else if (currentPage >= pageCount - 1) {
            return [1, 2, '...', pageCount - 2, pageCount - 1, pageCount]
        } else {
            return [1, '...', currentPage, '...', pageCount - 1, pageCount]
        }
    }

    const handlePageChange = (page: PageType): void => {
        if (typeof page === 'number' && page >= 1 && page <= pageCount) {
            addQueryParam('skip', String(page * 10))
        }
    }

    return (
        <div className="w-full flex items-center justify-center h-14">
            <div className="flex items-center border border-emerald-500 rounded-md overflow-hidden">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`${currentPage === 1 ? 'cursor-not-allowed text-slate-500' : 'cursor-pointer'} h-12 md:px-4 px-2 hover:bg-emerald-600/35 flex items-center justify-center`}
                >
                    <IoIosArrowBack />
                </button>
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`h-12 w-12 flex items-center justify-center ${
                            currentPage === page
                                ? 'bg-emerald-500 text-white'
                                : 'hover:bg-emerald-600/35 text-white'
                        } border-l border-emerald-500`}
                        disabled={page === '...'}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pageCount}
                    className={`${currentPage === pageCount ? 'cursor-not-allowed text-slate-500' : 'cursor-pointer'} h-12 md:px-4 px-2 border-l border-emerald-500 hover:bg-emerald-600/35 flex items-center justify-center`}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}
