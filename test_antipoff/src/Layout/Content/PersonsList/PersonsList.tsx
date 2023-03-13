import React, {useEffect, useState} from 'react';
import styles from './personslist.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../store/usersReducer";
import CardItem from "./CardItem/CardItem";
import Button from "../../../UI/Button/Button";
import {usersArrType} from "../../../../types/usersType";


export default React.memo(function PersonsList() {
    // @ts-ignore
    const arrUsers = useSelector(state => state.usersReducer.users)
    const [users, setUsers] = useState<usersArrType>([])
    const dispatch: any = useDispatch()
    const [disabled, setDisabled] = useState(false)
    const addUsers = () => {
        dispatch(getUsers(2))
        setDisabled(true)
    }
    useEffect(() => {
        setUsers(arrUsers)
        if (arrUsers.length === 12) {
            setDisabled(true)
        }
    },[arrUsers])

    return (
        <>
            <ul className={styles.list}>
                {
                    users.map(v => <CardItem key={v.id} card={v}/>)
                }
            </ul>

            <div className={styles.btnPosition}>
                <Button click={addUsers}
                        disable={disabled}
                        arrow={true}
                        icon={'none'} textBtn={'Показать еще'}
                        style={{
                            backgroundColor: "none",
                            border: '1px solid var(--black17)',
                            color: 'var(--black17)',
                            padding: '9px 48px 9px 16px',
                            borderRadius: '8px'
                        }}
                />
            </div>
        </>
    );
})
