let his = ''
let nhis = ''

function post_res(){
    his = his.concat("  ",nhis)
    document.getElementById('history').innerHTML = his
    return
}

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
    nhis = String(v1) + ' + ' + String(v2) + ' = ' + String(v1 + v2) + "\n"
    post_res()
}
function subtract() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 - v2
    nhis = String(v1) + ' - ' + String(v2) + ' = ' + String(v1 - v2) + "\n"
    post_res()
}
function multiply() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 * v2
    nhis = String(v1) + ' * ' + String(v2) + ' = ' + String(v1 * v2) + "\n"
    post_res()
}
function divide() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())  
    document.getElementById('res').innerHTML = v1 / v2
    nhis = String(v1) + ' / ' + String(v2) + ' = ' + String(v1 / v2) + "\n"
    post_res()
}
function sq() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = v1 * v1
    nhis = "Square of "+ String(v1) + ' = ' + String(v1 * v2) + "\n"
    post_res()
}
function cu() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = v1 * v1 * v1
    nhis = "Cube of " + String(v1) + ' = ' + String(v1 * v1 * v1) + "\n"
    post_res()
}
function pow() {
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())
    document.getElementById('res').innerHTML = Math.pow(v1, v2)
    nhis = String(v1) + " to the power of " + String(v2) + ' = ' + String(Math.pow(v1, v2)) + "\n"
    post_res()
}
function sqRoot() {
    let v1 = Number(valInput1())
    document.getElementById('res').innerHTML = Math.sqrt(v1)
    nhis = "Square Root of " + String(v1) + ' = ' + String(Math.sqrt(v1)) + "\n"
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
function clrHis() {
    his = ''
    document.getElementById('history').innerHTML = ''
}
function mod(){
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())
    document.getElementById('res').innerHTML = v1 % v2
    nhis = String(v1)+' % '+String(v2)+' = '+String(v1%v2)+'\n'
    post_res()
}
function percent(){
    let v1 = Number(valInput1())
    let v2 = Number(valInput2())
    document.getElementById('res').innerHTML = (v1 / v2) * 100,"%"
    nhis = String(v1)+' of '+String(v2)+' = '+String((v1/v2)*100)+'%\n'
    post_res()
}