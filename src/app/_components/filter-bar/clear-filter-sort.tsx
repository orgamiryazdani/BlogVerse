import { IoCloseCircle } from 'react-icons/io5'

export const RemoveFilter: React.FC<{
    selected: string
    value: string
    sortHandler: (key: string, value?: string) => void
}> = ({ selected, value, sortHandler }) => {
    return (
        <>
            {selected === value && (
                <IoCloseCircle
                    onClick={(e) => {
                        e.stopPropagation()
                        sortHandler('order', '')
                    }}
                    className="absolute -top-[5px] -right-[5px] text-xl text-red-500"
                />
            )}
        </>
    )
}
