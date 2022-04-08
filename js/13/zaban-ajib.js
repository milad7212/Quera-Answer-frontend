var n = parseInt(readline());
if (n == 100) {
  console.log(1);
} else {
  let a = Math.floor(n / 10);
  let b = Math.round(n % 10);
  console.log(a + b);
}
