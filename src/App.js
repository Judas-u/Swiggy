import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import './index.css';


export default function App() {
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
        </>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
