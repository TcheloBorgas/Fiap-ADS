import { useEffect, useState } from 'react';
import './styles/Stats.css'; // Certifique-se de que o caminho está correto.

const Stats = () => {
  // Estados para os placares dos sets
  const [score, setScore] = useState({
    team1: [0, 0, 0, 0, 0], // Pontos por set para a equipe 1
    team2: [0, 0, 0, 0, 0], // Pontos por set para a equipe 2
  });

  // Estado para o placar final
  const [finalScore, setFinalScore] = useState({ team1: 0, team2: 0 });

  // Estado para os eventos durante o jogo
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Carregar dados salvos do placar dos sets, se houver
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }

    // Carregar dados salvos do placar final, se houver
    const savedFinalScore = localStorage.getItem('finalScore');
    if (savedFinalScore) {
      setFinalScore(JSON.parse(savedFinalScore));
    }

    // Carregar eventos salvos, se houver
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const clearMemory = () => {
    // Limpar todos os dados salvos
    localStorage.removeItem('score');
    localStorage.removeItem('finalScore');
    localStorage.removeItem('events');

    // Resetar estados locais
    setScore({
      team1: [0, 0, 0, 0, 0],
      team2: [0, 0, 0, 0, 0],
    });
    setFinalScore({ team1: 0, team2: 0 });
    setEvents([]);
  };

  return (
    <div className="stats-container">
      <div className="final-score">
        <h2>Placar Final</h2>
        <div className="score-board">
          <div className="team-score">{finalScore.team1}</div>
          <div className="team-score">X</div>
          <div className="team-score">{finalScore.team2}</div>
        </div>
      </div>
      <div className="sets-results">
        <h2>Resultados dos Sets</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1º Set</th>
              <th>2º Set</th>
              <th>3º Set</th>
              <th>4º Set</th>
              <th>5º Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equipe 1</td>
              {score.team1.map((setScore, index) => (
                <td key={index}>{setScore}</td>
              ))}
            </tr>
            <tr>
              <td>Equipe 2</td>
              {score.team2.map((setScore, index) => (
                <td key={index}>{setScore}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="event-list">
        <h2>Estatísticas dos Eventos</h2>
        <ul className="stats-list">
          {events.map((event, index) => (
            <li key={index}>
              {event.description} - {event.player} ({event.team})
            </li>
          ))}
        </ul>
      </div>
      {events.length > 0 && (
        <button onClick={clearMemory} className="clear-button">Limpar Memória</button>
      )}
    </div>
  );
};

export default Stats;
