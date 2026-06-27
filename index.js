//file chạy
//main.js
console.log("Toi la bac thay florentino");
let a=1,b=1;
let c=++a;
let d=b++;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
let n=50;
for(let i=0;i<n;i++){
    if(i%2===0){
        console.log(i,"La So chan be hon n");
    }
    else {
        console.log(i,"La so le be hon n");
    }
}
let kq=-1;//chua tim thay gia tri
for(let i=n-1;i>=1;i--)
{
    if(i%7==0)
    {
        kq=i;
    }
}
if(kq!==-1)
{
    console.log(kq,"La so chia het cho 7 nho hon n");
}
else{ console.log("Ko la so chia het cho 7 nho hon n")}
let sum=0;
for(let i=0;i<=n;i++)
{
    sum+=i;
}
console.log('Tong cac so tu 1 den 50 la',sum);
//Math.sqrt() → căn bậc hai
//Math.pow() → lũy thừa
//Math.abs() → trị tuyệt đối
//Math.max() → số lớn nhất
//Math.min() → số nhỏ nhất
//Math.round() → làm tròn
//let isPrime = true ;Lưu kết quả kiểm tra số nguyên tố (đúng / sai)
function laSoNguyenTo(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // không phải SNT
        }
    }
    return true; // là SNT
}
if (laSoNguyenTo(n)) {
    console.log(n, "la so nguyen to");
} else {
    console.log(n, "khong phai so nguyen to");
}
//function tenHam(thamSo) {
    // code xử lý
//    return ketQua;
//}
//Thành phần	Ý nghĩa
//function      khai báo hàm
//tenHam	    tên hàm
//thamSo	    dữ liệu đưa vào
//return	    trả kết quả
//prompt()      dùng để hiện hộp thoại cho người dùng nhập dữ liệu
//parseInt()    dùng để chuyển chuỗi thành số nguyên
let m= parseInt(promt("Nhap vao so m: "));
let hinhvuong="";
// hinh vuong dac co canh la m
for(let i=1;i<=m;i++){
    for(let j=1;j<=m;j++){
        hinhvuong+="\n";
    }
}
console.log(hinhvuong);
//hinh vuong rong co canh la m
for(let i=1;i<=m;i++){
    for(let j=0;j<=m;j++){
        if(i==1||i==m||j==1||j==m){
            hinhvuong+="*";
        }else{
            hinhvuong +="  ";
        }
    }
    hinhvuong +="\n";
}
console.log(hinhvuong);
//TAM GIAC
let h=parseInt(prompt("Nhap vao so h:"));
let tamgiac="";
//tam giac vuong 
for(let i=1;i<=h;i++){
    for(let j=1;j<=h;j++){
        tamgiac+="*";
    }
    console.log(tamgiac);
}
//kiem tra 3 canh co tao thanh tam giac khong
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
}

console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(1, 2, 3)); // false
//  Loại	                    Điều kiện
//  Tam giác thường	            a + b > c
//  Tam giác đều	            a = b = c
//  Tam giác cân	            2 cạnh bằng nhau
//  Tam giác vuông	            a² + b² = c²
//In ra tam giac can voi canh day co do dai la h(cac canh la dau *)
for(let i=1;i<=h;i++){
    for(let j=1;j<=h;j++){
        tamgiac +=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        tamgiac+="*";
    }
    tamgiac +="\n"; 
}
console.log(tamgiac);

//Viet mot ham sum nhan vao mot mang cac so nguyen va tra ve tong cua chung
function sum(arr){
    let total=0;
    for(let i=0;i<arr.length;i++)
    {
        total+=(arr[i]);
    }
    return total;
}
// total nghia la tong cong
//su dung ham sum de tinh tong mang numbers
const number=[1,2,3,4,5];
const total=sum(numbers);
console.log(total);//Output: 15

//viet mot ham findmax tra ve gia tri lon nhat
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arrr[i];               
    }
    return max;
}
//su dung ham findMax de tim gia tri lon nhat trong mang
const numbers=[1,5,3,2,4];
const max=findMax(numbvers);
console.olog(max);//OUTPUT: 5

//viet mot ham removeDuplicates nhan vao mot mang cac chuoi va tra ve mot man moi loai bo cac phan tu trung lap
function removeDuplicates(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
////có nghĩa là "nếu mảng result chứa phần tử tại vị trí i của mảng arr". 
// Dòng code này kiểm tra xem một giá trị cụ thể (tức là arr[i]) có tồn tại trong một mảng khác (là result) hay không, và nếu có thì sẽ thực thi khối lệnh bên trong if. 
// removeDuplicates la khop trung lap
//result nghia la ket qua

// su dung ha tren de loai bo cac phan tu trung lap trong mang
const fruits=["apple","banana","orange","apple","kiwi","banana","banana"];
const uniqueFruits =removeDuplicates(fruits);
console.log(uniqueFruits);//OUTPUT: [apple,banana,orange,kiwi]

//viet mot ham reverseArray nhan vao mot mang va tra ve mot mang moi voi cac phan tu duoc dao nguoc vi tri 
function reverseArray(arr){
    const result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i]);
    }
    return result;
}

// su dung ham reverseArray de dao nguoc mang numbers
//lay dong const numbers ow tren
const reversedNumbers=reverseArray(numbers);
console.log(reversedNumbers);//output:[5,4,3,2,1]
