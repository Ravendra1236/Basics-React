import { useState } from "react"

function LikeButton() {
    const [isLike , setisLike] = useState(false)

    function liked(){
        setisLike(!isLike) ;

    }

    let likeStyle = {color : "red"}
    return (
    <div>
        {isLike ? <h1 onClick={liked}><i style={likeStyle} className="fa-sharp fa-solid fa-heart"></i></h1> : <h1 onClick={liked}><i className="fa-regular fa-heart"></i></h1>}
        
    </div>
    )
}

export default LikeButton
