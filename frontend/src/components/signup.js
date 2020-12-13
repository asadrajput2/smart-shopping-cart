import React, { useState } from 'react'
import { createUser } from '../reducers/userSlice';
import { connect } from 'react-redux';
import store from '../store/store';


function UnconnectedSignup(props) {

    const [state, setState] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    });


    function handleOnChange(event) {
        event.preventDefault();
        setState({ ...state, [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            "email": state.email.toLowerCase(),
            "password": state.password,
            "first_name": state.first_name,
            "last_name": state.last_name,
        }

        store.dispatch(createUser(data));
    }


    return (
        <div>
            <div className="col d-flex justify-content-center align-center">
                <div className="card border-0">
                    <div className="card-body">
                        <p className="card-text align -center">Create a new account</p>

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
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="first_name"
                                    value={state.first_name}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="last_name"
                                    value={state.last_name}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>

                            <input
                                className="btn btn-block btn-success"
                                type="submit"
                                value="Signup"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

const Signup = connect(null, { createUser })(UnconnectedSignup);

export default Signup;