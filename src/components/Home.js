import { useState } from "react";
import Countries from "./Countries";
import Filters from "./Filters";

export default function Home() {
    const [regionFilter, setRegionFilter] = useState("All");
    const [searchBarValue, setSearchBarValue] = useState("");

    function changeRegionFilter(region) {
        setRegionFilter(region);
    }

    function changeSearchBarValue(value) {
        setSearchBarValue(value);
    }

    return (
        <main>
            <Filters
                changeRegionFilter={changeRegionFilter}
                changeSearchBarValue={changeSearchBarValue}
            />
            <Countries regionFilter={regionFilter} searchBarValue={searchBarValue} />
        </main>
    );
}
