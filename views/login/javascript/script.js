const queryString  = window.location.search
const urlParams = new URLSearchParams(queryString);
const tipo = urlParams.get('tipo')
let url = ''

const formElement = document.getElementById('form-login')




function definirAction(){
  switch (tipo) {
    case '2':
    url = `http://localhost:8080/usuariopac/verificar`
    break;
    case '3':
      url = `http://localhost:8080/usuariosmed/verificar`
      break;
      default: 
      url =  `http://localhost:8080/paciente`
  }

  formElement.action = url
}