function splitText(wrap) {

    wrap = document.querySelectorAll(`${wrap}`);
    wrap.forEach((item, i) => {
        text = item.innerText

        item.innerHTML = null
        let str = `${text}`;
        let brExp = /\n/i;
        let arrElement = [];
        let arr = str.split(brExp)
        arr.forEach((item) => {
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

        item.innerHTML = finalStr.join("<br/>");
    })


}