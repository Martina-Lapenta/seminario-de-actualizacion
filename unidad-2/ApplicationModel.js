export class ApplicationModel {
  constructor(storage) {
    this.storage = storage; // puede ser localStorage o sessionStorage
    this.usuarios = this.load("usuarios") || [
      { usuario: "admin1", contraseña: "Admin@123!", rol: "Administrador" },
      { usuario: "cliente1", contraseña: "Cliente@123!", rol: "Cliente" },
      { usuario: "vendedor1", contraseña: "Vendedor@123!", rol: "Vendedor" },
      { usuario: "deposito1", contraseña: "Deposito@123!", rol: "Trabajador de depósito" }
    ];
    this.productos = this.load("productos") || [
      { id: 1, nombre: "Lavandina x 1L", precio: 875.25, stock: 3000 },
      { id: 4, nombre: "Detergente x 500mL", precio: 1102.45, stock: 2010 },
      { id: 22, nombre: "Jabón en polvo x 250g", precio: 650.22, stock: 407 }
    ];
    this.permisosPorRol = {
      "Administrador": ["1", "2", "3", "4", "5", "6"],
      "Vendedor": ["1", "5", "6"],
      "Cliente": ["1", "5", "6"],
      "Trabajador de depósito": ["1", "5"]
    };
  }

  save(key, data) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  load(key) {
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  findUsuario(usuario, contraseña) {
    return this.usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
  }

  crearUsuario(usuario, contraseña, rol) {
    if (this.usuarios.some(u => u.usuario === usuario)) return false;
    this.usuarios.push({ usuario, contraseña, rol });
    this.save("usuarios", this.usuarios);
    return true;
  }

  cambiarContraseña(usuarioObj, nueva) {
    usuarioObj.contraseña = nueva;
    this.save("usuarios", this.usuarios);
  }

  getPermisos(rol) {
    return this.permisosPorRol[rol] || [];
  }

  getProductos() {
    return this.productos;
  }

  agregarProducto(prod) {
    this.productos.push(prod);
    this.save("productos", this.productos);
  }

  editarProducto(id, nuevoProd) {
    const idx = this.productos.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.productos[idx] = { ...this.productos[idx], ...nuevoProd };
      this.save("productos", this.productos);
      return true;
    }
    return false;
  }

  eliminarProducto(id) {
    const idx = this.productos.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.productos.splice(idx, 1);
      this.save("productos", this.productos);
      return true;
    }
    return false;
  }

  comprarProducto(id, cantidad) {
    const producto = this.productos.find(p => p.id === id);
    if (!producto || producto.stock < cantidad) return false;
    producto.stock -= cantidad;
    this.save("productos", this.productos);
    return producto;
  }

  validarContraseña(pass) {
    if (pass.length < 8 || pass.length > 16) return false;
    const mayus = /[A-Z]/.test(pass);
    const simbolos = pass.match(/[^A-Za-z0-9]/g);
    return mayus && simbolos && simbolos.length >= 2;
  }
}
