import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CountryPage() {
    let { cca2 } = useParams();
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);
    const info = [
        { data: country.name.official, title: "Official Name" },
        { data: country.population, title: "Population" },
        { data: country.region, title: "Region" },
        { data: country.subregion, title: "Sub Region" },
        { data: country.capital, title: "Population" },
        { data: country.population, title: "Population" },
        { data: country.population, title: "Population" },
    ];

    function fetchCountry() {
        fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
            .then((response) => response.json())
            .then((data) => setCountry(data[0]))
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchCountry();
    });

    const infoElements = info.map((infoItem) => {
        return (
            <span className="info">
                <span className="bold">{infoItem.title}: </span>
                {infoItem.data}
            </span>
        );
    });

    return (
        <div className="countryPage">
            <div className="backButton">← Back</div>
            {loading ? (
                <div>loading</div>
            ) : (
                <div className="country-container">
                    <div className="country-flag">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="country-info">
                        <h2>{country.name.common}</h2>
                        {infoElements}
                    </div>
                </div>
            )}
        </div>
    );
}
