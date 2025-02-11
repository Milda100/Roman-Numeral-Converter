const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



//contains a Roman numeral symbol and its corresponding value ("array pairs") (pair array of arrays)

const pairArr = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

const numberToRoman = (num) => {
    let result = "";
    const functionName = (array) => {
    while (num >= array[1]) {
        result += array[0];
        num -= array[1];
        }
    };
    pairArr.forEach(functionName);
    return result;
};

const numberInput = () => {
    const numberInt = parseInt(number.value);
   
    if (numberInt <= 0) {
        output.innerText = `Please enter a number greater than or equal to 1`;
        return;
    } 

    if (numberInt >= 4000) {
        output.innerText = `Please enter a number less than or equal to 3999`;
        return;
    }

    if (!number.value) {
        output.innerText = `Please enter a valid number`;
        return;
    }
    output.innerText = numberToRoman(numberInt);
};

convertBtn.addEventListener("click", numberInput);

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberInput();
    }
  });
