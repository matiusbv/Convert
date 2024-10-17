const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

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
  try{
    description.textContent = `${symbol} 1 = ${price}`

    //Alica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  }catch {
    console.log(error)
    alert("Não foi possivel converter. Tente novamente")
  }
}