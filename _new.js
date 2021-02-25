function _new(fn, ...rest) {
  const obj = Object.create(null)
  const result = fn.apply(obj, rest)
  return typeof result === 'object' ? result : obj
}

function Parent(name) {
  this.name = name
  this.age = 30
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

let child = _new(Parent, 'zhangsan')

child.getName()

console.log(child.age)
