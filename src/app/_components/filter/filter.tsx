import Search from './serach'

export const Filter: React.FC = () => {
    return (
        <div className="w-[30%] h-[490px] md:flex hidden rounded-md bg-gray-700/50 mt-5 px-[7px] pt-[5px] sticky top-4">
            <Search />
        </div>
    )
}
