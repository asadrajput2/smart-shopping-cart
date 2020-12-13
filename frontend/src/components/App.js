import React from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import ProductsList from './productsList/products_list'
import Items from './items/itemsList';
import Home from './home/home';

export default function App(props) {
    return (
        <BrowserRouter>
            <div>

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a href="/" className="navbar-brand">Smart Shopping Cart</a>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/login/">Login</Link></li>
                        <li><Link className="nav-link" to="/signup/">Signup</Link></li>
                    </ul>
                </nav>
                <br />
                <br />
                <br />

                <main>
                    <Switch>
                        <Route exact path={"/login/"} component={Login} />
                        <Route exact path={"/signup/"} component={Signup} />
                        <Route exact path={"/products/"} component={ProductsList} />
                        <Route exact path={"/items/"} component={Items} />
                        <Route path={"/"} component={Home} />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
};