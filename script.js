document.getElementsByTagName("h1")

var valor = document.querySelector ('input')

  function podeBeber () {
  if (valor.value === 'segunda') {
      alert ('Só se foi demitido hoje.')
  }
  else if (valor.value === 'terça') {
      alert ('Segura essa onda...')
  }
  else if (valor.value === 'quarta') {
      alert ('Quartou Mozão! Lulalá')
  }
  else if (valor.value === 'quinta') {
      alert ('Melhor guardar dinheiro! Dia 15 ta chegando')
  }
  else if (valor.value === 'sexta') {
      alert ('BBB! Bora Bar Bebê!')
  }
  else if (valor.value === 'sábado') {
      alert ('Tá fazendo o que aqui? VAI PRO BAAR!')
  }
  else if (valor.value === 'domingo') {
      alert ('Dia de meditar, limpar a casa e fingir que ontem nunca existiu!')
  }
  else {
      alert ('tente novamente')
  }
}