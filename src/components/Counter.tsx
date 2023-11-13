import styled from "styled-components";
import { Button } from "./Button";
import React from "react";
import { InputForm } from "./InputForm";
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAC, resetAC,  setMaxCounterAC, setMinCounterAC} from "./Reducer.tsx";
import {ReducerType} from "../Store.tsx";


type DataCountType = {
    min: number
    max: number
    count: number
}

export const Counter: React.FC = () => {

    const dataCount = useSelector<ReducerType, DataCountType>(state => state)


    const dispatch = useDispatch()

    // const [dataCount, setDataCount] = useState<DataCountType>({
    //     min: 0,
    //     max: 1,
    //     count: 0,
    // });



    // useEffect(()=> {
    //     let stringValue = localStorage.getItem('value')
    //     if(stringValue){
    //         let newValue = JSON.parse(stringValue)
    //         setDataCount({...dataCount, count: newValue})
    //     }
    // }, [])
    //
    // useEffect(()=> {
    //     localStorage.setItem('value', JSON.stringify(dataCount.count))
    // }, [dataCount.count])


    // const increase = () => {
    //     if (dataCount.count < dataCount.max) {
    //         setDataCount(
    //             {...dataCount, count: dataCount.count + 1}
    //         )
    //     }
    // }
    const increase = () => {
        dispatch(increaseCounterAC())
    }

    // const reset = () => {
    //     setDataCount({...dataCount, count: dataCount.min})
    // }
    const reset = () => {
        dispatch(resetAC())
    }


// const onChangeInputHandler = (val: string, k: keyof DataCountType) => {
//     setDataCount((dc) => {
//         return {
//             ...dc,
//             [k]: +val
//         }
//     })
// }

    const maxHandler = (value: string) => {
        dispatch(setMaxCounterAC(+value))
    }
    const minHandler = (value: string) => {
        dispatch(setMinCounterAC(+value))
    }




    return (
        <>
            <StyledCounter>
                <CounterBox >
                    {/*<InputForm */}
                    {/*        title={'max value '} */}
                    {/*        value={dataCount.max} */}
                    {/*        disabled={dataCount.max <= dataCount.min || dataCount.max > 10} */}
                    {/*        callback={(val: string) => onChangeInputHandler(val, 'max')} */}
                    {/*/>*/}
                    <InputForm
                        title={'max value '}
                        value={dataCount.max}
                        disabled={dataCount.max <= dataCount.min || dataCount.max > 10}
                        callback={maxHandler}
                    />
                    <InputForm
                        title={'start value  '}
                        value={dataCount.min}
                        disabled={dataCount.min >= dataCount.max || dataCount.min < 0}
                        callback={minHandler}

                    />
                </CounterBox>
                <Box>
                    <Button name="set" callback={reset} disabled={dataCount.max <= dataCount.min}/>
                </Box>
            </StyledCounter>
            <StyledCounter>
                <CounterBox>
                    {dataCount.min >= dataCount.max
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