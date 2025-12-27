// Global variables
let displayValue = '';
let history = [];
const maxHistory = 8;

// Get DOM elements
const displayElement = document.getElementById('display');
const errorElement = document.getElementById('error-message');
const historyElement = document.getElementById('history');

// Function to append numbers/operators to display
function appendToDisplay(value) {
    // Clear any error messages
    clearError();
    
    // Prevent multiple decimal points in same number
    if (value === '.') {
        const lastNumber = displayValue.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            return;
        }
    }
    
    displayValue += value;
    displayElement.value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    displayElement.value = '';
    clearError();
}

// Function to clear error messages
function clearError() {
    errorElement.textContent = '';
}

// Function to show error messages
function showError(message) {
    errorElement.textContent = message;
    // Auto-clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Main calculation function
function calculate() {
    // Check if display is empty
    if (displayValue === '' || displayValue === null) {
        showError('Please enter a calculation');
        return;
    }
    
    try {
        // Check for division by zero before calculating
        if (displayValue.includes('/0')) {
            // More specific check - make sure it's actually dividing by zero
            const regex = /\/\s*0+(?:\.|$)/;
            if (regex.test(displayValue)) {
                showError('Error: Cannot divide by zero!');
                return;
            }
        }
        
        // Store the expression before calculating
        const expression = displayValue;
        
        // Evaluate the expression
        const result = eval(displayValue);
        
        // Check if result is valid
        if (!isFinite(result)) {
            showError('Error: Invalid calculation');
            return;
        }
        
        // Round to avoid floating point errors
        const roundedResult = Math.round(result * 100000000) / 100000000;
        
        // Add to history
        addToHistory(expression + ' = ' + roundedResult);
        
        // Update display
        displayValue = roundedResult.toString();
        displayElement.value = displayValue;
        
    } catch (error) {
        showError('Error: Invalid expression');
        displayValue = '';
        displayElement.value = '';
    }
}

// Function to calculate percentage
function calculatePercentage() {
    if (displayValue === '' || displayValue === null) {
        showError('Please enter a number first');
        return;
    }
    
    try {
        const result = eval(displayValue) / 100;
        const expression = displayValue + '%';
        
        // Add to history
        addToHistory(expression + ' = ' + result);
        
        displayValue = result.toString();
        displayElement.value = displayValue;
        clearError();
    } catch (error) {
        showError('Error: Invalid percentage calculation');
    }
}

// Function to calculate power (square)
function calculatePower() {
    if (displayValue === '' || displayValue === null) {
        showError('Please enter a number first');
        return;
    }
    
    try {
        const number = eval(displayValue);
        const result = Math.pow(number, 2);
        const expression = displayValue + '²';
        
        // Add to history
        addToHistory(expression + ' = ' + result);
        
        displayValue = result.toString();
        displayElement.value = displayValue;
        clearError();
    } catch (error) {
        showError('Error: Invalid power calculation');
    }
}

// Function to add calculation to history
function addToHistory(calculation) {
    // Add to beginning of array
    history.unshift(calculation);
    
    // Keep only last maxHistory items
    if (history.length > maxHistory) {
        history.pop();
    }
    
    // Update history display
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    // Clear current history display
    historyElement.innerHTML = '';
    
    // Check if history is empty
    if (history.length === 0) {
        historyElement.innerHTML = '<p class="no-history">No calculations yet</p>';
        return;
    }
    
    // Add each history item
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = item;
        historyElement.appendChild(historyItem);
    });
}

// Function to clear history
function clearHistory() {
    history = [];
    updateHistoryDisplay();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers and operators
    if (/[0-9\+\-\*\/\.\(\)]/.test(key)) {
        appendToDisplay(key);
    }
    
    // Enter key for calculate
    if (key === 'Enter') {
        event.preventDefault();
        calculate();
    }
    
    // Escape or Delete for clear
    if (key === 'Escape' || key === 'Delete') {
        clearDisplay();
    }
    
    // Backspace to delete last character
    if (key === 'Backspace') {
        event.preventDefault();
        displayValue = displayValue.slice(0, -1);
        displayElement.value = displayValue;
    }
});

// Initialize
window.onload = function() {
    clearDisplay();
    updateHistoryDisplay();
};
