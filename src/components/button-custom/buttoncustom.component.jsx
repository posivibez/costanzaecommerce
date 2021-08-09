import React from 'react'

import './buttoncustom.styles.scss'

const ButtonCustom = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`custombutton ${isGoogleSignIn ? 'custombutton__google' : ''}`} { ...otherProps }>
            {children}
        </button>
    )
}

export default ButtonCustom;