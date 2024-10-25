class Tarea{
    constructor(nombre){
        this.nombre = nombre;
        this.estado = 'pendiente';
    }
}

const tareas = [];

document.getElementById('añadirtaskbutton').addEventListener('click',agregartareas)

function agregartareas(){
    const tareainput = document.getElementById('añadirtaskinput').value
    const nombretarea = tareainput.trim();
    console.log(nombretarea);
    

    if(nombretarea !== ""){
        const nuevatarea = new Tarea(nombretarea);
        tareas.push(nuevatarea);
        tareainput.value = '';
        actualizarinterfaz();
    }

}

function actualizarinterfaz(){
    const Pendienteslista = document.getElementById('Pendientestask');
    const Progresolista = document.getElementById('Progresotask');
    const Completadalista = document.getElementById('Completatask');

    Pendienteslista.innerHTML = "";
    Progresolista.innerHTML = '';
    Completadalista.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const tareaitem = document.createElement('div');
        tareaitem.className = 'task'
        tareaitem.innerHTML = `
            <span class="task-name">${tarea.nombre}</span>
            <div class="task-actions">
                ${tarea.estado === 'pendiente' ? `<button onclick="actualizarEstado(${index}, 'progreso')">En progreso</button>` : ""}
                ${tarea.estado === 'progreso' ? `
                    <div>
                        <button onclick="actualizarEstado(${index}, 'completado')">En progreso</button>
                        <button onclick="actualizarEstado(${index}, 'pendiente')">pendiente</button>
                    </div>` : ""}
            </div>
        `

        if (tarea.estado == "pendiente") {
            Pendienteslista.appendChild(tareaitem)
        } else if (tarea.estado == "progreso") {
            Progresolista.appendChild(tareaitem)
        } else {
            Completadalista.appendChild(tareaitem)
        }

    });
}

function actualizarEstado(index, estado){
    if (tareas[index].estado !== "completo") {
        tareas[index].estado = estado
        actualizarinterfaz();
    }
}
