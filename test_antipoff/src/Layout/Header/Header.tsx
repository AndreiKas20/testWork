import React from 'react';
import styles from './header.module.css';
import {Button} from "../../UI/Button";

interface IHeader {
    title: string
    text: string
}

export function Header(props: IHeader) {
    const deleteToken = () => {
        localStorage.token = JSON.stringify('')
        console.log('token')
    }
    return (
        <header className={styles.block}>
            <h1 onClick={deleteToken} className={styles.title}>{props.title}</h1>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.btnPosition}><Button
                click={deleteToken}
                style={{
                    backgroundColor: 'var(--violet89)',
                    color: 'var(--greyLightF8)',
                    borderRadius: '8px',
                    border: '1px solid var(--greyLightF8)',
                    padding: '8px 16px'
                }} textBtn={'Выход'}/></div>
        </header>
    );
}
