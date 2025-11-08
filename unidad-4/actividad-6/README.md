En esta unidad trabajé con WebComponents que usan fetch para pedir datos a una API y mostrarlos en pantalla. En la última actividad, mi componente muestra una tabla con los usuarios y un modal con más información.

Responsabilidad Única:
Mi componente hace varias cosas (trae datos, arma la tabla y maneja el modal). Para mejorar, podría separar esas tareas: una clase que obtenga los datos, otra que solo muestre la tabla y mantener el modal aparte.

Abierto/Cerrado:
Si quisiera mostrar otros datos (por ejemplo, posts), tendría que cambiar el código. Podría crear un componente más general que reciba la URL y los campos a mostrar, sin tener que modificarlo.

Liskov y Segregación de Interfaces:
No aplican porque no uso herencia ni interfaces.

Inversión de Dependencias:
El componente depende directamente del fetch y de la URL de la API. Lo ideal sería tener una clase que maneje las peticiones (por ejemplo, UserService) y que el componente solo la use.

Conclusión:
El proyecto cumple su función, pero se podría mejorar separando responsabilidades y haciendo el código más modular y reutilizable.