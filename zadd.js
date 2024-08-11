let output = document.querySelector("#output");
let Weak_input = document.querySelector('#input');

function compChoice() { return parseInt(Math.random()*100);}

function result (){
    let input = parseInt(Weak_input.value)
    let computerChoice = compChoice();  
    if(computerChoice > input){
        output.innerHTML = `Your choice is ${input} and Computer choice is ${computerChoice}, Computer won!!`
    }
    else if(computerChoice<input){
        output.innerHTML = `Your choice is ${input} and Computer choice is ${computerChoice}, You win!!`
    }else{
        output.innerHTML = `Your choice is ${input} and Computer choice is ${computerChoice}, Its a tie!!`
    }
}


function reset(){
      output.innerHTML = '';
      Weak_input.value= "";
}