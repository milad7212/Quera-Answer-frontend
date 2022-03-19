var n = parseInt(readline());

let ans = 0;
for (let i = 1; 2 ** i < n; ++i) {
  ans = i;
}
console.log(2 ** (ans + 1));
