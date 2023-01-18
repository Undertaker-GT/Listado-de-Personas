const personas=[
    new persona('Juan', 'Perez', '55478296', 'zona 13'),
    new persona('Karla', 'Lara', '55478296', 'zona 13')
];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto='';
    for(let persona of personas){
        console.log(persona);
        texto+='<li>' + persona.Nombre +' '+ persona.Apellido +' / '+persona.Numero+' / '+persona.Direccion +'</li>';
    }
    document.getElementById('personas').innerHTML=texto;
}
function agregarPersona(){
    const forma= document.forms['forma'];
    const nombre= forma['nombre'];
    const apellido=forma['Apellido'];
    const numero=forma['Numero'];
    const direccion=forma['Direccion'];
    if(nombre.value =='' && apellido.value==''){ //de esta forma no permite valores vacios.
        console.log('no hay informacion que agregar');
    }
    else{ 
        const npersona= new persona(nombre.value, apellido.value, numero.value, direccion.value);
        console.log(npersona);
        personas.push(npersona);
        nombre.value='';
        apellido.value='';
        numero.value='';
        direccion.value='';
        mostrarPersonas();
    }
}