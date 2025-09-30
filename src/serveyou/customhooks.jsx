import axios from "axios";
import { useEffect, useState } from "react";


function useCallApi(param) {

    const [dataresponse, setData1] = useState("");

    useEffect(() => {

        if (param == 'chennai') {

            axios.get(`https://nominatim.openstreetmap.org/search?q=${param}&format=jsonv2&limit=1`)
                .then((res) => {
                    setData1(res.data[0])
                })
                .catch(exception => {
                    console.log(exception)
                })
        }
    }, [param])


    return dataresponse;
}

export default useCallApi