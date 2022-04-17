let btnType = document.getElementById("test-typing");
let btnEras = document.getElementById("test-erasing");
let text = document.getElementById("user-caption");
let span = document.getElementById("caption");

btnType.onclick = () => {
    let i = 0;
    if (text.value == "") {
        span.innerHTML = "";
        let messeg = "typing test!";
        let i = 0;
        let textWrit = setInterval(() => {
            if (i < messeg.length) {
                span.innerHTML += messeg.charAt(i);
                i++;
            } else {
                clearInterval(textWrit);
            }
        }, 30);

        return;
    }
    span.innerHTML = "";
    let textWrit = setInterval(() => {
        if (i < text.value.length) {
            span.innerHTML += text.value.charAt(i);
            i++;
        } else {
            clearInterval(textWrit);
        }
    }, 30);

    // function typeWriter() {
    //     if (i < text.value.length) {
    //         span.innerHTML += text.value.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 30);
    //     }
    // }
    // typeWriter();
};

btnEras.onclick = () => {
    if (span.innerText == "") {
        span.innerHTML = "erasing test!";
        let messeg = "erasing test!".split("");
        let textDel = setInterval(() => {
            if (messeg.length > 0) {
                messeg.pop();
                span.innerHTML = messeg.join("");
            } else {
                clearInterval(textDel);
            }
        }, 30);
        return
    }
    let textArr = span.innerText.split('')
    let textDel = setInterval(() => {
        if (textArr.length > 0) {
            textArr.pop();
            span.innerHTML = textArr.join("");
        } else {
            clearInterval(textDel);
        }
    }, 30);
};