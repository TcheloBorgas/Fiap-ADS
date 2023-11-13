import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/new-game" className="nav-link">Novo Jogo</Link>
      <Link to="/stats" className="nav-link">Estatísticas</Link>
    </nav>
  );
};

export default Navigation;
