const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


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
};

convertBtn.addEventListener("click", numberInput);

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberInput();
    }
  });
