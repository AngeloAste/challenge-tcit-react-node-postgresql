# 📝 Challenge React + Node.js + PostgreSQL – TCIT
**Autor:** Angelo Aste
**Repositorio:** https://github.com/AngeloAste/challenge-tcit-react-node-postgresql

## 📌 Descripción General  
Este proyecto fue desarrollado como parte del **Challenge Técnico TCIT**, que consiste en construir una aplicación **Full Stack** con:

- **Frontend:** React + Redux Toolkit  
- **Backend:** Node.js + Express  
- **Base de datos:** PostgreSQL  
- **CRUD completo de Posts**
Un **Post** debe contener:  
- `name`  
- `description`  

La app incluye creación, listado, filtrado local y eliminación de posts.


<img width="1429" height="924" alt="image" src="https://github.com/user-attachments/assets/557e7d7d-32f0-469f-a16e-ee2c0744a001" />

---

## 🧩 Requerimientos del Challenge  
📍 *Según documento entregado por TCIT.*

### ✔️ Funcionalidades del Frontend  
- Insertar posts  
- Eliminar posts  
- Listar posts  
- Filtrar por nombre (búsqueda local)  
- Estructura con:
  - Formulario  
  - Filtro  
  - Lista en tabla  

### ✔️ Requerimientos del Backend  
- API REST con JSON en camelCase  
- Endpoints:  
  - `GET /posts` → Listar  
  - `POST /posts` → Crear  
  - `DELETE /posts/:id` → Eliminar  
- Base de datos **PostgreSQL**
- Solo se debe llamar a la lista completa **una vez por carga de la vista**

---

## 🗂️ Estructura del Proyecto

```
/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── postController.js
│   │   ├── db/
│   │   │   └── index.js
│   │   ├── models/
│   │   │   └── Post.js
│   │   ├── routes/
│   │   │   └── postRoutes.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostFilter.jsx
│   │   │   └── PostList.jsx
│   │   ├── features/
│   │   │   └── postsSlice.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── store.js
│   ├── index.html
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

---

## 🗄️ Configuración de la Base de Datos

### 1. Instalar PostgreSQL
Si no tienes PostgreSQL instalado, descárgalo desde: https://www.postgresql.org/download/

### 2. Crear la base de datos
```bash
# Acceder a PostgreSQL
psql -U postgres

# Crear la base de datos
CREATE DATABASE postsdb;

# (Opcional) Crear un usuario específico
CREATE USER tuusuario WITH PASSWORD 'tupassword';
GRANT ALL PRIVILEGES ON DATABASE postsdb TO tuusuario;

# Salir
\q
```

**Nota:** La tabla `posts` se crea automáticamente al iniciar el backend por primera vez.

---

## 🚀 Levantar el Backend

### 1. Navegar a la carpeta backend
```bash
cd backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar `.env`
Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

```env
DATABASE_URL=postgres://postgres:tupassword@localhost:5432/postsdb
PORT=3000
FRONTEND_URL=http://localhost:5173
```

**Importante:** Reemplaza `tupassword` con tu contraseña de PostgreSQL.

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

El backend quedará disponible en:
👉 http://localhost:3000
👉 http://localhost:3000/api/posts

---

## ⚛️ Levantar el Frontend

### 1. Abrir una nueva terminal y navegar a frontend
```bash
cd frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. (Opcional) Configurar variables de entorno
Si necesitas apuntar a un backend diferente, crea un archivo `.env`:

```env
VITE_API_URL=http://localhost:3000/api/posts
```

### 4. Ejecutar Vite
```bash
npm run dev
```

La aplicación quedará disponible en:
👉 http://localhost:5173

---

## ✅ Verificación del Funcionamiento

Si todo está correctamente configurado:

1. Abre http://localhost:5173 en tu navegador
2. Verás la interfaz de gestión de posts
3. Intenta crear un post con nombre y descripción
4. Filtra posts escribiendo en el campo de búsqueda y haciendo clic en "Buscar"
5. Elimina un post haciendo clic en el botón "Eliminar"

---

## 🐛 Solución de Problemas

### El backend no se conecta a PostgreSQL
- Verifica que PostgreSQL esté corriendo
- Revisa las credenciales en el archivo `.env`
- Asegúrate de que la base de datos `postsdb` exists

### Error de CORS en el frontend
- Verifica que el backend esté corriendo en el puerto 3000
- Asegúrate de que `FRONTEND_URL` esté configurada correctamente
- Reinicia ambos servidores

### Los cambios no se reflejan
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica la consola del navegador para errores
- Revisa la consola del servidor para logs

---

## 📊 Propuesta Visual
La interfaz sigue la estructura solicitada:

- Filtro con botón "Buscar" y "Limpiar"
- Tabla con columnas: Nombre / Descripción / Acción
- Botón "Eliminar" en cada fila
- Formulario inferior para crear posts

---

## 🛠️ Tecnologías Utilizadas
### **Frontend**
- React 18
- Redux Toolkit
- Axios
- Vite

### **Backend**
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- Dotenv
- CORS

---

## 📎 Características Implementadas
Este challenge fue desarrollado aplicando:

- ✅ Buenas prácticas de estructuras
- ✅ JSON en formato camelCase
- ✅ Código limpio y modular
- ✅ Estado global con Redux Toolkit
- ✅ CRUD completo funcional
- ✅ Arquitectura simple y clara
- ✅ Mensajes de error y status en español
- ✅ Diseño responsive
- ✅ Preparado para deployment en Railway

---

## 🚀 Deployment en Railway

El proyecto está configurado para ser desplegado fácilmente en Railway.

**Características para producción:**
- Backend escucha en `0.0.0.0` para ser accesible públicamente
- Puerto dinámico configurado con `process.env.PORT`
- CORS configurable por entorno
- Variables de entorno documentadas
- Frontend con servidor estático (serve)

---

## 👨‍💻 Autor
**Angelo Aste**
Desarrollador Full Stack
GitHub: https://github.com/AngeloAste
