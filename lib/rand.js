function arrayRange (array) {
  return array[randRange(0, array.length)]
}

function randBool () {
  return Math.random() < 0.5
}

function randRange (start = null, limit = null, step = 1) {
  if (start === null) return randBool()
  if (start instanceof Array) return arrayRange(start)
  let [max, min] = limit !== null ? [limit, start] : [start, 0]
  if (step == 0 || step < 0 && start < limit || step > 0 && start > limit)
    return NaN
  return Math.floor(Math.random() * (max - min) / step) * step + min
}

module.exports = randRange
