

const formDisplay = {
    
    //  on déclare une propriété (une variable dans un module) pour qu'elle soit accessible depuis toutes les méthodes du module
    formElmt: document.querySelector(".formulaire"),
    
    init: function () {
        // la méthode init permet de poser tous les espion: l'initialisation du module

        // Etape 1 on selectionne le lien du contact dans le menu 
        const menuContactElmt = document.querySelector(".menu--contact");
        
        // on pose un ecouteur d'evenement dessus pour espionner le click
        menuContactElmt.addEventListener("click", formDisplay.handleformDisplayClick);

        // on recupere le bouton close 
        const closeBtnElmt = document.querySelector(".form__close");

        // on pose un ecouteur d'evenement dessus pour espionner le click
        closeBtnElmt.addEventListener("click", formDisplay.handleformDisplayClick);

        // on place un ecouteur sur l'event 'scroll' de la fenetre 'window'
        //  event scroll : https://developer.mozilla.org/fr/docs/Web/API/Document/scroll_event
        window.addEventListener("scroll", formDisplay.handleScroll);

        // on veut lancer un timer au chargment du site pour afficher le formulaire au bout de 5 secondes !
        // premier argument : le handler
        // deuxième argument : le nombre de millisecondes à attendre avant d'executer le handler
        setTimeout(formDisplay.display, 5000);
    },

    /**
     * Automatisation de l'affichage du formulaire de contact
     */
    handleScroll: function () {
        // si window.scrollY dépasse 1000 on affiche le formulaire
        if (window.scrollY > 250) {
            // on affiche le formulaire !!!
            formDisplay.display();

            // on renvoie l'espion chez lui, on veut supprimer le eventListener !!!!
            // doc : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/removeEventListener
            window.removeEventListener("scroll", formDisplay.handleScroll);
        }
    },

    /**
     * Affichage du formlaire contact au click 
     * @param {*} event 
     */
    handleformDisplayClick: function (event) {
        // on stoppe le comportement par défaut du lien pour ne pas qu'il y ai de redirection
        event.preventDefault();
        
        // on ajoute la classe form--on sur le aside pour l'afficher !
        formDisplay.formElmt.classList.toggle("form--on");
    },

    /**
     * Affichage du formulaire
     */
    display: function () {
        // on ajoute la classe form--on sur le aside pour l\'afficher !
        formDisplay.formElmt.classList.add("form--on");
    },




};

document.addEventListener("DOMContentLoaded", formDisplay.init());
