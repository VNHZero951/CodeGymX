let arrProduct = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu "];
let text = '';
for (let i = 0; i < arrProduct.length; i++) {
    text += ' <tr>';
    text += '<td>' + arrProduct[i] + '</td>';
    text += ' </tr>';
}
document.getElementById('result').innerHTML = text;