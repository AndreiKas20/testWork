import React from 'react';
import {IconMail} from "../IconMail";
import {IconTel} from "../IconTel";
import {IconBack} from "../IconBack";
import {IconExit} from "../IconExit";
import {nameIcon} from "../../../types/iconsTypes";
import {IconCloseEye} from "../IconCloseEye";
import {IconOpenEye} from "../IconOpenEye";
import {IconLikeOff} from "../IconLikeOff";
import {IconLikeOn} from "../IconLikeOn";



interface IIcon {
    nameIcon: nameIcon
    width?: string
    height?: string
    noActive?: boolean
}

export function Icon({nameIcon, height, width, noActive}: IIcon) {
    if (nameIcon === 'IconMail') {
        return (
            <IconMail/>
        )
    }
    if (nameIcon === 'IconTel') {
        return (
            <IconTel/>
        )
    }
    if (nameIcon === 'IconBack') {
        return (
            <IconBack/>
        )
    }
    if (nameIcon === 'IconExit') {
        return (
            <IconExit/>
        )
    }
    if (nameIcon === 'IconCloseEye') {
        return (
            <IconCloseEye/>
        )
    }
    if (nameIcon === 'IconOpenEye') {
        return (
            <IconOpenEye/>
        )
    }
    if (nameIcon === 'IconLikeOff') {
        return (
            <IconLikeOff/>
        )
    }
    if (nameIcon === 'IconLikeOn') {
        return (
            <IconLikeOn/>
        )
    }
    return (
        <div></div>
    );
}
