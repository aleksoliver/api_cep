const findEstados =() =>{

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(json => {
        
        //console.log(json)

        let imputEstado = document.getElementById('estado')


        let estados = ''
        json.forEach( estado => 
            estados += `<option valule=${estado.sigla}>${estado.nome}</option>`
            
        );

        console.log(estados)
        imputEstado.innerHTML = estados
        
      })

      
}
findEstados()
     