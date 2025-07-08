class CustomLogin extends HTMLElement {
  constructor() {
    super();

    this.labelUser = document.createElement('label');
    this.labelUser.innerText = 'Name';

    this.inputUser = document.createElement('input');
    this.inputUser.type = 'text';
    this.inputUser.required = true;
    this.inputUser.classList.add('w3-input');
    this.inputUser.style.width = '20%';

    this.labelPass = document.createElement('label');
    this.labelPass.innerText = 'Password';

    this.inputPass = document.createElement('input');
    this.inputPass.type = 'password';
    this.inputPass.required = true;
    this.inputPass.classList.add('w3-input');
    this.inputPass.style.width = '20%';
    
    this.btn = document.createElement('button');
    this.btn.innerText = 'Entrar';
    this.btn.classList.add('w3-button', 'w3-section', 'w3-teal', 'w3-ripple');
    this.btn.onclick = this.onLoginClick.bind(this);


    // Radio: Male
    this.radioMale = document.createElement('input');
    this.radioMale.type = 'radio';
    this.radioMale.name = 'gender';
    this.radioMale.value = 'male';
    this.radioMale.checked = true;

    this.labelMale = document.createElement('label');
    this.labelMale.innerText = 'Male';

    // Radio: Female
    this.radioFemale = document.createElement('input');
    this.radioFemale.type = 'radio';
    this.radioFemale.name = 'gender';
    this.radioFemale.value = 'female';

    this.labelFemale = document.createElement('label');
    this.labelFemale.innerText = 'Female';

    // Radio
    this.radioUnknown = document.createElement('input');
    this.radioUnknown.type = 'radio';
    this.radioUnknown.name = 'gender';
    this.radioUnknown.value = '';
    this.radioUnknown.disabled = true;

    // Checkbox
    this.checkboxStay = document.createElement('input');
    this.checkboxStay.type = 'checkbox';
    this.checkboxStay.checked = true;

    this.labelStay = document.createElement('label');
    this.labelStay.innerText = 'Stay logged in';


    this.labelUnknown = document.createElement('label');
    this.labelUnknown.innerText = "Don't know (Disabled)";

  }

  connectedCallback() {
    this.appendChild(this.labelUser);
    this.appendChild(this.inputUser);

    this.appendChild(this.labelPass);
    this.appendChild(this.inputPass);

    this.appendChild(this.radioMale);
    this.appendChild(this.labelMale);
    this.appendChild(document.createElement('br'));

    this.appendChild(this.radioFemale);
    this.appendChild(this.labelFemale);
    this.appendChild(document.createElement('br'));

    this.appendChild(this.radioUnknown);
    this.appendChild(this.labelUnknown);
    this.appendChild(document.createElement('br'));

    this.appendChild(this.checkboxStay);
    this.appendChild(this.labelStay);
    this.appendChild(document.createElement('br'));


    this.appendChild(this.btn);
  }

onLoginClick(event) {
    event.preventDefault(); // Evita que el botón recargue la página

    const usuario = this.inputUser.value;
    const password = this.inputPass.value;
    const stayLoggedIn = this.checkboxStay.checked;
    let genero = '';

    if (this.radioMale.checked) {
        genero = 'Male';
    } else if (this.radioFemale.checked) {
        genero = 'Female';
    } else if (this.radioUnknown.checked) {
        genero = 'Don\'t know';
    }

    alert(`Usuario: ${usuario}\nContraseña: ${password}\nGénero: ${genero}\n¿Mantener sesión iniciada?: ${stayLoggedIn}`);
}


  disconnectedCallback() {
    // En caso de que se quite del DOM, podrías limpiar eventos
  }
}

customElements.define('x-login', CustomLogin);
export { CustomLogin };
