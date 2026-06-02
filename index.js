// =========================
// Gestion du Total
// =========================
const Total = document.querySelector('#Total');
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', () => {
    Total.textContent = 0;
});


// =========================
// Gestion automatique des boutons
// =========================
document.querySelectorAll('.scoreBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        let valeur = parseInt(btn.dataset.score);
        let totalActuel = parseInt(Total.textContent);
        Total.textContent = totalActuel + valeur;
    });
});

document.querySelectorAll('.Categories p').forEach(p => {
    if (p.textContent.trim().startsWith('-')) {
        p.classList.add('negatif');
    }
    else{
        p.classList.add('positif');
    }
});