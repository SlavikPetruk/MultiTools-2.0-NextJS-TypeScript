import React from 'react'
import styles from '../../styles/StopWatch.module.scss'


type Props = {
    start: () => void,
    status: number,
    stop:() => void,
    reset:() => void,
}

const Btns: React.FC<Props> = ({start, status, stop, reset}) => {
    return (
        <div>
            { ( status === 0 ) ?
                <>
                    <button 
                        className={`${styles.stopwatch__btn} ${styles.stopwatch__btn_gre}`}
                        onClick={start}
                    > Start </button>           
                </>
            :
                null
            }

            { ( status === 1 ) ?
            <> 
                <button 
                    className={`${styles.stopwatch__btn} ${styles.stopwatch__btn_red}`}
                    onClick={stop}
                > Stop </button>
                <button 
                    className={`${styles.stopwatch__btn} ${styles.stopwatch__btn_yel}`}
                    onClick={reset}
                > Reset </button>
            </>
            :
                null
            }

            { ( status === 2 ) ?
            <> 
                <button 
                    className={`${styles.stopwatch__btn} ${styles.stopwatch__btn_red}`}
                    onClick={start}
                > Resume </button>
                <button 
                    className={`${styles.stopwatch__btn} ${styles.stopwatch__btn_yel}`}
                    onClick={reset}
                > Reset </button>
            </>
            :
                null
            }
            
        </div>
    )
}

export default Btns
