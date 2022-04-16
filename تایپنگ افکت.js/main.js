let btnType = document.getElementById("test-typing");
let btnEras = document.getElementById("test-erasing");
let text = document.getElementById("user-caption");
let span = document.getElementById("caption");

btnType.onclick = () => {
    let i = 0;
    if (text.value == "") {
        let messeg = "typing test!";
        let i = 0;

        function typeWr() {
            if (i < messeg.length) {
                span.innerHTML += messeg.charAt(i);
                i++;
                setTimeout(typeWr, 30);
            }
        }
        typeWr();

        return;
    }
    span.innerHTML = "";

    function typeWriter() {
        if (i < text.value.length) {
            span.innerHTML += text.value.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    typeWriter();
};

btnEras.onclick = () => {
    if (text.value == "") {
        span.innerHTML = "erasing test!";
    }
};