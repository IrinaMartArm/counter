import {InputForm} from "./Input";
import {Button} from "./Button";
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./Store";
import {
    changeMaxInputValueAC,
    changeMinInputValueAC,
    InStateType,
    setErrorAC,
    setMaxCounterAC,
    setMinCounterAC
} from "./Reducer";

export const SetValueForm = () => {

    const dataCount = useSelector<StateType, InStateType>(state => state.counter)

    const dispatch = useDispatch()

    const set = () => {
        dispatch(setMaxCounterAC())
        dispatch(setMinCounterAC())
    }

    const maxHandler = (value: string) => {
        if(+value >= dataCount.minInputValue) {
            if(+value < 10) {
                dispatch(changeMaxInputValueAC(+value))
                dispatch(setErrorAC(false))
            } else {
                dispatch(setErrorAC(true))
            }
        } else dispatch(setErrorAC(true))

    }
    const minHandler = (value: string) => {
        if(+value <= dataCount.maxInputValue) {
            if( +value > 0 ) {
                dispatch(changeMinInputValueAC(+value))
                dispatch(setErrorAC(false))
            }  else {
                dispatch(setErrorAC(true))
            }
        } else dispatch(setErrorAC(true))
    }

    return (
        <StyledCounter>
            <CounterBox >
                <InputForm
                    title={'max value '}
                    value={dataCount.maxInputValue}
                    error={dataCount.error}
                    callback={maxHandler}
                />
                <InputForm
                    title={'start value  '}
                    value={dataCount.minInputValue}
                    error={dataCount.error}
                    callback={minHandler}

                />
            </CounterBox>
            <Box>
                <Button name="set" callback={set} disabled={dataCount.error}/>
            </Box>
        </StyledCounter>
    )
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