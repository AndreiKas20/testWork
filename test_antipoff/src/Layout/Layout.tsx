import React, { useLayoutEffect, useState} from 'react';
import {Content} from "./Content";
import {Authorization} from "./Authorization";
import {useGetToken} from "../hooks/useGetToken";
import {getUsers} from "../store/usersReducer";
import {useDispatch} from "react-redux";


export function Layout() {
    const [checkIn, setCheckIn] = useState(false)
    const token = useGetToken()
    const dispatch: any = useDispatch()
    useLayoutEffect(() => {
        if (token === 'QpwL5tke4Pnpja7X4') {
            setCheckIn(true)
            dispatch(getUsers(1))
        } else {
            setCheckIn(false)
        }
    }, [token])
    return (
        <div>
            {
                !checkIn &&
                <Authorization/>
            }
            {
                checkIn &&
                <Content/>
            }
        </div>
    );
}
