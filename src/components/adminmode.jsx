import { useContext } from 'react';
import { AuthContext } from '../context/context'; // adapte le chemin
import '../styles/admin.css';

export default function AdminMode() {
  const { setIsLogin } = useContext(AuthContext);

  const Logout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  return (
    <div>
      <div className="header-admin">
        <p className="title-admin">Admin Mode</p>
        <button className="button-logout" onClick={Logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
