import { ProductInfoProps } from './product-info.types'

export const ProductInfo: React.FC<ProductInfoProps> = ({ stock, brand, weight, minimumOrderQuantity }) => {
    const ProductInfo = [
        {
            id: 1,
            title: 'Stock :',
            value: stock,
        },
        {
            id: 2,
            title: 'Brand :',
            value: brand,
        },
        {
            id: 3,
            title: 'Weight :',
            value: weight,
        },
        {
            id: 4,
            title: 'Minimum Order Quantity :',
            value: minimumOrderQuantity,
        },
    ]

    return (
        <>
            {ProductInfo.map(({ id, title, value }) => (
                <div key={id} className="flex items-center gap-x-2">
                    <dt className="font-bold text-emerald-500 text-xl">{title}</dt>
                    <dd className="text-base font-medium text-gray-100">{value}</dd>
                </div>
            ))}
        </>
    )
}
