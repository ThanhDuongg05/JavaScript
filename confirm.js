function init(){
    var name=document.getElementById("confirm_name")
    var age=document.getElementById("confirm_age")
    var email=document.getElementById("confirm_email")
    var phone=document.getElementById("confirm_phone")
    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname
    age.textContent=sessionStorage.age
    email.textContent=sessionStorage.email
    phone.textContent=sessionStorage.phone
}

window.onload=init;