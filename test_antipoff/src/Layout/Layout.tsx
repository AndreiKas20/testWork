import React, {useLayoutEffect, useState} from 'react';
import {Content} from "./Content";
import {Authorization} from "./Authorization";
import {useGetToken} from "../hooks/useGetToken";
import {getUsers} from "../store/usersReducer";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router";


export default React.memo(function Layout() {
    const [checkIn, setCheckIn] = useState(false)
    const token = useGetToken()
    const dispatch: any = useDispatch()
    useLayoutEffect(() => {
        if (token) {
            setCheckIn(true)
            dispatch(getUsers(1))
        } else {
            setCheckIn(false)
        }
    }, [token])
    return (
        <div style={!checkIn?{display:'flex', justifyContent: 'center'}:{}}>
            {
                !checkIn &&
                <Authorization/>
            }
            {
                checkIn &&
                <Routes>
                    <Route path={'*'} element={<Content/>}/>
                </Routes>

            }
        </div>
    );
})
