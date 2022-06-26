import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
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

    const countriesElements = countries.map((country) => {
        return <Country countryData={country} />;
    });

    return (
        <div>
            {loading ? (
                <div className="loading">loading</div>
            ) : (
                <div className="countries">{countriesElements}</div>
            )}
        </div>
    );
}
