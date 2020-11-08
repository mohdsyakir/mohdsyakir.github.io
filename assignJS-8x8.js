//same content at:
//1. https://codepen.io/syakir/pen/QWEZLGb
//2. https://github.com/mohdsyakir/mohdsyakir.github.io
var temp = "";
var isEvenRow = false;
var isEvenCol = false;

for (i=1; i <= 7; i++) {
 temp = "";
 if (i % 2 == 0) {
  isEvenRow = true;
 } else {
  isEvenRow = false;
 }

for (j=1; j <= 9; j++) {
 if (j % 2 == 0) {
  isEvenCol = true;
 } else {
  isEvenCol = false;
 }

 if (isEvenRow == true && isEvenCol == true) {
  temp += "#";
 } else if (isEvenRow == true && isEvenCol == false) {
  temp += " ";
 } else if (isEvenRow == false && isEvenCol == false) {
  temp += "#";
 } else if (isEvenRow == false && isEvenCol == true) {
  temp += " ";
 }
}
console.log(temp);
}