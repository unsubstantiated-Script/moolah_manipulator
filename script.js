const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')



//Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value

    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency_one}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

//Event listeners
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)
swap.addEventListener('click', calculate)

calculate()