var [a, b, l] = readline().split(" ");
let sec = 0;
while (+l > 0) {
  if (l == 1) {
    sec += a;
    --l;
    break;
  } else {
      sec+=a;
      --l
  }
  sec+=b;
  --l
}
console.log(sec)