// const btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{

//     if(btn.innerText === "Show!"){
//         btn.innerText = "Hide!";
//     }else{
//         btn.innerText= "Red";
//     }
// });

function toggle_btn_img() {
  const btn = document.getElementById("btn");
  const avatar = document.getElementById("avatar");
  if (btn.innerText === "Show!") {
    btn.innerText = "Hide!";
    
    avatar.style.setProperty('display', 'inline', 'important');
  } else {
    btn.innerText = "Show!";
    avatar.style.display = "none";
  }
}
