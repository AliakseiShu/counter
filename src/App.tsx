import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from './First.module.css';
import {SecondCounter} from './SecondCounter'
import {FirstCounter} from "./FirstCounter";

function App() {

    let [counter, setCounter] = useState(0)

    let [valueInputMax, setValueInputMax] = useState(0)
    let [valueInputStart, setValueInputStart] = useState(0)

    let [edit, setEdit] = useState<null | string>(null)

    const inc = () => {
        return counter < valueInputMax ? setCounter(counter + 1) : counter
    }
    const reset = () => {
        return counter > valueInputStart ? setCounter(counter = valueInputStart) : counter
    }

    useEffect(() => {
        let valueInputMaxAsString = localStorage.getItem('valueInputMax')
        let valueInputStartAsString = localStorage.getItem('valueInputStart')
        if (valueInputMaxAsString && valueInputStartAsString) {
            setValueInputMax(+valueInputMaxAsString)
            setValueInputStart(+valueInputStartAsString)
        }
    }, [])

    const set = () => {
        localStorage.setItem('valueInputMax', JSON.stringify(valueInputMax))
        localStorage.setItem('valueInputStart', JSON.stringify(valueInputStart))
        setCounter(valueInputStart)
        setEdit(null)
    }

    const disablesInc = valueInputMax === counter || valueInputStart >= valueInputMax || valueInputStart < 0
    const disablesSet = valueInputStart < 0 || valueInputStart >= valueInputMax
    const disablesReset = valueInputStart < 0 || valueInputStart >= valueInputMax


    const titleMax = 'max value:'
    const titleStart = 'start value:'

    const classRedMax = valueInputMax <= valueInputStart ? s.red : ' '
    const classRedStart = valueInputStart < 0 || valueInputStart >= valueInputMax ? s.red : ' '


    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        setValueInputMax(value)
        if (value <= valueInputStart) {
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        setValueInputStart(value)
        if (value < 0 || value >= valueInputMax) {
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }
    }

    return (
        <div className="App">
            <div className={s.firstCounter}>
                <FirstCounter
                    onChangeHandlerMax={onChangeHandlerMax}
                    onChangeHandlerStart={onChangeHandlerStart}
                    valueInputMax={valueInputMax}
                    valueInputStart={valueInputStart}
                    set={set}
                    titleMax={titleMax}
                    titleStart={titleStart}
                    classRedMax={classRedMax}
                    classRedStart={classRedStart}
                    disablesSet={disablesSet}
                />
            </div>

            <div className={s.counter}>
                <SecondCounter
                    inc={inc}
                    reset={reset}
                    valueInputMax={valueInputMax}
                    counter={counter}
                    edit={edit}
                    disablesReset={disablesReset}
                    disablesInc={disablesInc}
                />
            </div>

        </div>
    );
}

export default App;
