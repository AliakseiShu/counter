import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../Counter/Counter.module.css";
import {Counter} from "./Counter";
import {Setting} from "./Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";
import {
    editValueAC,
    increaseValueAC,
    resetStartValueAC,
    setMaxValueAC,
    setStartValueAC
} from "../BLL/counterReducer";

export const CounterContainer = () => {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const valueInputMax = useSelector<AppRootStateType, number>(state => state.counter.valueInputMax)
    const valueInputStart = useSelector<AppRootStateType, number>(state => state.counter.valueInputStart)
    const edit = useSelector<AppRootStateType, string>(state => state.counter.edit)
    const dispatch = useDispatch()
    const inc = () => {
        if (counter < valueInputMax) {
            dispatch(increaseValueAC())
        }
    }
    const reset = () => {
        if (counter > valueInputStart) {
            dispatch(resetStartValueAC())
        }
    }
    const set = () => {
        localStorage.setItem('valueInputMax', JSON.stringify(valueInputMax))
        localStorage.setItem('valueInputStart', JSON.stringify(valueInputStart))
        dispatch(resetStartValueAC())
        dispatch(editValueAC(''))
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(setMaxValueAC(value))
        if (value <= valueInputStart) {
            dispatch(editValueAC('Incorrect value'))
        } else {
            dispatch(editValueAC('Enter SET'))
        }
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(setStartValueAC(value))
        if (value < 0 || value >= valueInputMax) {
            dispatch(editValueAC('Incorrect value'))
        } else {
            dispatch(editValueAC('Enter SET'))
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
