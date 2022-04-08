var n = parseInt(readline());

if(n%2 ==0){
    
            console.log('fard')
       
    
}else{
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log('zoj')
            break;
        }
    }
    
}