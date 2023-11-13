import PropTypes from 'prop-types';

const Scoreboard = ({ scoreTeam1, scoreTeam2 }) => {
    return (
        <div className="scoreboard">
            <div className="team">
                <h2>Equipe 1</h2>
                <p>Pontos: {scoreTeam1}</p>
            </div>
            <div className="team">
                <h2>Equipe 2</h2>
                <p>Pontos: {scoreTeam2}</p>
            </div>
        </div>
    );
};

Scoreboard.propTypes = {
    scoreTeam1: PropTypes.number.isRequired,
    scoreTeam2: PropTypes.number.isRequired
};

export default Scoreboard;



