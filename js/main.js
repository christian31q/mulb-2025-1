window.addEventListener('load', function() {
    let circles = document.querySelectorAll('.circle');
    let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    //let currentColorIndex = 0;
    
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);
    
    for (let i = 0; i < circles.length; i++) {
        // Set index to 0 for each circle
        let miniSquare = this.document.createElement('div');
        miniSquare.classList.add('mini-square');
        document.body.appendChild(miniSquare);
        circles[i].currentColorIndex = 0;

        circles[i].addEventListener('click', function() {
            this.currentColorIndex = (this.currentColorIndex + 1) % colors.length; // Increment the index and wrap around using modulo operator
            changeCircleColor(this); // Change the color of the clicked circle
            });
        }

    function changeCircleColor(circle) {
        circle.style.backgroundColor = colors[circle.currentColorIndex];
    }
});


