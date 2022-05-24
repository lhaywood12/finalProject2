import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard (props) {
    const keyChainData = props.data;
    console.log(keyChainData)
    return(
        <>
            <div className="col-md-4">
                <div className="product-img">
                    <div>
                        <img src={keyChainData.url} className="placeholder img" alt="img-fluid"/>
                    </div>

                    <div className="product-item">
                        <li>
                            <p className="product-title">{keyChainData.title}</p>
                            <p className="product-price">{keyChainData.price}</p>
                            <Link to={`/product/${keyChainData.id}`}>More Info</Link>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}
