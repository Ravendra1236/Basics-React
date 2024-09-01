import { useState } from "react"

function Counter() {

    // Here state is reponsible for UI change in React 
    // So this will not work.
    // let count = 0 ; 
    // function incCount(){
    //     count+=1 ;
    //     console.log(count);
        
    // }
    let [count , setCount] = useState(0)

    function incCount(){
        console.log(count); // due to clousers value is different 
        setCount(count+1);
    }

    return (
    <div>
        <h3>This will increament count: {count}</h3>
        <button onClick={incCount}> Click me</button>
    </div>
    )
}

export default Counter
