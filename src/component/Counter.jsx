import { useState, useRef } from "react";

const Counter = ({ increment, label }) => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startCounter = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setCount((prev) => {
                if (prev >= 20) {
                    clearInterval(intervalRef.current);
                    setIsRunning(false);
                    return prev;
                }
                return prev + increment;
            });
        }, 1000);
    };

    const stopCounter = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>{label}</h3>
            <p>Value: {count}</p>
            <button onClick={startCounter} disabled={isRunning}>
                Start
            </button>
            <button onClick={stopCounter} disabled={!isRunning}>
                Stop
            </button>
        </div>
    );
};

export default Counter;