import React from "react";
import { Link } from 'react-router-dom';

const TopBarNav = () => (
    <nav className="navbar navbar-expand-sm navbar-light">
    <ul className="justify-content-around mx-auto nav navbar-nav w-50">

      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/products">Products</Link></li>

    </ul>
   </nav>
)

export default TopBarNav;