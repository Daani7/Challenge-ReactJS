import Counter from "./Counter";

const Chrono = () => {
    return (
        <div>
            <h1>Double Counter</h1>
            <Counter increment={1} label="Counter 1" />
            <Counter increment={2} label="Counter 2" />
        </div>
    );
};

export default Chrono;
