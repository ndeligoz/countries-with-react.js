import { useEffect, useState } from 'react'

function Country() {

    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => setCountries(res))
            .finally(() => setLoading(false))
    }, [])

    console.log(countries);

    return (   // loading geç çıkıyor
        <div>
            {loading && <div> Loading</div>}
            <div>
                <h1>Countries</h1>

                <ul>
                    {countries.map((country) => (
                        <li key={country.name.common}>
                            <strong>{country.name.common}</strong>:{country.capital}
                            <img src={country.flags.svg}
                                style={{ width: "20px" }} />

                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Country



// yapılan hatalar;
//diziye bakılmadı name olarak arandı .common sonra farkedildi
// flag olarak aratıldı bayraklar gösterilmedi flags.svg olarak düzeltildi.