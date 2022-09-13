/**
 * @file Un menu simple, responsive bâti en amélioration progressive.
 * @version v3.1 Mise à jour le 7 février :: changement du préfixe tag pour ref !
 * @author TIMCSF
 * @todo Problème: si le menu est fermé, les liens de menu ne devrait pas être dans l'ordre de tabulation?
 */

//*******************
// Déclaration d'objet(s)
//*******************

let menu = {
    javascriptEnabled: document.body.classList.add('js'),
    strNavClosed: 'Menu',
    strNavOpen: 'Fermer',
    refButton: null,
    refSpan: null,
    refNav: document.querySelector('.nav'),

    configurerNav: function () {
        //********** Création du bouton du menu mobile

        // On crée VIRTUELLEMENT un bouton et un span (pour le texte du bouton)
        this.refButton = document.createElement('button');
        this.refSpan = document.createElement('span');
        this.refImg = document.createElement('img');


        // On ajoute le span dans le bouton
        this.refButton.appendChild(this.refImg);
        this.refButton.appendChild(this.refSpan);

        this.refImg.src = 'images/ico-menu.svg'

        // On ajoute des classes au Button et au span
        this.refButton.className = 'nav__control';
        this.refSpan.className = 'nav__span';

        // On ajoute des attributs
        this.refNav.setAttribute("aria-label", "Menu principal")
        this.refButton.setAttribute("aria-expanded", "false");
        this.refButton.setAttribute("aria-haspopup", "menu");
        this.refButton.setAttribute("aria-controls", "navList");

        // On place le texte du Button dans son conteneur span
        this.refSpan.innerHTML = this.strNavClosed;

        // On ajoute le Button dans le html:
        // plus précisément comme premier enfant dans le nav
        this.refNav.prepend(this.refButton);

        // Ajout de l'écouteur d'événement sur le bouton du menu
        this.refButton.addEventListener('click', function () {
            menu.ouvrirFermerNav();
        });

        // ajouter la classe d'état fermé au menu
        this.refNav.classList.add('nav--closed');
    },

    ouvrirFermerNav: function () {
        // On bascule (ajoute ou enlève) la classe de fermeture du menu
        this.refNav.classList.toggle('nav--closed');

        // On change le texte du bouton selon l'état du menu
        if (this.refNav.classList.contains('nav--closed')) {
            this.refSpan.innerHTML = this.strNavClosed;
            this.refImg.src = "images/ico-menu.svg";
        } else {
            this.refSpan.innerHTML = this.strNavOpen;
            this.refImg.src = "images/ico-fermer.svg";
        }
    }
};


//*******************
// Écouteurs d'événements
//*******************
window.addEventListener('load', function () {
    menu.configurerNav();
});