import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
    google : 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <div className='button-container'>
            <button 
            className='{ `button-container ${BUTTON_TYPES_CLASSES[buttonType]}` }'
            {...otherProps} 
            >{children}</button>
        </div>
    )
};

export default Button;