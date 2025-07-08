import { ApplicationModel } from "./ApplicationModel.js";
import { ApplicationUI } from "./ApplicationUI.js";

const model = new ApplicationModel(sessionStorage); 
const ui = new ApplicationUI(model);
ui.iniciar();
