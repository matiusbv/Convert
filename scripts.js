const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calcula o total.
    let total = amount * price

    //verifica se o resultado não é um número
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter")
    }
    
    //Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")
    
    //Exibe o resultado total
    result.textContent = `${total} Reais`
    //Alica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  }catch {
    console.log(error)
    alert("Não foi possivel converter. Tente novamente")
  }
}

//formata a moeda em Real brasileiro
function formatCurrencyBRL(value) {
  //converte para número para ulilizar o tolocaleString para fomatar no padrão BRL (R$ 00,00);
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}