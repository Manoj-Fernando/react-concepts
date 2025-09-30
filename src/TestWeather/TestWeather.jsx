import axios from "axios";
import { useState } from "react"

export default function TestWeather() {

    const [input, setInput] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [temp, setTemp] = useState("");


    function setInputValue(event) {
        setInput(event.target.value)
    }

    //.then
    function submit() {

        axios.get(`https://nominatim.openstreetmap.org/search?q=${input}&format=jsonv2&limit=1`)
            .then(res => res.data)
            .then(data => {
                setLat(data[0].lat)
                setLong(data[0].lon)
                console.log(data[0].lon)
                const lati = data[0].lat
                const longi = data[0].lon

                return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&current=temperature_2m`)
            })
            .then(res => res.data)
            .then(data => {
                setTemp(data.current.temperature_2m)
            })
            .catch(exception => console.log(exception))
    }

    //using async/await
    async function submit() {
        const coords = await axios.get(`https://nominatim.openstreetmap.org/search?q=${input}&format=jsonv2&limit=1`)

        let res = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.data[0].lat}&longitude=${coords.data[0].lon}&current=temperature_2m`)

        setTemp((await res).data.current.temperature_2m)

    }


    return (
        <div>
            <input type="text" onChange={setInputValue}></input>
            <button onClick={() => submit()}>Submit</button>

            Temprature in {input} is : {temp}
        </div>
    )

}