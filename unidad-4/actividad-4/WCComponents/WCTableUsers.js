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
    `;
  }

  connectedCallback() {
    const btn = this.shadowRoot.getElementById('btn');
    const tableContainer = this.shadowRoot.getElementById('tableContainer');
    const statusEl = this.shadowRoot.getElementById('status');

    btn.addEventListener('click', async () => {
      statusEl.textContent = 'Solicitando datos...';
      tableContainer.innerHTML = '';

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

        const data = await response.json();

        // Crear la tabla
        const table = document.createElement('table');
        table.classList.add('w3-table', 'w3-bordered', 'w3-striped', 'w3-hoverable');

        // Encabezado
        const header = table.createTHead();
        const headerRow = header.insertRow();
        const headers = ['ID', 'Usuario', 'Nombre', 'Correo', 'Web', 'Celular'];
        headers.forEach(text => {
          const th = document.createElement('th');
          th.textContent = text;
          th.classList.add('w3-light-blue'); 
          headerRow.appendChild(th);
        });

        // Cuerpo
        const tbody = table.createTBody();
        data.forEach(user => {
          const row = tbody.insertRow();

          row.insertCell().textContent = user.id;
          row.insertCell().textContent = user.username;
          row.insertCell().textContent = user.name;

          //  Correo
          const emailCell = row.insertCell();
          const emailTag = document.createElement('span');
          emailTag.textContent = user.email;
          emailTag.classList.add('w3-tag', 'w3-round', 'w3-light-green', 'w3-small');
          emailCell.appendChild(emailTag);

          // Web
          const webCell = row.insertCell();
          const link = document.createElement('a');
          link.href = 'http://' + user.website;
          link.textContent = user.website;
          link.target = '_blank';
          webCell.appendChild(link);

          // Teléfono
          row.insertCell().textContent = user.phone;
        });

        // Agregamos tabla al contenedor
        tableContainer.appendChild(table);
        statusEl.textContent = `Se cargaron ${data.length} usuarios correctamente.`;

      } catch (error) {
        statusEl.textContent = 'Error al obtener los datos.';
        tableContainer.innerHTML = `<p class="w3-text-red">${error.message}</p>`;
      }
    });
  }
}

customElements.define('wc-table-users', WCTableUsers);
