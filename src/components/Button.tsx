'use-client'
import React, { FC, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    className:string
    children: any;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps>= ({children,className}) => {
  return (
    <button className={ className + 'text-white font-bold py-2 px-4 rounded-lg shadow-xl transition duration-300 ease-in-out'}>{children}</button>
  )      
}

export default Button