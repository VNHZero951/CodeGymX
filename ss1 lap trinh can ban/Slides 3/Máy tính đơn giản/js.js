function add(num) {
    document.getElementById("input").value = document.getElementById("input").value + num;
}

function clear() {
    document.getElementById("input").value = "";
}

function equal() {
    let exp = document.getElementById("input").value;
    if (exp) {
        document.getElementById("input").value = equal(exp);
    }
}