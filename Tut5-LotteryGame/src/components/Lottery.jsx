import { useState } from "react"
import "./Lottery.css"
import {genTicket , sum} from "./helper";

function Lottery() {
    let [ticket , setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15 
    
    let buyticket = ()=>{
        setTicket(genTicket(3))
    }
    return (
    <div>
        <h2>Lottery Game !</h2>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <h1>{isWinning ? "Congratulations, You won the Game !!" : ""}</h1>
        <br />
        <button onClick={buyticket}>Buy New Ticket</button>
    </div>
    )
}

export default Lottery
