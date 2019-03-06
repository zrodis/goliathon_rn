const float100 = (n) => {
  let num = Number(n)
  if(num > 900) return ''
  return (Math.round(num*100) / 100) + 's'
}

export {float100}
