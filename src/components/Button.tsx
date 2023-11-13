import React from "react"
import styled from "styled-components"

type ButtonType = {
    name: string
    callback: ()=>void
    disabled?: boolean
}

export const Button: React.FC< ButtonType> = (props: ButtonType) => {
    const buttonHandler = () => {

        props.callback()
    }

    return (
        <StyledBtn onClick={buttonHandler} disabled={props.disabled}>{props.name}</StyledBtn>
    );
}

export const StyledBtn = styled.button`
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: white;
    border: 3px solid #5bc6ff;
    outline: none;
    background-color: transparent;
    &:hover {
        outline: none;
        border: 3px solid #3ba8e3;
    }

    &:focus { 
        outline: none;
        border: 3px solid #3ba8e3;
    }

    &:active {
        color: #5bc6ff;
        border: 3px solid #5bc6ff;
    }
    
    &:disabled {
        opacity: 0.5;
        border: 3px solid #5bc6ff;
    }
`