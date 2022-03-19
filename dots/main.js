



document.querySelector(".btn").addEventListener("click", () => {
  //Your Code
  
  let span =document.querySelector('.result')
  
  let word= document.querySelector(".input").value 
  let sum=0
  let wordArr=word.split('')
  wordArr.map((e,index)=>{
    if(e=='ی'){
     
      if(wordArr[index+1] && wordArr[index+1] !==''){

        sum+=2
    }
    }
    
    obj[e]? sum+=+obj[e] :sum+=0
})
  
  
  span.innerHTML=sum
  // const span = document.getElementsByClassName('result');
  // span.textContent=word

  
});
