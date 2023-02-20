import React, {FormEvent, useEffect, useState} from 'react';
import styles from './authorization.module.css';
import {Button} from "../../UI/Button";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getToken} from "../../store/tokenReducer";

export function Authorization() {
    const [token, setToken] = useState('')
    const dispatch: any = useDispatch()
    const click = (e:FormEvent) => {
        e.preventDefault()
        dispatch(getToken())
    }
    return (
        <form className={styles.form}>
            <h2 className={styles.titleForm}>Регистрация</h2>
            <span className={styles.spanText}>Имя</span>
            <input className={styles.input}/>
            <span className={styles.spanText}>Электронная почта</span>
            <input className={styles.input}/>
            <span className={styles.spanText}>Пароль</span>
            <input className={styles.input}/>
            <span className={styles.spanText}>Подтвердите пароль</span>
            <input className={styles.input}/>
            <Button click={click}  style={{
                backgroundColor: 'var(--violet89)',
                color: 'var(--fullWhite)',
                padding: '13px',
                borderRadius: '8px',
                border: 'none'
            }} textBtn={'Зарегестрироваться'}/>
        </form>
    );
}


