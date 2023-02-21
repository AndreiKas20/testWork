import React, {FormEvent, useEffect, useState} from 'react';
import {styleBtn} from "../../../types/btnTypes";
import {nameIcon} from "../../../types/iconsTypes";
import {Icon} from "../Icon";

interface IButton {
    textBtn: string
    style: styleBtn
    click: (event: FormEvent) => void
    icon: nameIcon
    disable?: boolean
}

export function Button(props: IButton) {
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
                <button style={props.style}  onClick={props.click}><Icon nameIcon={props.icon}/></button>
            }
            {
                !isIcon &&
                <button disabled={props.disable} onClick={props.click} style={props.style}>{props.textBtn}</button>
            }
        </>

    );
}
