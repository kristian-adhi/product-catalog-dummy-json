import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import "./Header.css";

export default function Header() {

    var app_bar = <AppBar>
                    <Toolbar>
                        <div id="navbar-header">
                            <Nav_main/>
                        </div>
                    </Toolbar>
                </AppBar>;

    var html = <div className="container" id="container-app-bar">
                    {app_bar}
                </div>;
    
    return html;
}


function Nav_main() {
    var html = <form className="form-inline" id="header-form-inline">
                    <div className="form-group col-md-12">
                        <input type="search" name="keyword" id="keyword" placeholder="Search" className="form-control" autoComplete="off"/>
                        <select name="category" id="category" className="form-control">           
                            <option disabled selected hidden>Category</option>
                        </select>
                    </div>
                </form>;

    return html;
}

function Nav_back() {
  var html = <a href="javascript:;" id="nav-back-product-list">
                <span> <i className="fa fa-arrow-left"></i></span>
                  &nbsp; Back to products
              </a>;
              
  return html;
}


export { Nav_main, Nav_back };