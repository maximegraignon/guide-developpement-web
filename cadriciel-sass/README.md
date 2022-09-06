# Cadriciel - sass

## Lien vers Github Pages  
https://maximegraignon.github.io/guide-developpement-web/cadriciel-sass/

## @todo
### 1. Personnaliser le menu en améliorant son accessibilité

> Cynthia : « À partir du menu dans le Guide de développement, voici le HTML qui pourrait être ajouté lorsque JavaScript est actif. La valeur de l'attribut aria-expanded serait à modifier (par Javascript) selon s'il est ouvert ou fermé. »

Analyse:
- ne pas remplacer le html par celui-ci dessous!! seulement ajouter sur la balise nav l'attribut  
  `aria-label="Menu principal"`
- lorsqu'on crée le bouton ligne 24 : `this.refButton = document.createElement('button');`
- il y a 3 attributs supplémentaires à ajouter au bouton menu:
  - aria-expanded="false" 
  - aria-haspopup="menu" 
  - aria-controls="navList"
- pour faire ces ajouts [utiliser `setAttribute(name,value)`](https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute) .
- repérer où dans le script vous devez faire basculer la valeur booléenne de `aria-expanded` 


```
<nav class="nav" aria-label="Menu principal">

    <button class="nav__control" aria-expanded="false" aria-haspopup="menu" aria-controls="navList">

        <span class="nav__span">Fermer</span>

    </button>

    <ul class="nav__list" id="navList">

        <li class="nav__list-item">

            <a href="#" class="nav__link">Lien 1</a>

        </li>

        <li class="nav__list-item">

            <a href="#" class="nav__link">Lien 2</a>

        </li>

        <li class="nav__list-item">

            <!-- remarquer que .nav__link--active est le modificateur de .nav__link

        pour mettre en valeur l'item de menu courant -->

            <a href="index.html" class="nav__link nav__link--active" aria-current="page">Page courante</a>

        </li>

        <li class="nav__list-item">

            <a href="#" class="nav__link">Lien 4</a>

        </li>

        <li class="nav__list-item">

            <a href="#" class="nav__link">Lien 5</a>

        </li>

    </ul>

</nav> ```