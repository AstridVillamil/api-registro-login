# 🚀 Servicio Web de Registro e Inicio de Sesión en Node.js  

Este es un servicio web desarrollado con **Node.js** y **Express** que permite registrar usuarios y autenticarlos utilizando un archivo JSON (`database.json`) como base de datos.  

---

## 📌 Características  

- ✅ Registro de usuarios con almacenamiento en un archivo JSON.  
- ✅ Autenticación mediante usuario y contraseña.  
- ✅ Respuestas en formato JSON para facilitar la integración.  
- ✅ Pruebas con **Postman**.  

---

## 📂 Estructura del Proyecto 

📁 servicio-web-auth
│── 📄 server.js # Código del servidor
│── 📄 database.json # "Base de datos" en formato JSON
│── 📄 package.json # Dependencias del proyecto
│── 📄 README.md # Documentación

---

## 🛠️ Instalación y Configuración  

### 1️⃣ Clonar el repositorio  
```sh
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

2️⃣ Instalar dependencias

npm install

4️⃣ Iniciar el servidor

node server.js

5️⃣ El servidor se ejecutará en:

http://localhost:3000

📌 Endpoints Disponibles

🔹 Registro de Usuario
Método: POST
URL: http://localhost:3000/register
Body (JSON):
{
    "username": "admin",
    "password": "12345"
}
Respuesta esperada:
{
    "message": "Usuario registrado exitosamente"
}

Pruebas con Postman
1️⃣ Abrir Postman
2️⃣ Crear una nueva solicitud HTTP
3️⃣ Seleccionar el método (POST) y la URL (http://localhost:3000/register o http://localhost:3000/login)
4️⃣ En la pestaña "Body", seleccionar "raw" y elegir "JSON"
5️⃣ Enviar la solicitud y revisar la respuesta JSON

