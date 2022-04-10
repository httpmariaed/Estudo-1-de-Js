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
  adicionarTabela()
  }

  function bubbleSortRA(){
    bubbleSort(novosEstudantes, (elem1, elem2) => elem1.register < elem2.register)
    adicionarTabela()
  }

  function aprovados(){
    bubbleSortNomes(novosEstudantes, (elem1, elem2) => elem1.result  != elem2.result )
    adicionarTabela()
    
  }
  

    function adicionarTabela(){
      let tbody = document.getElementById('tbody')
      tbody.innerText = '';
      
      for(let i = 0; i < novosEstudantes.length; i++ ){
        let tr = tbody.insertRow()
        
        let td_name = tr.insertCell()
        let td_register = tr.insertCell()
        let td_years = tr.insertCell()
        let td_gender = tr.insertCell()
        let td_medium = tr.insertCell()
        let td_result = tr.insertCell()


        td_name.innerText = novosEstudantes[i].name
        td_register.innerText = novosEstudantes[i].register
        td_years.innerText = novosEstudantes[i].years
        td_gender.innerText = novosEstudantes[i].gender
        td_medium.innerText = novosEstudantes[i].medium
        td_result.innerText = novosEstudantes[i].result  

      }
    }

   
   console.log(novosEstudantes)
    



  function clean(){
  novosEstudantes = []
}