// import React from 'react';
import AnimalList from './AnimalList';
import animals from './animals';

const Home = () => {
    const handleBathClick = (index) => {
        alert(`Animal ${animals[index]} tomou banho!`);
    };

    return (
        <div>
            <h1>Bem-vindo ao Pet-Shop!</h1>
            <AnimalList animals={animals} onBathClick={handleBathClick} />
        </div>
    );
};

export default Home;
