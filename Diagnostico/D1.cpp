#include <iostream>
#include <string>

using namespace std;

int main() {
    const string USUARIO_CORRECTO = "Cliente1";
    const string CONTRASENA_CORRECTA = "2025";
    
    string usuarioIngresado, contrasenaIngresada;
    int intentos = 0;
    const int MAX_INTENTOS = 3;

    while (intentos < MAX_INTENTOS) {
        cout << "Ingrese nombre de usuario: ";
        cin >> usuarioIngresado;
        cout << "Ingrese contrasena: ";
        cin >> contrasenaIngresada;

        if (usuarioIngresado == USUARIO_CORRECTO && contrasenaIngresada == CONTRASENA_CORRECTA) {
            cout << "Bienvenido " << usuarioIngresado << "!" << endl;
            return 0; 
        } else {
            intentos++;
            if (intentos == MAX_INTENTOS) {
                cout << "Usuario bloqueado. Contacte al administrador." << endl;
            } else {
                cout << "Usuario y/o contraseña incorrecta." << endl;
            }
        }
    }

    return 0;
}
