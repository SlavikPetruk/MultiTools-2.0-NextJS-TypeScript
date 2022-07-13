import { FC } from 'react'
import styles from '../../styles/StopWatch.module.scss'


const Display: FC<any> = ({time}) => {
    return (
        <div className={styles.watch__display}>
            <h1 className={styles.h__h1}>
            <span>{(time.h >= 0) ? time.h : "0" + time.h} :</span>
            <span>{(time.m  >= 0) ? time.m : "0" + time.m} :</span>
            <span>{(time.s  >= 0) ? time.s : "0" + time.s} :</span>
            <span>{(time.ms  >= 0) ? time.ms : "0" + time.ms}</span>
        </h1>
        </div>
    )
}

export default Display
