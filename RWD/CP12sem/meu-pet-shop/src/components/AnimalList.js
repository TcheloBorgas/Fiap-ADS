// import React from 'react';

const AnimalList = ({ animals, onBathClick }) => {
  return (
    <div>
      <h2>Animais Disponíveis</h2>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            {animal}
            <button onClick={() => onBathClick(index)}>Tomar Banho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
