var [a, b] = readline().split(" ");
let Direction = +b > 10 ? "Left" : "Right";
let row = 11 - +a;
let col = +b <= 10 ? +b : 21 - +b;
console.log(`${Direction} ${row} ${col}`)