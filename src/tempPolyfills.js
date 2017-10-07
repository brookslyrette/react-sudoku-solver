const requestAnimationFrame = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

export default requestAnimationFrame
  