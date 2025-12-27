# calculator

#### Video Demo:  <URL HERE>

#### Description:

## About the Project
This project is a fully functional web-based calculator that I built as my final project for CS50. When I first started planning it, I wanted to create something that would truly bring together everything I learned during the course—HTML for structure, CSS for design, and JavaScript for logic—while also being something people could realistically use in their everyday life.

A calculator felt like the perfect balance. On the surface, it's a familiar tool, but once I started building it, I realized how many small details and edge cases were involved. That challenge made the project both fun and educational.

The calculator supports all the basic arithmetic operations you'd expect, but I went further by adding extra features like calculation history, percentage calculations, and power functions. One of the hardest—and most rewarding—parts was making sure the calculator handles errors smoothly instead of breaking or showing confusing results.

What really sets this calculator apart, though, is usability. I focused on creating a clean, modern interface that works just as well on a phone as it does on a laptop. I also added full keyboard support so users aren't limited to clicking buttons.

## Project Structure
The project is made up of four main files:

## index.html
This file provides the structure of the calculator. It includes the display where calculations appear, a grid of buttons for numbers and operators, a section for calculation history, and a dedicated area for error messages. The layout is designed to feel familiar, with numbers arranged like a traditional calculator and operators placed on the right for easy access.

## styles.css
This file controls the look and feel of the calculator. I chose a purple gradient background to give the project a modern look without being overwhelming. The calculator itself has a clean white design with rounded corners and subtle shadows to add depth. Buttons include hover effects for better feedback, and different colors are used to clearly distinguish operators, the equals button, and the clear button. Media queries ensure everything scales nicely on smaller screens.

## script.js
This is where all the functionality lives. The JavaScript handles user input, evaluates expressions, manages the calculation history, and displays errors when something goes wrong. I separated the logic into clear functions to keep the code readable and maintainable. Error handling plays a big role here, preventing common issues like invalid input or division by zero.

## README.md
This file explains the project, its features, and the decisions behind it.

## Features Explained

## Basic Arithmetic
The calculator supports addition, subtraction, multiplication, and division. JavaScript naturally handles the correct order of operations, but I wrapped everything in validation and error handling to prevent unexpected behavior.

## Division by Zero Protection
Instead of displaying "Infinity" or crashing, the calculator shows a clear error message when a user tries to divide by zero. I implemented this by checking expressions before evaluation and displaying a friendly message if an invalid operation is detected.

## Input Validation
The calculator prevents multiple decimal points in a single number and validates expressions before evaluating them. Any unexpected errors are caught using a try–catch block, ensuring users see helpful messages instead of technical JavaScript errors.

## Calculation History
The calculator stores the last eight calculations and displays them in a scrollable history section. New calculations appear at the top, and users can clear the history with a single click. Limiting the history keeps the interface clean while still being useful.

## Percentage Calculations
The percentage button quickly converts the current number into a percentage by dividing it by 100. This action is also recorded in the history for reference.

## Power Function
The x² button squares the currently displayed number using JavaScript's Math.pow() function. While I only included squaring, the structure makes it easy to add more power-based features later.

## Keyboard Support
Users can type directly using their keyboard. Numbers and operators work as expected, Enter calculates the result, Backspace deletes characters, and Escape or Delete clears the display. This was implemented using keyboard event listeners tied to the calculator's existing functions.

## Design Decisions and Challenges

## Using eval()
One of the biggest decisions I made was using JavaScript's eval() function to evaluate expressions. While I'm aware it's generally discouraged due to security risks, I felt it was acceptable here because inputs are tightly controlled, validated, and wrapped in error handling. For a larger or production-level application, I would use a custom expression parser instead.

## Floating-Point Precision
JavaScript can produce unexpected decimal results due to floating-point precision issues. To avoid this, I rounded results to eight decimal places, which keeps calculations accurate without showing strange decimals.

## Mobile Responsiveness
Ensuring the calculator worked well on smaller screens required careful CSS adjustments. Media queries allow buttons and text to resize smoothly, maintaining usability on phones and tablets.

## Error Message UX
Error messages appear in red above the buttons and automatically disappear after three seconds. This makes them noticeable without permanently cluttering the interface.

## Testing Process
I tested the calculator extensively with both normal inputs and edge cases. Simple calculations confirmed the basics, while more complex expressions verified correct order of operations. I intentionally tried to break the calculator by dividing by zero, entering invalid inputs, and clicking buttons rapidly. Each issue helped me improve the error handling.

I also tested the calculator on multiple devices and browsers to ensure consistent behavior and responsiveness.

## What I Learned
This project taught me far more than just how to write code. I learned how to plan and structure a project, break complex problems into smaller pieces, and debug issues I didn't anticipate at the start. I gained a deeper understanding of DOM manipulation, event handling, and state management in JavaScript.

Most importantly, I learned how much user experience matters. Small details—like hover effects, keyboard shortcuts, and clear error messages—make a huge difference in how polished an application feels.

## Conclusion
Building this calculator was a rewarding experience that brought together everything I learned in CS50. It's a project I'm genuinely proud of—not just because it works, but because it's clean, user-friendly, and built with real-world use in mind. While there's always room for improvement, this calculator represents a strong foundation and a clear demonstration of my web development skills.
