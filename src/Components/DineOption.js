import React from "react"
import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption() {
    return(
        <>
            <div className="w-[80%] container max-auto  ">  
                <h2>Discover best Resturants on Dinout</h2>
                <div className="flex felx-nowrap overflow-x-auto mt-5">
                    {
                        dineoutRestaurants.map((RestData)=> <DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>) 
                    }
                </div>
            </div>
        </>
    )
}