
# Fonction pour créer toute la structure de dossier de notre MVC
creation_structure_dossiers(){
    mkdir app
    mkdir public
    cd public
    mkdir assets
    cd ../app 
    mkdir Controllers
    mkdir Models 
    mkdir Utils
    mkdir views
    cd views
    mkdir main
    mkdir layout
    mkdir partials
    cd ../..
}