let botao = document.getElementById("button")
let limpar = document.getElementById("limparCampos")
let exibirNomes = document.getElementById("exibirNomes")
let exibirRa = document.getElementById("exibirra")
let exibirAprov = document.getElementById("exibirAprov")




let pass, comps, trocas 

let novosEstudantes = [];

function mandarDados() {
  let objStudent = {
    name: document.getElementById("name").value,
    register: document.getElementById("register").value,
    years: document.getElementById("years").value,
    gender: document.getElementById("gender").value,
    medium: document.getElementById("medium").value,
    result: document.getElementById("result").value,
    
    
  }

  novosEstudantes.push(objStudent);

  // dps de adicionar = limpa
  document.getElementById("name").value = "";
  document.getElementById("register").value = "";
  document.getElementById("years").value = "";
  document.getElementById("medium").value = "";
  
}

function relatorio() {
  console.log(novosEstudantes)}

    function bubbleSort(novosEstudantes, fnComp){
      pass = 0, comps = 0, trocas = 0 

      let trocou
      
      do{
        pass++
        trocou = false 

        for(let i = 0; i < novosEstudantes.length -1; i++){
          comps++
          
          if(fnComp(novosEstudantes[i],novosEstudantes[i +1])){

            [novosEstudantes[i], novosEstudantes[i + 1]] = [novosEstudantes [i + 1], novosEstudantes [i]]
            trocou = true
            trocas++
          }

        }
      } while(trocou)
    
    }
    


  function bubbleSortNomes(){
  bubbleSort(novosEstudantes, (elem1, elem2) => elem1.name > elem2.name)
  //document.getElementById('exibirNomes').innerHTML = JSON.stringify(novosEstudantes, null, 4);
  }

  function bubbleSortRA(){
    bubbleSort(novosEstudantes, (elem1, elem2) => elem1.register < elem2.register)
    //document.getElementById('exibirra').innerHTML = JSON.stringify(novosEstudantes, null, 4);
  }
  

  let aprovados = []
for (let val of novosEstudantes){
    if (val.result == 'Aprovado'){
        aprovados.push(val)
    } 
}

aprovados.sort(function(a,b) {
    return a.name< b.name ? -1 : a.name > b.name ? 1 : 0;
});

  
   console.log(novosEstudantes)
    


function clean(){
  novosEstudantes = []
}