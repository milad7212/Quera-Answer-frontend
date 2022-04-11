var n = parseInt(readline()) ;
let rows=Array.apply(null, Array(n)).map(function (x, i) { return []; })

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        rows[i-1].push(i*j)
    }
}
rows.map((el,ind)=>{
    console.log(el.join(' ')
})