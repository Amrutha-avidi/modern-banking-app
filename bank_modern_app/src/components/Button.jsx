import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    font-medium font-poppins rounded-[10px]
     text-primary outline-none text-[18px] ${styles}`}>Get Started</button>
  )
}

export default Button