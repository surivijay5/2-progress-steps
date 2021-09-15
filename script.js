const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progress = document.querySelector('#progress')
const circles = document.querySelectorAll('.circle')

function getCurrSelectedCircle(){
    return progress.dataset.id
}
prevBtn.addEventListener('click',e => {

})

nextBtn.addEventListener('click',e => {
    let curVal = parseInt(getCurrSelectedCircle())
    curVal ++
    if(curVal <= 4){
        circles[curVal - 1].classList.add('active')
        progress.style.width 
    }

})