const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amout para receber somente números
amount.addEventListener("input", () => {
  console.log(amount.value)
})

form.onsubmit = (event) => {
  event.preventDefault()

 switch(currency.value) {
  case "USD":
    convertCurrency(amount.value, USD, "US$")
    break
  case "EUR":
    convertCurrency(amount.value, EUR, "€")
    break
  case "GBP":
    convertCurrency(amount.value, GBP, "£")

 }


}

//Função para converter a moeda;
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}