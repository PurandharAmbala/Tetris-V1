const Colors = {
    RED: 4,
    BLUE: 3,
    YELLOW: 2,
    GREEN: 1,
};

const randomColor = () => {
    const rand = Math.floor(Math.random() * Object.keys(Colors).length);
    const randColorValue = Colors[Object.keys(Colors)[rand]];
    return randColorValue;
}

export default Colors;
export {randomColor}
