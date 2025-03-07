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

```plaintext
📁 servicio-web-auth  
│── 📄 server.js         # Código del servidor  
│── 📄 database.json     # "Base de datos" en formato JSON  
│── 📄 package.json      # Dependencias del proyecto  
│── 📄 README.md         # Documentación  
```

---

## 🛠️ Instalación y Configuración  

### 1️⃣ Clonar el repositorio  
```sh
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2️⃣ Instalar dependencias  
Ejecuta el siguiente comando para instalar las dependencias necesarias:  
```sh
npm install
```

### 3️⃣ Crear el archivo `database.json` en la raíz del proyecto  

Crea un archivo llamado **`database.json`** en la carpeta raíz del proyecto y agrégale el siguiente contenido:  

```json
{
  "users": []
}
```

### 4️⃣ Iniciar el servidor
```sh
node server.js
```

### 5️⃣ El servidor se ejecutará en:
```arduino
http://localhost:3000
```

---

## 📌 Endpoints Disponibles  

### 🔹 Registro de Usuario  
📍 **Método:** `POST`  
📍 **URL:** `http://localhost:3000/registro`  

#### 📍 Body (JSON):  
```json
{
    "username": "admin",
    "password": "12345"
}
```
#### 📍 Respuesta esperada:
```json
{
    "message": "Usuario registrado exitosamente"
}
```

### 🔹 Inicio de Sesión
📍 **Método:** `POST`  
📍 **URL:** `http://localhost:3000/login`  

#### 📍 Body (JSON):  
```json
{
    "username": "admin",
    "password": "12345"
}
```

#### 📍 Respuesta si las credenciales son correctas:
```json
{
    "message": "Autenticación satisfactoria"
}
```

#### 📍 Respuesta si las credenciales son incorrectas:
```json
{
    "message": "Error en la autenticación"
}
```

---

## 🚀 Pruebas con Postman  

Para probar los endpoints con **Postman**, sigue estos pasos:  

1. **Abrir Postman**.  
2. **Crear una nueva solicitud HTTP**.  
3. **Seleccionar el método** (`POST`) y la **URL** (`http://localhost:3000/register` o `http://localhost:3000/login`).  
4. **Ir a la pestaña "Body"**, seleccionar `"raw"` y elegir `"JSON"`.  
5. **Ingresar los datos en formato JSON** y **enviar la solicitud**.  
6. **Revisar la respuesta JSON** en la sección de respuestas de Postman. 
