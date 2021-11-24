let val;
val=document.querySelector('#add').addEventListener('click',addList);
val=document.querySelector('#dis').addEventListener('click',deli);

function hacked(){
    document.getElementById('aditya')
    .innerHTML="<p>Aditya is manupulating the dom by javascript</p>";
    document.getElementById('add').style.display='inline';
    document.getElementById('dis').style.display='inline';
    // document.getElementById('invisi').style.display='inline';
    // document.getElementById('rep').style.display='inline';
};

classListing();
function classListing(){
let i=0;
let val=document.querySelector('li');
while(val!==null){
val.classList.add(`a${i}`);
val=val.nextElementSibling;
i++;
}}



function addList(){
    const li=document.createElement('li');
    li.className="jojo";
    li.innerHTML='list added<a href="#" class="dele" style="text-decoration: none; color: violet;">x</a>';
    val=document.querySelector('ul'); 
    val.appendChild(li);
    classListing();
}

function deli(){
let vax;
let x=document.querySelectorAll('li').length-1;
vax=document.querySelector(`li.jojo.a${x}`);
if(vax!==null)(vax.remove());
classListing();
}


