import searchIcon from "../images/search_FILL0_wght400_GRAD200_opsz48.svg";
import DropDown from "./DropDown";

export default function Filters(props) {
    return (
        <div className="filters">
            <div className="searchbar">
                <img src={searchIcon} alt="" />
                <input
                    type="text"
                    className="filter-search"
                    placeholder="Search for a country"
                />
            </div>
            <DropDown changeRegionFilter={props.changeRegionFilter} />
        </div>
    );
}
