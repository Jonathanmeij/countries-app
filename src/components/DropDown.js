import { nanoid } from "nanoid";
import { useState } from "react";
import arrow from "../images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg";

export default function DropDown() {
    const [value, setValue] = useState("Choose one");
    const options = ["None", "Africa", "America", "Asia", "Europe", "Oceania"];
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
