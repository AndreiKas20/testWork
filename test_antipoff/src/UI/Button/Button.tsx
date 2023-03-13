import React, {FormEvent, useEffect, useState} from 'react';
import {styleBtn} from "../../../types/btnTypes";
import {nameIcon} from "../../../types/iconsTypes";
import styles from './button.module.css'
import {Icon} from "../Icon";

interface IButton {
    textBtn: string
    style: styleBtn
    click: (event: FormEvent) => void
    icon: nameIcon
    disable?: boolean
    arrow?:boolean
}

export default React.memo(function Button(props: IButton) {
    const [isIcon, setIsIcon] = useState(false)
    useEffect(() => {
        if (props.icon === 'none') {
            setIsIcon(false)
        } else {
            setIsIcon(true)
        }
    }, [props.icon])
    return (
        <>
            {
                isIcon &&
                <button style={props.style} className={styles.btn}  onClick={props.click}><Icon nameIcon={props.icon}/></button>
            }
            {
                !isIcon &&
                <button disabled={props.disable} className={styles.btn} onClick={props.click} style={props.style}>{props.textBtn}{props.arrow && <span className={styles.arrow}/>}</button>
            }
        </>
    );
})
