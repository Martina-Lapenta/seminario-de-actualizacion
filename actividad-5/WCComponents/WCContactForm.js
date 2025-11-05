class WCContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
      <form class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
        <h3 class="w3-center">Contáctenos</h3>

        <p><input class="w3-input w3-border" type="text" placeholder="Nombre"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Apellido"></p>
        <p><input class="w3-input w3-border" type="email" placeholder="Correo electrónico"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Teléfono"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Mensaje"></p>

        <p class="w3-center">
          <button type="button" id="sendBtn" class="w3-button w3-blue">Enviar</button>
        </p>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById('sendBtn').addEventListener('click', () => {
      alert('Su consulta fue recibida. A la brevedad lo contactaremos. Gracias.');
    });
  }
}

customElements.define('wc-contact-form', WCContactForm);
