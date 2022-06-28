import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

export default function Filters(props) {
    return (
        <div className="filters">
            <SearchBar changeSearchBarValue={props.changeSearchBarValue} />
            <DropDown changeRegionFilter={props.changeRegionFilter} />
        </div>
    );
}
