        let score = 0; 
        let complimentation = "Grosse merde";
        // On crée une fonction qui contient l'action
        function direBravo() {
            // constante de réalisation de liste []
            const listeCompliments = [
                "va chier", 
                "C'est super",
                "Tu progresses à chaque ligne de code",
                "gros batard" 
                ]; 
            const listeCouleurs = [
                "red", 
                "green", 
                "purple",
                "Blue"
                ];
            // chercher alétoirement le compliment 
            const indexAleatoire = Math.floor(Math.random() * listeCompliments.length);
            const indexCouleursAleatoire = Math.floor(Math.random() * listeCouleurs.length);
            // On sélectionne la zone de texte
            const afficheur = document.getElementById('zoneTexte');
            // On change son contenu
            afficheur.innerText = listeCompliments[indexAleatoire];
            // On change sa couleur
            afficheur.style.color = listeCouleurs[indexCouleursAleatoire];
            // je dis au score qu'il doit s'ajouter 1 à chaque action de la fonction
            score = score + 1
            // je demande à l'afficheur de le traduire en visuel 
            document.getElementById('compteur').innerText = score;
                if (score > 20) {
                     document.getElementById('rang').innerText = "Gros Bouffon";
                } else if (score > 10) {
                     document.getElementById('rang').innerText = "Salopard";
                } else {
                    document.getElementById('rang').innerText = complimentation;
                }
        }
        //fonction mode sombre 
        function etallume () {                                           
            if (document.body.style.backgroundColor === "rgb(30, 30, 30)") {
                document.body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                
            } else {
                document.body.style.background = "none";
                document.body.style.backgroundColor = "#1e1e1e";
          
            }
        }

        function copie () {
                const texte = document.getElementById('ZoneTexte').innerText; 
                navigator.clipboard.writeText(texte);
        }
                
        // On dit au bouton : "Au clic, exécute la fonction direBravo"
        document.getElementById('monBouton').addEventListener('click', direBravo);
        document.getElementById('boutondark').addEventListener('click', etallume);
        document.getElementById('copiercoller').addEventListener('click', copie);
