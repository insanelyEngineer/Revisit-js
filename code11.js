    let val;
    classListing();
    buttonListing();
    val=document.querySelector('#add').addEventListener('click',addList);

    function hacked(){
        document.getElementById('aditya')
        .innerHTML="<p>Addition enabled</p>";
        document.getElementById('add').style.display='inline';
    };


    function deli(x){
        document.querySelector(`li.${x}`).remove();
    }
    

    function classListing(){
    let i=0;
    let val=document.querySelector('li');
    while(val!==null){
    val.classList.add(`a${i}`);
    val=val.nextElementSibling;
    i++;
    }}

    function buttonListing (){
        for(let i=0;i<document.querySelectorAll('li button').length;i++)    
        {document.querySelectorAll('li button')[i].className=`a${i}`;}
    }

    function addList(){
        const li=document.createElement('li');
        li.className="jojo";
        li.innerHTML='list added<button onclick="deli(this.className)">x</button>';
        val=document.querySelector('ul'); 
        val.appendChild(li);
        classListing();
        buttonListing();
        }

    console.log(document.querySelectorAll('li button'))
    console.log(document.querySelectorAll('li'))