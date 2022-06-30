import { useEffect, useState } from "react";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import NotFound from "./components/NotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage.js";

export default function App() {
    const [darkmode, setDarkmode] = useState(
        !JSON.parse(localStorage.getItem("darkmode"))
    );

    useEffect(() => {
        localStorage.setItem("darkmode", JSON.stringify(!darkmode));
    }, [darkmode]);

    function toggleDarkmode() {
        setDarkmode((prev) => !prev);
    }

    return (
        <div data-theme={darkmode ? "" : "light"}>
            {/* <Routes>
                <Route path="/country/:cca2" element={<CountryPage />}></Route>
            </Routes> */}
            <Router>
                <Nav darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
                <Routes>
                    <Route exact path="/" element={<Home darkmode={darkmode} />}></Route>
                    <Route
                        path="/country/:cca2"
                        element={<CountryPage darkmode={darkmode} />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
