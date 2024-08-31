import Product from "./Product";

function ProductList() {
    // Passing array as a prop
    // let options = ["Hi-Tech" , "Expressive" , "Beautiful"]
    return (
        <div>
        {/* <Product title="Mobile" price={20000} features= {options}></Product>
        <Product title="Bottle" price={100}  features= {options}></Product>
        <Product title="Laptop" features= {options}></Product> */}


        <Product title="Mobile" price={20000} ></Product>
        <Product title="Bottle" price={100}  ></Product>
        <Product title="Laptop" price={40000}></Product>
        </div>
    )
}

export default ProductList


