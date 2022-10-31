import React from "react";

import "../css/Product.css";
import "../js/Product_api.js";

export default function Product() {
    var html = <div className="container-fluid" id="main-page">
                <div className="row" id="product-content"></div>
            </div>;

    return html;
}