import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Header} from "./Header";
import {PersonsList} from "./PersonsList";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../store/usersReducer";
import {usersArrType} from "../../types/usersType";

export function Layout() {
    const dispatch: any = useDispatch()
    const [isLoaded, setIsLoaded] = useState(true)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    // @ts-ignore
    const arrUsers: usersArrType = useSelector(state => state.usersReducer.users?.data)
    useEffect(() => {
        if (arrUsers === undefined) {
            console.log('undef')
            setIsLoaded(true)
        } else {
            console.log('NON undef')
            setIsLoaded(false)
        }
        console.log('arruser',arrUsers)
    }, [arrUsers])
    return (
        <div>
            <Header title={'Наша команда'}
                    text={'Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. '}/>

            {
                !isLoaded &&
                <PersonsList arrPersons={arrUsers}/>
            }
        </div>
    );
}
