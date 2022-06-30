import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Country from "./Country";
import { Link } from "react-router-dom";

export default function Countries(props) {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchCountries() {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        //filters countries array on region
        const filteredRegion = countries.filter((country) => {
            if (props.regionFilter !== "All") {
                if (country.region === props.regionFilter) {
                    return true;
                }
                return false;
            }
            return true;
        });

        //filters countries array on searchbar input
        const filtered = filteredRegion.filter((country) => {
            if (props.searchBarValue !== "") {
                if (
                    country.name.common
                        .toLowerCase()
                        .includes(props.searchBarValue.toLowerCase())
                ) {
                    return true;
                }
                return false;
            }
            return true;
        });

        setFilteredCountries(filtered);
    }, [props.regionFilter, props.searchBarValue, countries]);

    const placeholderArray = [...Array(100)];

    const placeholderElements = placeholderArray.map((div) => {
        return <div key={nanoid()} className="placeholder"></div>;
    });

    return (
        <div>
            {loading ? (
                <div className="placeholderContainer">{placeholderElements}</div>
            ) : (
                <div className="countries">
                    {filteredCountries.map((country) => {
                        return (
                            <Link key={nanoid()} to={"/country/" + country.cca2}>
                                <Country countryData={country} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
