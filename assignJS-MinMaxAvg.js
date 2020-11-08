//same content at:
//1. https://codepen.io/syakir/pen/QWEZLGb
//2. https://github.com/mohdsyakir/mohdsyakir.github.io
function getMinMaxAvg (arr) {
 var min;
 for (i=0; i<arr.length; i++) {
  if (i==0) {
   min=arr[i];
  } else {
    if (arr[i] < min) {
    min=arr[i];
    }
  }
}

var max;
 for (i=0; i<arr.length; i++) {
  if (i==0) {
   max=arr[i];
  } else {
    if (arr[i] > max) {
    max=arr[i];
    }
  }
}

var avg = 0 ;
 for (i=0; i<arr.length; i++) {
  avg += arr[i];
  }
  avg = avg/arr.length;
return [min, max, avg];
}

var ret = getMinMaxAvg ([21,13,10,7]);
console.log ("min : " + ret[0]);
console.log ("max : " + ret[1]);
console.log ("avg : " + ret[2]);