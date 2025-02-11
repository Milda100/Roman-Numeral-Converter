const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const numberInput = () => {
    if (!number.value) {
        output.innerText = `Please enter a valid number`;
    }
};

convertBtn.addEventListener("click", numberInput);

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberInput();
    }
  });
