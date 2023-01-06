import './authentication.styles.scss';

import SignInForm from '../../components/signin-form/signin-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

const Authentication = () => {
    return(
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;