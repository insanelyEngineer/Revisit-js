let val;
val=document.querySelector('#rep').addEventListener('click',repDiv1);
val=document.querySelector('#add').addEventListener('click',addList);
val=document.querySelector('#color').addEventListener('click',stylish);


function hacked(){
    document.getElementById('aditya')
    .innerHTML="<p>Aditya is manupulating the dom by javascript</p>";
    document.getElementById('invisi').style.display='inline';
    document.getElementById('add').style.display='inline';
    document.getElementById('rep').style.display='inline';
    document.getElementById('dis').style.display='inline';
};

function stylish(){
    document.querySelector('#aditya')
    .style.color="red";
}

//add element in DOM
function repDiv1(){
    const toReplace=document.querySelector('.yoyo');
    const upDate=document.createElement('div');
    upDate.className='yoyo';
    upDate.innerHTML='Aditya you replaced it';
    let toBe=document.querySelector('body');
    toBe.replaceChild(upDate,toReplace);
}

function addList(){
    const li=document.createElement('li');
    li.className="jojo";
    li.innerHTML='list added<a href="#" class="dele" style="text-decoration: none; color: violet;">x</a>';
    val=document.querySelector('ul'); 
    val.appendChild(li);
}

// for(let i=0;i<document.querySelectorAll('.dele').length+1;i++){
//     val=document.querySelectorAll('.dele')[i].addEventListener('click',remo);
// function remo(){
//     val=document.querySelectorAll('li');
//     val[i].remove();
// }}