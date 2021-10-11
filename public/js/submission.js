document.getElementById('email-submit').addEventListener('click',function(){
        validate()
})

document.querySelector('input#email').addEventListener('keypress',function(e){
    if(e.key === 'Enter') {
        validate();
    }
})

// --- functions ---

function validate(){
    let email = document.getElementById('email').value
    if(email === ''){
        return false
    }

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let form = document.querySelector('.form')

    if(email.match(re) === null){
        showError(form)
    } else {
        hideError(form)
        submit(email)
        document.getElementById('email').value = ''
    }
}

function submit(email){
    let data = {email:email}
    // submit this data somewhere
    console.log('Data to submit:',data);
}

function showError(item){
    item.classList.add('error')
}

function hideError(item){
    item.classList.remove('error')
}