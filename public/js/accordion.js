document.querySelectorAll('.questions .question-component .clickable-container').forEach(question=>{
    
    //listener for click on question
    question.addEventListener('click',()=>{
        let element = question.closest('.question-component')
        toggleVisibility(element)
    })
})



const toggleVisibility = (el) =>{
    let answerDiv = el.querySelector('.answer')
    
    if (answerDiv.style.maxHeight) {
        el.classList.remove('active');
        answerDiv.style.maxHeight = null;
    } else {
        el.classList.add('active');
        answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
    } 
}