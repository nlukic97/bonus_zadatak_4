document.getElementById('email-submit').addEventListener('click',function(){
    let email = document.getElementById('email').value
    console.log(email);

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(email.match(re) === null){
        console.log('not email');
    } else {
        submit(email)
        document.getElementById('email').value = ''
    }
})

function submit(email){
    let data = {email:email}
    // submit this data somewhere
    console.log('Submitting data',data);
}

function showError(){
    //display the background question mark, and the error text underneath
}