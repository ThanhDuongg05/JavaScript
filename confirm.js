function loadDataAndCalculatePrice()
{
    totalPrice=0;
    var name=document.getElementById("confirm_name")
    var age=document.getElementById("confirm_age")
    var email=document.getElementById("confirm_email")
    var phone=document.getElementById("confirm_phone")
    var occupation = document.getElementById("confirm_occupation")
    var courses = document.getElementById("confirm_courses")
    var payment =document.getElementById("confirm_payment")
    var total = document.getElementById("confirm_total")

    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
    age.textContent=sessionStorage.age;
    email.textContent=sessionStorage.email;
    phone.textContent=sessionStorage.phone;
    occupation.textContent=sessionStorage.occupation;

    // boi vi la kieu khai bao string nen la khi kiem tra thi true/ false bo vao " ";
    var yourCourses=" ";
    if(sessionStorage.logic == "true"){
        totalPrice+=449;
        yourCourses +="logic, ";
    }
    if(sessionStorage.python == "true"){
        totalPrice+=749;
        yourCourses +="python, ";
    }
    if(sessionStorage.web == "true"){
        totalPrice+=799;
        yourCourses +="web, ";
    }
    if(sessionStorage.game == "true"){
        totalPrice+=149;
        yourCourses +="game, ";
    }
    // cong thuc giam 1 o trong ham string
    yourCourses=yourCourses.substring(0,yourCourses.length - 1);
    courses.textContent=yourCourses;

    payment.textContent=sessionStorage.payment;
    total.textContent=totalPrice;

}


function cancelButton()
{
    window.location ="ntd2.html";
}

function init(){
    loadDataAndCalculatePrice();
    var cancel = document.getElementById("cancel_button");
    cancel.onclick = cancelButton;
}

window.onload=init;