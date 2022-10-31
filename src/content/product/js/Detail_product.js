import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';

import "../css/Detail_product.css";
import '../../../components/css/Banner.css';

export default function Detail_product() {
    var html = <React.Fragment>
                  <Section_banner/>
                  <Section_detail/>
              </React.Fragment>;

    return  html;
}

function Section_banner() {
  var html = <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6">
                <div id="banner-carousel" className="carousel slide mb-5" data-ride="carousel">
                  <div className="carousel-inner" id="carousel-inner"></div>
                  <ol className="carousel-indicators" id="carousel-indicators"></ol>
                  <a id="btn-prev-slide" className="carousel-control-prev none-580" data-target="#banner-carousel"
                      role="button" data-slide="prev">
                      <span className="slider-mover-left" aria-hidden="true">
                          <i className="fa fa-chevron-circle-left fa-2x"></i>
                      </span>
                  </a>
                  <a id="btn-next-slide" className="carousel-control-next none-580" data-target="#banner-carousel"
                      role="button" data-slide="next">
                      <span className="slider-mover-right" aria-hidden="true">
                          <i className="fa fa-chevron-circle-right fa-2x"></i>
                      </span>
                  </a>
                </div>
                  <h5>Description</h5>
                  <div id="description-full"></div>
              </div>;

  return html;
}


function Section_detail() {
  var html = <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6" id="product-detail-section">
                <input type="hidden" id="product-id"></input>
                <div id="product-name"></div>
                <div id="rating"></div>
                <div id="price"></div>
                <div id="product-category"></div>
                <div id="product-brand"></div>
            </div>;

  return html;
}