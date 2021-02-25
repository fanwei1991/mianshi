function createObj(o) {
  let clone = Object.create(o)

  clone.sayName = function () {
    console.log('name')
  }

  return clone
}
