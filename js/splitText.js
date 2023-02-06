function splitText(wrap) {
    wrap = document.querySelector(`${wrap}`);
    text = wrap.innerText

    wrap.innerHTML = null
    let str = `${text}`;
    let brExp = /\n/i;
    let arrElement = [];
    let arr = str.split(brExp)
    arr.forEach((item, i) => {
        item = item.split("");

        let a = item.map((item2, i) => {

            if (item2 == " ") {
                item2 = `<span class="blind"><span>\xa0</span></span>`
                return item2
            } else {
                item2 = `<span class="blind"><span>${item2}</span></span>`
                return item2
            }
        })
        arrElement.push(a)
    })
    let finalStr = arrElement.map((item) => {
        return item.join("")

    })

    wrap.innerHTML = finalStr.join("<br/>");
}