import React from "react"
import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption() {
    return(
        <>
            <div className="w-[80%]   max-auto ml-40 mt-20 ">  
                <h1 className="text-3xl font-medium">Discover best Resturants on Dinout</h1>
                <div className="flex felx-nowrap overflow-x-auto mt-5 gap-4 mb-20 ">
                    {
                        dineoutRestaurants.map((RestData)=> <DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>) 
                    }
                </div>
            </div>
        </>
    )
}