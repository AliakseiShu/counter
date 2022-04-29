import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../Counter/Counter.module.css";
import {Counter} from "./Counter";
import {Setting} from "./Setting";

export const CounterContainer = () => {
    let [counter, setCounter] = useState(0)

    let [valueInputMax, setValueInputMax] = useState(0)

    let [valueInputStart, setValueInputStart] = useState(0)

    let [edit, setEdit] = useState<null | string>(null)

    const inc = () => {
        return counter < valueInputMax ? setCounter(counter + 1) : counter
    }
    const reset = () => {
        debugger
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
                <Setting
                    onChangeHandlerMax={onChangeHandlerMax}
                    onChangeHandlerStart={onChangeHandlerStart}
                    valueInputMax={valueInputMax}
                    valueInputStart={valueInputStart}
                    set={set}
                />
            </div>

            <div className={s.counter}>
                <Counter
                    inc={inc}
                    reset={reset}
                    valueInputMax={valueInputMax}
                    counter={counter}
                    edit={edit}
                    valueInputStart={valueInputStart}
                />
            </div>

        </div>
    );
}
