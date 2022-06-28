import { useState } from "react";
import Countries from "./Countries";
import Filters from "./Filters";

export default function Home() {
    const [regionFilter, setRegionFilter] = useState("All");

    function changeRegionFilter(region) {
        setRegionFilter(region);
    }

    return (
        <main>
            <Filters changeRegionFilter={changeRegionFilter} />
            <Countries regionFilter={regionFilter} />
        </main>
    );
}
