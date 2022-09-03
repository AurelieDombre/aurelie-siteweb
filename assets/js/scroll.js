
const bubbleDisplay = {

    bubbleElmt: document.querySelector(".parallax-bienvenue"),

    init: function () {
        // la méthode init permet de poser tous les espion: l'initialisation du module
        
        // on place un ecouteur sur l'event 'scroll' de la fenetre 'window'
        //  event scroll : https://developer.mozilla.org/fr/docs/Web/API/Document/scroll_event
        window.addEventListener("scroll", bubbleDisplay.handleScroll);

        // on veut lancer un timer au chargment du site pour afficher la bulle au bout de 5 secondes !
        // premier argument : le handler
        // deuxième argument : le nombre de millisecondes à attendre avant d'executer le handler
        setTimeout(bubbleDisplay.display, 5000);
    },


    /**
     * Automatisation de l'affichage de la bulle de contact
     */
    handleScroll: function () {
        // si window.scrollY dépasse 100 on affiche la bulle
        if (window.scrollY > 100) {
            // on affiche la bulle !!!
            bubbleDisplay.display();

            // on renvoie l'espion chez lui, on veut supprimer le eventListener !!!!
            // doc : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/removeEventListener
            window.removeEventListener("scroll", bubbleDisplay.handleScroll);
        }
    },

        /**
     * Affichage du formulaire
     */
        display: function () {
            // on ajoute la classe form--on sur le aside pour l\'afficher !
            bubbleDisplay.bubbleElmt.classList.add("bulle--on");
        },
}
document.addEventListener("DOMContentLoaded", bubbleDisplay.init());