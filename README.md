# Age Of Champagne ( AOC )
## Robin Simonneau, Erwann Maton, Noa Brébant, Roman Szczepaniak, Dylan Huckel
Le projet Age of Champagne est un projet de groupe réaliser lors de ma 2ème année de BUT informatique, à l'IUT de Reims.
Le projet consiste à être une extension du jeu de plateau Age Of Champagne, permettant aux joueurs de scanner les cartes du jeu à fin de récupérer des informations sur celle-ci.
La deuxième version de ce projets consiste en la division du projets en deux parties : Le front avec React et le back avec un API Symfony.
Pour plus d'informations sur le jeu : Cliquez ici
## Installation et configuration
Ce projet utlise le framework *React* :
- Pour récupérer les paquets du projets utilisez :
  ```shell
    npm install
  ```
- Pour lancer le projet utilisez :
  ```shell
    npm run dev
  ```


## Les utilisateurs de connexions factices :
- Admin :
    - login : *admin*
    - password : *test*
- User :
    - login : *UserLambda*
    - password : *test*
- User premium :
    - login : *UserPremium*
    - password : *test*

## Docker :
Le site est disponible sur une image docker :
### Base de donnée :
- MYSQL_USER: breb0007
- MYSQL_PASSWORD: Azerty01
- MYSQL_ROOT_PASSWORD: test
- MYSQL_DATABASE: sae4
