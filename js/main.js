window.addEventListener('load', function() {
    let goku = document.querySelector('.goku-image');
    goku.addEventListener('mouseout', changeGokuImage);

    function changeGokuImage() {
        goku.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            goku.src = goku.src.includes('img/goku01.jpg') ? 'img/goku02.jpg' : 'img/goku01.jpg'; // Toggle between two images
            goku.style.opacity = 1; // Fade-in after image change
        }, 1000); // Match the CSS transition duration
    }

    // Display the obj properties
    let obj = {
        name: "Goku",
        age: 25,
        powerLevel: 9000,
        transform: "Transforming into Super Saiyan!",
        attack: function() {
            console.log("Kamehameha!");
        },
    };

    // Create a container to display the object
    let objContainer = document.createElement('div');
    objContainer.className = 'obj-container';
    objContainer.innerHTML = `
        <p>Name: ${obj.name}</p>
        <p>Age: ${obj.age}</p>
        <p>Power Level: ${obj.powerLevel}</p>
        <p>Transform: ${obj.transform}</p>
    `;
    document.body.appendChild(objContainer);
});