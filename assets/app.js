"use strict";

const generator = () => {
    let verify = 0
    let code = ''
    while (code.length < 10) {
        const r = Math.floor(Math.random() * 10)
        verify += r * (10 - code.length)
        code += r
        if (code.length == 9) {
            const re = verify % 11
            if (re < 2) {
                code += re
            } else {
                code += 11 - re
            }

        }
    }
    return code
}
const setText = (element, text) => {
    element.innerHTML = Intl.NumberFormat('fa-IR', {
        useGrouping: false
    }).format(text)
    element.setAttribute('data-code', text);
}
const getNewCode = () => {
    const element = document.getElementById('code-melli');
    setText(element, generator())
}
document.addEventListener('copy', function (e) {
    const code = e.target.getAttribute('data-code')
    e.clipboardData.setData('text/plain', code);
    e.preventDefault();
});
document.addEventListener("DOMContentLoaded", function (event) {
    getNewCode()
});
