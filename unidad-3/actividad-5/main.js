import './WCComponents/WCModalDialog.js';
import './WCComponents/WCContactForm.js';

const modal = document.getElementById('contactModal');
document.getElementById('contactBtn').addEventListener('click', () => modal.open());
