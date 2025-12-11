
const Home = () => (
  <div className="card">
    <div className="card-header">
      <div>
        <div className="page-title-row">
          <span className="page-title-star">✦</span>
          <h1 className="page-title">Bienvenido a TaskNest</h1>
        </div>
        <p className="page-subtitle">
          Administra tus tareas personales con autenticación segura y un CRUD completo
          construido con Node, MongoDB y React.
        </p>
      </div>
    </div>
    <ul>
      <li>Registro y login de usuarios con contraseñas encriptadas.</li>
      <li>Panel privado donde cada usuario gestiona sus propias tareas.</li>
      <li>Operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) en tiempo real.</li>
    </ul>
  </div>
);

export default Home;