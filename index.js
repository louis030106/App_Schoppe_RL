// =========================
// Gestion du Total
// =========================
const Total = document.querySelector('#Total');
const resetBtn = document.querySelector('#resetBtn');

// Charger le total sauvegardé au démarrage
Total.textContent = localStorage.getItem("total") || 0;

// Bouton Reset
resetBtn.addEventListener('click', () => {
    Total.textContent = 0;
    localStorage.setItem("total", 0);
});


// =========================
// Gestion automatique des boutons
// =========================
document.querySelectorAll('.scoreBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        let valeur = parseInt(btn.dataset.score);
        let totalActuel = parseInt(Total.textContent);
        let nouveauTotal = totalActuel + valeur;

        Total.textContent = nouveauTotal;

        // Sauvegarde dans localStorage
        localStorage.setItem("total", nouveauTotal);
    });
});


// =========================
// Gestion des catégories (positif / négatif)
// =========================
document.querySelectorAll('.Categories p').forEach(p => {
    if (p.textContent.trim().startsWith('-')) {
        p.classList.add('negatif');
    } else {
        p.classList.add('positif');
    }
});
