import React from "react";
import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";
 
export default function FoodOption() {
    return (
        <>
            <div className="w-[80%] container max-auto flex flex-wrap mt-40 ml-55  gap-10">
                {
                    imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </>
    )
}