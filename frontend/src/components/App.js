import React from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import ProductsList from './productsList/products_list'


export default function App(props) {
    return (
        <BrowserRouter>
            <div>

                <nav className='nav'>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/login/">Login</Link>
                    <Link className="nav-link" to="/signup/">Signup</Link>
                </nav>

                <main>
                    <Switch>
                        <Route exact path={"/login/"} component={Login} />
                        <Route exact path={"/signup/"} component={Signup} />
                        <Route exact path={"/products/"} component={ProductsList} />
                        <Route path={"/"} render={() => <h1>Home Again</h1>} />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
};