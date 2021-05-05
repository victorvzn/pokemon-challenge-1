export function sleeper (ms) {
  // Source: https://stackoverflow.com/a/38956175
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}
