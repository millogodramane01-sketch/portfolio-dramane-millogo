// Fichier JavaScript pour la logique du portfolio
// Gère l'effet d'ouverture (Flip) des blocs de compétences

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sélectionner tous les blocs de compétences
    const skillCards = document.querySelectorAll('.skill-card');

    // 2. Ajouter l'écouteur d'événement au clic pour chaque carte
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Bascule l'état 'is-active' sur la carte entière
            card.classList.toggle('is-active');

            // Logique optionnelle : Fermer les autres cartes
            skillCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('is-active')) {
                    otherCard.classList.remove('is-active');
                }
            });
        });
    });

    console.log("Logique de flip 3D du portfolio chargée.");
});