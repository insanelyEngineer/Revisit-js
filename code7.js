function hacked(){
    document.getElementById('aditya')
    .innerHTML="<p>Aditya is manupulating the dom by javascript</p>";
    document.getElementById('invisi').style.display='inline';
    document.getElementById('dis').style.display='inline';
};

function stylish(){
    document.querySelector('#aditya')
    .style.color="red"; 
    let items=document.querySelectorAll('li.jojo');
    let eve=document.querySelectorAll('li:nth-child(even)');
    let odd=document.querySelectorAll('li:nth-child(odd)');
    odd.forEach(function(vamos){
    vamos.style.color="blue";
    });
    for(let i=0;i<eve.length;i++){
        eve[i].style.color="red";
    }
}