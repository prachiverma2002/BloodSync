const username = document.getElementById('un')
const password = document.getElementById('pw')
const errorElement = document.getElementById('error')
// var atposition=email.indexof("@");  
// var dotposition=email.lastIndexOf(".");  
form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Userame is required')
    }
    if (password.value == null) {
        messages.push('Password is required')
    }
    // else
    // {
    //   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    //   {  
    //     messages.push('Please enter a valid e-mail address \n atpostion:'+atposition+'\n dotposition:'+dotposition)   
    //   }  
    // }
})