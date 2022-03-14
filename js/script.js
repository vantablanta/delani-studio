
let btn = document.getElementById("btn")
let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
let userMessage = document.getElementById("message")
let warning = document.querySelector(".warning")
let success = document.querySelector(".success")
let link;



//submit event listenr 
let person = userName.value
let message = userMessage.value
let email = userEmail.value
let formInput = document.getElementById("form")
let verfiedEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let emailVerifiedResult = verfiedEmail.test(email)

// Form spree Post API input collection
async function handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("form");
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
            status.classList.add("success-popup")
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.classList.add("warning-popup")
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.classList.add("warning-popup")
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
    formInput.reset()

}
form.addEventListener("submit", handleSubmit)






