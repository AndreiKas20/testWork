import React, {useState} from 'react';
import styles from './personslist.module.css';
import {usersArrType} from "../../../../types/usersType";
import {CardItem} from "./CardItem";
import {generateRandomString} from "../../../utils/getRandomString";
import {Button} from "../../../UI/Button";
import {useDispatch} from "react-redux";
import {getUsers} from "../../../store/usersReducer";

interface IPersonList {
    arrPersons: usersArrType
}

export function PersonsList({arrPersons}: IPersonList) {
    const dispatch: any = useDispatch()
    const [disabled, setDisabled] = useState(false)
    // const [pageGet, setPageGet] = useState(2)
    const addUsers = () => {
        dispatch(getUsers(2))
        setDisabled(true)
        // setPageGet(prevState => prevState + 1)
    }

    return (
        <>
            <ul className={styles.list}>
                {
                    arrPersons.map(v => <CardItem key={generateRandomString()} card={v}/>)
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
}
