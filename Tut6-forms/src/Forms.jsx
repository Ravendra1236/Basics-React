import { useState } from "react"

function Forms() {
    let [fullName , setFullName] = useState("Ravendra")

    let updateFullName = (event)=>{
        // console.log(event.target.value);
        setFullName(event.target.value)
    }

    return (
        <form >
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter something..." value={fullName} onChange={updateFullName}  id="username"/>
            <button onClick={updateFullName}>Submit</button>
        </form>
    )
}

export default Forms
