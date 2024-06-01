const name = document.getElementById('firstname')
const email = document.getElementById('email')
const mno = document.getElementById('mno')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
// var atposition=email.indexof("@");  
// var dotposition=email.lastIndexOf(".");  
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (email.value == null) {
        messages.push('email is required')
    }
    // else
    // {
    //   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    //   {  
    //     messages.push('Please enter a valid e-mail address \n atpostion:'+atposition+'\n dotposition:'+dotposition)   
    //   }  
    // }

    if (mno.value.length != 10) {
        messages.push('Mobile number must have 10 digits')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('\n')
    }
})