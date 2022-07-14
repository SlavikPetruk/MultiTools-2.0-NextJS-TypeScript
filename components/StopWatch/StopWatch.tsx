import {FC, useState} from 'react'
import Btns from './Btns'
import Display from './Display'
import styles from '../../styles/StopWatch.module.scss'

export type TimeType = {
    h:number
    m:number
    s:number
    ms:number
}

const StopWatch:FC = () => {
    
    const [time, setTime] = useState<TimeType>({ms:0, s:0, m:0, h:0}) 
    const [intervl, setIntervl] = useState<NodeJS.Timer>()
    const [status, setStatus] = useState(0)
 
    const start = () => {
        run()
        setIntervl(setInterval(run, 10))
        setStatus(1)
    }

    const stop = () => {
        if (intervl)  clearInterval(intervl)
        setStatus(2)
    }

    const reset = () => {
        if (intervl)  clearInterval(intervl)
        setTime({ms:0, s:0, m:0, h:0})
        setStatus(0)
    }


    let updateMs = time.ms
    let updateS = time.s
    let updateM = time.m
    let updateH = time.h

    const run = () => {
        if (updateM === 60) {
            updateH++
            updateM = 0
        }
        if (updateS === 60) {
            updateM++
            updateS = 0
        }
        if (updateMs === 100) {
            updateS++
            updateMs = 0
        }
        updateMs++
        return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
    }

    return (
            <div className={styles.clock_holder}>
                <h1>StopWatch</h1>
                <div className={styles.stopwatch}>
                
                    <Display  
                        time={time}/>
                    
                    <Btns 
                        stop={stop} 
                        reset={reset} 
                        status={status} 
                        start={start}/>                    
                </div>
            </div>
    )
}

export default StopWatch
