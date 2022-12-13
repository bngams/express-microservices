# TP-express
> Date : 11/2022 - 12/2022 </br>
> Cours : Choix des technologies et infra </br>
> Intervenant : Boris NGAMAMBA 

## Description

Tp fait pendant le cours de Boris avec la mise en place d'une api.
 - Utilisation des bibliothèques express, dotenv, axios, typescript
 - Conteurisation avec docker

Lien vers la source de donnée que j'ai utilisé : https://www.animenewsnetwork.com/

## Initialisation

Pour récuperer ce projet sur votre machine : 
 - créer un répertoire dans lequel vous souhaitez le mettre
 - Se positionner à l'intérieur de ce dossier
 - Exécuter la commande suivante : ```git clone https://github.com/shadowkaito/TP-express.git ```

## Compilation

Pour compiler les fichiers typescript (en live reload ajouter --watch) : 

```
npx tsc 
```

## Modification

Si vous souhaitez modifier le projet, faites des branches avec votre nom et détaillez vos modifications.

## Execution du projet

### Local
Pour lancer en local : 

```
npm run start-dev
```

### Docker
Le fichier build.sh va construire les images et lancer les conteneurs.
Pour lancer le fichier build.sh , verifier que votre service docker est lancé sur votre machine et que les ports sont disponibles. 

Sous linux ou gitbash : 
```
./build.sh
```

Sous Windows : 

```
sh build.sh
```
