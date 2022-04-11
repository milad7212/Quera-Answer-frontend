var n = readline();
let [n1, n2, n3] = n.split(" ");
let sum = +n1 + +n2 + +n3;
if (sum == 180 && n1 != 0 && n2 != 0 && n3 != 0) {
  console.log("Yes");
} else {
  console.log("No");
}
