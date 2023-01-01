import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
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
            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>

                <FormInput label='Display Name' type='text' name="displayName" value={displayName} onChange={handleChange} required ></FormInput>
                <FormInput label='Email' type='email' name="email" value={email} onChange={handleChange} required></FormInput>
                <FormInput label='Password' type='password' name="password" value={password} onChange={handleChange} required></FormInput>
                <FormInput label='Confirm Password' type='password' name="confirmPassword" value={confirmPassword} onChange={handleChange} required></FormInput>

                <Button buttonType='submit'>Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm;