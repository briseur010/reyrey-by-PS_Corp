// Confirmation d'ajout au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement.querySelector('h3').innerText;
        alert(product + " a été ajouté à votre sélection !");
    });
});

// Effet au défilement pour le header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 5%';
    } else {
        header.style.padding = '15px 5%';
    }
});