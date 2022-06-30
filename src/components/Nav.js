import moonSolid from "../images/dark_mode_FILL1_wght300_GRAD0_opsz48.svg";
import moonNotSolid from "../images/dark_mode_FILL0_wght400_GRAD200_opsz48.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav>
            <Link to="/">
                <h1>Where in the world?</h1>
            </Link>
            <div className="darkmode-toggle" onClick={props.toggleDarkmode}>
                {props.darkmode ? (
                    <img className="darkmode-icon" src={moonSolid} alt="" />
                ) : (
                    <img className="darkmode-icon" src={moonNotSolid} alt="" />
                )}
                <span>Dark Mode</span>
            </div>
        </nav>
    );
}
