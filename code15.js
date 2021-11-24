// let cont=document.querySelector('a');
// cont.addEventListener('click',addChange);
// let cont2=document.querySelector('.container');
// console.log(cont2)
// function addChange(){
// cont2.textContent +='Aditya';
// }

let form=document.querySelector('form');
form.addEventListener('submit',doSome);
let inp=document.querySelector('#task');
function doSome(e){
    e.preventDefault();
    localStorage.setItem(`input${localStorage.length}`,`${inp.value}`);
    inp.value='';
}
for(let x=0;x<localStorage.length;x++){
console.log(localStorage.getItem(`input${x}`));
}