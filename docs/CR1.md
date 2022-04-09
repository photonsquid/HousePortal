# Homenet - Compte rendu semaine 01

## Sommaire

- [Homenet - Compte rendu semaine 01](#homenet---compte-rendu-semaine-01)
  - [Sommaire](#sommaire)
    - [Introduction](#introduction)
    - [Groupe](#groupe)
    - [Choix du sujet](#choix-du-sujet)
    - [Description générale du projet](#description-générale-du-projet)
    - [Nom du projet](#nom-du-projet)
    - [Description technique grossière](#description-technique-grossière)
    - [Première liste des fonctionnalités](#première-liste-des-fonctionnalités)
    - [Navigation entre les pages](#navigation-entre-les-pages)
    - [Nécessité et limites du projet](#nécessité-et-limites-du-projet)

### Introduction

Ce compte rendu a pour but de montrer, avec ceux qui suivront, le suivi est
l'évolution de notre projet Web. Ce projet est développé dans le cadre de la
matière "Applications Web" que nous suivons à l'
[ENSEEIHT](https://www.enseeiht.fr/fr/index.html), en 2ème année, parcours SN
(Sciences du Numérique), à majeure IM (Image et Multimédias).
Vous pouvez trouver plus d'information sur le site du professeur encadrant
Daniel HAGIMONT ([daniel.hagimont@irit.fr](mailto:daniel.hagimont@irit.fr)) :
<http://sd-127206.dedibox.fr/hagimont/resources-N7/appliweb/2IN-AppInt.html>

### Groupe

Notre groupe est composé de 4 étudiants :

- Cyprien ARNOLD
- Ying LIU
- Philippe NEGREL-JERZY ([*infos*](https://www.bsodium.fr/))
- Sébastien PONT ([*infos*](http://www.sebastienpont.fr/))

### Choix du sujet

Le groupe a initialement proposé 4 sujets, parmi lesquels dans le but d'en choisir un :

1. Site de streaming vidéo (à des fins légales bien sûr)
2. Site de jeux de société en ligne pour jouer avec ses amis
3. Lifelog™ (un calendrier à l'envers : grâce au Big Data, enregistrer automatiquement ce qu'on fait de nos journées)
4. Interface web de type google home pour les appareils intelligents

Nous avons finalement choisi le sujet n°4.

### Description générale du projet

Le but de ce projet est de créer une API backend connectée à des clients (Web, desktop, CLI, ...) permettant de gérer facilement les objets connectés. Ces derniers, de plus en plus répandus dans le commerce, sont de natures différentes et peuvent être des ampoules connectées, des volets, des TV, portes de garages, voire aquarium connectés. Tout est possible, les limites étant principalement écologique (c.f. partie [Nécessité et limites du projet](#nécessité-et-limites-du-projet)).

Ainsi, via ce site nous pourrons par exemple allumer la lumière du salon, programmer une salle de bain à 20°C pour dans 30 min, ...

### Nom du projet

Le nom du projet a suscité un certain intérêt superflu. Une partie de l'équipe avait l'année précédente programmé en Java 7maps (copie de Google Maps). Ainsi, le nom de ce projet tombe sous le sens : 7home.

Ne faisant pas l'unanimité au sein du groupe, nous sommes pour l'instant partis sur : ***homenet***.

### Description technique grossière

Nous allons faire le backend en JEE/EJB car cela est imposé, mais nous y voyons un intérêt. En effet, ces technologies nous semblent un peu désuètes, mais encore très présentes dans de nombreuses entreprises. Nous somme donc satisfaits de pouvoir développer avec des technologies vers lesquelles nous ne nous serions pas tourné.es spontanément.

Cependant, nous souhaitons garder un peu de *fun* au code, c'est pourquoi nous décidons de faire un client Web en ReactJS.

Nous garderons cependant le design pattern MVC.

Les données seront stockées dans une base de donnée SQL.

### Première liste des fonctionnalités

- créer un compte (avec Google / Facebook / Github / ... / email)
- se (dé)connecter
- ajouter/enlever des objets connectés
- voir la liste de ses objets
- relier un compte Google Home / Philips HUE / ...
- contrôler ses objets
- voir un log (historique) des actions
  
Fonctionnalités futures

- déduire du log les anomalies (une lumière restée allumée alors qu'elle ne devrait pas l'être...)

### Navigation entre les pages

Nous pensons principalement faire un site avec qu'une page principale qui sera un dashboard (tableau de bord).

D'autres pages annexes mais simples seront ajoutées :

- page de connexion
- page de paramètres de compte

### Nécessité et limites du projet

Ce projet comble un peu un vide existant autour du contrôle d'objets connectés depuis un PC. En effet, de nombreux efforts sont faits du côté mobile (Android / iPhone), mais les sites web et clients lourds PC sont assez faibles. Ainsi nous sommes contents de pouvoir développer cela pour nous même. Nous ne pensons cependant pas rivaliser face aux technologies existantes (comme [https://domoticz.com/](https://domoticz.com/)).

Quelque jours après la sortie du troisième volet de l'AR6 du GIEC, cette application nous semble un peu honteuse.
En effet, à l'aube d'énormes dérèglements climatiques induits par la surconsommation et la surproduction, inciter le déploiement et la production d'objets technologiques toujours plus complexes et plus nombreux nous semblent une absurdité.

Cependant, né dans ce monde capitaliste, et fan de technologie, nous trouvons la domotique satisfaisante. Un compromis pourrait être dans les low-tech. Ce paradigme nous inciterai à recycler du vieux matériel informatique déjà produit, et de le détourner dans un but de domotique. De nombreuses optimisations logicielles peuvent de plus être faites pour limiter un maximum le nombre de requêtes Web faites (très énergivores).

Ces solutions sont-elles illusoires, nous permettant de justifier notre manque de volonté à quitter ce monde ultra high tech ?

Si tel est le cas, ce projet ne donnera pas suite, après l'examen final.
