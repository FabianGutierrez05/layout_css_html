//document.getElementById('nombre') 
//.setAttribute('value','XD');
document.getElementById('saludarBtn')
.addEventListener('click', ()=>{
    let nombrePersona=document.getElementById('nombre').value;
    //if(nombrePersona==''||nombrePersona==null){
        if(!nombrePersona){
        alert('Debe ingresar el nombre');
    }else{
        alert('Hola '+ nombrePersona + '!!!!')
    }
    
});