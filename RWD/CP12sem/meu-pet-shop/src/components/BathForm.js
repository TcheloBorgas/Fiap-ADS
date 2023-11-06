import React, { useState } from 'react';

const BathForm = ({ animals, onSchedule }) => {
    const [selectedAnimal, setSelectedAnimal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAnimal) {
            onSchedule(selectedAnimal);
            setSelectedAnimal(''); // Reset the form after submission
        }
    };

    return (
        <div>
            <h2>Agendar Banho</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Selecione o Animal:
                    <select
                        value={selectedAnimal}
                        onChange={(e) => setSelectedAnimal(e.target.value)}
                        required
                    >
                        <option value="">-- Selecione um animal --</option>
                        {animals.map((animal, index) => (
                            <option key={index} value={animal.id}>
                                {animal.name} ({animal.type})
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default BathForm;
