const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const DATABASE_FILE = "database.json";

app.use(bodyParser.json()); // Middleware para procesar JSON

// Función para leer la "base de datos" (archivo JSON)
const readDatabase = () => {
  if (!fs.existsSync(DATABASE_FILE)) {
    fs.writeFileSync(DATABASE_FILE, JSON.stringify({ users: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DATABASE_FILE));
};

// Función para escribir en la "base de datos" (archivo JSON)
const writeDatabase = (data) => {
  fs.writeFileSync(DATABASE_FILE, JSON.stringify(data, null, 2));
};

// Endpoint para registrar un nuevo usuario
app.post("/registro", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Usuario y contraseña son obligatorios" });
  }

  let db = readDatabase();
  let userExists = db.users.some((user) => user.username === username);

  if (userExists) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  db.users.push({ username, password }); // Agregar usuario
  writeDatabase(db); // Guardar en el archivo

  res.status(201).json({ message: "Usuario registrado exitosamente" });
});

// Endpoint para iniciar sesión
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Usuario y contraseña son obligatorios" });
  }

  let db = readDatabase();
  let user = db.users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.json({ message: "Autenticación satisfactoria" });
  } else {
    res.status(401).json({ message: "Error en la autenticación" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
