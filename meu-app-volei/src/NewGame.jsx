import { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import GameControl from './components/GameControl';

const NewGame = () => {
    // Estado para a pontuação de cada equipe em cada set.
    const [scores, setScores] = useState({
        team1: [0, 0, 0, 0, 0], // Pontuação para equipe 1 em cada set
        team2: [0, 0, 0, 0, 0]  // Pontuação para equipe 2 em cada set
    });
    // Estado para o set atual
    const [currentSet, setCurrentSet] = useState(0);
    // Estado para o placar final
    const [finalScore, setFinalScore] = useState({ team1: 0, team2: 0 });
    // Estado para eventos (pontos marcados, etc.)
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem('events');
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const handleScore = (team, scorer) => {
        // Atualiza a pontuação por set e final
        setScores(prevScores => {
            const newScores = { ...prevScores };
            newScores[team][currentSet] += 1;

            if (newScores[team][currentSet] === 25) { // Se uma equipe alcançou 25 pontos neste set
                setFinalScore(prevFinalScore => ({
                    ...prevFinalScore,
                    [team]: prevFinalScore[team] + 1
                }));
                if (currentSet < 4) {
                    setCurrentSet(prevSet => prevSet + 1); // Passa para o próximo set
                }
            }
            return newScores;
        });

        // Cria e armazena o evento de pontuação
        const newEvent = {
            description: `${scorer} marcou um ponto no set ${currentSet + 1}`,
            player: scorer,
            team: team === 'team1' ? 'Equipe 1' : 'Equipe 2'
        };
        setEvents(prevEvents => {
            const updatedEvents = [...prevEvents, newEvent];
            localStorage.setItem('events', JSON.stringify(updatedEvents));
            return updatedEvents;
        });
    };

    return (
        <div>
            <h2>Nova Partida</h2>
            <Scoreboard scoreTeam1={finalScore.team1} scoreTeam2={finalScore.team2} />
            <GameControl onScore={handleScore} />
            <div className="event-list">
                {events.map((event, index) => (
                    <p key={index}>{event.description} - {event.player} ({event.team})</p>
                ))}
            </div>
        </div>
    );
};

export default NewGame;

