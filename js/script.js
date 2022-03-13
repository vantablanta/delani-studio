
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
            form.reset()
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


var formInput = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)




