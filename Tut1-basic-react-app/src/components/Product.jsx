import Title from './Title'
import Description from './Description'
import "../Styling/Product.css"

function Product({title , price = 1 , features}){

    // const list = features.map((feature ) => <li>{feature}</li>);
    let isDiscount = price > 21000 
    let styles = {backgroundColor :isDiscount? "red" : "seagreen"}
    return (
    <div className='Product' style={styles}>
        {/* <Title></Title>
        <Description>{price}</Description> */}

        <h1>{title}</h1>
        <h3>{price}</h3>
        {isDiscount? <p>Discount of 10%</p> : <a href='/'>Get Disocunt</a> }
        {/* <ul>{list}</ul> */}
    </div>

    
    )

}

export default Product