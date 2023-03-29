import React, { useState, useEffect } from "react";

function Countries() {   // stateleri tanımladık
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState(null);

    useEffect(() => {

        fetch(`https://restcountries.com/v3.1/name/${search}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 404) {  // koşul fetchten sonraya yazıldı.

                    alert("Country not found!");
                } else {
                    setCountry(res[0]);
                }

            })
            .finally(() => setLoading(false));

    }, [search]); // search yazıldı

    const handleChange = (e) => {   // dinleyici. setSearch ile kullandık
        setSearch(e.target.value);
    };

    return (
        <div>
            <h1>Country Search</h1>
            <input type="text" value={search} onChange={handleChange} />
            {loading && <div> Loading</div>}
            {country && (
                <div>
                    <h3>{country.name.common}</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <img src={country.flags.svg} alt="Flag" style={{ width: "100px" }} />
                </div>
            )}
        </div>
    );
}

export default Countries;
