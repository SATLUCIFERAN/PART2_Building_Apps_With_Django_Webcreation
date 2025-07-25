

// ################ ChapterIV 4.2.1 Writing Your First JavaScript Spell #####################

// This is a JavaScript comment (single-line)

/*
This is a multi-line JavaScript comment.
It's great for longer explanations.
// */

// // Your first JavaScript enchantment: logging a message to the console
// console.log("JavaScript magic is active!");

// // Variables in JavaScript (using 'let' for reassignable variables)
// let apprenticeName = "Elara";
// let spellCount = 3;
// let isEnchanted = true;

// console.log("Apprentice:", apprenticeName);
// console.log("Spells known:", spellCount);
// console.log("Is the item enchanted?", isEnchanted);

// // Basic arithmetic
// let potionStrength = 10;
// let ingredientBoost = 5;
// let finalStrength = potionStrength + ingredientBoost;
// console.log("Final potion strength:", finalStrength);




// ####################### ChapterIV 4.2.3 Beyond console.log(): Handy Console Tricks #####################

// console.log("JavaScript magic is active!");

// Variables in JavaScript (using 'let' for reassignable variables)
// let apprenticeName = "Elara";
// let spellCount = 3;
// let isEnchanted = true;

// console.log("Apprentice:", apprenticeName);
// console.log("Spells known:", spellCount);
// console.log("Is the item enchanted?", isEnchanted);

// // Basic arithmetic
// let potionStrength = 10;
// let ingredientBoost = 5;
// let finalStrength = potionStrength + ingredientBoost;
// console.log("Final potion strength:", finalStrength);


// // Beyond console.log(): Handy Console Tricks

// const spellsData = [
//     { spell: "Levitate", power: 5, manaCost: 2 },
//     { spell: "Invisibility", power: 8, manaCost: 4 },
//     { spell: "Fireball", power: 10, manaCost: 6 }
// ];
// console.warn("Watch out! Mana levels are low.");
// console.error("Oops, that spell failed to cast!");
// console.table(spellsData);
// console.group("Potion Recipe Details");
// console.log("Base ingredient: Water of Clarity");
// console.log("Add: 3 drops of Dragon's Blood");
// console.log("Stir clockwise 7 times.");
// console.groupEnd();



// ############### ChapterIV 4.4.3 Toggling Classes & Attributes (Better Styling with JavaScript) #############

console.log("JavaScript magic is active!");

// Variables in JavaScript (using 'let' for reassignable variables)
let apprenticeName = "Elara";
let spellCount = 3;
let isEnchanted = true;

console.log("Apprentice:", apprenticeName);
console.log("Spells known:", spellCount);
console.log("Is the item enchanted?", isEnchanted);

// Basic arithmetic
let potionStrength = 10;
let ingredientBoost = 5;
let finalStrength = potionStrength + ingredientBoost;
console.log("Final potion strength:", finalStrength);


// Beyond console.log(): Handy Console Tricks

const spellsData = [
    { spell: "Levitate", power: 5, manaCost: 2 },
    { spell: "Invisibility", power: 8, manaCost: 4 },
    { spell: "Fireball", power: 10, manaCost: 6 }
];
console.warn("Watch out! Mana levels are low.");
console.error("Oops, that spell failed to cast!");
console.table(spellsData);
console.group("Potion Recipe Details");
console.log("Base ingredient: Water of Clarity");
console.log("Add: 3 drops of Dragon's Blood");
console.log("Stir clockwise 7 times.");
console.groupEnd();


// --- Interactive Magic! Button Logic ---

// Get references to the HTML elements using their unique IDs
const magicMessage = document.querySelector('#magicMessage');
const activateButton = document.querySelector('#activateButton');

// Check if both elements were successfully found in the HTML
if (magicMessage && activateButton) {
    // Add an event listener to the button: when clicked, execute the provided function
    activateButton.addEventListener('click', () => {
        // Get the current time to display in the message
        const now = new Date();
        const timeString = now.toLocaleTimeString(); // Formats time (e.g., "9:32:25 PM")

        // Update the text content of the message paragraph using a template literal
        magicMessage.textContent = `✨ Spell activated at ${timeString}! ✨`;

        // Add a CSS class to the message paragraph to apply styling (e.g., green, bold)
        // The 'activated-message' class should be defined in your style.css
        magicMessage.classList.add('activated-message');

        // Disable the button to prevent multiple activations
        activateButton.disabled = true;

        // Add a CSS class to style the disabled button
        // The 'disabled-button' class should be defined in your style.css
        activateButton.classList.add('disabled-button');

        // Set an ARIA attribute for accessibility, indicating the button has been pressed
        activateButton.setAttribute('aria-pressed', 'true');
    });
} else {
    // Log an error to the console if the HTML elements are missing.
    // This is important for debugging if the user forgets to add the HTML.
    console.error("Error: 'magicMessage' or 'activateButton' element not found in HTML. Please ensure their IDs are correct and they are present in index.html.");
}
