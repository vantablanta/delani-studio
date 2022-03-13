
let btn = document.getElementById("btn")
let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
let userMessage = document.getElementById("message")
let form  = document.querySelector("form")
let warning = document.querySelector(".warning")
let success = document.querySelector(".success")
let a = document.createElement('a');
let link;




btn.addEventListener('click', function(e){
    e.preventDefault()
    // verify inputs arent blanks 
    let person = userName.value
    let email = userEmail.value
    let message = userMessage.value   

    if (person == "" || email == "" || message == ""){
        form.classList.add('form-hidden')
        warning.classList.remove('warning')
        warning.classList.add('warning-popup')
        link = document.createTextNode("Please Try Again")
        a.appendChild(link);
        a.href = "#contact-us";
        a.classList.add("link-style")
        warning.appendChild(a);
        a.addEventListener('click', function(e){
            e.preventDefault()
            form.classList.remove("form-hidden")
            warning.classList.add("warning")
            warning.classList.remove("warning-popup")
            
        })
    }else{
        form.classList.add('form-hidden')
        success.classList.add("success-popup")
        success.textContent= `Thank you  ${person}  for reaching out to us. We will get back to you through this email: ${email} `
        link = document.createTextNode("Back Home")
        a.appendChild(link);
        a.href = "./index.html";
        a.classList.add("link-style")
        success.appendChild(a);
    }
    form.reset()
})




