console.log(myVar);

function b() {
  console.log("funtion b started "+myVar);
  var myVar;
  console.log("inside b"+myVar);
}

function a() {
  console.log("funtion a started"+myVar);
  var myVar= 2;
  console.log("inside a: "+myVar);
  b();
  console.log("inside a after called b"+ myVar);
}

var myVar = 1;
console.log("before call a "+myVar);
a();
console.log("after call a "+myVar);
