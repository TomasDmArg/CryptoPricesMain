import styles from './dist/utils.module.css'
import React from 'react'
import Link from 'next/link';
export const Title = ({children})=>{
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}
export const Text = ({children})=>{
    return (
        <p className={styles.text}>{children}</p>
    )
}
export const Button = ({children, link})=>{
    return (
        <Link href={link}>
            <a className={styles.button}>{children}</a>
        </Link>
    )
}