const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progress = document.querySelector('#progress')
const circles = document.querySelectorAll('.circle')

let curSelectedValue = 1

prevBtn.addEventListener('click',e => {
    curSelectedValue--

    if(curSelectedValue < 1 ) curSelectedValue = 1

    update()
})

nextBtn.addEventListener('click',e => {
    curSelectedValue++

    if(curSelectedValue > circles.length) curSelectedValue = circles.length

    update()
})

function update(){
    disableBtns()
    circles.forEach((circle,idx) => {
        if(idx < curSelectedValue){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    progress.style.width = `${((curSelectedValue - 1) / (circles.length - 1)) * 100}%`
}

function disableBtns(){
    if(curSelectedValue > 0){
        prevBtn.disabled = false
    }
    else{
        prevBtn.disabled = true
    }

    if(curSelectedValue >= circles.length){
        nextBtn.disabled = true
    }
    else{
        nextBtn.disabled = false
    }
}

