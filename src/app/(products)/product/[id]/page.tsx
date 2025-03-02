import { getSingleProductsApi } from '@/services/products-service'
import { Slider } from '../_components/slider'
import { FaDollarSign } from 'react-icons/fa6'
import { Rating } from '@/app/_components/rating/rating'
import Image from 'next/image'

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = Number((await params).id)
    const {
        title,
        description,
        price,
        images,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        returnPolicy,
        minimumOrderQuantity,
        meta,
    } = await getSingleProductsApi(id)

    return (
        <article className="flex gap-x-5">
            <Slider images={images} title={title} />
            <div className="flex flex-col">
                <header className="mt-5 w-full flex flex-col gap-y-1">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p>{description}</p>
                </header>
                <div className="flex items-end justify-between mt-5">
                    <div className="flex flex-col gap-y-3">
                        <Rating rate={rating} />
                        <ul className="flex gap-x-3">
                            {tags.map((tag) => (
                                <li key={tag} className="bg-gray-500/20 px-4 py-2 rounded-md">
                                    # {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h2 className="flex items-center text-emerald-500 text-2xl">
                        {price} <FaDollarSign />
                        <span className="text-xs mb-4 ml-[2px] text-red-500">{discountPercentage}% OFF</span>
                    </h2>
                </div>
                <div className="flex">
                    <dl className="flex flex-col h-[305px] w-1/2 justify-between pt-5">
                        <div className="flex items-center gap-x-2">
                            <dt className="font-bold text-emerald-500 text-xl">Stock :</dt>
                            <dd className="text-base font-medium text-gray-100">{stock}</dd>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <dt className="font-bold text-emerald-500 text-xl">Brand :</dt>
                            <dd className="text-base font-medium text-gray-100">{brand}</dd>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <dt className="font-bold text-emerald-500 text-xl">Weight :</dt>
                            <dd className="text-base font-medium text-gray-100">{weight}</dd>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <dt className="font-bold text-emerald-500 text-xl">Minimum Order Quantity :</dt>
                            <dd className="text-base font-medium text-gray-100">{minimumOrderQuantity}</dd>
                        </div>
                        <div className="flex flex-col bg-gray-700 p-1 px-4 rounded-md">
                            <span className="w-full text-center text-gray-300 font-bold text-xl">
                                Dimensions
                            </span>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-x-1">
                                    <dt className="font-bold text-emerald-500 text-lg">Width :</dt>
                                    <dd className="text-base font-medium text-gray-100">
                                        {dimensions.width}
                                    </dd>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <dt className="font-bold text-emerald-500 text-lg">Height :</dt>
                                    <dd className="text-base font-medium text-gray-100">
                                        {dimensions.height}
                                    </dd>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <dt className="font-bold text-emerald-500 text-lg">Depth :</dt>
                                    <dd className="text-base font-medium text-gray-100">
                                        {dimensions.depth}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </dl>
                    <aside className="flex flex-col w-1/2 h-[308px] justify-between items-end pt-8">
                        <div className="w-full flex flex-wrap gap-5">
                            {[warrantyInformation, shippingInformation, availabilityStatus, returnPolicy].map(
                                (info, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-500/20 px-4 py-2 rounded-md w-fit font-bold"
                                    >
                                        {info}
                                    </span>
                                )
                            )}
                        </div>
                        <figure className="flex flex-col items-center">
                            <Image width={100} height={100} alt="barcode" src={meta.qrCode} />
                            <figcaption>{meta.barcode}</figcaption>
                        </figure>
                    </aside>
                </div>
            </div>
        </article>
    )
}

export default Product
