function xoa() {
    document.getElementById("input").value = "";
}

function add(num) {
    document.getElementById("input").value = document.getElementById("input").value + num;
}

function ketqua() {
    let exp = document.getElementById("input").value;
    if (exp) {
        exp = document.getElementById("input").value = eval(exp)
    }
}