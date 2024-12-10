export function generateRandomArray() {
    const numbers = [];
    while (numbers.length < 20) {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}