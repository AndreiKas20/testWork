import React, {FormEvent} from 'react';
import styles from './button.module.css';
import {styleBtn} from "../../../types/btnTypes";

interface IButton {
    textBtn: string
    style: styleBtn
    click: (event: FormEvent) => void
}

export function Button(props: IButton) {
    return (
        <button onClick={props.click} style={props.style}>{props.textBtn}</button>
    );
}
