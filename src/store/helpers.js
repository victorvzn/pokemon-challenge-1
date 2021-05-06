export function sleeper (ms) {
  // Source: https://stackoverflow.com/a/38956175
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

export function removeHyphens (text) {
  return (text.replace(/-/g, ' '))
}

export function arrayWithCommas (data) {
  return data.join(', ')
}

export function paginate (arr, size) {
  // Source: https://stackoverflow.com/a/61074088
  return arr.reduce((acc, val, i) => {
    const idx = Math.floor(i / size)
    const page = acc[idx] || (acc[idx] = [])
    page.push(val)
    return acc
  }, [])
}
