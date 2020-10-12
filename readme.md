# Pokedex
----

## JavaScript

**Pour l'affichage du Pokedex en page principale**

- Création des balises nécessaires à l'affichage de la liste (li, div, img) par l'utilisation de ``` document.createElement() ``` assigné à une constante
- Integration des balises avec contenu en utilisant ```.appendChild```, ```innerHTML``` et ```.img```
- Appel de ```showDescription()``` avec ```addEventListener()```
  
**Pour l'affichage de la description**

- ```document.querySelector()``` puis ```innerHTML``` pour chaque élement afin d'afficher le bon contenu dans la bonne ```dd```
- Pour les types, une boucle ```forEach``` qui sépare les élements par un ```/``` si plusieurs types
- ```hideDescription``` est appellée dans le HTML au clique sur le bouton

## CSS

- Import de la police Pokemon
- Mise en page diverse

## Difficultés rencontrées

Avant tout sur le Javascript, au dépard je ne comprenais pas trop quoi faire et comment, mais à force d'échange et d'explications avec les collègues plus experimentés je suis parvenu à mieux comprendre les grandes lignes et produire quelque chose qui tient la route.

Pour l'instant, je préfère utiliser une programmation "naive" car plus facile à appréhender (par exemple faire un querySelector dans une variable pour chaque élémpent)
