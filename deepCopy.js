function deepCopy(obj) {
  if (typeof obj !== 'function') return

  let newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj.key = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj
}
