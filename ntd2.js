function saveData(){
    var firstname = document.getElementById("firstname").value;
    // kieu bam thi no duoc luu vao thi dung sessionStorage
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;
    var age = document.getElementById("age").value;
    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.email=email;
    sessionStorage.phone=phone;
    sessionStorage.age=age;
}

function init(){
    // tao form dang ky
    var regForm = document.getElementById("ntd2");
    regForm.onsubmit=saveData;
}

window.onload =init;