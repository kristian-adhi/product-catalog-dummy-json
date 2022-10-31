import $ from 'jquery'; 

import Detail_product from './Detail_product.js';
import { render_element } from '../../../components/js/CustomDOM';
import { Nav_main, Nav_back } from '../../../template/header/Header.js';

import { custom_add_event_listener, button_carousel_handler } from '../../../helpers/event_helper.js';
import { format_currency, text_limit } from '../../../helpers/format_helper.js';

import star_icon from "../../../assets/img/icon/star_rating.png";


$(document).ready(function () {
    api_gateway('all_products', '');
    main_nav_event_handler();
});


function dropdown_category() {

    $.getJSON("https://dummyjson.com/products/categories", 
        function (result) {
            let category;

            $.each(result, function(key, val) { 
                category = val;

                $("#category").append(
                    $("<option></option>").text(category).val(category)
                );
            });
        }
    );
    
}

function main_nav_event_handler() {
    setTimeout(() => {
        custom_add_event_listener('keyword', 'keyup', searchbox_handler);
        custom_add_event_listener('category', 'change', dropdown_handler);
    }, 1000);
}


function searchbox_handler(event) {  
    let key_code = event.keyCode;

    if (key_code == 13) {
        event.preventDefault();
    } 

    let arr_code = [8, 13, 16, 17, 18, 27, 37, 38, 39, 40, 45, 46];
    let str_val = $(this).val();
    let str_length = str_val.length;

    let find_key = $.inArray(key_code, arr_code);

    if (find_key == -1) {
        $('#category').val("").trigger('change');
        api_gateway('search_product', str_val);     

    } else if (str_length == 0 && find_key == 0){
        api_gateway('all_products', '')
    }
}

function dropdown_handler() {
    let selected_category = $(this).val();

    if (selected_category !== '') {
        $('#keyword').val("");
        api_gateway('filter_category', selected_category)
    }
}


function api_gateway(service, val) {
    let base_url = 'https://dummyjson.com/';
    let end_point = '';

    switch (service) {
        case 'all_products':
            end_point = 'products';
            break;

        case 'search_product':
            end_point = 'products/search?q=' + val;
            break;

        case 'filter_category':
            end_point = 'products/category/' + val;
            break;

        default:
            end_point = '';
            break;
    }


    if (end_point !== '') {
        let api_url = base_url + end_point;
        get_product_list(api_url);
        
    } else {
        console.log('Service not found');
    }
    
}


function nav_back_handler() {
    render_element('navbar-header', <Nav_main/>);
    main_nav_event_handler();
    dropdown_category();
    api_gateway('all_products', '');
}

window.show_product_detail = (id) => {
   render_element('navbar-header', <Nav_back/>);

   setTimeout(() => {
        custom_add_event_listener('nav-back-product-list', 'click', nav_back_handler);
   }, 500);

    ajax_detail_product(id);
}


function get_product_list(api_url) {  

    $.getJSON(api_url, 
        function (result) {
            
            let content = '';
            let product, arr_size;

            let id, title, description, price;
            let rating, thumbnail;
            let short_description, price_in_dollar;
            
            product = result['products'];
            arr_size = product.length;

            if (arr_size > 0) {

                $.each(product, function(index, row) { 
                    id = row.id;
                    title = row.title;
                    description = row.description;

                    price = row.price;
                    price_in_dollar = format_currency.format(price);

                    rating = row.rating;
                    thumbnail = row.thumbnail;
                    short_description = text_limit(description);

                    content += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                    <div class="card">
                                        <img class="card-img-top" src="${thumbnail}" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title menu-sm-card-title">
                                                <div class="product-name"> ${title} </div>
                                                <div class="description-inline text-muted small"> ${short_description} </div>
                                                <div class="short-note"> 
                                                    <img class="star-rating" src="${star_icon}" alt="" />
                                                    <div class="price-rate">
                                                        ${rating} | ${price_in_dollar}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <a href="javascript:;" class="btn btn-danger btn-detail" onclick="show_product_detail('${id}')">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                });

            } else {
                content += '<h2>Product not found</h2>';
            }
            
            $('#product-content').html(content);
        }
    );

}

function ajax_detail_product(id_product) {  
    
    render_element('product-content', <Detail_product/>);

    $.getJSON('https://dummyjson.com/products/' + id_product, 
        function (result) {
            let product, img_url;
            product = result;

            let active;
            let carousel_item = '';
            let carousel_indicator = '';

            let id = product.id;
            let title = product.title;
            let description = product.description;
            let price = product.price;
            let rating = product.rating;
            let brand = product.brand;
            let category = product.category;

            let images = product.images;
            let img_length = images.length;
            let star_rating = `<img class="star-rating" src="${star_icon}" alt="" />`;

            $('#product-id').val(id);
            $('#product-name').html('<b>' + title + '</b>');
            $('#rating').html(star_rating + rating);
            $('#price').html('<h2>' + format_currency.format(price) + '</h2>');
            $('#product-category').html('Category : <b>' + category + '</b>');
            $('#product-brand').html('Brand : <b>' + brand + '</b>');
            $('#description-full').html(description);

            if (img_length > 1) {
                $('.carousel-control-prev').show();
                $('.carousel-control-next').show();
            } else {
                $('.carousel-control-prev').hide();
                $('.carousel-control-next').hide();
            }


            for (let i = 0; i < img_length; i++) {
                img_url = images[i];

                if (img_url != '') {
                    
                    active = (i == 0) ? 'active' : '';

                    carousel_item += `<div class="carousel-item banner-max-height ${active}">
                                        <a href="javascript:;" data-id="${img_url}" class="thumbnail">
                                            <img class="d-block h-100" src="${img_url}" alt="banner">
                                        </a>
                                    </div>`;

                    carousel_indicator += '<li class="indicator-item '+ active +'" data-target="#banner-carousel" data-slide-to="'+ i +'"></li>';
                }

            }
            
            $('#carousel-inner').html(carousel_item);
            $('#carousel-indicators').html(carousel_indicator);

            button_carousel_handler();;

        }

    ).fail(function(res) {
            let json = res.responseJSON;
            let message = json.message;
            
            $('#detail_product').html(message);
        }
    );
}

