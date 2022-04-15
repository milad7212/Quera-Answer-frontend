var num = parseInt(readline());
let digNum=[...num.toString()]

let sum= digNum.reduce((pre,now)=> +pre+ +now,0)
while(sum >=10){
    let digNum=[...sum.toString()]
    sum=digNum.reduce((pre,now)=> +pre+ +now,0)

}
console.log(sum)