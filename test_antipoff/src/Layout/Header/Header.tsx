import React from 'react';
import styles from './header.module.css';
import {Button} from "../../UI/Button";

interface IHeader {
    title: string
    text: string
}

export function Header(props: IHeader) {
    return (
        <header className={styles.block}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.btnPosition}><Button click={() => {
            }} style={{
                backgroundColor: 'var(--violet89)',
                color: 'var(--greyLightF8)',
                borderRadius: '8px',
                border: '1px solid var(--greyLightF8)',
                padding: '8px 16px'
            }} textBtn={'Выход'}/></div>
        </header>
    );
}
