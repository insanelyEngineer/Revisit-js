const bod=document.querySelector('body');
bod.addEventListener('click',showTarget);
function showTarget(e){
    if(e.target.className==='a1'){
        e.target.innerText='YO';
    }
}
