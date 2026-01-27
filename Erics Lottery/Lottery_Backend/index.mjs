import express from "express";
import cors from "cors";


const winningValues = []
for( let i=0; i<5; i++) {
    let value = Math.random() * 15;
    value = parseInt(value)
    value += 1
    winningValues.push(value);
}
console.log(winningValues);

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/ticket", (request, response) => {
    let userNumbers = request.body.numbers;
    const numberMatches = calculateMatches(userNumbers);
    const prize = getPrize(numberMatches);
    response.json( {matches: numberMatches, prize})
});


const calculateMatches = (lotteryNumbers) => {
    //copy into new list the winning numbers
    let winningCopy = [];
    winningValues.forEach( (element, index) => {
        winningCopy.push(element)
    })

    let winningCount = 0
    lotteryNumbers.forEach( (element, index) => {
        if( winningCopy.includes(element)) {
            winningCount += 1;
            //remove the first instance of the number from winningCopy list
            let index = winningCopy.indexOf(element);
            winningCopy.splice(index, 1)
        }
    });
    return winningCount;
}

const getPrize = (numberMatches) => {
    let prize = 0;
    if( numberMatches == 0) {
        prize = 0;
    }
    if( numberMatches == 1) {
        prize = 5;
    }
    else if( numberMatches == 2) {
        prize = 10
    }
    else if( numberMatches == 3) {
        prize = 15
    }
    else if( numberMatches == 4) {
        prize = 100
    }
    else if( numberMatches == 5) {
        prize = 100000
    }
    else {
        console.log("Issue with winning count");
    }
    return prize
}

app.listen(3000, () => {
    console.log("server running on port 3000")
})
