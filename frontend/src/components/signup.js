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
                    type="text"
                    id="first_name"
                    value={state.first_name}
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    id="last_name"
                    value={state.last_name}
                    onChange={handleOnChange}
                />
                <input
                    type="submit"
                    value="Signup"
                />
            </form>
        </div>
    )

}

const Signup = connect(null, { createUser })(UnconnectedSignup);

export default Signup;