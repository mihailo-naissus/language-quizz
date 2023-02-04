// This function will be called when the user clicks the "check answers" button
function checkAnswers() {
    // Find answer button
    const answerButtons = document.querySelectorAll('.answer-button');
    
    // Keep track of the num of correct answers
    let numCorrect = 0;
    
    // Loop through all the answer buttons
    answerButtons.forEach(button => {
        // If the button is marked as correct and the user selected it, or
        // if the button is marked as incorrect and the user didn't select it,
        // then the user got the answer right
        if ((button.dataset.correct === "true" && button.classList.contains('selected')) ||
            (button.dataset.correct === "false" && !button.classList.contains('selected'))) {
            numCorrect++;
        }
 // Remove the "selected" class from all the buttons
        button.classList.remove('selected');
    });

    
    // Find the element to display the results
    const resultsElement = document.querySelector('#results');

    // Update the results element with the number of correct answers
    resultsElement.innerHTML = `You got ${numCorrect} answers correct!`;
}


// Get a "check answers" button.
const checkAnswersButton = document.querySelector('#check-answers-button');

// Add a click event listener to the button
checkAnswersButton.addEventListener('click', checkAnswers);

// Add a click event listener to each answer button
const answerButtons = document.querySelectorAll('.answer-button');
answerButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle the "selected" class on the button
        button.classList.toggle('selected');
    });
});

