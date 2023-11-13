document.addEventListener("DOMContentLoaded", function () {
    let animals = [
        { id: 1, name: "Rex", type: "Cão" },
        { id: 2, name: "Miau", type: "Gato" },
        { id: 3, name: "Pipoca", type: "Coelho" }
    ];

    const bathSection = document.getElementById("bath");
    const animalList = document.createElement("ul");

    animals.forEach(animal => {
        const listItem = document.createElement("li");
        listItem.textContent = `${animal.name} (${animal.type})`;
        animalList.appendChild(listItem);
    });

    bathSection.appendChild(animalList);
    
    const bathForm = document.getElementById("bathForm");
    const animalSelect = document.getElementById("animalSelect");
    const scheduledAnimals = document.getElementById("scheduledAnimals");

    // Preenchendo as opções do select com a lista de animais
    animals.forEach(animal => {
        const option = document.createElement("option");
        option.value = animal.id;
        option.textContent = `${animal.name} (${animal.type})`;
        animalSelect.appendChild(option);
    });

    bathForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedAnimalId = animalSelect.value;
        const selectedAnimal = animals.find(animal => animal.id == selectedAnimalId);

        // Remover o animal da lista de animais disponíveis
        animals = animals.filter(animal => animal.id != selectedAnimalId);
    });

    // Obtém elementos HTML
    const banhoCountElement = document.getElementById("banho-count");
    const banhoButtonElement = document.getElementById("banho-button");

    let banhoCount = 0;

    // Atualiza a contagem na página
    function updateBanhoCount() {
        banhoCountElement.textContent = banhoCount;
    }

    // Adiciona um evento de clique ao botão
    banhoButtonElement.addEventListener("click", () => {
        banhoCount++; // Aumenta a contagem quando o botão é clicado
        updateBanhoCount(); // Atualiza a contagem na página
    });

    // Inicializa a contagem na página
    updateBanhoCount();
});
