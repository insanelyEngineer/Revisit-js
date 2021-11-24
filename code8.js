let val;

function hacked(){
    document.getElementById('aditya')
    .innerHTML="<p>Aditya is manupulating the dom by javascript</p>";
    document.getElementById('invisi').style.display='inline';
    document.getElementById('dis').style.display='inline';
};

function stylish(){
    document.querySelector('#aditya')
    .style.color="red";
}

vallis=document.querySelector('li.jojo');
val=document.querySelector('ul.uouo');

// val=val.children;
//  val=val.children[0].children[0];
// val=val.childNodes;

// val=val.childElementCount;

// val=val.firstElementChild;
// val=val.lastElementChild;

// val=vallis.parentNode;
// val=vallis.parentElement;

// val[0].innerHTML="adi";

console.log(val);