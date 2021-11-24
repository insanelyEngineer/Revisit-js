let val=document.getElementById('task');

document.querySelector('form').addEventListener('submit',preDef);
let put=document.getElementById('task');
function preDef(e){
    e.preventDefault();
    console.log(put.value);
    put.value='';
}

console.log(val);
