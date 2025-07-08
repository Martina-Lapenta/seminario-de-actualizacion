export class ApplicationUI {
  constructor(model) {
    this.model = model;
  }

  iniciar() {
    let opcion;
    do {
      opcion = prompt("Menú principal:\n1. Iniciar sesión\nX. Salir").trim().toUpperCase();
      if (opcion === "1") this.iniciarSesion();
    } while (opcion !== "X");
    alert("Gracias por usar el sistema.");
  }

  iniciarSesion() {
    let intentos = 0;
    const MAX = 3;
    while (intentos < MAX) {
      const u = prompt("Usuario:");
      const p = prompt("Contraseña:");
      const user = this.model.findUsuario(u, p);
      if (user) {
        alert(`Bienvenido/a ${u}. Rol: ${user.rol}`);
        this.menuUsuario(user);
        return;
      }
      intentos++;
      alert(intentos === MAX ? "Usuario bloqueado." : "Datos incorrectos.");
    }
  }

  menuUsuario(user) {
    let op;
    const esAdmin = user.rol === "Administrador";
    const permisos = this.model.getPermisos(user.rol);

    do {
      let menu = "Menú:\n1. Listar\n2. Nuevo\n3. Editar\n4. Eliminar\n5. Cambiar contraseña\n6. Comprar\n";
      if (esAdmin) menu += "7. Crear usuario\n";
      menu += "X. Salir";

      op = prompt(menu).trim().toUpperCase();
      if (op === "X") break;

      if (!permisos.includes(op) && !(op === "7" && esAdmin)) {
        alert("Acceso denegado.");
        continue;
      }

      if (op === "1") this.listar();
      else if (op === "2") this.nuevo();
      else if (op === "3") this.editar();
      else if (op === "4") this.eliminar();
      else if (op === "5") this.cambiarContraseña(user);
      else if (op === "6") this.comprar();
      else if (op === "7") this.crearUsuario();

    } while (op !== "X");
  }

  listar() {
    const productos = this.model.getProductos();
    if (productos.length === 0) return alert("Sin artículos.");
    let msg = "Artículos:\n";
    productos.forEach(p => {
      msg += `ID: ${p.id} | ${p.nombre} | $${p.precio} | Stock: ${p.stock}\n`;
    });
    alert(msg);
  }

  nuevo() {
    const id = parseInt(prompt("ID:"));
    const nombre = prompt("Nombre:");
    const precio = parseFloat(prompt("Precio:"));
    const stock = parseInt(prompt("Stock:"));
    if (!nombre || isNaN(id) || isNaN(precio) || isNaN(stock)) return alert("Datos inválidos.");
    if (this.model.getProductos().some(p => p.id === id)) return alert("ID duplicado.");
    this.model.agregarProducto({ id, nombre, precio, stock });
    alert("Artículo agregado.");
  }

  editar() {
    const id = parseInt(prompt("ID a editar:"));
    const nombre = prompt("Nuevo nombre:");
    const precio = parseFloat(prompt("Nuevo precio:"));
    const stock = parseInt(prompt("Nuevo stock:"));
    if (!nombre || isNaN(precio) || isNaN(stock)) return alert("Datos inválidos.");
    if (this.model.editarProducto(id, { nombre, precio, stock })) {
      alert("Actualizado.");
    } else {
      alert("No encontrado.");
    }
  }

  eliminar() {
    const id = parseInt(prompt("ID a eliminar:"));
    if (this.model.eliminarProducto(id)) {
      alert("Eliminado.");
    } else {
      alert("No encontrado.");
    }
  }

  cambiarContraseña(user) {
    const nueva = prompt("Nueva contraseña:");
    if (this.model.validarContraseña(nueva)) {
      this.model.cambiarContraseña(user, nueva);
      alert("Contraseña cambiada.");
    } else {
      alert("Contraseña inválida.");
    }
  }

  comprar() {
    const id = parseInt(prompt("ID del producto:"));
    const cantidad = parseInt(prompt("Cantidad:"));
    const result = this.model.comprarProducto(id, cantidad);
    if (result) {
      alert(`Compra exitosa: ${cantidad} x ${result.nombre}. Stock restante: ${result.stock}`);
    } else {
      alert("Compra inválida o stock insuficiente.");
    }
  }

  crearUsuario() {
    const usuario = prompt("Nuevo usuario:");
    const contraseña = prompt("Contraseña:");
    const rol = prompt("Rol:");
    if (!["Administrador", "Cliente", "Vendedor", "Trabajador de depósito"].includes(rol)) return alert("Rol inválido.");
    if (!this.model.validarContraseña(contraseña)) return alert("Contraseña débil.");
    if (this.model.crearUsuario(usuario, contraseña, rol)) {
      alert("Usuario creado.");
    } else {
      alert("Ya existe.");
    }
  }
}
