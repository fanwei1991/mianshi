Function.prototype._call = function (context) {
  context.fn = this
  let args = []

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  let result = eval('context.fn(' + args + ')')
  delete context.fn

  return result
}

let obj = {
  val: 1
}

function foo(name, age) {
  console.log(this.val)
  return {
    val: this.val,
    name,
    age
  }
}

console.log(foo._call(obj, 'san', 30))
