import React, {useLayoutEffect, useState} from 'react';
import {Header} from "./Header";
import {PersonsList} from "./PersonsList";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../store/usersReducer";
import {Route, Routes} from "react-router";
import {PersonPage} from "./PersonPage";

export function Content() {
    const [isLoaded, setIsLoaded] = useState(true)
    const [target, setTarget] = useState(true)
    const [textCard, setTextCard] = useState('')
    const dispatch: any = useDispatch()

    // @ts-ignore
    const arrUsers = useSelector(state => state.usersReducer.users)
    // @ts-ignore
    const cardData = useSelector(state => state.personCardReducer.card)

    useLayoutEffect(() => {
        if (arrUsers) {
            setIsLoaded(false)
        }
        if (target) {
            dispatch(getUsersAction())
            setTarget(false)
        }
        if (cardData) {
            setTextCard(cardData.data.email)
        }
    }, [cardData])
    return (
        <div>
            <Routes>
                {
                    !isLoaded &&
                    <Route path={'/'} element={
                        <div>
                            <Header/>
                            <PersonsList arrPersons={arrUsers}/>
                        </div>}/>
                }
                <Route path={'card'} element={
                    <div>
                        <Header/>
                        <PersonPage mail={textCard}/>
                    </div>}/>
            </Routes>
        </div>
    );
}
