const changeColor = (color) => {
  let x = document.getElementById("color_input").value;
  let colorPre = document.getElementById("color_preview");
  if (x.length <3 || x.length > 6 ||check(x)) {
    colorPre.style.backgroundColor = "black";
  } else {
    colorPre.style.backgroundColor = "#" + x;
  }
};

function check(value) {
  let obj = {
    g:1,
    h:1,
    i:1,
    j:1,
    k:1,
    l:1,
    m:1,
    n:1,
    o:1,
    p:1,
    q:1,
    r:1,
    s:1,
    t:1,
    u:1,
    v:1,
    w:1,
    x:1,
    y:1,
    z:1,
  };
  return obj[value.at(-1)]?true:false
  
}
