import React from 'react';

const BathCount = () => {
  const [bathCount, setBathCount] = React.useState(0);

  const handleBathClick = () => {
    setBathCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Registro de Banhos</h2>
      <p>Animais que tomaram banho: {bathCount}</p>
      <button onClick={handleBathClick}>Tomar Banho</button>
    </div>
  );
};

export default BathCount;
