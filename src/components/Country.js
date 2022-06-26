export default function Country(props) {
    const data = props.countryData;

    return (
        <div className="country">
            <img src={data.flags.png} alt="" />
            <div className="country-info">
                <h2>{data.name.common}</h2>
                <span>Population: {data.population}</span>
                <span>Region: {data.region}</span>
                <span>Capital: {data.capital}</span>
            </div>
        </div>
    );
}
