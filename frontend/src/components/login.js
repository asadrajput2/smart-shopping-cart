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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    value={state.email}
                    onChange={handleOnChange}
                />
                <input
                    type="password"
                    id="password"
                    value={state.password}
                    onChange={handleOnChange}
                />
                <input
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    )

}

const Login = connect(null, { loginUser })(UnconnectedLogin);

export default Login;