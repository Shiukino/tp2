const listado = $("listado");
const mostrar = $("mostrar");
const listadoTarea = $("listadoTarea");

mostrar.addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
        console.log("¡Los datos han llegado!");

        const personas = await res.json();
        listado.innerHTML = "";
        personas.forEach((persona) => {
            const item = document.createElement("li");
            const itemName = `ID: ${persona.id} - Nombre: ${persona.name} - User Name: ${persona.username} - Email: ${persona.email} - Sitio Web: ${persona.website}`;
            item.textContent = itemName;

            const verTarea = document.createElement("button");
            verTarea.textContent = "Ver Tarea";
            verTarea.addEventListener("click", async () => {
                const resTareas = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
                if (resTareas.ok) {
                    console.log(`¡Las tareas del usuario ${persona.name} han llegado!`);

                    const tareas = await resTareas.json();
                    listadoTarea.innerHTML = "";
                    tareas.forEach((tarea) => {
                        const itemTarea = document.createElement("li");
                        const tareaTitulo = document.createElement("span");
                        tareaTitulo.textContent = tarea.title;

                        if (tarea.completed) {
                            tareaTitulo.style.color = "green"
                        } else {
                            tareaTitulo.style.color = "red"
                        }

                        const itemTareaName = `ID: ${persona.id} - Nombre: ${persona.name} - Tarea: `;
                        itemTarea.textContent = itemTareaName;

                        itemTarea.appendChild(tareaTitulo);
                        listadoTarea.appendChild(itemTarea);
                    });

                } else {
                    console.error(`Error al obtener las tareas del usuario ${persona.name}`);
                }
            });

            item.appendChild(verTarea);
            listado.appendChild(item);
        });

    } else {
        console.error("Error: ¡No se pudieron obtener los datos!");
    }
});

function $(elemento) {
    return document.getElementById(elemento);
};