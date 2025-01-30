import React from 'react'
import './button.css';

export function Button({children, className, size, variant,  ...props}) {

  let variantClass = variant && 'button-'+variant
  return (
    <button variant='primary' className={className + (size === "lg"? " button-large ": " button-small ") + variantClass}
      {...props}>{children}</button>
  )
}