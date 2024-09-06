// useEffect : 
import { useState , useEffect} from "react"

function Counter() {

    let [countX , setCountX] = useState(0);
    let [countY , setCountY] = useState(0);
    let updateCountX = ()=>{
        setCountX((prevCount)=>(prevCount + 1))
    }
    let updateCountY = ()=>{
        setCountY((prevCount)=>(prevCount + 1))
    }
    // useEffect(function printSomething(){
    //     console.log("Hello Re-rendering occureded.");
        
    // } , [countX])
    useEffect(function printSomething(){
        console.log("Hello Re-rendering occureded.");
        
    } , [])
    return (
    <div>
        <h2>CountX = {countX}</h2>
        <button onClick={updateCountX} >+1</button>
        <br />
        <h2>CountY = {countY}</h2>
        <button onClick={updateCountY} >+1</button>
        <br />
    </div>
    )
}

export default Counter
