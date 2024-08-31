import "./Product.css"
import Price from "./Price"
function Product({ title , idx}){
    let oldPrices = ["$11,100" , "$12,000" , "$25000" , "$1900"]
    let newPrices = ["$10,100" , "$9,000" , "$21000" , "$1500"]
    let description = ["This is Description 1" , "This is Description 2" ,"This is Description 3","This is Description 4"]
    return (
    <div className="Product">
        <p>{title}</p>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice = {newPrices[idx]}></Price>
    </div>

    
    )

}

export default Product