import Counter from "./Counter";

const Chrono = () => {
    return (
        <div>
            <h1>Double Compteurs</h1>
            <Counter increment={1} label="Compteur 1" />
            <Counter increment={2} label="Compteur 2" />
        </div>
    );
};

export default Chrono;
