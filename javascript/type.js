var x = new Number(100);

x.valueOf = () => 101;

console.log(+x);

x[Symbol.toPrimitive] = () => 102;

console.log(+x);

console.log(+[]);

var checker;

function myFunc() {
  if (checker) checker();

  console.log("do myFunc", str);

  var str = "test";

  if (!checker) {
    checker = function () {
      console.log("do inner func", str);
    };
  }
  console.log("arguments.callee", arguments.callee);
  return arguments.callee;
}

myFunc()();

var a = 20;
function hello(s) {
  eval(s);
  console.log("hello", a);
}

hello("var a=10;");


function foo(obj){
    with(obj){
        a = 2;
    }
}

var o1 = {a:3};
var o2 = {b:4}

foo(o1);// o1.a =>2

foo(o2)// o2.a => undefined  window.a => 2



for(var i=0;i<10;i++){}