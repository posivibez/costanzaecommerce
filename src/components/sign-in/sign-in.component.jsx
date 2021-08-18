import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import ButtonCustom from '../button-custom/buttoncustom.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        await event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});


        } catch(error) {
            console.log(error)
        }



    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className="signin__form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.onChange}
                        label="Email"
                    />

                    <FormInput 
                        type="password" 
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.onChange}
                        label="Password"
                    /> 
                    <div className="buttons">
                        <ButtonCustom type='submit'>SIGN IN</ButtonCustom>
                        <ButtonCustom type="button" onClick={signInWithGoogle} google>SIGN IN WITH GOOGLE</ButtonCustom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;