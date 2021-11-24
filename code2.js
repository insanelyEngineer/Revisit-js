const users = [
{id:1, name:'Aditya'},
{id:2, name: 'gala'},
{id:3, name: 'bawa'},
{id:4,name: 'god'}
];
const ids = users.map(function(x){
    if(x.name==='Aditya')
    return x.name;
    else
    return -1;
});
for(let i=0;i<ids.length;i++){
    if(ids[i]!==-1){
        console.log(ids[i]);
    }
}