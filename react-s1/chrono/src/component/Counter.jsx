import {useState, useEffect} from 'react';



const Counter = ({step = 1, binary = false, cyclique = false}) => {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [cycle, setCycle] = useState(0);

    const start = () => {
        const id = setInterval(() => {
            setCount((prevState) => prevState + step)
        }, 100)
        setIntervalId(id)
        setDisabled(true)
    }

    const stop = () => {
        if(intervalId !== null) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
        setDisabled(false)
    }

    const reset = () => {
        stop()
        setCount(0)
        setDisabled(false)
    }
    const base = (base = 10) => {
        return count.toString(base)
    }


    useEffect(() => {
        if (count >= 20) {
            reset()
            if (cyclique) {
                setCycle(cycle + 1)
            }
        }
    }, [count]);

    useEffect(() => {
        return () => {
            console.log('j ai démonter')
        }
    }, []);

    return (
        <>
            <div>Compteur: <span>{
                binary ?
                    base(2)
                    :
                    base()
            }</span></div>
            {
                cyclique && <div>Cycle: <span>{cycle}</span></div>
            }
            <div>
                <button disabled={disabled} onClick={start}>Start</button>
                <button disabled={!disabled} onClick={stop}>Stop</button>
                {
                    count !== 0 && <button onClick={reset}>Reset</button>
                }
            </div>
        </>
    )
}

export default Counter