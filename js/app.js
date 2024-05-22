// Ejercicio 1
const ejercicio = document.querySelectorAll(".ejercicio");

ejercicio.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.color = "red";
  });
});

ejercicio.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.style.color = "black";
  });
});

// Ejercicio 2
const respuesta2 = document.querySelector("#respuesta2");
const txtAddList = document.querySelector("#txt-add-list");
const btnAddList = document.querySelector("#btn-add-list");
const btnRemoveList = document.querySelector("#btn-remove-list");

btnAddList.addEventListener("click", (e) => {
  e.preventDefault();
  if (txtAddList.value !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `${txtAddList.value}`;
    nuevaTarea.className = "item-list";
    respuesta2.appendChild(nuevaTarea);
    txtAddList.value = "";
  }
});
btnRemoveList.addEventListener("click", (e) => {
  e.preventDefault();
  respuesta2.removeChild(
    respuesta2.children[
      prompt(`Ingrese el numero de la tarea que desea eliminar`) - 1
    ]
  );
});

// Ejercicio 3
const eliminarTodos = document.querySelector("#btn-remove-all");

eliminarTodos.addEventListener("click", (e) => {
    e.preventDefault();
    while(respuesta2.firstChild){
        respuesta2.removeChild(respuesta2.firstChild);
    }
});

// Ejercicio 4
document.querySelector('#regresarInicio').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#inicio').scrollIntoView({
        behavior: 'smooth'
      });
});

// Ejercicio 5
const txtName = document.querySelector("#txtName");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
nameError.style.color = "red";
emailError.style.color = "red";

email.addEventListener("DOMFocusOut", () => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email.value)) {
    emailError.textContent = "El formato de correo no es correcto";
  } else {
    emailError.textContent = "";
  }
});

txtName.addEventListener("DOMFocusOut", () => {
  if (!isNaN(txtName.value) || txtName.value.trim() == "") {
    nameError.textContent = "El nombre no tiene un formato adecuado";
  } else {
    nameError.textContent = "";
  }
});

// Ejercicio 6
const titulos = document.querySelectorAll(".tituloEjercicios");
const btnCambiarFondo = document.querySelector("#cambiarFondo");

btnCambiarFondo.addEventListener("click", () => {
  titulos.forEach((element) => {
    element.classList.toggle("text-danger");
  });
});

// Ejercicio 7
const busqueda = document.querySelector("#busqueda");
const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener("click", () => {
  const searchText = busqueda.value;
  if (searchText) {
    const found = window.find(
      searchText,
      false,
      false,
      true,
      false,
      true,
      false
    );
    console.log(found);
  }
});

// Ejercicio 8
const galeria = document.querySelectorAll(".img-thumbnail");

let imgnActual = 0;
const imgnPrincipal = document.querySelector("#imgnPrincipal");

const actualizarImagen = (imgnActual) => {
  imgnPrincipal.src = galeria[imgnActual].src;
};

actualizarImagen(imgnActual);
const btnNext = document.querySelector("#btnNext");
btnNext.addEventListener("click", () => {
  imgnActual = (imgnActual + 1 + galeria.length) % galeria.length;
  actualizarImagen(imgnActual);
});

const btnPrevious = document.querySelector("#btnPrevious");
btnPrevious.addEventListener("click", () => {
  imgnActual = (imgnActual - 1 + galeria.length) % galeria.length;
  actualizarImagen(imgnActual);
});

// EJercicio 9
titulos.forEach((element) => {
  const noVisible = document.createElement("div");
  noVisible.innerHTML = `<button class="btn btn-outline-dark">Ocultar</button>`;

  const visible = document.createElement("div");
  visible.innerHTML = `<button class="btn btn-outline-dark">Visualizar</button>`;
  element.appendChild(visible);
  element.appendChild(noVisible);
  visible.classList.toggle("d-none");

  element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(element.nextElementSibling);
    element.nextElementSibling.classList.toggle("d-none");
    noVisible.classList.toggle("d-none");
    visible.classList.toggle("d-none");
  });
});

// Ejercicio 10
setInterval(() => {
  document.querySelector("#reloj").textContent =
    new Date().toLocaleTimeString();
}, 1000);
