import GroceryData from "../../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){
    return (
        <div className="mt-30 w-[80%] contaner mx-auto">
            <div className="mb-8 text-2xl font-bold">Shop groceries on Instamart</div>
            <div className="flex flex-wrap gap-10">
                {
                    GroceryData.map((value) => <GroceryCard key={value.id} data={value}></GroceryCard>)
                }
            </div>
        </div>
    )
}