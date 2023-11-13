import React from 'react';
import AnimalList from '../components/AnimalList';
import BathCount from '../components/BathCount';

const Bath = () => {
  const [animals, setAnimals] = React.useState([
    { id: '1', name: 'Rex' },
    { id: '2', name: 'Bella' },
    { id: '3', name: 'Charlie' }
  ]);

  const handleBathClick = (animalId) => {
    setAnimals(prevAnimals => prevAnimals.filter(animal => animal.id !== animalId));
  };

  return (
    <div>
      <h1>Página de Banho</h1>
      <AnimalList animals={animals} onBathClick={handleBathClick} />
      <BathCount />
    </div>
  );
};

export default Bath;
