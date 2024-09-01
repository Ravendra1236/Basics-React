
function Form() {

    function submit(event){
        // Will stop form refreshing 
        event.preventDefault()
        
        console.log("Form Submitted.");
    }

    return (
        
    <form onSubmit={submit}> 
        <input type="text" placeholder="Write something.." />
        <button>Submit</button>
    </form>
    )
}

export default Form
