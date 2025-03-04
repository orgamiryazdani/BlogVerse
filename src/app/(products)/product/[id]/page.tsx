import { getSingleProductsApi } from '@/services/products-service'
import { Slider } from '../_components/slider'
import { FaDollarSign } from 'react-icons/fa6'
import { Rating } from '@/app/_components/rating/rating'
import Image from 'next/image'
import { Comments } from '../_components/comments'
import { ProductDimensions } from '../_components/product-dimensions'
import { ProductInfo } from '../_components/product-info'
import { Metadata } from 'next'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = Number((await params).id) || 1
    const { title, description } = await getSingleProductsApi(id)
    return {
        metadataBase: new URL(`https://blog-verse-a.vercel.app`),
        title: title,
        description: description,
        alternates: {
            canonical: `/product/${id}`,
        },
    }
}

const Product = async ({ params }: Props) => {
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
        reviews,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        returnPolicy,
        minimumOrderQuantity,
        meta,
    } = await getSingleProductsApi(id)

    return (
        <>
            <article className="flex xl:flex-row flex-col gap-x-5">
                <Slider images={images} title={title} />
                <div className="flex flex-col px-3 lg:px-0">
                    <header className="mt-5 w-full flex flex-col gap-y-1">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p>{description}</p>
                    </header>
                    <div className="flex md:flex-row flex-col md:items-end justify-between mt-5">
                        <div className="flex flex-col gap-y-3">
                            <Rating rate={rating} />
                            <Tags tags={tags} />
                        </div>
                        <h2 className="flex items-center text-emerald-500 text-2xl mt-4 md:mt-0">
                            {price} <FaDollarSign />
                            <span className="text-xs mb-4 ml-[2px] text-red-500">
                                {discountPercentage}% OFF
                            </span>
                        </h2>
                    </div>
                    <div className="flex md:flex-row flex-col">
                        <dl className="flex flex-col h-[305px] md:w-1/2 w-full justify-between pt-5">
                            <ProductInfo
                                brand={brand}
                                minimumOrderQuantity={minimumOrderQuantity}
                                stock={stock}
                                weight={weight}
                            />
                            <ProductDimensions dimensions={dimensions} />
                        </dl>
                        <aside className="flex flex-col md:w-1/2 w-full md:h-[308px] gap-y-5 md:gap-y-0 justify-between md:items-end items-center pt-8">
                            <div className="w-full flex flex-wrap gap-5">
                                {[
                                    warrantyInformation,
                                    shippingInformation,
                                    availabilityStatus,
                                    returnPolicy,
                                ].map((info, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-500/20 px-4 py-2 rounded-md w-fit font-bold"
                                    >
                                        {info}
                                    </span>
                                ))}
                            </div>
                            <figure className="flex flex-col items-center">
                                <Image width={100} height={100} alt="barcode" src={meta.qrCode} />
                                <figcaption>{meta.barcode}</figcaption>
                            </figure>
                        </aside>
                    </div>
                </div>
            </article>
            <Comments reviews={reviews} />
        </>
    )
}

export default Product

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
    return (
        <ul className="flex gap-x-3">
            {tags.map((tag) => (
                <li key={tag} className="bg-gray-500/20 px-4 py-2 rounded-md">
                    # {tag}
                </li>
            ))}
        </ul>
    )
}
