import React from 'react'

// import './buttoncustom.styles.scss'

// import './buttoncustom.styles';
import { CustomButton } from './buttoncustom.styles';

const ButtonCustom = ({ children, type, ...otherProps }) => {
    return (
        <CustomButton type={type} {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default ButtonCustom;