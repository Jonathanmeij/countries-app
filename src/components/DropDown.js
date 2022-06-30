import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function DropDown(props) {
    const [value, setValue] = useState("All");
    const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [isActive, setIsActive] = useState(false);

    function handleClick(option) {
        setValue(option);
        setIsActive(false);
    }

    const optionElements = options.map((option) => {
        return (
            <div
                key={nanoid()}
                className="dropdown-item"
                onClick={() => handleClick(option)}
            >
                {option}
            </div>
        );
    });

    useEffect(() => {
        props.changeRegionFilter(value);
    }, [value, props.changeRegionFilter, props]);

    return (
        <div className="dropdown">
            <div onClick={() => setIsActive((prev) => !prev)} className="dropdown-button">
                <div>{value}</div>
                <div className={isActive ? "active" : "arrow"}>
                    <span className="arrow">&gt;</span>
                </div>
            </div>
            {isActive && <div className="dropdown-items">{optionElements}</div>}
        </div>
    );
}
