import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <div className="brand-logo">✓</div>
          <span>TaskNest</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          {user && (
            <Link to="/dashboard" className="nav-link">
              Panel
            </Link>
          )}
        </nav>
        <div className="nav-user">
          {user ? (
            <>
              <span>Hola, {user.name}</span>
              <button className="btn btn-ghost" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Registro
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
