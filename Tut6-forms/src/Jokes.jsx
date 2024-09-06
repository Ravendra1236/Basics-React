import { useEffect, useState } from "react"

function Jokes() {
    let [ joke , setJoke] = useState({})
    const URL = "https://official-joke-api.appspot.com/random_joke"

    const genJoke = async ()=>{
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        
        console.log(jsonResponse);

        setJoke({setup : jsonResponse.setup , punchline : jsonResponse.punchline})
    }

    useEffect(()=> {async function  getFirstJoke(){
        let response = await fetch(URL)
        let jsonResponse = await response.json()
        
        console.log(jsonResponse);

        setJoke({setup : jsonResponse.setup , punchline : jsonResponse.punchline})
    }
    getFirstJoke();
}, [])
    return (
    <div>
        <h1>Jokes!</h1>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={genJoke}>New Joke</button>
    </div>
    )
}

export default Jokes
