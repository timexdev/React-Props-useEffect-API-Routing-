import React from 'react'

const Button = ({title,color}) => {
  return (
    <>
        <button className={color}>{title}</button>
    </>
  )
}

export default Button