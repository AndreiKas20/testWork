import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import PersonsList from "./PersonsList/PersonsList";
import PersonPage from "./PersonPage/PersonPage";

export function Content() {
    const [textCard, setTextCard] = useState('')
    // @ts-ignore
    const cardData = useSelector(state => state.personCardReducer.card)
    useEffect(() => {
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
