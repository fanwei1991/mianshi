function createObj(o) {
  function F() {

  }

  F.prototype = o

  return new F()
}


function inheritPrototype(child, parent) {
  let prototype = createObj(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}

function Parent(color) {
  this.names = ['zhangsan', 'lisi']
  this.color = color
}

Parent.prototype.getColor = function () {
  return this.color
}

function Child(color) {
  Parent.call(this, color)
}

inheritPrototype(Child, Parent)

let child = new Child('yellow')

console.log(child.names, child.getColor())

