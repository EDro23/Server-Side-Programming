"use strict";

const getElement = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
    const numberButton = getElement("#submitNumbers");

    numberButton.addEventListener("click", async (evt) => {
        const number1 = parseInt(getElement("#number1").value);
        const number2 = parseInt(getElement("#number2").value);
        const number3 = parseInt(getElement("#number3").value);
        const number4 = parseInt(getElement("#number4").value);
        const number5 = parseInt(getElement("#number5").value);

        const numberList = [number1, number2, number3, number4, number5];

        const data = { "numbers" : numberList };
        const jsonString = JSON.stringify(data);
        console.log(jsonString);

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: jsonString
        }

        const response = await fetch("http://localhost:3000/api/ticket", options);
        const responseJSON = await response.json();

        const resultDiv = getElement("#result");

        const resultString = `You have ${responseJSON.matches} matches and you win $${responseJSON.prize}`;
        resultDiv.textContent = resultString;
    })
});