import { useState, useEffect } from "react";
import RestCard from "./RestCard";

export default function Resturant() {
    const [RestData, setRestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI =
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true";

            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap w-[80%] m-auto mt-20 gap-10">
            {RestData.map((restInfo) => (
                <RestCard key={restInfo.info.id} restInfo={restInfo} />
            ))}
        </div>
    );
}