import dineoutRestaurants from "../Utils/DineoutData"
import DineoutCard from "./DineoutCard"

export default function DineoutData() {
    return (
        <div className="mt-30 w-[80%] contaner mx-auto">
            <div className="mb-8 text-2xl font-bold">Discover best restaurants on Dineout</div>
            <div className="flex flex-wrap gap-10">
                {
                    dineoutRestaurants.map((value) => <DineoutCard key={value.info.id} data={value}></DineoutCard>)
                }
            </div>
        </div>
    )
}