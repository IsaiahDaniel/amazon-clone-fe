import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./Button.css";

interface ButtonProps {
    dark?: string | boolean;
    primary?: string | boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {

    if(props.dark){
        return (
            <button className='dark' disabled={props.isDisabled && props.isDisabled}>
                { props.children }
            </button>
        )
    }

  return (
    <button className='primary' disabled={props.isDisabled && props.isDisabled}>
        { props.children }
    </button>
  )
}

export default Button;