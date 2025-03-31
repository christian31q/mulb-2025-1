window.addEventListener('load', function() {
    let circle = document.querySelector('#circle');
    let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    let currentColorIndex = 0;
    circle.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length; // Increment the index and wrap around using modulo operator
        console.log(`Current color index: ${currentColorIndex}`);        circle.style.backgroundColor = colors[currentColorIndex];
    });

   
});


