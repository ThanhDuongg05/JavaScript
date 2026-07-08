function init(){
    var html_btn = document.getElementById("btn");
    html_btn.onclick=convert_button_click;

    var h2_click= document.getElementById("click_h2");
    h2_click.onclick=h2_click;

    var all_h3=document.getElementsByTagName("h3");
    var i=0;
    while (i<all_h3.length)//ko bik gia tri h3 co bao nhiu thi dung them .length
    {
        all_h3[i].onclick=all_h3_click;
        i++;
    }
}
function all_h3_click()
{
    var h3_content=document.getElementById("h3_content");
    h3_content.innerHTML="<h2>You click on of the h3 Element </h2>";
}
function h2_click()
{
    var h2_content = document.getElementById("messeage_h2");
    h2_content.textContent="you clicked h2 !!!";
}
function convert_button_click()
{
    var usd=prompt("Enter USD:");
    var vnd=usd*25;
    print_conversion(usd,vnd);
}
function print_conversion(usd,vnd)
{
    var html_messeage = document.getElementById("messeage");
    html_messeage.textContent= "You enter: " + usd + "(USD) , this is coverted to VND:" + vnd + "k";
}

window.onload = init;