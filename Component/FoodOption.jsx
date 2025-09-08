import FoodData from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodItem() {
    return (
        <div className="mt-30 w-[80%] contaner mx-auto">
            <div className="mb-8 text-2xl font-bold">Order our best food options</div>
            <div className="flex flex-wrap gap-10">
                {
                    FoodData.map((value) => <FoodCard key={value.id} data={value}></FoodCard>)
                }
            </div>
        </div>
    )
}