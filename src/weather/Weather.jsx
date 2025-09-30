import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
    const [city, setCity] = useState("")
    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")

    function handleClick({ input }) {
        setCity(input);
    }

    function handleInput(event) {
        setInput(event.target.value)
    }

    const FetchAPI = ({ city }) => {
        return (
            <>
                <div>
                    City is: {city}
                    {response ? response[0].lat : <p>NO data</p>}
                </div>
            </>
        );
    }

    // useEffect(() => {
    //     axios.get("https://nominatim.openstreetmap.org/search?q=coimbatore&format=jsonv2&limit=1")
    //         .then((res) => setResponse(res.data))
    //         .catch((err) => console.log(err));
    // }, [city])

    useEffect(() => {
        if (!city) return; // don’t call API if city is empty

        axios
            .get(`https://nominatim.openstreetmap.org/search?q=${city}&format=jsonv2&limit=1`)
            .then((res) => setResponse(res.data))
            .catch((err) => console.log(err))
    }, [city])

    return (
        <>
            <input type="text" onChange={handleInput}></input>
            <button onClick={() => handleClick({ input })}>Fetch</button>
            <FetchAPI city={city} />
        </>
    );

}

export default Weather