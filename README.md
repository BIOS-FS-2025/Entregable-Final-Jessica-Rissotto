# TaskNest – Proyecto Fullstack (Frontend + Backend)

TaskNest es una aplicación web fullstack desarrollada con **React**, **Node.js**, **Express** y **MongoDB**.
Permite que un usuario se registre, inicie sesión y gestione sus tareas personales mediante un CRUD completo,
todo protegido con autenticación basada en **JSON Web Tokens (JWT)**.

Este proyecto está preparado para ser ejecutado en local y usado como demo en una defensa de proyecto final.

---

## 🧱 Estructura de carpetas

```bash
tasknest-fullstack-final/
├── backend/      # API REST (Node + Express + MongoDB)
└── frontend/     # Aplicación React (Vite)
```

---

## ⚙️ 1. Puesta en marcha del BACKEND

### 1.1. Entrar a la carpeta backend

```bash
cd backend
```

### 1.2. Instalar dependencias

```bash
npm install
```

### 1.3. Configurar variables de entorno

Se incluye un archivo `.env.example`. Crea el archivo `.env` copiando ese contenido:

```bash
cp .env.example .env
```

Asegúrate de que `MONGO_URI` apunte a tu instancia de MongoDB local o a MongoDB Atlas, por ejemplo:

```env
MONGO_URI=mongodb://127.0.0.1:27017/tasknest
JWT_SECRET=cambia_este_secreto_por_uno_mas_seguro
PORT=5000
```

### 1.4. Iniciar el servidor backend

En la misma carpeta `backend`:

```bash
npm run dev
```

Si todo está bien, deberías ver en la consola algo como:

```text
✅ MongoDB conectado
🚀 Servidor escuchando en el puerto 5000
```

La API quedará disponible en:

```text
http://localhost:5000
http://localhost:5000/api/auth
http://localhost:5000/api/tasks
```

---

## 💻 2. Puesta en marcha del FRONTEND

### 2.1. Entrar a la carpeta frontend

Abre una **nueva terminal** desde la raíz del proyecto y ejecuta:

```bash
cd frontend
```

### 2.2. Instalar dependencias

```bash
npm install
```

### 2.3. Iniciar la aplicación React

```bash
npm run dev
```

Vite te indicará una URL parecida a:

```text
http://localhost:5173
```

Abre ese enlace en tu navegador.

---

## 🔐 3. Flujo de autenticación

1. Desde el frontend, ve a la pantalla de **Registro**.
2. Crea un usuario nuevo (nombre, email, contraseña).
3. El backend encripta la contraseña y genera un **token JWT**.
4. El frontend guarda el token en `localStorage` y configura Axios para enviar el token en cada petición.
5. A partir de ahí, el usuario puede acceder al **Dashboard**, donde se hacen todas las operaciones CRUD.

Las rutas de `/api/tasks` están protegidas por un middleware que comprueba el token:

- Si el token es válido → permite el acceso.
- Si no → responde con 401 (No autorizado).

---

## ✅ 4. Funcionalidades principales

### Autenticación

- Registro de usuarios.
- Inicio de sesión.
- Logout.
- Persistencia de sesión mediante `localStorage`.

### Gestión de tareas (CRUD)

- Crear nuevas tareas.
- Listar tareas del usuario en el Dashboard.
- Editar tareas existentes.
- Eliminar tareas.

Cada tarea está asociada al usuario autenticado mediante el campo `user` en el modelo `Task`.

---

## 🎨 5. Diseño y experiencia de usuario

El frontend incluye:

- **Fondo animado** con gradiente.
- Inputs con bordes que se iluminan al hacer foco.
- Botones con efecto glow y sombras suaves.
- Tarjetas con efecto glassmorphism para formularios y lista de tareas.
- Pantallas de **Login** y **Registro** con estilos diferenciados.
- Layout responsivo que se adapta a pantallas pequeñas.

---

## 🧪 6. Pruebas rápidas

Para comprobar que todo funciona:

1. Levanta el backend (`npm run dev` en `backend`).
2. Levanta el frontend (`npm run dev` en `frontend`).
3. Regístrate como nuevo usuario.
4. Cierra sesión y vuelve a iniciar.
5. Crea, edita y elimina tareas desde el Dashboard.

Si algo falla, revisa:

- Consola del backend (errores de conexión a MongoDB).
- Consola del navegador (errores de red o CORS).
- Que la URL base de Axios (`http://localhost:5000/api`) coincida con el puerto donde corre el backend.

---

## 🧑‍💻 Autora

Proyecto preparado para la defensa de proyecto final de **Jessica Rissotto**.
