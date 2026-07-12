function loadData()
{
    var name=document.getElementById("confirm_name")
    var age=document.getElementById("confirm_age")
    var email=document.getElementById("confirm_email")
    var phone=document.getElementById("confirm_phone")
    var occupation = document.getElementById("confirm_occupation")


    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
    age.textContent=sessionStorage.age;
    email.textContent=sessionStorage.email;
    phone.textContent=sessionStorage.phone;
    occupation.textContent=sessionStorage.occupation;
}

function cancelButton()
{
    window.location ="ntd2.html";
}

function init(){
    loadData();
    var cancel = document.getElementById("cancel_button");
    cancel.onclick = cancelButton;
}

window.onload=init;