// Array of colors to cycle through
const colors = ['white', 'black', 'blue', 'red', 'yellow', 'green', 'purple', 'orange'];

// Function to cycle colors on bead click
document.querySelectorAll('.bead').forEach((bead, index) => {
    let currentColorIndex = 0; // Start at the first color in the array
    
    bead.addEventListener('click', function() {
        // Update the bead's color on each click
        bead.style.backgroundColor = colors[currentColorIndex];
        
        // Move to the next color in the array
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
});
