import { useState } from "react"

export default function PassingParam() {

    const [data2, setData] = useState("")
    let data = "Hi"

    return (
        <>
            <input type="text" onChange={setInput}></input>
            <Child data={data} child={data2} />
        </>
    )

    function setInput(event) {
        setData(event.target.value)
    }
}

const Child = ({ data, child }) => (

    <>
        <div>{child}</div>
        <div>{data}</div>
    </>

)