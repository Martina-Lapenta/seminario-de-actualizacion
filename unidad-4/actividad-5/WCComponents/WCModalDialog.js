class WCModalDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
      <div id="id01" class="w3-modal">
        <div class="w3-modal-content w3-card-4 w3-animate-top">
          <header class="w3-container w3-blue">
            <span id="closeBtn" class="w3-button w3-display-topright">&times;</span>
            <h3>Detalle del usuario</h3>
          </header>
          <div class="w3-container">
            <!-- Contenedor del contenido dinámico -->
            <div id="modalContent"></div>
            <div class="w3-section w3-right-align">
              <button id="close" class="w3-button w3-red">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    // Botones de cierre
    const closeBtn = this.shadowRoot.getElementById('closeBtn');
    const close = this.shadowRoot.getElementById('close');

    closeBtn.addEventListener('click', () => this.close());
    close.addEventListener('click', () => this.close());
  }

  // 🟢 Método para abrir el modal y mostrar contenido
  open(content = '') {
    const modal = this.shadowRoot.getElementById('id01');
    const contentContainer = this.shadowRoot.getElementById('modalContent');
    contentContainer.innerHTML = content;
    modal.style.display = 'block';
  }

  // 🔴 Método para cerrar el modal
  close() {
    const modal = this.shadowRoot.getElementById('id01');
    modal.style.display = 'none';
  }
}

customElements.define('wc-modal-dialog', WCModalDialog);
