
// Get references to our HTML elements using their unique IDs
const newTaskInput = document.querySelector('#newTaskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList'); // This ID targets the <ul> element

// Function to add a new task to the list
const addTask = () => {
    // Get the text from the input field and remove any leading/trailing whitespace
    const taskText = newTaskInput.value.trim();

    // Check if the input field is not empty and the taskList element exists in the DOM
    if (taskText !== "" && taskList) {
        // 1. Create new list item (<li>) element for the task
        const listItem = document.createElement('li');
        // 2. Create a new button element for removing the task
        const removeButton = document.createElement('button');

        // 3. Set the text content for the remove button
        removeButton.textContent = "Remove";
        // 4. Add a CSS class to the remove button for styling
        removeButton.classList.add('remove-btn');

        // 5. Add an event listener to the remove button
        //    When this button is clicked, it will remove its parent list item (<li>) from the task list.
        removeButton.addEventListener('click', () => {
            // Remove the listItem (parent of the clicked button) from the taskList
            taskList.removeChild(listItem);
        });

        // 6. Set the text content of the list item to the task text
        listItem.textContent = taskText;

        // 7. Append the remove button as a child of the list item
        listItem.appendChild(removeButton);

        // 8. Append the newly created list item (with its remove button) to the unordered task list
        taskList.appendChild(listItem);

        // 9. Clear the input field after adding the task, ready for the next entry
        newTaskInput.value = "";
    } else if (!taskList) {
        // Log an error if the taskList element (<ul>) was not found in the HTML
        console.error("Error: 'taskList' element not found in HTML. Please ensure the <ul> has id='taskList'.");
    } else {
        // Warn the user if they tried to add an empty task
        console.warn("Task input cannot be empty!");
    }
};

// Add an event listener to the "Add Task" button
// This will call the addTask function when the button is clicked.
if (addTaskBtn) {
    addTaskBtn.addEventListener('click', addTask);
} else {
    // Log an error if the addTaskBtn element was not found in the HTML
    console.error("Error: 'addTaskBtn' element not found in HTML. Please ensure the button has id='addTaskBtn'.");
}

// Add an event listener to the input field to allow adding tasks by pressing the Enter key
if (newTaskInput) {
    newTaskInput.addEventListener('keypress', (event) => {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function
        }
    });
}

// Attach event listeners to existing remove buttons (for initial tasks in HTML)
// This ensures that even the tasks hardcoded in the HTML initially have working remove buttons.
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        // event.target refers to the clicked button.
        // .parentElement refers to the <li> element that contains the button.
        // .remove() removes that <li> element from the DOM.
        event.target.parentElement.remove();
    });
});
