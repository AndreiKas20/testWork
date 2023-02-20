import React from 'react';
import styles from './personslist.module.css';
import {usersArrType} from "../../../types/usersType";
import {CardItem} from "./CardItem";
import {generateRandomString} from "../../utils/getRandomString";

interface IPersonList {
    arrPersons: usersArrType
}

export function PersonsList({arrPersons}: IPersonList) {
    console.log('props', arrPersons)
    return (
        <ul className={styles.list}>
            {
                arrPersons.map(v => <CardItem key={generateRandomString()} card={v}/>)
            }
        </ul>
    );
}
