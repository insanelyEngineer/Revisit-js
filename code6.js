let liss=document.getElementsByTagName('li');
let items=document.getElementsByClassName('yoyo');
items= Array.from(items);
items.reverse();
items.forEach(function(ele,inDex) {
    // console.log(element.textContent);
    console.log(`${inDex} : ${ele.textContent}`);
});
function hacked(){
    document.getElementById('aditya')
    .innerHTML="<p>Aditya is manupulating the dom by javascript</p>";
    document.getElementById('invisi').style.display='inline';
    document.getElementById('dis').style.display='inline';
};

function stylish(){
    document.querySelector('#aditya')
    .style.color="red"; 
    items[0].style.color="green";
    items[1].style.color='purple';
    items[2].innerHTML="gotesu";
    items[3].textContent='Asdo';
    items[3].style.color="gray";
    items[items.length-1].style.color="blue";
    liss[0].style.color="#fa2";
    liss[1].style.color="#f1a";
    liss[2].style.color="#fa9";
    liss[3].style.color="#f12";
    liss[4].style.color="#ccc";

}

// const stat=[0,0,0,0,0,0,0,0,0,0];
// const arr=[];
// for(let i=0;i<100;i++){
//     val=parseInt(Math.random()*100)%10;
//     arr.push(val);
//     if(val===0)stat[0]++;
//     else if(val===1)stat[1]++;
//     else if(val===2)stat[2]++;
//     else if(val===3)stat[3]++;
//     else if(val===4)stat[4]++;
//     else if(val===5)stat[5]++;
//     else if(val===6)stat[6]++;
//     else if(val===7)stat[7]++;
//     else if(val===8)stat[8]++;
//     else if(val===9)stat[9]++;
// }
// console.log(stat)