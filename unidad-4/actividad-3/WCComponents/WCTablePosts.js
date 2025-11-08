class WCTablePosts extends HTMLElement {
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
        // Hacemos la solicitud al servidor
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

        // Convertimos la respuesta en JSON (array de posts)
        const data = await response.json();

        // Creamos la tabla
        const table = document.createElement('table');
        table.classList.add('w3-table', 'w3-bordered', 'w3-striped');

        // Encabezado
        const header = table.createTHead();
        const headerRow = header.insertRow();
        ['ID', 'Título', 'Contenido'].forEach(text => {
          const th = document.createElement('th');
          th.textContent = text;
          headerRow.appendChild(th);
        });

        // Cuerpo de la tabla
        const tbody = table.createTBody();
        data.forEach(post => {
          const row = tbody.insertRow();
          const cellId = row.insertCell();
          const cellTitle = row.insertCell();
          const cellBody = row.insertCell();

          cellId.textContent = post.id;
          cellTitle.textContent = post.title;
          cellBody.textContent = post.body;
        });

        // Insertamos la tabla en el contenedor
        tableContainer.appendChild(table);
        statusEl.textContent = `Se cargaron ${data.length} posts correctamente.`;
      } catch (error) {
        statusEl.textContent = 'Error al obtener los datos.';
        tableContainer.innerHTML = `<p class="w3-text-red">${error.message}</p>`;
      }
    });
  }
}

customElements.define('wc-table-posts', WCTablePosts);
