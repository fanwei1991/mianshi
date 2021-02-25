Function.prototype._bind = function (context) {
  let self = this

  let args = Array.prototype.slice.call(arguments, 1)

  let result = function () {
    let argsBind = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof result ? this : context, args.concat(argsBind))
  }

  result.prototype = Object.create(self.prototype)

  return result
}

let obj = {
  val: 1
}

function foo(name, age) {
  console.log(this.val)
  this.name = name
  this.age = age
  return {
    val: this.val,
    name: this.name,
    age: this.age
  }
}

let bar = foo._bind(obj, 'zhangsan')

console.log(bar(20))

