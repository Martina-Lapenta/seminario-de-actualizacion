class WCFetchComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
      <div class="w3-card w3-padding w3-white" style="max-width:700px">
        <button id="btn" class="w3-button w3-blue w3-margin-bottom">
          Efectuar Solicitud
        </button>
        <textarea id="output" class="w3-input w3-border" rows="12" placeholder="Aquí verás la respuesta..."></textarea>
        <div id="status" class="w3-small w3-margin-top w3-text-grey"></div>
      </div>
    `;
  }

  connectedCallback() {
    const btn = this.shadowRoot.getElementById('btn');
    const output = this.shadowRoot.getElementById('output');
    const statusEl = this.shadowRoot.getElementById('status');

    btn.addEventListener('click', async () => {
      output.value = '';
      statusEl.textContent = 'Solicitando...';

      try {
        // FETCH hace el pedido al servidor
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Si no vino bien, lanza error
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`);
        }

        // Convertimos la respuesta a JSON
        const data = await response.json();

        // Mostramos el resultado formateado
        output.value = JSON.stringify(data, null, 2);
        statusEl.textContent = `Listo (status ${response.status})`;
      } catch (error) {
        // Si hubo algún problema (internet, URL, etc.)
        statusEl.textContent = 'Error al realizar la solicitud';
        output.value = error.message;
      }
    });
  }
}

customElements.define('wc-fetch-component', WCFetchComponent);
