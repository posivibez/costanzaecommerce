import React from 'react'

// import './buttoncustom.styles.scss'

// import './buttoncustom.styles';
import { CustomButton } from './buttoncustom.styles';

const ButtonCustom = ({ children, ...otherProps }) => {
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default ButtonCustom;