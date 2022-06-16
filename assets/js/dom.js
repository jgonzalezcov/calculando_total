'use strict'
function calculate() {
  var price = document.querySelector('.value_value')
  var amount = document.querySelector('.amount_in')
  var value_tot = document.querySelector('#value_total')
  var amount_tot = document.querySelector('#amount_total')
  value_tot.innerHTML = price.innerHTML * amount.value
  amount_tot.innerHTML = amount.value
}

function the_color() {
  var element = document.querySelector('#selector')
  var circle_color = document.querySelector('#color_select')
  circle_color.style.backgroundColor = element.value
}
