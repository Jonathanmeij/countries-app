import { useEffect, useState } from "react";

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
    });

    return (
        <div>
            <h1>countru</h1>
        </div>
    );
}
