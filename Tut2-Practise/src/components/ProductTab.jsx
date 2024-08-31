import Product from "./Product";
import "./Product.css"
function ProductTab() {
    return (
        <>
        <h2 className="h2">BlockBuster Sale || Amazon</h2>
        <div className="Container">

        <Product title="Logitech Master" description="This Logitech Laptop." idx={0}></Product>
        <Product  title="Apple Pencil" description="This is our Pencil of Apple." idx={1}></Product>
        <Product  title="Zebronics Transformer" description="Our Zebronics Transformer" idx={2}></Product>
        <Product title="Petronics Toad 23 " description="Wow!!! New New performer" idx={3}></Product>
        </div>
        </>


    )
}

export default ProductTab


