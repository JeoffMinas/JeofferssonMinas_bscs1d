const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
    //Answer
let evens = "";
let odds = "";

for (let num of arr) {
  if (num % 2 === 0) {
    evens += num + "\n";
  } else {
    odds += num + "\n";
  }
}

console.log("EVEN NUMBERS:");
console.log(evens);
console.log("ODD NUMBERS:");
console.log(odds);
