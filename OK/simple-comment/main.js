document.addEventListener("DOMContentLoaded", (event) => {
    let ans = "";
    let element = document.querySelector('#likes')
        //the event occurred

    const call = async() => {
        ans = await fetch("./count.json");
        let dataFinal = await ans.text();
        let message = JSON.parse(dataFinal);

        console.log(message);
        element.innerHTML = message.count

    };
    call()
});