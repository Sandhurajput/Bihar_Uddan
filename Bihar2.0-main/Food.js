// Recipe data
const recipeData = {
    'aloo-chokha': {
        title: 'Aloo Chokha',
        description: 'Traditional mashed potato dish with mustard oil and fresh aromatics. Often served with Litti or rice.',
        ingredients: [
            '4 large potatoes, boiled and peeled',
            '2-3 green chilies, finely chopped',
            '1 medium onion, finely chopped',
            '2-3 cloves garlic, minced',
            '2-3 tbsp mustard oil',
            'Salt to taste',
            'Coriander leaves for garnish'
        ],
        instructions: [
            'Mash the boiled potatoes thoroughly',
            'Heat mustard oil until smoking point, then let it cool',
            'Add chopped onions, green chilies, and garlic',
            'Mix in salt and remaining mustard oil',
            'Garnish with coriander leaves',
            'Serve hot with litti or rice'
        ],
        videoUrl: 'https://youtu.be/Fde1tefFkdM?si=LghotrOkcUoLo3mK'
    },
    'khaja': {
        title: 'Khaja',
        description: 'Crisp layered sweet made from flour, deep-fried and dipped in sugar syrup; festive and ceremonial.',
        ingredients: [
            '2 cups all-purpose flour (maida)',
            '¼ cup ghee for layering',
            'Water for kneading',
            'Oil for deep frying',
            '2 cups sugar (for syrup)',
            '1 cup water (for syrup)',
            '4-5 cardamom pods, crushed'
        ],
        instructions: [
            'Knead firm dough with flour & water',
            'Roll and apply ghee in layers',
            'Cut into diamond shapes',
            'Deep fry until golden brown',
            'Prepare sugar syrup with cardamom',
            'Dip fried pieces in warm syrup'
        ],
        videoUrl: 'https://youtu.be/15NqNYMNr1g?si=ZQv3ODRyyyd7gJGz'
    },
    'litti-chokha': {
        title: 'Litti Chokha',
        description: 'Wheat flour balls filled with roasted gram flour mix, served with mashed potato-brinjal.',
        ingredients: [
            '2 cups whole wheat flour',
            '1 cup roasted gram flour',
            'Green chilies and spices',
            'Mustard oil',
            '2 potatoes',
            '1 brinjal',
            '3-4 tomatoes'
        ],
        instructions: [
            'Make dough with wheat flour',
            'Prepare spiced gram flour filling',
            'Shape and stuff the littis',
            'Roast on coal/flame',
            'Prepare mashed vegetables',
            'Serve hot with ghee'
        ],
        videoUrl: 'https://youtu.be/N5ZyOiMJaMk?si=qDcNZxOmGURbqdb3'
    },
    'thekua': {
        title: 'Thekua',
        description: 'Traditional Bihari sweet cookie made during Chhath Puja, flavored with cardamom and fennel seeds.',
        ingredients: [
            '2 cups whole wheat flour',
            '1 cup grated jaggery or sugar',
            '½ cup ghee',
            '2-3 cardamom pods, crushed',
            '1 tsp fennel seeds',
            'Water for kneading',
            'Oil for deep frying'
        ],
        instructions: [
            'Mix wheat flour with ghee until crumbly',
            'Add crushed cardamom and fennel seeds',
            'Dissolve jaggery in warm water',
            'Make firm dough with jaggery water',
            'Shape into small cookies with patterns',
            'Deep fry until golden brown'
        ],
        videoUrl: 'https://youtu.be/yl5m3MShSqQ?si=AWk_2kOgv5P4dlK0'
    }
};

// DOM Elements
const recipeCards = document.querySelectorAll('.recipe-card');
const modal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalRecipeTitle');
const modalDesc = document.getElementById('modalRecipeDesc');
const modalIngredients = document.getElementById('modalIngredients');
const modalInstructions = document.getElementById('modalInstructions');
const modalVideoLink = document.getElementById('modalVideoLink');
const closeButtons = document.querySelectorAll('.close');

// Event Listeners
recipeCards.forEach(card => {
    const viewButton = card.querySelector('.view-recipe-btn');
    viewButton.addEventListener('click', () => {
        const recipeId = card.dataset.recipe;
        showRecipe(recipeId);
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Functions
function showRecipe(recipeId) {
    const recipe = recipeData[recipeId];
    if (!recipe) return;

    modalTitle.textContent = recipe.title;
    modalDesc.textContent = recipe.description;
    
    // Populate ingredients
    modalIngredients.innerHTML = recipe.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('');
    
    // Populate instructions
    modalInstructions.innerHTML = recipe.instructions
        .map(instruction => `<li>${instruction}</li>`)
        .join('');
    
    // Set video link
    modalVideoLink.href = recipe.videoUrl;
    
    // Show modal
    modal.style.display = 'block';
}

// End of script