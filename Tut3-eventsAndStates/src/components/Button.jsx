
function Button() {
    function clickEvent(event){
        console.log("Hello !");
        console.log(event);
        
        
    }
    function mouseOverEvent(){
        console.log("Bye !");
        
    }
    return (
        <>
        <button onClick={clickEvent}>Hello !</button>
        <br />
        <p onMouseOver={mouseOverEvent}>    Hello Sir How are you ! </p>
        </>
    )
}

export default Button
