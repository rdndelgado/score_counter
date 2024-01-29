function win(winVal){
    val = document.getElementById('score-win').innerHTML
    document.getElementById('score-win').innerHTML = parseInt(val) + 1
}
function lose(){
    val = document.getElementById('score-lose').innerHTML
    document.getElementById('score-lose').innerHTML = parseInt(val) + 1
}
function reset(){
    document.getElementById('score-win').innerHTML = 0
    document.getElementById('score-lose').innerHTML = 0
}
