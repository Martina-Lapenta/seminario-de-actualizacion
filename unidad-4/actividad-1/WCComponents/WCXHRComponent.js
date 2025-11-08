// unidad-4/actividad-1/WCComponents/WCXHRComponent.js
class WCXHRComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // UI del componente (botón + textarea)
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

    btn.addEventListener('click', () => {
      output.value = '';
      statusEl.textContent = 'Solicitando...';

      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

      xhr.onprogress = () => {
        statusEl.textContent = 'Descargando datos...';
      };

      // Cuando termina
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          statusEl.textContent = `Listo (status ${xhr.status}).`;
          try {
            const json = JSON.parse(xhr.responseText);
            output.value = JSON.stringify(json, null, 2);
          } catch {
            
            output.value = xhr.responseText;
          }
        } else {
          statusEl.textContent = `Error HTTP ${xhr.status}`;
          output.value = `No se pudo obtener la respuesta. Código: ${xhr.status}`;
        }
      };

      xhr.onerror = () => {
        statusEl.textContent = 'Error de red.';
        output.value = 'Ocurrió un error de red (verifica tu conexión o intenta de nuevo).';
      };

      xhr.onabort = () => {
        statusEl.textContent = 'Solicitud cancelada.';
      };

      xhr.send();
    });
  }
}

customElements.define('wc-xhr-component', WCXHRComponent);
