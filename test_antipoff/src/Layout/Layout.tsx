import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './layout.css';
import {Authorization} from "./Authorization";
import {Header} from "./Header";
import {PersonsList} from "./PersonsList";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../store/usersReducer";

export function Layout() {
    const dispatch: any = useDispatch()

    dispatch(getUsers())
    // @ts-ignore
    const arrUsers = useSelector(state => state.usersReducer)
    useEffect(() => {
        console.log('arruser',arrUsers)
    }, [])
    return (
        <div>
            <Header title={'Наша команда'}
                    text={'Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. '}/>
            <PersonsList/>
        </div>
    );
}
