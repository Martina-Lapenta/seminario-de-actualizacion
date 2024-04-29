
function getFormValues() {
    let createFormData = {
        name: null,
        lastname: null,
        phone: null
    };
    
    createFormData.name = document.getElementById('nameInput').value;
    createFormData.lastname = document.getElementById('lastnameInput').value;
    createFormData.phone = document.getElementById('phoneInput').value;
    
    return createFormData;
}

// Función para enviar los datos del nuevo usuario al servidor
function onCreateUserButtonClick() {
    fetch('./create.php', { method: 'post', body: JSON.stringify(getFormValues()) })
        .then(response => response.json())
        .then(response => { alert(response.description); })
        .catch(error => console.error('Error al crear el usuario:', error));
}

// Obtener el tbody de la tabla de contactos
const contactsTableBody = document.getElementById('contactsTableBody');

// Función para mostrar los contactos en la tabla
function mostrarContactos(contactos) {
    // Limpiar el contenido anterior de la tabla
    contactsTableBody.innerHTML = '';

    // Iterar sobre los contactos y agregar filas a la tabla
    contactos.forEach(contacto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${contacto.name}</td>
            <td>${contacto.lastname}</td>
            <td>${contacto.phone}</td>
            <td><button onclick="eliminarContacto(${contacto.id})">Eliminar</button></td>
        `;
        contactsTableBody.appendChild(fila);
    });
}

// Función para obtener los contactos desde la base de datos
function obtenerContactos() {
    fetch('./obtener_contactos.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mostrarContactos(data.contacts);
            } else {
                console.error('Error al obtener los contactos:', data.message);
            }
        })
        .catch(error => console.error('Error al obtener los contactos:', error));
}

// Llamar a la función para obtener y mostrar los contactos al cargar la página
obtenerContactos();

// Función para eliminar un contacto
function eliminarContacto(idContacto) {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
        fetch('./eliminar_contacto.php', {
            method: 'post',
            body: JSON.stringify({ id: idContacto })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Eliminar la fila correspondiente al contacto eliminado
                document.getElementById(`contacto-${idContacto}`).remove();
                alert('Contacto eliminado exitosamente.');
            } else {
                alert('Error al eliminar el contacto: ' + data.message);
            }
        })
        .catch(error => console.error('Error al eliminar el contacto:', error));
    }
}


// Event listener para el botón de crear usuario
document.getElementById('createUserButton').addEventListener('click', onCreateUserButtonClick);
