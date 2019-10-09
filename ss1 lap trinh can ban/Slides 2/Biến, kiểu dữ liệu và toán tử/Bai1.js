//Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. 
//Sau đó hiển thị điểm trung bình và tổng của những điểm này.

let a,b,c;
a = prompt("Nhập Điểm Môn Vật Lý :")
b = prompt("Nhập Điểm Môn Hóa Học :")
c = prompt("Nhập Điểm Môn Sinh Học :")
//let VL = parseFloat(a);
//let S = VL + HH + SH;
//document.write("Tổng Điểm 3 Môn Là : " + S);
let VL = parseFloat(a);
let HH = parseFloat(b);
let SH = parseFloat(c);
//
let S = VL + HH + SH ;
//
let TB = (VL + HH + SH) / 3;
//
document.write("Điểm Trung Bình Là : " + TB + "<br>")
//document.write('<br/>')
//document.write('<br/>')
document.write("Tổng Điểm Là : " + S)