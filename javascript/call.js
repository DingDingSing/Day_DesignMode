Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

var obj = {
  value: 1,
};

function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

bar.myCall(obj, "kevin", 18);
