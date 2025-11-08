class WCTableUsers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
      <div class="w3-card w3-white w3-padding">
        <button id="btn" class="w3-button w3-blue w3-margin-bottom">Efectuar Solicitud</button>
        <div id="tableContainer"></div>
        <div id="status" class="w3-small w3-margin-top w3-text-grey"></div>
      </div>
      <wc-modal-dialog id="modal"></wc-modal-dialog>
    `;
  }

  connectedCallback() {
    const btn = this.shadowRoot.getElementById('btn');
    const tableContainer = this.shadowRoot.getElementById('tableContainer');
    const statusEl = this.shadowRoot.getElementById('status');
    const modal = this.shadowRoot.getElementById('modal');

    btn.addEventListener('click', async () => {
      statusEl.textContent = 'Solicitando datos...';
      tableContainer.innerHTML = '';

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
        const data = await response.json();

        const table = document.createElement('table');
        table.classList.add('w3-table', 'w3-bordered', 'w3-striped', 'w3-hoverable');

        const header = table.createTHead();
        const headerRow = header.insertRow();
        ['ID', 'Usuario', 'Nombre', 'Correo', 'Web', 'Celular'].forEach(text => {
          const th = document.createElement('th');
          th.textContent = text;
          th.classList.add('w3-light-blue');
          headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        data.forEach(user => {
          const row = tbody.insertRow();
          row.insertCell().textContent = user.id;
          row.insertCell().textContent = user.username;
          row.insertCell().textContent = user.name;

          const emailCell = row.insertCell();
          const emailTag = document.createElement('span');
          emailTag.textContent = user.email;
          emailTag.classList.add('w3-tag', 'w3-round', 'w3-light-green', 'w3-small');
          emailCell.appendChild(emailTag);

          const webCell = row.insertCell();
          const link = document.createElement('a');
          link.href = 'http://' + user.website;
          link.textContent = user.website;
          link.target = '_blank';
          webCell.appendChild(link);

          row.insertCell().textContent = user.phone;

          // 💡 Evento para abrir el modal
          row.addEventListener('click', () => this.mostrarDetalle(user.id, modal));
        });

        tableContainer.appendChild(table);
        statusEl.textContent = `Se cargaron ${data.length} usuarios correctamente.`;

      } catch (error) {
        statusEl.textContent = 'Error al obtener los datos.';
        tableContainer.innerHTML = `<p class="w3-text-red">${error.message}</p>`;
      }
    });
  }

  // 🧠 Función que se ejecuta al hacer clic en una fila
    async mostrarDetalle(userId, modal) {
    try {
        console.log('Buscando detalles del usuario con ID:', userId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

        const user = await response.json();

        const info = `
        <h4>${user.name} (${user.username})</h4>
        <p><strong>Compañía:</strong> ${user.company.name}</p>
        <p><em>${user.company.catchPhrase}</em></p>
        <p><strong>Dirección:</strong></p>
        <ul>
            <li><b>Calle:</b> ${user.address.street}</li>
            <li><b>Ciudad:</b> ${user.address.city}</li>
            <li><b>Código Postal:</b> ${user.address.zipcode}</li>
        </ul>
        `;

        modal.open(info); // ✅ ahora pasás el contenido al método open()
    } catch (error) {
        console.error(error);
        alert('No se pudo obtener el detalle del usuario.');
    }
    }

}

customElements.define('wc-table-users', WCTableUsers);
