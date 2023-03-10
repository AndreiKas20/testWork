import React, {useCallback, useEffect, useState} from 'react';
import styles from './carditem.module.css';
import {userType} from "../../../../../types/usersType";
import {Img} from "../../../../UI/Img";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getFullCard} from "../../../../store/personCardReducer";

import {useLikes} from "../../../../hooks/useLikes";
import Button from "../../../../UI/Button/Button";

interface ICard {
    card: userType
}

export default React.memo(function CardItem({card}: ICard) {
    const dispatch: any = useDispatch()
    const [idState, setIdState] = useState(-1)
    const [isActive, setIsActive] = useState(false)
    const arrStateButtons = useLikes(isActive, idState)
    const [stateBtn] = arrStateButtons.filter(value => value.id === card.id)
    const likeChange = useCallback(() => {
        setIdState(card.id)
        setIsActive(!isActive)
    },[card.id, isActive])
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
                        icon={stateBtn?.isLike ? 'IconLikeOn' : 'IconLikeOff'} click={likeChange}/>
            </div>
        </li>
    );
})
