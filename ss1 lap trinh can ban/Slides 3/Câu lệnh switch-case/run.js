function tinhthang() {
    let input = document.getElementById("input").value;
    switch (input) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            document.getElementById("ketqua").innerHTML = "Tháng " + input + " Có 31 Ngày";
            break;
        case "2":
            document.getElementById("ketqua").innerHTML = "Tháng " + input + " Có 28 Hoặc 29 Ngày";;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            document.getElementById("ketqua").innerHTML = "Tháng " + input + " Có 30 Ngày";
        default:
            alert("input fail!!!")
            document.write("Nhập Tháng 1 Đến Tháng 12");
            break;
    }
}