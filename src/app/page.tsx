import { Filter } from './_components/filter'
import { Products } from './_components/products'

export default function Home() {
    return (
        <div className="flex gap-x-12">
            <Products />
            <Filter />
        </div>
    )
}
