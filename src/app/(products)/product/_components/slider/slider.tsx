'use client'
import Image from 'next/image'
import { useState } from 'react'

export const Slider: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="xl:w-[420px] w-full px-5 h-[481px] flex flex-col items-center mt-5">
            <Image
                width={300}
                height={300}
                className="w-full h-[350px] object-contain"
                alt={title}
                src={images[currentIndex]}
            />
            <div className="flex justify-between items-center w-full overflow-x-auto gap-x-4">
                {images.map((img, index) => (
                    <div
                        key={img}
                        className="min-w-32 h-32 relative cursor-pointer"
                        onClick={() => goToSlide(index)}
                    >
                        <div
                            className={`w-full h-full absolute rounded-lg ${currentIndex === index ? '' : 'bg-gray-700/60'}`}
                        ></div>
                        <Image
                            className="w-full h-full object-contain border rounded-lg border-gray-500"
                            width={100}
                            height={100}
                            alt={title + img}
                            loading="lazy"
                            src={img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
