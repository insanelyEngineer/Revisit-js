const btn=document.getElementById('btn1')
.addEventListener('click',getData);

function getData(){
const xhr= new XMLHttpRequest();

xhr.open('GET','data.json',true);

xhr.onload = function(){
    if(this.status === 200){
        let data= JSON.parse(this.responseText);
        let ul='';
        data.forEach(dat => {
            ul+=`
            <ul>
            <li>id :${dat.id}</li>
            <li>Name :${dat.name}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML=ul;
    }
}

xhr.send();
}

