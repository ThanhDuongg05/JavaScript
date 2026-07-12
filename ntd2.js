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

    var highschool =document.getElementById("highschool").checked;
    var  university =document.getElementById("university").checked;
    var  working =document.getElementById("working").checked;
    var  retired =document.getElementById("retired").checked;

    if(highschool==true){
        sessionStorage.occupation="highschool";
    }
    if(university==true){
        sessionStorage.occupation="university";
    }
    if(working==true){
        sessionStorage.occupation="working";
    }
    if(retired==true){
        sessionStorage.occupation="retired";
    }
        var logic = document.getElementById("course_logicmath").checked;
        var python = document.getElementById("course_python").checked;
        var web = document.getElementById("web").checked;
        var game = document.getElementById("game").checked;

        sessionStorage.logic = logic;
        sessionStorage.python = python;
        sessionStorage.web = web;
        sessionStorage.game = game;

        var payment=document.getElementById("payment");
        sessionStorage.payment=payment.value;
}
//ham ko xoa het du lieu
function prefillData(){
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value =sessionStorage.firstname;
        document.getElementById("lastname").value =sessionStorage.lastname;
        document.getElementById("email").value =sessionStorage.email;
        document.getElementById("phonenumber").value =sessionStorage.phone;
        document.getElementById("age").value =sessionStorage.age;
        
        
        //C1
        // if(sessionStorage.occupation=="highshcool"){
        //    sessionStorage.occupation= document.getElementById("highschool").value;
        // }
        // if(sessionStorage.occupation=="university"){
        //     sessionStorage.occupation=document.getElementById("university").value;
        // }
        // if(sessionStorage.occupation=="working"){
        //     sessionStorage.occupation=document.getElementById("working").value;
        // }
        // if(sessionStorage.occupation=="retired"){
        //     sessionStorage.occupation=document.getElementById("retired").value;
        // }

        //c2
        // switch (sessionStorage.occupation)
        // {
        //     case "highschool":
        //         document.getElementById("highschool").checked=true;
        //         break;
        //     case "university":
        //         document.getElementById("university").checked=true;
        //         break;
        //     case "working":
        //         document.getElementById("working").checked=true;
        //         break;
        //     case "retired":
        //         document.getElementById("retired").checked=true;
        //         break;
        var occupationArray=document.getElementById("radio_occupation").getElementsByTagName("input");
        //c3
        // var i=0;
        // while(i<occupationArray.length){
        //     if(occupationArray[i].checked == true){
        //         sessionStorage.occupation=occupationArray[i].value;
        //     }
        //     i+=1;
        // }
        // c4
        for(var i=0;i<occupationArray.length;i++)
        {
            if(occupationArray[i].checked==true)
            {
                sessionStorage.occupation=occupationArray[i].value;
            }
        }
        
        // checked xem co ton tai ko la null
        //khi dung sessionStorage thi kiem tra true phai bo vao ngoat ""
        if(sessionStorage.logic=="true"){
            document.getElementById("logic").checked=true;
        }
        if(sessionStorage.logic=="true"){
            document.getElementById("python").checked=true;
        }
        if(sessionStorage.logic=="true"){
            document.getElementById("web").checked=true;
        }
        if(sessionStorage.logic=="true"){
            document.getElementById("game").checked=true;
        }
        
        document.getElementById("payment").checked = sessionStorage.payment;
    }
}

function init(){
    // tao form dang ky
    var regForm = document.getElementById("ntd2");
    regForm.onsubmit=saveData;
    prefillData();
}

window.onload =init;