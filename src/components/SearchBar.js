import { useEffect, useState } from "react";
import searchIcon from "../images/search_FILL0_wght400_GRAD200_opsz48.svg";

export default function SearchBar(props) {
    const [value, setValue] = useState("");

    useEffect(() => {
        props.changeSearchBarValue(value);
    }, [value]);

    function handleValueChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="searchbar">
            <img src={searchIcon} alt="" />
            <input
                type="text"
                className="filter-search"
                placeholder="Search for a country"
                onChange={handleValueChange}
                value={value}
            />
        </div>
    );
}
