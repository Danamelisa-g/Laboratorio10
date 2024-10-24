class tarea{
    constructor(nombre){
        this.nombre = nombre;
        this.estado = 'pendiente';
    }
}

const tareas = [];

document.getElementById('añadirtaskbutton').addEventListener('click',agregartareas)

function agregartareas(){
    const tareainput = document.getElementById('añadirtaskinput');
    const nombretarea = tareainput.value.trim();

    if(nombretarea !== ""){
        const nuevatarea = new tarea(nombretarea);
        tareas.push(nuevatarea);
        tareainput.value = '';
        actualizarinterfaz();
    }

}
function