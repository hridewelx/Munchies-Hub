import Header from "./Header";
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineoutOption from "./DineoutOption";

export default function Home() {
    return (
        <div>
            <Header />
            <FoodOption />
            <GroceryOption />
            <DineoutOption />
        </div>
    );
}