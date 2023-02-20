import React from 'react';
import styles from './img.module.css';

interface IImg {
    src: string
    width?: string
    height?: string
    alt: string
}

export function Img(props: IImg) {
    return (
        <img className={styles.img} alt={props.alt} src={props.src} style={{width: `${props.width}`, height: `${props.height}`}}></img>
    );
}
