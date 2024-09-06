import { useState } from "react"


function LudoGame() {

    let [moves , setMoves] = useState({red : 0 , green : 0 , blue : 0  , yellow : 0 })
    function updateBlue(){
        // moves.blue += 1;
        // console.log(`moves.blue value:  ${moves.blue}`);
        // setMoves({...moves});
        // React works only when state changes and state will change when Something will happen to object as here only key will change with above method 
        setMoves((prevMoves) => ({...prevMoves, blue : prevMoves.blue + 1}))
        console.log(moves.blue);
    }
    function updateRed(){

        setMoves((prevMoves) => ({...prevMoves, red : prevMoves.red + 1}))
        console.log(moves.red);
    }
    function updateYellow(){

        setMoves((prevMoves) => ({...prevMoves, yellow : prevMoves.yellow + 1}))
        console.log(moves.yellow);
        
    }
    function updateGreen(){

        setMoves((prevMoves) => ({...prevMoves, green : prevMoves.green + 1}))
        console.log(moves.green);
    }
    return (
    <div>
        <h2>Game Begins !</h2>
        <div className="Board">
            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor : "red"}}  onClick={updateRed}>+1</button>
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor : "green"}}  onClick={updateGreen}>+1</button>
            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor : "yellow" , color : "black"}}  onClick={updateYellow}>+1</button>
        </div>
    </div>
    )
}

export default LudoGame
