import React from "react";
import GroceryCard from "./GroceryCard";
import { GroceryGridCards } from "../utils/GroceryData";
  
export default function FoodOption() {
    return (
        <>
            <div className="mt-20 w-[80%] container max-auto ml-30">
                <h1>Shop Groceries on Instamart</h1>
                <div className="w-[100%] container max-auto flex flex-nowrap overflow-x-auto mt-10 ml-10 gap-15">
                    {
                        GroceryGridCards.map((foodData)=> <GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                    }
                </div>
            </div>
        </>
    )
}