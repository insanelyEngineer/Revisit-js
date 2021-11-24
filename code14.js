function showForm(){
    document.querySelector('form').style.display="block";
}
function showList(){
    ul.style.display="block";
}
function sumbitRedialControlEdit(e){
    e.preventDefault();
    if(inputCollector.value!==''){
    showList();
    addlist(inputCollector.value);}
    inputCollector.value='';
}    
function addlist(x){
    let val=document.createElement('li');
    val.className='task-listed-by-user';
    val.innerText=x;
    ul.appendChild(val);
    colorPattern();
}
function colorPattern(){
    let list=document.querySelectorAll('li:nth-child(odd)');
    for(let i=0;i<list.length;i++){
        list[i].style.color="blue";
    }

    let list2=document.querySelectorAll('li:nth-child(even)');
    for(let i=0;i<list2.length;i++){
        list2[i].style.color="red";
    }
}

document.querySelector('.container').addEventListener('click',showForm);
const form=document.querySelector('form');
const inputCollector=document.querySelector('#task');
form.addEventListener('submit',sumbitRedialControlEdit);
const ul=document.querySelector('ul.yoyo');












