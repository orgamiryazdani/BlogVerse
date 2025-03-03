import { Dimensions } from '@/types/products.interface'

export const ProductDimensions: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const DimensionsInfo = [
        {
            id: 1,
            title: 'Width :',
            value: dimensions.width,
        },
        {
            id: 2,
            title: 'Height :',
            value: dimensions.height,
        },
        {
            id: 3,
            title: 'Depth :',
            value: dimensions.depth,
        },
    ]

    return (
        <div className="flex flex-col bg-gray-700 p-1 px-4 rounded-md">
            <span className="w-full text-center text-gray-300 font-bold text-xl">Dimensions</span>
            <div className="flex justify-between">
                {DimensionsInfo.map(({ id, title, value }) => (
                    <div key={id} className="flex items-center gap-x-1">
                        <dt className="font-bold text-emerald-500 md:text-base text-sm">{title}</dt>
                        <dd className="md:text-sm text-xs font-medium text-gray-100">{value}</dd>
                    </div>
                ))}
            </div>
        </div>
    )
}
