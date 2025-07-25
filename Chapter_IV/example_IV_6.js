
// Selects all list items
const allListItems = document.querySelectorAll('ul li');

// Loop through NodeList using forEach
allListItems.forEach(item => {
    // The forEach method executes a provided function once for each array-like element.
    // Here, 'item' represents each individual <li> element in the 'allListItems' NodeList.
    // The arrow function (item => ...) is the function that gets executed for each 'item'.
    console.log(`List item content: ${item.textContent}`);
});