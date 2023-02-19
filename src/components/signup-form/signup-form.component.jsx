import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import './signup-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formfields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formfields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(formfields);
        setFormFields({ ...formfields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password doesnt match.')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' type='text' name="displayName" value={displayName} onChange={handleChange} required ></FormInput>
                <FormInput label='Email' type='email' name="email" value={email} onChange={handleChange} required></FormInput>
                <FormInput label='Password' type='password' name="password" value={password} onChange={handleChange} required></FormInput>
                <FormInput label='Confirm Password' type='password' name="confirmPassword" value={confirmPassword} onChange={handleChange} required></FormInput>

                <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm;