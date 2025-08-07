Sistema de Gestión de Productos
Un sistema web de gestión de productos con autenticación basada en roles, desarrollado con tecnologías web modernas.

📋 Descripción
Este proyecto es una aplicación web que permite la gestión de productos con un sistema de autenticación diferenciado por roles. Los administradores pueden agregar y eliminar productos, mientras que los usuarios regulares solo pueden visualizar el catálogo de productos.

🚀 Características
Sistema de Autenticación: Login seguro con validación de credenciales- Control de Acceso por Roles: - Admin: Agregar, eliminar y visualizar productos - User: Solo visualizar productos- Interfaz Responsive: Diseñada para funcionar en dispositivos móviles y desktop- Gestión de Datos: Persistencia de datos mediante JSON Server- Navegación Intuitiva: Interfaz de usuario amigable y fácil de usar
🛠️ Tecnologías Utilizadas
Frontend: - HTML5 - CSS3 - JavaScript (Vanilla) - Vite (Build tool y dev server)- Backend: - JSON Server (API REST simulada)- Herramientas de Desarrollo: - Vite para desarrollo y bundling - JSON Server para simulación de API
📦 Instalación
Prerrequisitos
Asegúrate de tener instalado:

Node.js (versión 14 o superior) - npm o hilo
Pasos de Instalación
Clona el repositoriobashgit clone [URL_DEL_REPOSITORIO]cd nombre-del-proyecto2. Instala las dependenciasbashnpminstall3. Instala JSON Server globalmente (si no lo tienes)bashnpminstall -g json-server
🚀 Uso
Modo Desarrollo
Inicia JSON Server (en una terminal)

json-server --watch db.json --port 3000

Inicia el servidor de desarrollo (en otra terminal)

npm run dev

Abre tu navegador en http://localhost:5173 (puerto por defecto de Vite)

Modo Producción
Construye la aplicación

npm run build

Previsualiza la build

npm run preview

👥 Roles de Usuario
Administrador (Admin)
Acceso completo al sistema
Puede agregar nuevos productos
Puede eliminar productos existentes
Puede visualizar todos los productos
Acceso al panel de administración
Usuario Regular (User)
Solo lectura del catálogo
Puede visualizar productos
No puede modificar el inventario
Interfaz simplificada
🗄️ Estructura de Datos
Usuarios (db.json)
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "admin123",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "user",
      "password": "user123",
      "role": "user"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Producto Ejemplo",
      "description": "Descripción del producto",
      "price": 99.99,
      "category": "Categoría",
      "image": "url_imagen"
    }
  ]
}

📁 Estructura del Proyecto
LOGIN REACT/
│
├── login/
│   └── node_modules/
│
├── public/
│
├── src/
│   ├── dashboard.html      # Panel principal de administrador
│   ├── dashboard.js        # Lógica del dashboard
│   ├── login.html          # Página para acceder
│   ├── login.js           # Funcionalidad de login
│   ├── registro.html      # Página de registro de usuarios
│   ├── registro.js        # Lógica del registro
│   └── style.css          # Estilos principales del proyecto
│
├── .gitignore             # Archivos ignorados por git
├── db.json                # Base de datos JSON Server
├── index.html             # Página principal
├── package-lock.json      # Lock file de dependencias
└── package.json           # Configuración y dependencias

🔐 Autenticación
Credenciales por Defecto
Administrador:

Usuario: admin
Contraseña: admin123
Usuario Regular:

Usuario:user
Contraseña:user123
Flujo de Autenticación
El usuario ingresa credenciales en el formulario de login
El sistema verifica las credenciales contra la base de datos JSON
Se almacena el rol del usuario en localStorage/sessionStorage
Se redirige al usuario según su rol y permisos
⚙️ Guiones disponibles
# Inicia el servidor de desarrollo
npm run dev

# Construye la aplicación para producción
npm run build

# Previsualiza la build de producción
npm run preview

# Inicia JSON Server
npm run json-server

# Ejecuta ambos servidores simultáneamente
npm run dev:full

🤝 Contribución
Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Empujar hacia el marco ( git push origin feature/AmazingFeature)
Abre un Pull Request
📝 Notas de Desarrollo
JSON Server simula una API REST completa
Los datos se almacenan en db.json y persisten entre sesiones
Vite proporciona hot-reload para desarrollo rápido
El sistema de roles se maneja en el frontend (considera implementar validación en backend para producción)
🚀 Mejoras Futuras
 Implementar backend real con base de datos
 Agregar validación de formularios más robusta
 Implementar paginación para productos
 Añadir funcionalidad de búsqueda y filtros
 Mejorar la seguridad con tokens JWT
 Agregar tests unitarios e integración
📄 Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para detalles.

👨‍💻 Autor
Rubén

GitHub: @Ruben2208
🙏 Agradecimientos
Vite por la excelente experiencia de desarrollo
JSON Server por facilitar el prototipado rápido
La comunidad de desarrolladores por las mejores prácticas