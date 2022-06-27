import React from 'react'
import PropTypes from 'prop-types';

const Button = ({version , isDisabled , type , children}) => {
  return (
    <button type={type} disabled={isDisabled} className={`send send-${version}`}>{children}</button>
  )
}

Button.defaultProps = { 
    version : 'primary',
    isDisabled : false,
    type : 'button',
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    type : PropTypes.string,
    version : PropTypes.string,
    isDisabled : PropTypes.bool,

}

export default Button