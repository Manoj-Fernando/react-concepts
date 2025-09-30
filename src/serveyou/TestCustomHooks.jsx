import { useState } from "react"
import useCallApi from "./customhooks";


export default function TestCustomHooks() {

    const [input, setInput] = useState("");


    const dataresponse1 = useCallApi(input);

    function triggerInput(event) {

        setInput(event.target.value)
    }
    // function submitInput() {

    //     setData1(res.display_name);
    // }

    return (
        <>
            <input type="text" onChange={triggerInput}></input>

            <div>
                <p>{dataresponse1.display_name}</p>
            </div>
        </>
    );
}