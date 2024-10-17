const amount = document.getElementById("amount")

//Manipulando o input amout para receber somente números
amount.addEventListener("input", () => {
  console.log(amount.value)
})