function cong(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let result = parseFloat(num1) + parseFloat(num2);
        document.getElementById("ketqua").innerHTML="Result Additon: "+result;

}
function tru(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let result = parseFloat(num1) - parseFloat(num2);
        document.getElementById("ketqua").innerHTML="Result Subtraction: "+result;

}
function nhan(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let result = parseFloat(num1) * parseFloat(num2);
        document.getElementById("ketqua").innerHTML="Result Mutiplication: "+result;

}
function chia(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("ketqua").innerHTML="Result Division: "+result;

}