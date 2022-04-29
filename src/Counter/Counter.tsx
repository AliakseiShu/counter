import React from 'react';
import s from "../Counter/Counter.module.css";
import Button from "../Button/Button";

type CounterDisplayType = {
    counter: number
    maxValue: number
    edit:string | null
}

type CounterType = {
    inc: () => void
    reset: () => void
    valueInputMax: number
    valueInputStart: number
    counter: number
    edit: string | null
}
export const Counter = (props:CounterType) => {



const CounterDisplay = (props: CounterDisplayType) => {
        let result = props.edit === 'Incorrect value' ? s.errorMessage : s.normalMessage
        let resultColor = props.counter === props.maxValue ? s.maxOn : s.maxOff
        return (
            <div>
                {props.edit ? <div className={result}>{props.edit}</div> : <div className={resultColor}> {props.counter}</div>}
            </div>
        );
    }

    const disablesInc = props.valueInputMax === props.counter || props.valueInputStart >= props.valueInputMax || props.valueInputStart < 0
    const disablesReset = props.valueInputStart < 0 || props.valueInputStart >= props.valueInputMax


    return (

        <div>
            <div className={s.display}>
                <CounterDisplay
                    counter={props.counter}
                    maxValue={props.valueInputMax}
                    edit={props.edit}
                />
            </div>
            <div className={s.buttonTable}>
                <div>
                    <Button
                        name={'inc'}
                        callBack={props.inc}
                        disabled={disablesInc}
                    />
                </div>
                <div>
                    <Button
                        name={'reset'}
                        callBack={props.reset}
                        disabled={disablesReset}
                    />
                </div>
            </div>
        </div>

    );

}
