function valInput1(){
    let v = document.getElementById('val1').value
    return v }   
function valInput2(){
    let v = document.getElementById('val2').value
    return v }  

function add() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2()) 
    document.getElementById('res').innerHTML = v1 + v2
}
function subtract() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 - v2
}
function multiply() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 * v2
}
function divide() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 / v2
}
function sq() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = v1 * v1
}
function cu() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = v1 * v1 * v1
}
function pow() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())
    document.getElementById('res').innerHTML = Math.pow(v1, v2)
}
function sqRoot() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = Math.sqrt(v1)
}
function cqRoot() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = Math.cbrt(v1)
}
function ansButton() {
    document.getElementById('val1').value = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = ''
}
function clrButton() {
    document.getElementById('val1').value = ''
    document.getElementById('val2').value = ''
    document.getElementById('res').innerHTML = ''
}