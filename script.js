// Játék kódja

const solution = Math.floor(Math.random()*100) + 1

const guessEl = document.getElementById("guess")

function TippClicked(){
    let guess = guessEl.value * 1

    if(guess < solution){
        alert("Nagyobb")
    }
    else if(guess > solution){
        alert("Kisebb")
    } 
    else{
        alert("Eltaláltad")
    }
}