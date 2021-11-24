const ar=[];
for(let i=0;i<1000;i++){
    ar.push(parseInt(Math.random()*100));
}
ar.sort(function(x,y){
    return x-y;
})
const ar2=ar.concat();
ar2.reverse();
const ar3=[];
for(let i=0;i<1000;i++){
    if(ar[i]===ar2[i]){
        ar3.push(ar[i]);
    }
}
ar3.sort(function (x,y){
    return x-y;
});
console.log(`hey mate ${ar3}`)
for(let i=0;i<ar3.length;i++){
    if(ar3[i]==ar3[i+1]){
        ar3.splice(i,1);
        i--;
    }
}
(function(name){
    console.log(`Hello mate ${name} ${ar3}`)
})('Aditya');