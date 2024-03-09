document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const handleMenuClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'a') {
            const currentActiveItem = menu.querySelector('.active');
            if (currentActiveItem) {
                currentActiveItem.classList.remove('active');
            }
            event.target.parentElement.classList.add('active');
        }
    };
    menu.addEventListener('click', handleMenuClick);
});