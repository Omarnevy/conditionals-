// Declare variables 
let userChoice, randomNumber, computerChoice;

// Ask user for a choice
userChoice = prompt("Enter 'heads' or 'tails' to make your choice:");

// Generate random number (0 or 1)
randomNumber = Math.floor(Math.random() * 2);

// Assign 'heads' or 'tails' based on random number
if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

// Compare userChoice with computerChoice
if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// Create variable to store birth year
let birthYear;

// Prompt user for birth year
birthYear = prompt("Enter the year you were born:");

// Check if birthYear is null (user cancelled prompt) or empty
if (birthYear === null || birthYear === "") {
    alert("Invalid input. Please enter a valid year.");
} else {
    // Convert birthYear to a number
    birthYear = parseInt(birthYear);

    // Calculate age
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    // Check age and display message
    if (age > 21) {
        alert("You are old enough to drink in the US");
    } else if (age === 21) {
        alert("You are old enough to drink in the US...barely");
    } else {
        alert("Sorry, you are not old enough to drink in the US");
    }
}