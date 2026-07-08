//ham tinh tuoi (lay nam sinh)
function caculateAge(yearBorn){
    var currentTime =new Date(); // nam hien tai
    var currentYear = currentTime.getFullYear(); 
    //Trích xuất và trả về đúng chữ số của năm (ví dụ: 2026) từ đối tượng thời gian vừa tạo, sau đó lưu vào biến currentYear
    return currentYear - yearBorn
}

var name= prompt("Enter your name: ");

//tinh nam sinh
var yearBorn=prompt("Nhap nam sinh cua ban: ");

var age;
age=caculateAge(yearBorn);
console.log(name + " is " + age + " years old ");

var messeage = "";
if(age < 18)
{
    messeage += "You are ";
    var i=0;
    while(i<5){
        messeage += "very ";
        i++;
    }
    messeage +="young";

    if (age>=5 && age<=10)
    {
        messeage = " you are a kid";
    }
}else if(age<50)
{
    messeage = ("you are quite young");
}else{
    messeage = ("you are over 50 years old");
}

console.log(messeage);

var gender = prompt ("Are you male or female ? (male/female)");
switch(gender){
    case "male":
        console.log("you are a man");
        break;
    case "female":
        console.log("you are a woman");
        break;
    default:
        console.log("Wrong gender input, undefine");
}

var isClose= confirm("Do you want to close current tap");
//cach dat ten dang boolen la ten_ten trong Python;

messeage= "";
if(isClose === true)
{
    for(i=0;i<10;i++)
    {
        messeage +=(" bye ");
    }
}else{
    messeage=("thank you for staying with me");
}

console.log(messeage);