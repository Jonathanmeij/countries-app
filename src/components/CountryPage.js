import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CountryPage() {
    let { cca2 } = useParams();
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);

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
    }, []);

    return (
        <div>
            {loading ? (
                <div>loading</div>
            ) : (
                <div className="countryPage">
                    <h1>{country.name.common}</h1>
                </div>
            )}
        </div>
    );
}
