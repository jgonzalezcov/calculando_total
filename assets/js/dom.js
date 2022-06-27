'use strict'
const button = document.querySelector('button')
const selector = document.querySelector('select')
const calculate = function () {
  let price = document.querySelector('.value_value')
  let amount = document.querySelector('.amount_in')
  document.querySelector('#value_total').innerHTML =
    price.innerHTML * amount.value
  document.querySelector('#amount_total').innerHTML = amount.value
}
const the_color = function () {
  document.querySelector('#color_select').style.backgroundColor = selector.value
}

button.addEventListener('click', calculate)
selector.addEventListener('change', the_color)
