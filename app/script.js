document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay-preparation');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const nomeCafe = card.querySelector('h3').innerText;
        
        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('hidden');
            
            alert(`☕ Seu ${nomeCafe} está pronto! Bom proveito!`);
        }, 3000);
    });
});