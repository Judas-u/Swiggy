import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
 import './index.css';


export default function App() {
    return (
        <>
            <Header />
        </>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
