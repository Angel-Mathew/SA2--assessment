document.addEventListener('DOMContentLoaded', function() {
    const recipe = document.querySelector('.recipe');
    const leftBtn = document.querySelector('.scroll_left');
    const rightBtn = document.querySelector('.scroll_right');
    
    // Amount to scroll each time (width of one product + margin)
    const scrollAmount = 210; // 180px width + 30px total margin
    
    // Function to update button visibility
    const updateButtons = () => {
        leftBtn.style.display = recipe.scrollLeft <= 0 ? 'none' : 'block';
        rightBtn.style.display = 
            recipe.scrollLeft >= (recipe.scrollWidth - recipe.clientWidth - 10) 
            ? 'none' : 'block';
    };
    
    // Initial button visibility
    updateButtons();
    
    // Scroll left
    leftBtn.addEventListener('click', () => {
        recipe.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateButtons, 100);
    });
    
    // Scroll right
    rightBtn.addEventListener('click', () => {
        recipe.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateButtons, 100);
    });
    
    // Update buttons when scrolling ends
    recipe.addEventListener('scroll', () => {
        updateButtons();
    });
});