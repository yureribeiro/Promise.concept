//trate os resultados da promisse utilizando o then e catch
function execute() {
  return new Promise((resolve, reject) => {
    console.log('A promise está sendo executada...')
    setTimeout(() => {
      if (resolve < 40) {
        reject('Valor menor que o esperado.')
      } else {
        console.log('Resolvendo a promise...')
        resolve(42) //resultado da promise
      }
    }, 1000)
  })
}

//chame a promise encadeando o then e o catch
execute().then((result) => {
  console.log(`A promise foi resolvida, o resultado foi: ${result}`)
}).catch((err) => {
  console.log(`A promise foi rejeitada! motivo: ${err}`)
}).finally(() => {
  console.log(`Promise finalizada.`)
})

//o 'then' vai retornar o resultado da promise assim que ela for 'resolvida'.
//o 'catch' vai tratar do 'erro' da promisse, ou seja quando for 'rejeitada'.
//o 'finally' vai "finalizar" a promise indepentende do resultado.