let popped = 0;

// Create a function for the event handler
function balloonHandler(e) {
    if (e.target.className === "balloon") {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        
        // Mark this balloon as popped so it won't be counted again
        e.target.className = "balloon popped";
        
        // Increment counter
        popped++;
        console.log(popped);
        
        checkAllPopped();
    }
}

// Add the event listener to the document
document.addEventListener('mouseover', balloonHandler);

function checkAllPopped() {
    if (popped === 24) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
}
