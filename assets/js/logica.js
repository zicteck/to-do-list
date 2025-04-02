window.onload = actualizarVista;

let tareas = [
    { tarea: "Pintar la fachada de la casa", completada: false },
    { tarea: "Comprar comida para el perro", completada: true },
    { tarea: "Pagar la tarjeta de crédito", completada: false }
  ];
  
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("nuevaTarea");
const contador = document.getElementById("contador");
  
// Mostrar u ocultar el formulario
function mostrarFormulario() {
    formulario.style.display = formulario.style.display === "none" ? "block" : "none"; // accede a estilo display de elem con id "formulario" si form está oculto (ternario ?) block: visible, none:oculta
    }
  
// Agregar nueva tarea
function agregar() {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim(); // trim quita espacios de prinicpio y final
    if (texto) {
      tareas.push({ tarea: texto, completada: false }); // agregar con push texto a arreglo tareas
      input.value = ""; // luego limpia campo de texto para escribir nueva tarea

      actualizarVista();
    }
  }
  
// Editar una tarea
function editar(indice) {
    const nuevoTexto = prompt("Editar tarea:", tareas[indice].tarea);
    if (nuevoTexto && nuevoTexto.trim()) {
      tareas[indice].tarea = nuevoTexto.trim();
      actualizarVista();
    }
  }
  
// Eliminar una tarea
function eliminar(indice) {
    tareas.splice(indice, 1);
    actualizarVista();
  }
  
// Marcar como completada
function cambiarEstado(indice) {
    tareas[indice].completada = !tareas[indice].completada; // ! cambia valor de false a true y viceversa
    actualizarVista();
  }
  
// Contador
function actualizarContador() {
    const total = tareas.length;
    const hechas = tareas.filter(t => t.completada).length;
    contador.textContent = `${hechas} de ${total} tareas completadas`;
  }
  
function actualizarVista() {
    cuerpoTabla.innerHTML = "";
  
tareas.forEach((item, i) => {
      const fila = document.createElement("tr");
  


// Checkbox
    const celdaCheck = document.createElement("td");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = item.completada;
    check.onclick = () => cambiarEstado(i);
    celdaCheck.appendChild(check);
  
// Texto
    const celdaTexto = document.createElement("td");
    celdaTexto.textContent = item.tarea;
    if (item.completada) {
      celdaTexto.style.textDecoration = "line-through";
    }
  

// Boton Editar
    const celdaEditar = document.createElement("td");
    const btnEditar = document.createElement("button");
    btnEditar.className = "btn btn-warning btn-sm";
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editar(i);
    celdaEditar.appendChild(btnEditar);
  
// Botón Eliminar
    const celdaEliminar = document.createElement("td");
 const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-danger btn-sm";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => eliminar(i);
    celdaEliminar.appendChild(btnEliminar);
  
    fila.append(celdaCheck, celdaTexto, celdaEditar, celdaEliminar);
      cuerpoTabla.appendChild(fila);
    });
  
    actualizarContador();
  }
  

  