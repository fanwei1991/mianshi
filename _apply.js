Function.prototype._apply = function (context, args) {
  context.fn = this

  var result

  if (args) {
    var arr = []

    for(var i = 0; i< args.length; i++) {
      arr.push('args[' + i + ']')
    }

    console.log(arr)

    result = eval('context.fn(' + arr + ')')
  } else {
    context.fn()
  }

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

console.log(foo._apply(obj, ['san', 30]))
