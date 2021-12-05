
// ==== find positive or, Negative value using if, else condition =====

var num = 10;

if (num > 0) {
    console.log("Positive")
}
else {
    console.log("Negative")
}

// ==== find positive or, Negative value using ternery Operator ====

var num2 = -10;

var result2 = num2 > 0 ? "Positive" : "Negative";
console.log(result2)


// ======= for 3 condition ======== 

var num1 = 0;

if (num1 > 0) {
    console.log("Positive")
}
else if (num1 == 0) {
    console.log("Zero")
}
else {
    console.log("Negative")
}

var num3 = 0;

var result3 = num3 > 0 ? "Positive" : num3 < 0 ? "Negative" : "Zero";
console.log(result3)



