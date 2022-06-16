'use strict'
const button = document.querySelector('button')
const selector = document.querySelector('select')
const calculate = function () {
  let price = document.querySelector('.value_value')
  let amount = document.querySelector('.amount_in')
  let value_tot = document.querySelector('#value_total')
  let amount_tot = document.querySelector('#amount_total')
  value_tot.innerHTML = price.innerHTML * amount.value
  amount_tot.innerHTML = amount.value
}
const the_color = function () {
  let circle_color = document.querySelector('#color_select')
  circle_color.style.backgroundColor = selector.value
}

button.addEventListener('click', calculate)
selector.addEventListener('change', the_color)
