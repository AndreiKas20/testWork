import React, {useLayoutEffect, useState} from 'react';
import {Header} from "./Header";
import {PersonsList} from "./PersonsList";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import {PersonPage} from "./PersonPage";

export function Content() {
    const [target, setTarget] = useState(true)
    const [textCard, setTextCard] = useState('')
    // const dispatch: any = useDispatch()
    // @ts-ignore
    const cardData = useSelector(state => state.personCardReducer.card)

    useLayoutEffect(() => {
        if (target) {
            // dispatch(getUsersAction())
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
                    <Route path={'/'} element={
                        <div>
                            <Header/>
                            <PersonsList/>
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
