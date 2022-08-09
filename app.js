const [converterForm, input, select1, select2, output, convertBtn] = 
  document.querySelectorAll('form, input, select, output, button')

const unitMultipliers = {
  mm: 1,
  cm: 10,
  m: 1000,
  km: 1_000_000,
  in: 25.4,
  ft: 304.8,
  yd: 914.4,
  mi: 1_609_344,
}

converterForm.onsubmit = () => {
  const multiplier = unitMultipliers[select1.value] / unitMultipliers[select2.value]
  const result = (input.value * multiplier).toFixed(2).replace(/\.?0+$/, '')

  output.innerText = result
}
