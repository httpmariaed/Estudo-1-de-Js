const botao = document.getElementById("button")
const limpar = document.getElementById("limparCampos")


let novosEstudantes = [];

const mandarDados = () => {
  const objStudent = {
    name: document.getElementById("name").value,
    register: document.getElementById("register").value,
    years: document.getElementById("years").value,
    gender: document.getElementById("gender").value,
    medium: document.getElementById("medium").value,
    result: document.getElementById("result").value,
  };
  
  novosEstudantes.push(objStudent);

  // dps de adicionar = limpa
  document.getElementById("name").value = ""
  document.getElementById("register").value = ""
  document.getElementById("years").value = ""
  document.getElementById("medium").value = ""
}

const getReport = () => {
  console.log(novosEstudantes)
}

function clean(){
  novosEstudantes = []
}

// ORDENAÇÃO DOS CADASTROS 
function bubbleSort(objStudent) {
  var length = objStudent.length;  
  for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
                 if(objStudent[j] > objStudent[j+1]) {
                         var tmp = objStudent[j]; 
              objStudent[j] = objStudent[j+1]; 
              objStudent[j+1] = tmp; 
          }
      }        
  }
}
bubbleSort(novosEstudantes)
console.log(novosEstudantes)