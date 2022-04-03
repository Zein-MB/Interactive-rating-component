let grades = document.querySelectorAll('.grade span');
let btn = document.querySelector('button')
let rateState = document.querySelector('.rate-state')
let thankState = document.querySelector('.thank-state')

grades.forEach((el) => {
    el.addEventListener('click', (span) => {
        grades.forEach((el) => {
            el.classList.remove('selected')
        })
        span.currentTarget.classList.add('selected')
        window.localStorage.setItem('Rate', span.currentTarget.dataset.num)

        if (el.classList.contains('selected')) {
            btn.onclick = function () {
                rateState.style.display = 'none';
                thankState.style.display = 'block';
            }
        }

        let rateNum = document.getElementById('rateNum');
        rateNum.textContent = window.localStorage.getItem('Rate')
    })
})

window.onload = function () {
    window.localStorage.clear()
}

window.onclose = function () {
    window.localStorage.clear()
}