function throttle(fn, wait) {
  let previous = 0
  let timeout

  return function () {
    let self = this
    let args = Array.prototype.slice.call(arguments)
    let now = Date.now()

    let remaining = wait - (now - previous)

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      fn.apply(self, args)
      previous = now
    } else if (!timeout) {
      timeout = setTimeout(function () {
        previous = Date.now()
        timeout = null
        fn.apply(self, args)
      })
    }
  }
}
