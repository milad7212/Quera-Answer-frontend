var arr = [
    "Alborz",
    "Ardabil",
    "Bushehr",
    "Chaharmahal and Bakhtiari",
    "East Azerbaijan",
    "Isfahan",
    "Fars",
    "Gilan",
    "Golestan",
    "Hamadan",
    "Hormozgan",
    "Ilam",
    "Kerman",
    "Kermanshah",
    "Khuzestan",
    "Kohgiluyeh and Boyer-Ahmad",
    "Kurdistan",
    "Lorestan",
    "Markazi",
    "Mazandaran",
    "North Khorasan",
    "Qazvin",
    "Qom",
    "Razavi Khorasan",
    "Semnan",
    "Sistan and Baluchestan",
    "South Khorasan",
    "Tehran",
    "West Azerbaijan",
    "Yazd",
    "Zanjan"
];
// ...

let inputEl = document.getElementById('myInput')

let parentAuto = document.querySelector('.autocomplete')
let body = document.querySelector('.container')

inputEl.onkeyup = handelChange;

function handelChange(e) {

    if (e.target.value == '') {
        parentAuto.innerHTML = ''
        return
    }
    parentAuto.innerHTML = ''
    let filterArr = arr.filter((el) => el.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    if (filterArr.length == 0) {
        let errorInvalid = `<div class='not-found'>Not Found!</div>`;
        parentAuto.innerHTML = errorInvalid;
        return
    }
    filterArr.map((element) => {
        let newSpan = document.createElement("div");
        newSpan.className = 'item'
        newSpan.addEventListener('click', function handelClickItem(event) {
            event.stopPropagation()
            inputEl.value = element
        })
        parentAuto.appendChild(newSpan);
        newSpan.innerHTML = element;
    })


}

document.body.addEventListener('click', () => {
    parentAuto.innerHTML = ''
});