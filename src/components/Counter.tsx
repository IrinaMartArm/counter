import styled from "styled-components";
import { Button } from "./Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCounterAC, InStateType,
    resetAC,
} from "./Reducer";
import {StateType} from "./Store";
import {SetValueForm} from "./SetValueForm";


export const Counter: React.FC = () => {

    const dataCount = useSelector<StateType, InStateType>(state => state.counter)
    const dispatch = useDispatch()
    const increase = () => {
        if(dataCount.count < dataCount.max)
        dispatch(increaseCounterAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }


    return (
        <>
            <SetValueForm/>
            <StyledCounter>
                <CounterBox>
                    {dataCount.error
                        ?   <h2  style={{color: "red"}}>Incorrect value!</h2>
                        :   <h1  style={{ color: `${ dataCount.count === dataCount.max ? "red" : ""}`}}>
                                {dataCount.count}
                            </h1>
                    }
                </CounterBox>
                <Box>
                    <Button name="increase" callback={increase}
                            disabled={dataCount.count === dataCount.max || dataCount.max <= dataCount.min}/>
                    <Button name="reset" callback={reset}
                            disabled={dataCount.count === dataCount.min || dataCount.max <= dataCount.min}/>
                </Box>
            </StyledCounter>
        </>
    );
}


const StyledCounter = styled.div`
    width: 300px;
    padding: 20px;
    border: 3px solid #5bc6ff;
    border-radius: 10px;
    background-color: #747474;
`
const Box = styled.div`
    display: flex;
    gap: 30px;
`
const CounterBox = styled.div`
    width: 100%;
    min-height: 100px;
    margin-bottom: 20px;
    color: white;
    border-radius: 10px;
    border: 3px solid #5bc6ff;
    h1 {
        font-size: 32px;
        line-height: 2;
        padding: 0;
        margin: 0;
    }
`