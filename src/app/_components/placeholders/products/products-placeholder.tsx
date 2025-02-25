'use client'
const items = [1, 2, 3, 4]

export const ProductsPlaceholder: React.FC = () => {
    return (
        <div
            role="status"
            className="animate-pulse md:w-[70%] w-full px-3 md:px-0 mt-5 flex flex-wrap justify-between gap-5"
        >
            {items.map((item) => (
                <div
                    key={item}
                    className="grow basis-[365px] h-[333px] p-3 space-y-3 bg-gray-700/40 rounded-md"
                >
                    <div className="w-full h-2/4 bg-gray-500/20 rounded-md"></div>
                    <div className="flex flex-col gap-y-3 h-2/4 pb-3">
                        <div className="bg-gray-500/20 w-full h-2/6 rounded-md"></div>
                        <div className="bg-gray-500/20 w-full h-4/6 rounded-md"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
