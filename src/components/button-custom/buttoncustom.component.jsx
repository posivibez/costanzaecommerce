import React from 'react'

import './buttoncustom.styles.scss'

const ButtonCustom = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`custombutton ${isGoogleSignIn ? 'custombutton__google' : ''} ${inverted ? 'inverted' : ''}`} { ...otherProps }>
            {children}
        </button>
    )
}

export default ButtonCustom;