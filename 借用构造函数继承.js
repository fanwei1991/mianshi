// 借用构造函数继承
function Parent1 () {
  this.names = ['kevin', 'daisy'];
}

function Child1 () {
  Parent1.call(this);
}

let child1 = new Child1();

child1.names.push('fanwei');

console.log(child1.names); // ["kevin", "daisy", "fanwei"]

let child2 = new Child1();

console.log(child2.names); // ["kevin", "daisy"]


