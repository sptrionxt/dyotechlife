import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import "./ProductDetails.css";
import { useAlert } from "react-alert";
import Metadata from "../layout/MetaData.js"
import { addItemsToCart } from "../../actions/cartAction.js"

const ProductDetails = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { id } = useParams();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

   

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {

        if (product.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {

        if (quantity <= 1) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };


    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);

    return (
        <Fragment>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Fragment>
                    <Metadata title={`${product.name} -- ECOMMERCE`} />
                    <div className="ProductDetails">
                        <div className="leftColumn">
                            <div>
                                {product && product.images && product.images.length > 0 ? (
                                    <img
                                        className="ProductImage"
                                        src={product.images[0].url}
                                        alt="Product"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className="detailsBlock-2-1">
                                <div className="detailsBlock-2-1-1">
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly type="number" value={quantity} />
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                                <button disabled={product.stock < 1} onClick={addToCartHandler}>Add to Cart</button>
                            </div>
                        </div>

                        <div className="rightColumn">

                            <div className="detailsBlock-1">
                                <h2>{product.name}</h2>
                                <p>Price: {product.price}</p>
                            </div>
                            
                            <div className="detailsBlock-2">
                                <div className="block1">
                                <p>{`CAS No.: ${product.CASNo}`}</p>
                                <p>{`Item No.: ${product.ItemNumber}`}</p>

                                </div>

                                <div className="block2">
                                    <p>{`Purity: ${product.purity}`}</p>
                                    <p>{`Molecular Weight: ${product.molecularWeight}`}</p>
                                </div>



                                <p>
                                    Status:
                                    <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                        {product.stock < 1 ? "OutOfStock" : "InStock"}
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Fragment>)
            };
        </Fragment >
    );
};

export default ProductDetails;
