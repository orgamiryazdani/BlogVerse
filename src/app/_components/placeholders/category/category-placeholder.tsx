'use client'
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const CategoryPlaceholder = () => {
    return (
        <div
            role="status"
            className="animate-pulse mt-4 w-full h-40 overflow-y-auto flex flex-wrap gap-2 items-center justify-center pr-1"
        >
            <span className="bg-gray-600 w-full h-8 rounded-md"></span>
            {items.map((item) => (
                <div key={item} className="w-[31%] md:w-[31.5%] h-11 rounded-md bg-gray-600"></div>
            ))}
        </div>
    )
}
