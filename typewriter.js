function typeWriter(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
typeWriter('quote', "The Eternity's work is in progress...", 80);