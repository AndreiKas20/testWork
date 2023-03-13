import React, {useCallback, useEffect, useState} from 'react';
import styles from './header.module.css';

import {useDispatch, useSelector} from "react-redux";
import {changeTokenAction} from "../../../store/tokenReducer";
import {clearUsersAction} from "../../../store/usersReducer";
import {Img} from "../../../UI/Img";
import {nameIcon} from "../../../../types/iconsTypes";
import {useResize} from "../../../hooks/useResize";
import {getFullCard} from "../../../store/personCardReducer";
import Button from "../../../UI/Button/Button";

export function Header() {
    const [styleHeader, setStyleHeader] = useState({})
    const [styleText, setStyleText] = useState({})
    const [iconBtnExit, setIconBtnExit] = useState<nameIcon>('none')
    const [iconBtnBack, setIconBtnBack] = useState<nameIcon>('none')
    const [titleText, setTitleText] = useState('Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.')
    const [firstLastName, setFirsLastName] = useState('Наша команда')
    const [srcImg, setSrcImg] = useState('')
    const [isCard, setIsCard] = useState(false)
    const [target, setTarget] = useState(true)
    const screenWidth = useResize()
    const dispatch: any = useDispatch()
    // @ts-ignore
    const infoCard = useSelector(state => state.personCardReducer?.card?.data)
    const url = new URL(window.location.href)

    useEffect(() =>{
        if (url.pathname === '/card') {
            if (target) {
                dispatch(getFullCard(Number(url.search.slice(1))))
                setTarget(false)
            }
            setIsCard(true)
            setTitleText('Партнер')
            setFirsLastName(`${infoCard?.first_name} ${infoCard?.last_name}`)
            setSrcImg(`${infoCard?.avatar}`)
        } else {
            setIsCard(false)
            setTitleText('Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.')
            setFirsLastName('Наша команда')
            setSrcImg('https://yakovgo.gosuslugi.ru/netcat_files/257/2538/headshot.jpg')
        }
    },[url])
    const deleteToken = useCallback(() => {
        localStorage.token = JSON.stringify('')
        dispatch(changeTokenAction(''))
        dispatch(clearUsersAction())
    },[])
    const back = useCallback(() => {
        window.history.back()
    },[])
    useEffect(() => {
        if (screenWidth < 1030) {
            setStyleHeader({justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column-revers'})
            setStyleText({alignItems: 'center'})
            setIconBtnExit('IconExit')
            setIconBtnBack('IconBack')
        } else {
            setIconBtnExit('none')
            setIconBtnBack('none')
            setStyleHeader({justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'revert'})
            setStyleText({alignItems: 'flex-start'})
        }
    }, [screenWidth])
    return (
        <header style={ isCard? styleHeader: {} } className={styles.block}>
            {
                isCard &&
                <div className={styles.imgPosition}><Img src={srcImg} alt={'Фото сотрудника'} width={'187px'}
                                                         height={'187px'}></Img></div>
            }
            <div style={isCard? styleText : {} } className={styles.blockTextPosition}>
                <h1 className={styles.title}>{firstLastName}</h1>
                <p className={styles.text}>{titleText}</p>
            </div>
            <div className={styles.btnPosition}><Button
                click={deleteToken}
                style={{
                    backgroundColor: 'var(--violet89)',
                    color: 'var(--greyLightF8)',
                    borderRadius: '8px',
                    border: screenWidth < 1030?'': '1px solid var(--greyLightF8)',
                    padding: '8px 16px'
                }} textBtn={'Выход'} icon={iconBtnExit} /></div>
            {
                isCard &&
                <div className={styles.btnBackPosition}>
                    <Button icon={iconBtnBack} textBtn={'Назад'} style={{
                        backgroundColor: 'var(--violet89)',
                        color: 'var(--greyLightF8)',
                        borderRadius: '8px',
                        border: screenWidth < 1030?'': '1px solid var(--greyLightF8)',
                        padding: '8px 16px'
                    }}
                            click={back}
                    />
                </div>
            }
        </header>
    );
}
