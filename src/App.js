import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOption from "./Components/DineOption";
import Resturant from "./Components/Resturant";
import './index.css';


export default function App() {
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
            <Resturant></Resturant>
        </>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
