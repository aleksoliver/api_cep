const findEstados = () => {

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(json => {

      //console.log(json)

      let imputEstado = document.getElementById('estado')


      let estados = ''
      json.forEach(estado =>
        estados += `<option valule=${estado.sigla}>${estado.nome}</option>`

      );

      console.log(estados)
      uf.innerHTML = estados

    })


}
findEstados()

function findByCep() {

  let cep_ = cep.value
  console.log(cep_);

  fetch(`https://viacep.com.br/ws/${cep_}/json/`)
    .then(response => response.json())
    .then(json => {
     preencherCampos(json)
      console.log(json)

    })

}

const preencherCampos = json => {
  console.log(json)
  logradouro.value = json.logradouro
  numero.focus()
  bairro.value = json.bairro
  complemento.value = json.complemento
  uf.value = json.uf
  localidade.value = json.localidade

}