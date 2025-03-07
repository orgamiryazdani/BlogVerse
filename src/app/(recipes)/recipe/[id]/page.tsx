import { Rating } from '@/app/_components/rating/rating'
import { getSingleRecipesApi } from '@/services/recipes-service'
import { Metadata } from 'next'
import Image from 'next/image'
import { GoEye } from 'react-icons/go'
import { MdDeliveryDining } from 'react-icons/md'
import { PiCookingPotFill } from 'react-icons/pi'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = Number((await params).id) || 1
    const { name, instructions } = await getSingleRecipesApi(id)
    return {
        metadataBase: new URL(`https://blog-verse-a.vercel.app`),
        title: name,
        description: instructions[0] && instructions[1] && instructions[2] && instructions[3],
        alternates: {
            canonical: `/recipe/${id}`,
        },
    }
}

const Recipe = async ({ params }: Props) => {
    const id = Number((await params).id)
    const {
        name,
        image,
        ingredients,
        instructions,
        rating,
        prepTimeMinutes,
        cookTimeMinutes,
        difficulty,
        cuisine,
        caloriesPerServing,
        reviewCount,
        mealType,
    } = await getSingleRecipesApi(id)

    const RecipeOption = [
        { id: 1, value: prepTimeMinutes + 'm', icon: <MdDeliveryDining /> },
        { id: 2, value: cookTimeMinutes + 'm', icon: <PiCookingPotFill /> },
        { id: 4, value: difficulty },
        { id: 5, value: cuisine },
        { id: 6, value: caloriesPerServing, text: 'Calories per serving' },
        { id: 7, value: reviewCount, icon: <GoEye /> },
    ]

    return (
        <section className="mt-5 space-y-5 px-3 lg:px-0">
            <section className="flex lg:flex-row flex-col gap-x-5">
                <Image
                    width={470}
                    height={470}
                    alt={name}
                    src={image}
                    className="rounded-md lg:w-[470px] lg:h-[470px] w-full"
                />
                <div className="flex flex-col gap-y-2 w-full">
                    <header className="flex flex-col lg:flex-row lg:items-center justify-between mt-2 lg:mt-0 gap-y-1 lg:gap-y-0">
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <Rating rate={rating} />
                    </header>
                    <div className="space-y-2 lg:max-h-52 overflow-y-auto w-full">
                        <h2 className="text-emerald-500 font-semibold text-xl">ingredients</h2>
                        <ul className="space-y-2 ml-5 list-disc">
                            {ingredients.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-2 lg:max-h-52 overflow-y-auto w-full">
                        <h2 className="text-emerald-500 font-semibold text-xl">instructions</h2>
                        <ul className="space-y-2 ml-5 list-disc">
                            {instructions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="flex flex-wrap gap-5 pb-3">
                {RecipeOption.map(({ id, value, icon, text }) => (
                    <div
                        key={id}
                        className="px-5 py-2 rounded-lg bg-gray-700 w-fit flex items-center gap-x-1"
                    >
                        {value}
                        {icon}
                        <p>{text}</p>
                    </div>
                ))}
                {mealType.map((item) => (
                    <div
                        key={item}
                        className="px-5 py-2 rounded-lg bg-gray-700 w-fit flex items-center gap-x-1"
                    >
                        {item}
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Recipe
