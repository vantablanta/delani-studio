
let btn = document.getElementById("btn")
let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
let userMessage = document.getElementById("message")


btn.addEventListener('click', function(e){
    e.preventDefault()
    // verify inputs arent blanks 
    userName.classList.add("bold")
    let person = userName.value
    let email = userEmail.value
    let message = userMessage.value   

    if (person == "" || email == "" || message == ""){
        alert ("You havent entered either your Name, Email, Address or Message. Please Try Again")
    }
    else{
        alert(`Thank you ${person} for reaching out to us. 
            We will get back to you through this email: \b ${email}`)
    }
})




