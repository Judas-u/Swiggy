import React from "react";
import GroceryCard from "./GroceryCard";
import { GroceryGridCards } from "../utils/GroceryData";
  
export default function FoodOption() {
    return (
        <>
            <div className="mt-20 w-[80%] container max-auto">
                <h1>Shop Groceries on Instamart</h1>
                <div className="w-[80%] container max-auto flex flex-wrap mt-40 ml-55  gap-10">
                    {
                        GroceryGridCards.map((foodData)=> <GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                    }
                </div>
            </div>
        </>
    )
}