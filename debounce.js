// 防抖

function debounce(fn, wait, immediate) {
  let timer
  return function () {
    let context = this
    let args = Array.prototype.slice.call(arguments)

    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (callNow) {
        fn.apply(context, args)
      }
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}

let a = 0
let box = document.getElementById('box')
box.addEventListener('mousemove', debounce(function (e) {
  a +=1
  console.log(e, this)
  box.innerHTML = a
}, 1000, true))
