import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bem-vindo ao Aplicativo de Vôlei</h1>
            <nav>
                <ul>
                    <li><Link to="/new-game">Iniciar Novo Jogo</Link></li>
                    <li><Link to="/stats">Estatísticas</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
