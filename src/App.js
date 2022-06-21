import { useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
    const [darkmode, setDarkmode] = useState(true);

    function toggleDarkmode() {
        setDarkmode((prev) => !prev);
    }

    return (
        <div data-theme={darkmode ? "" : "light"}>
            <Nav darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
            <Home darkmode={darkmode} />
        </div>
    );
}
