// Make the image scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const mainSection = document.querySelector('.main');
    
    if (mainSection) {
        // Calculate horizontal offset based on scroll position
        // Positive value makes it scroll right, negative makes it scroll left
        // Adjust the multiplier to control scroll speed (try 0.2, 0.3, 0.5, etc.)
        const horizontalOffset = -scrollTop * 0.3; // Negative for left scroll
        
        // Apply the transform to move the background horizontally
        mainSection.style.backgroundPosition = `${horizontalOffset}px center`;
    }
});

document.documentElement.style.scrollBehavior = 'smooth';
