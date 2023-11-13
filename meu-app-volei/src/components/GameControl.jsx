import { useState } from 'react';
import PropTypes from 'prop-types';

const GameControl = ({ onScore }) => {
    const [scorer, setScorer] = useState('');

    const handleScore = (team) => {
        onScore(team, scorer);
        setScorer(''); // Reset the scorer after each point
    };

    return (
        <div className="game-control">
            <input 
                type="text" 
                placeholder="Nome do jogador que pontuou" 
                value={scorer} 
                onChange={(e) => setScorer(e.target.value)} 
            />
            <button onClick={() => handleScore('team1')}>Ponto Equipe 1</button>
            <button onClick={() => handleScore('team2')}>Ponto Equipe 2</button>
        </div>
    );
};

GameControl.propTypes = {
    onScore: PropTypes.func.isRequired
};

export default GameControl;

