//davaleba 1
function Snowflake(number) {
    if (isNaN(number) || number <= 0) {
        console.log("შეიყვანეთ დადებითი რიცხვი.");
        return;
    }
    let snowflakeSquare = "";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            snowflakeSquare += "* ";
        }
        snowflakeSquare += "\n";
    }
    console.log(snowflakeSquare);
}
let userNum = parseInt(prompt("შეიყვანეთ რიცხვი :"));
Snowflake(userNum);

//davaleba 2
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function showPrimes(limit) {
    if (limit < 2) {
        console.log(`არ არის მარტივი რიცხვები: ${limit}`);
        return;
    }
    console.log(`მარტივი რიცხვები ${limit}-მდე:`);
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
isPrime(10);
showPrimes(10);

//davaleba 3
let calculator = {
    read: function() {
        this.num1 = parseFloat(prompt("პირველი რიცხვი:"));
        this.num2 = parseFloat(prompt("მეორე რიცხვი:"));
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
};

//davaleba 4
let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep();

//davaleba 5
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    } else {
        return str;
    }
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

//davaleba 6
function sumInput() {
    let numbers = [];
    while (true) {
        let userInput = prompt("შეიყვანეთ რიცხვი:");
        if (userInput === null || userInput === "" || !isFinite(userInput)) {
            break;
        }
        numbers.push(Number(userInput));
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    alert(`ჯამი : ${sum}`);
    return sum;
}
sumInput();