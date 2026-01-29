"use strict"

const getElement = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const infoElement = document.querySelectorAll("p, h2, h1");

    infoElement.addEventListener("mouseover", async (evt) => {
        console.log("mouseover");
        const text = infoElement.textContent;
        console.log(text);


        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: text })
        }

        const res = await fetch("http://localhost:3000/api/encrypt", options)

        const json = await res.json();

        console.log(json);

        infoElement.textContent = json.encrypted
    })
});