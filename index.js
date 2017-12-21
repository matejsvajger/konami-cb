var konami = function (cb) {

  if (typeof cb !== 'function') {
    return
  }

  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  const length = code.length

  var pos = 0

  const check = () => (length == pos) ? fire() : reset()

  const fire = () => {
    cb()
    reset()
  }

  const reset = () => {
    pos = 0
  }

  document.addEventListener('keydown', ({ keyCode }) => (keyCode === code[pos++]) ? check() : null, false)

}

typeof module !== 'undefined' && typeof module.exports !== 'undefined' && (module.exports = konami)
