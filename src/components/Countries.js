import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries(props) {
    const [countries, setCountries] = useState([]);
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

    //make filters stackable

    const countriesElements = countries.map((country) => {
        if (props.regionFilter !== "All") {
            if (country.region === props.regionFilter) {
                return <Country key={nanoid()} countryData={country} />;
            }
            return undefined;
        }
        if (props.searchBarValue !== "") {
            if (
                country.name.common
                    .toLowerCase()
                    .includes(props.searchBarValue.toLowerCase())
            ) {
                return <Country key={nanoid()} countryData={country} />;
            }
            return undefined;
        }
        return <Country key={nanoid()} countryData={country} />;
    });

    return (
        <div>
            {loading ? (
                <div className="loading">loading...</div>
            ) : (
                <div className="countries">{countriesElements}</div>
            )}
        </div>
    );
}
