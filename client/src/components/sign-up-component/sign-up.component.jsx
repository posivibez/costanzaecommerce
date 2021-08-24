import React from 'react'
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../button-custom/buttoncustom.component'

import './sign-up.styles.scss'


import { signUpStart } from '../../redux/user/user.actions.js'

class SignUp extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

    };


    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        const { signUpStart } = this.props;

        if(password !== confirmPassword) {
            alert(`Passwords don't match!`);
            return;
        }
        
        // this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // });

        signUpStart(email, password, displayName);



        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user, {displayName});

        // } catch (error) {
        //     console.log(error);
        // }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return(
            <div className="sign__up">
                <h2 className="title">
                    I do not have an account.
                </h2>
                <span>
                    Sign up with email and password
                </span>

                <form className="sign__up__form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display name"
                        required
                    />

                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton 
                        type="submit"
                    >
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);