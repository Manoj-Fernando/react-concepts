import { useState } from "react";
import formsubmit from "./formsutility";

export default function ReactForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    function onInputChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }



    return (
        <>
            <form onSubmit={(e) => { formsubmit(e, formData) }}>
                <div>
                    <p>Username:</p>
                    <input type="text" name="username" value={formData.username} onChange={(e) => {
                        const { name, value } = e.target;
                        setFormData((prev) => ({
                            ...prev,
                            [name]: value
                        }))
                    }} />
                </div>
                <div>
                    <p>Password:</p>
                    <input type="password" name="password" value={formData.password} onChange={onInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}