// import React from 'react';
import BathForm from '../components/BathForm';
import { animals } from './path/to/your/animals.js';  // Ajuste este caminho

const Schedule = () => {

  const handleSchedule = (animalType) => {
    // Aqui, você pode adicionar a lógica para agendar o banho, 
    // como atualizar um banco de dados ou alterar o estado global.
    console.log("Banho agendado para:", animalType);
  };

  return (
    <div>
      <h1>Agendar Banho</h1>
      <BathForm animals={animals} onSchedule={handleSchedule} />
    </div>
  );
};

export default Schedule;
