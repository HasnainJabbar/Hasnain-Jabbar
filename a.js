// function show(){
//     document.getElementById('form').style.display='block'
// }
// function hide(){
//     document.getElementById('form').style.display='none'
// }
function submit() {
    document.getElementById('box').style.backgroundColor = document.getElementById('bgClr').value
    document.getElementById('box').innerHTML = document.getElementById('txt').value
    document.getElementById('box').style.fontSize = document.getElementById('fs').value + "px"
    document.getElementById('box').style.fontWeight = document.getElementById('fw').value
    document.getElementById('box').style.color = document.getElementById('txtClr').value
}
function show() {
    let a = document.getElementById("cb3-8").checked;
    if (a == false) {
        document.getElementById('parent').style.display = 'none'
    }
    else {
        document.getElementById('parent').style.display = 'grid'
    }
}