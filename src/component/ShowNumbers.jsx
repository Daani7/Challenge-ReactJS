import { generateRandomArray } from "../index";

const ShowNumbers = () => {

    const randomNumbers = generateRandomArray();

    return(

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {randomNumbers.map((num) => (
            <div
                key={num}
                style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
            >
                {num}
            </div>
        ))}
    </div>
    );
};

export default ShowNumbers;