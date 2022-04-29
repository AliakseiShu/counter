import React, {ChangeEvent} from 'react';
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import s from './Counter.module.css';

type SettingType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    valueInputMax: number
    valueInputStart: number
    set: () => void
   // disablesSet: boolean
}
export const Setting = (props: SettingType) => {
    const classRedMax = props.valueInputMax <= props.valueInputStart ? s.red : ' '
    const classRedStart = props.valueInputStart < 0 || props.valueInputStart >= props.valueInputMax ? s.red : ' '

    const titleMax = 'max value:'
    const titleStart = 'start value:'

    const disablesSet = props.valueInputStart < 0 || props.valueInputStart >= props.valueInputMax

    return (
        <div>
            <div className={s.inputTable}>
                <div className={s.input}>
                    <Input
                        title={titleMax}
                        onChangeHandler={props.onChangeHandlerMax}
                        value={props.valueInputMax}
                        classRed={classRedMax}
                    />
                </div>
                <div className={s.input}>
                    <Input
                        title={titleStart}
                        onChangeHandler={props.onChangeHandlerStart}
                        value={props.valueInputStart}
                        classRed={classRedStart}
                    />

                </div>
            </div>
            <div className={s.inputButton}>
                <Button
                    name={'set'}
                    callBack={props.set}
                    disabled={disablesSet}
                />
            </div>
        </div>

    );
}


