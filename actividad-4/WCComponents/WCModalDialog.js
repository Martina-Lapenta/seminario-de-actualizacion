class WCModalDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
      <div class="w3-modal" id="modal">
        <div class="w3-modal-content w3-animate-top w3-card-4 w3-padding">
          <div class="w3-container">
            <span id="closeBtn" class="w3-button w3-display-topright">&times;</span>
            <slot></slot>
            <div class="w3-center w3-section">
              <button id="cancelBtn" class="w3-button w3-red w3-margin-right">Cancelar</button>
              <button id="acceptBtn" class="w3-button w3-green">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.modal = this.shadowRoot.getElementById('modal');
    this.shadowRoot.getElementById('closeBtn').onclick = () => this.close();
    this.shadowRoot.getElementById('cancelBtn').onclick = () => this.close();
    this.shadowRoot.getElementById('acceptBtn').onclick = () => {
      alert('Acción aceptada.');
      this.close();
    };
  }

  open() {
    this.modal.style.display = 'block';
  }

  close() {
    this.modal.style.display = 'none';
  }
}

customElements.define('wc-modal-dialog', WCModalDialog);
