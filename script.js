document.addEventListener('DOMContentLoaded', function() {
    // Changes text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "New Text: I am also a backend developer as well an AI/ML, Blockchain and Robotics enthusiast";
        dynamicText.style.color = "blue";
    });
    
    // Modifes CSS styles
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleDemo = document.getElementById('style-demo');
    
    changeStyleBtn.addEventListener('click', function() {
        styleDemo.classList.toggle('highlight');
    });
    
    // Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementContainer = document.getElementById('element-container');
    
    toggleElementBtn.addEventListener('click', function() {
        const existingElement = document.querySelector('.new-element');
        
        if (existingElement) {
            elementContainer.removeChild(existingElement);
        } else {
            const newElement = document.createElement('div');
            newElement.className = 'new-element';
            newElement.textContent = 'This is a dynamically added element!';
            elementContainer.appendChild(newElement);
        }
    });
});