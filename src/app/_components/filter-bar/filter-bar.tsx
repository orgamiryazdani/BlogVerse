'use client'
import { useState } from 'react'
import Search from './serach'
import { GiSettingsKnobs } from 'react-icons/gi'
import { Sort } from './sort'
import { Filter } from './filter'

export const FilterBar: React.FC<{
    sortOptions: { value: string; label: string }[]
    filterData: string[]
    filterTitle: string
    sortTitle: string
}> = ({ sortOptions, filterData, filterTitle, sortTitle }) => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div
                onClick={() => setShowFilter(true)}
                className="fixed bg-gray-600 w-8 h-12 md:hidden right-0 top-[10vh] rounded-l-md flex items-center justify-center text-white"
            >
                <GiSettingsKnobs className="rotate-90 text-xl" />
            </div>
            {showFilter && (
                <div
                    onClick={() => setShowFilter(false)}
                    className="fixed w-full h-full md:hidden left-0 top-0 bg-gray-700/25"
                ></div>
            )}
            <div
                className={`md:w-[30%] w-full md:h-[490px] ${showFilter ? 'h-auto pt-[5px] pb-2' : 'h-0'} fixed left-0 right-0 bottom-0 md:rounded-md rounded-t-lg md:bg-gray-700/50 bg-gray-700 md:mt-5 px-[7px] md:pt-[5px] md:sticky md:top-4`}
            >
                <Search />
                <Filter filterData={filterData} filterTitle={filterTitle} />
                <Sort sortOptions={sortOptions} sortTitle={sortTitle} />
            </div>
        </>
    )
}
