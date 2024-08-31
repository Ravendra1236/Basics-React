import "./Product.css";

function Price({ oldPrice, newPrice }) {
    return (
        <div className="Price">
            <div className="OldPrice">
                <p>{oldPrice}</p>
            </div>
            <div className="NewPrice">
                <p>{newPrice}</p>
            </div>
        </div>
    );
}

export default Price;
