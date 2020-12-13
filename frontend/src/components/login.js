import React, { useState } from 'react'
import { loginUser } from '../reducers/userSlice';
import { connect } from 'react-redux';
import store from '../store/store';


function UnconnectedLogin(props) {

    const [state, setState] = useState({
        email: '',
        password: ''
    });


    function handleOnChange(event) {
        event.preventDefault();
        setState({ ...state, [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            "email": state.email.toLowerCase(),
            "password": state.password
        }

        store.dispatch(loginUser(data));
    }


    return (
        <div className="col d-flex justify-content-center align-center">
            <div className="card border-0">
                <div className="card-body">
                    <p className="card-text align -center">Login to start shopping</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="email"
                                    value={state.email}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    value={state.password}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>

                            <input
                                className="btn btn-block btn-success"
                                type="submit"
                                value="Login"
                            />

                        </form>
                    </div>
                </div>
            </div>
    )

}

const Login = connect(null, { loginUser})(UnconnectedLogin);

export default Login;