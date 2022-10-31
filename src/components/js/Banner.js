import React from "react";
import '../css/Banner.css';
export { set_image_carousel_item, set_carousel_indicator }

export default function Banner() {  
    var html = <React.Fragment>
      <Carousel_inner/>
      <Carousel_indicators/>
      <Carousel_control/>
    </React.Fragment>
  
    return html;
}
  
  const Carousel_inner = () => {
    var html = <div className="carousel-inner" id="carousel-inner"></div>;
    return html;
  }
  
  
  const Carousel_indicators = () => {
    var html = <ol className="carousel-indicators" id="carousel-indicators"></ol>;
    return html;
  }
  
  const Carousel_control = () => {  
    var html = <React.Fragment>
                  <Carousel_control_previous/>
                  <Carousel_control_next/>
            </React.Fragment>;  
        return html;
  }

  const Carousel_control_previous = () => {
    var html = <a className="carousel-control-prev none-580" id="btn-prev-slide" data-target="#banner-carousel" role="button" data-slide="prev">
                  <span className="slider-mover-left" aria-hidden="true">
                      <i className="fa fa-chevron-circle-left fa-2x"></i>
                  </span>
              </a>;

    return html;
  }
  
  const Carousel_control_next = () => {
      var html = <a className="carousel-control-next none-580" id="btn-next-slide" data-target="#banner-carousel" role="button" data-slide="next">
                    <span className="slider-mover-right" aria-hidden="true">
                        <i className="fa fa-chevron-circle-right fa-2x"></i>
                    </span>
                  </a>;

      return html;
  }
  
  const set_image_carousel_item = (slide_index, img_url) => {
    var slide_status = (slide_index == 0) ? 'active' : '';
    var carousel_item_class = `carousel-item banner-max-height ${slide_status}`;
  
    var html = <div className={ carousel_item_class } key={`${slide_index}`}>
                  <a href="#picture" data-id={ img_url } className="openImageDialog thumbnail" data-toggle="modal">
                      <img className="d-block w-100 h-100" src={ img_url } alt="banner"/>
                  </a>
              </div>;
  
    return html;
  }
  
  const set_carousel_indicator = (slide_index) => {  
    var slide_status = (slide_index == 0) ? 'active' : '';
    var html = <li key={`${slide_index}`} data-target="#banner-carousel" data-slide-to={slide_index} className={slide_status}></li>;
  
    return html;
  }
  