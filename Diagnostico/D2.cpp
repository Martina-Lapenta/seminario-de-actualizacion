#include <iostream>
#include <string>

using namespace std;

int main() {
    string usuarioCorrecto = "cliente123";
    string contrasenaCorrecta = "limpieza2025";

    string usuarioIngresado, contrasenaIngresada;
    int intentos;
    const int MAX_INTENTOS = 3;
    char opcion;

    while (true) { 
        intentos = 0;

        
        while (intentos < MAX_INTENTOS) {
            cout << "Ingrese nombre de usuario: ";
            cin >> usuarioIngresado;
            cout << "Ingrese contraseña: ";
            cin >> contrasenaIngresada;

            if (usuarioIngresado == usuarioCorrecto && contrasenaIngresada == contrasenaCorrecta) {
                cout << "¡Bienvenido " << usuarioIngresado << "!" << endl;

                
                do {
                    cout << "\nMenú de acciones:\n";
                    cout << "1. Cambiar contraseña\n";
                    cout << "2. Salir\n";
                    cout << "Seleccione una opción: ";
                    cin >> opcion;

                    if (opcion == '1') {
                        string nuevaContrasena;
                        cout << "Ingrese nueva contraseña: ";
                        cin >> nuevaContrasena;
                        contrasenaCorrecta = nuevaContrasena;
                        cout << "Contraseña cambiada exitosamente." << endl;
                    } else if (opcion == '2') {
                        cout << "Saliendo al inicio del sistema...\n" << endl;
                    } else {
                        cout << "Opción inválida. Intente nuevamente.\n";
                    }

                } while (opcion != '2');

                break; 
            } else {
                intentos++;
                if (intentos == MAX_INTENTOS) {
                    cout << "Usuario bloqueado. Contacte al administrador." << endl;
                } else {
                    cout << "Usuario y/o contraseña incorrecta." << endl;
                }
            }
        }
    }

    return 0;
}
