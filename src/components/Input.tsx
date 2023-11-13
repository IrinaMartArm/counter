import { ChangeEvent } from "react";
import styled from "styled-components";

type PropsType = {
    title: string
    value: number
    disabled: boolean
    callback: (value: string) => any
}


export const InputForm = (props: PropsType) => {

    const disableStyle = {
        backgroundColor: props.disabled ? '#ff9292' : '',
        border:  props.disabled ? "2px solid #ff0000" : ''
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <StyledForm>
            <label>{props.title}
                <input type="number" value={props.value}
                       onChange={inputHandler}
                       style={disableStyle}
                    // style={{ border: `${ props.disabled === true ? "2px solid #ff0000" : ""}`}}
                />
            </label>
        </StyledForm>
    );
}

const StyledForm = styled.div`
    display: flex;
    max-width: 100%;
    height: 30px;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    /* color: #5bc6ff; */
    
    & input {
        height: 20px;
        outline: none;
        margin-left: 15px;
        border: 2px solid #5bc6ff;
    }
`
