function chuyentien(){
    let x = document.getElementById("input").value;
    if (Sel_1.value == "VND" && Sel_2.value == "USD"){
        document.getElementById("ketqua").innerHTML ="Result: "+ x / 23000 + " USD" 
    }
    if (Sel_1.value == "USD" && Sel_2.value == "VND"){
        document.getElementById("ketqua").innerHTML = "Result: "+ x * 23000 + " VND" 
    }
}
    