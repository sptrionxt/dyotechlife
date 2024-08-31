import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Metadata from "../layout/MetaData.js"
import Pagination from "react-js-pagination";
import Typography from "@mui/material/Typography";


const categories = [
    "Organic Light Emitting Diode",
    "Donor Intermediates",
    "Acceptor Intermediates",
    "Organic Photovoltaic",
];


const Products = () => {
    const dispatch = useDispatch();

    const alert = useAlert();
    const { keyword } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("");

    const { products, loading, error, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);


    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, currentPage, category));
    }, [dispatch, keyword, currentPage, category, alert, error]);

    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>

                <Metadata title="PRODUCTS -- ECOMMERCE" />

                <h2 className="productsHeading">Products</h2>

                <div className="products">
                    {products && products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>



                <div className="filterBox">
                    <Typography color={"tomato"} fontSize="24px">Categories</Typography>
                    <ul className="categoryBox">
                        {categories.map((category) => (
                            <li
                                className="category-link" key={category} onClick={() => setCategory(category)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {resultPerPage < filteredProductsCount && (
                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={filteredProductsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkAcitve"
                        />
                    </div>
                )}

            </Fragment>}
        </Fragment>
    )
}


export default Products;




