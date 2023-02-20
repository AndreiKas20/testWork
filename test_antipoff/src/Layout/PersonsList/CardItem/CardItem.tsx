import React from 'react';
import styles from './carditem.module.css';
import {userType} from "../../../../types/usersType";
import {Img} from "../../../UI/Img";

interface ICard {
    card: userType
}

export function CardItem({card}: ICard) {
    return (
        <li className={styles.item}>
            <a>
                <Img alt={'Фото сотрудника'} src={card.avatar} width={'124px'} height={'124px'}/>
                <h4>{card.first_name} {card.last_name}</h4>
                <input type={"checkbox"}/>
            </a>
        </li>
    );
}
