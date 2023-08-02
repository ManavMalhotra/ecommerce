const Product = () => {
    const product1 = {"name":"Sticker 1","price":100, "description":"This is a sticker1."};
    const product2 = {"name":"Sticker 2","price":499, "description":"This is a sticker2."};
    const product3 = {"name":"Sticker 3","price":299, "description":"This is a sticker3."};

    const product_list = [product1, product2, product3];

    return (
        <div className="product-container">
            {product_list.map((product) => (
                <div className="product" key={product.name}>
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Product;
