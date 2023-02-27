import React, {FormEvent, useEffect, useState} from 'react';
import styles from './authorization.module.css';
import {Button} from "../../UI/Button";
import {useDispatch} from "react-redux";
import {getToken} from "../../store/tokenReducer";

export function Authorization() {
    const [textName, setTextName] = useState('')
    const [textMail, setTextMail] = useState('')
    const [textPass, setTextPass] = useState('')
    const [textDPuss, setTextDPuss] = useState('')
    const [touchedName, setTouchedName] = useState(false)
    const [touchedMail, setTouchedMail] = useState(false)
    const [touchedPas, setTouchedPas] = useState(false)
    const [touchedPasD, setTouchedPasD] = useState(false)
    const [nameFail, setNameFail] = useState(false)
    const [mailFail, setMailFail] = useState(false)
    const [passFail, setPassFail] = useState(false)
    const [pasDFail, setPasDFail] = useState(false)
    const [isVisiblePass, setIsVisiblePas] = useState(false)
    const [isVisiblePassD, setIsVisiblePasD] = useState(false)
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const dispatch: any = useDispatch()
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedName(true)
        setTextName(e.target.value)
        if (e.target.value.length > 2 && /^[a-zA-Z0-9А-Яа-я]+$/.test(e.target.value)) {
            setNameFail(false)
        } else {
            setNameFail(true)
        }
    }
    const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedMail(true)
        setTextMail(e.target.value)
        if (e.target.value.length > 2 && /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(e.target.value)) {
            setMailFail(false)
        } else {
            setMailFail(true)
        }
    }
    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedPas(true)
        setTextPass(e.target.value)
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/.test(e.target.value)) {
            setPassFail(false)
        } else {
            setPassFail(true)
        }
    }
    const changeDPuss = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedPasD(true)
        setTextDPuss(e.target.value)
        if (e.target.value === textPass && e.target.value.length > 0) {
            setPasDFail(false)
        } else {
            setPasDFail(true)
        }
    }

    const click = (e: FormEvent) => {
        e.preventDefault()
        dispatch(getToken())
    }

    const visibleClick = (e: FormEvent) => {
        e.preventDefault()
        setIsVisiblePas(!isVisiblePass)
    }
    const visibleDClick = (e: FormEvent) => {
        e.preventDefault()
        setIsVisiblePasD(!isVisiblePassD)
    }
    useEffect(() => {
        if (touchedMail && touchedPas && touchedName && touchedPasD && !pasDFail && !passFail && !nameFail && !mailFail) {
            setIsBtnDisabled(false)
        } else {
            setIsBtnDisabled(true)
        }
    }, [touchedPasD, touchedName, touchedPas, touchedMail, nameFail, mailFail, passFail, pasDFail])

    return (
        <form className={styles.form}>
            <h2 className={styles.titleForm}>Регистрация</h2>
            <span className={styles.spanText}>Имя</span>
            <div className={styles.blockInput}>
                <input type={'name'} onBlur={e => changeName(e)}
                       style={nameFail ? {border: '1px solid var(--red61)'} : {}} onChange={e => changeName(e)}
                       value={textName} className={styles.input}/>
                {nameFail && <span className={styles.failText}>Ошибка в имени</span>}
            </div>
            <span className={styles.spanText}>Электронная почта</span>
            <div className={styles.blockInput}>
                <input type={"email"} onBlur={e => changeMail(e)}
                       style={mailFail ? {border: '1px solid var(--red61)'} : {}} onChange={e => changeMail(e)}
                       value={textMail} className={styles.input}/>
                {mailFail && <span className={styles.failText}>Ошибка в электронной почте</span>}
            </div>
            <span className={styles.spanText}>Пароль</span>
            <div className={styles.blockInput}>
                <input type={!isVisiblePass ? 'password' : 'text'} onBlur={e => changePass(e)}
                       style={passFail ? {border: '1px solid var(--red61)'} : {}} onChange={e => changePass(e)}
                       value={textPass} className={styles.input}/>
                <div className={styles.btnPositionOne}><Button textBtn={''} style={{}}
                                                               icon={isVisiblePass ? 'IconOpenEye' : 'IconCloseEye'}
                                                               click={visibleClick}/></div>
                {passFail && <span className={styles.failText}>Ошибка в пароле</span>}
            </div>
            <span className={styles.spanText}>Подтвердите пароль</span>
            <div className={styles.blockInput}>
                <input type={!isVisiblePassD ? 'password' : 'text'} onBlur={e => changeDPuss(e)}
                       style={pasDFail ? {border: '1px solid var(--red61)'} : {}} onChange={e => changeDPuss(e)}
                       value={textDPuss} className={styles.input}/>
                <div className={styles.btnPositionOne}><Button textBtn={''} style={{}}
                                                               icon={isVisiblePassD ? 'IconOpenEye' : 'IconCloseEye'}
                                                               click={visibleDClick}/></div>
                {pasDFail && <span className={styles.failText}>Пароли не совпадают</span>}
            </div>
            <Button disable={isBtnDisabled} icon={'none'} click={click} style={{
                backgroundColor: 'var(--violet89)',
                color: 'var(--fullWhite)',
                padding: '13px',
                borderRadius: '8px',
                border: 'none'
            }} textBtn={'Зарегестрироваться'}/>
        </form>
    );
}


