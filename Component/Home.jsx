import Header from "./Header";
import FoodOption from "./Food/FoodOption";
import GroceryOption from "./Grocery/GroceryOption";
import DineoutOption from "./Dineout/DineoutOption";

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