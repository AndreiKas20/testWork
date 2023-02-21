import React, {useEffect, useState} from 'react';
import styles from './carditem.module.css';
import {userType} from "../../../../../types/usersType";
import {Img} from "../../../../UI/Img";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getFullCard} from "../../../../store/personCardReducer";
import {Button} from "../../../../UI/Button";

interface ICard {
    card: userType
}

export function CardItem({card}: ICard) {
    const dispatch: any = useDispatch()
    const [isActive, setIsActive] = useState(false)
    // const [arrLikes, setArrLikes] = useState([])
    const likeChange = () => {
        setIsActive(!isActive)
    }
    useEffect(() => {
        if (localStorage.likes === undefined) {
            localStorage.likes = JSON.stringify([])
        } else {
            if (JSON.parse(localStorage.likes).indexOf(card.id) === -1) {
                setIsActive(false)
            } else {
                setIsActive(true)
            }
        }
    }, [])

    const onClickCard = () => {
        dispatch(getFullCard(card.id))
    }
    return (
        <li className={styles.item}>
            <Link className={styles.content} to={`/card?${card.id}`} onClick={onClickCard}>
                <Img alt={'Фото сотрудника'} src={card.avatar} width={'124px'} height={'124px'}/>
                <h4>{card.first_name} {card.last_name}</h4>
            </Link>
            <div className={styles.positionBtn}>
                <Button textBtn={''} style={{backgroundColor: 'var(--greyLightF8)', padding: '8px', borderRadius: ''}}
                        icon={isActive ? 'IconLikeOn' : 'IconLikeOff'} click={likeChange}/>
            </div>
        </li>
    );
}
