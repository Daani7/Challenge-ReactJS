import { useState, useRef, useEffect } from "react";
import Start from "./Start";

const Counter = ({ increment, label }) => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const [cycle, setCycle] = useState(0);

    const startCounter = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setCount((prev) => prev + increment);
            }, 1000);
        }
    };

    //méthode à appeler uniquement si l'on ne veut pas faire de cycle
    const stopCounter = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const refreshCounter = () => {
        if (count > 20) {
            setCount(0);
            startCounter();
        }
    };

    const addCycle = () => {
        if (count >20) {
            setCycle (cycle + 1)
        }
    };

    useEffect(() => {
        if (count > 20) {
            refreshCounter();
            addCycle();
        }
    }, [count]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            <h3>{label}</h3>
            <h2>Cycle: {cycle} </h2>
            <p>Valeur: {count}</p>
            <Start fn={startCounter} text={"Start"} disabled={isRunning} />
            <Start fn={stopCounter} text={"Stop"} disabled={!isRunning}  />
        </div>
    );
};

export default Counter;
