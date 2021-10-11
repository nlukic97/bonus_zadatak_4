let buttons = document.querySelectorAll('.slider-btn')

buttons.forEach((btn,index) => {
    btn.addEventListener('click',function(){
        toggleActiveSlide(index)
        toggleActiveBtn(btn)
    })
});

function toggleActiveSlide(index){
    let slides = document.querySelectorAll('.slide')
    slides.forEach(slide => {
        slide.classList.remove('visible')
    });
    
    slides[index].classList.add('visible');
}

function toggleActiveBtn(newActiveButton){
    document.querySelector('.slider-btn.active').classList.remove('active')
    newActiveButton.classList.add('active')
}