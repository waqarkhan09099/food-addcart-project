import React from 'react';
import Styled from 'styled-components';


const Form =Styled.div`
    display: flex;
    flex-direction:row ;
    font-size:inherit;
    font-weight:bold;
    justify-content:space-around;
    align-items:center;

    & input{
        outline:none;
        border:none;
        text-align: center;
        margin-left:8px;
        border-radius:20px;
        font-size:inherit;
        font-weight:bold;
        color:black;
        background: none;   
        width: 50%;
    }

`;

const Input = React.forwardRef((props,ref) => {
    return (
        <>
            <Form>
                <label HtmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </Form>
        </>
    );
});

export default Input;