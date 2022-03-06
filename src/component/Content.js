import React from "react";
import './SideBarMenu.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FaBeer } from 'react-icons/fa';

import AddProduct from "./content/appScreen/AddProduct.js";
import UpdateProduct  from './content/appScreen/UpdateProduct.js';
import  DeleteProduct from './content/appScreen/DeleteProduct.js';
import Header from "./content/Header";

const Content = () => {
  return (
      <div style={{width:'100%'}} >
        <Header/>
        <div className={"content"}>

            <Switch >
                <Route exact path="/">
                    <AddProduct />
                </Route>
                <Route path="/cart">
                    <UpdateProduct />
                </Route>
                <Route path="/orders">
                    <DeleteProduct />
                </Route>
            </Switch>
        </div>
      </div>
    
  );
};

export default Content;

