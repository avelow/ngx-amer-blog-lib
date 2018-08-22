> En mathématiques, la combinatoire, appelée aussi analyse combinatoire, étudie les configurations de collections finies d'objets ou les combinaisons d'ensembles finis, et les dénombrements.

C'est un peu barbare à la première lecture mais c'est beaucoup plus simple qu'il n'y parait. Pour expliquer les bases de la combinatoire, on va se baser sur une situation très simple que vous pouvez rencontrer lors de tournois live...

// TODO: virer ou garder le titre ?

# ... le placement des joueurs autour de la table.

## Mise en situation

Nous sommes en train de participer à un tournois 6-max dans un cadre parfait :
Piscine, musique et cartes ...
Tout est au rendez vous... même Mirdoun, un joueur de talent capable de tout et surtout de gagner vos jetons avec une facilité déconcertante s'il se trouve à côté de vous.

Après plus de 3 heures de jeu, vous êtes dans la bonne voix avec votre stack qui dépassent les 35 000 jetons (alors que le buy in vous offrait 10 000 jetons !). Votre table casse après une dernière main difficile qui a mis à mal votre stack et votre confiance.

Il vous reste 28 325 jetons et vous vous dirigez vers votre nouvelle table. Vous découvrez une table avec seulement 3 joueurs et donc 3 places libres. Vous arrivez donc avec 2 autres joueurs pour remplir cette table de 6-max. Et parmis eux, il y a Mirdoun !
Oh non, vous espérer vraiment ne pas tomber à côté de lui pour pouvoir garder vos chances de survivre à la table.

Table Initiale
X L X X L L -> Hero Vilain Mirdoun
![image de la situation avec le dessin de la table](/assets/presentation.png)

L'objectif, si vous l'acceptez, sera de déterminer notre probabilité de nous retrouver assis à côté de l'impitoyable Mirdoun sachant que le placement des joueurs est purement aléatoire.

## Premier étape : le nombre de combinaisons possibles

Pour commencer, nous allons essayer de déterminer toutes les combinaisons existantes. Avec 3 personnes à placer sur 3 sièges, rien de plus simple ! Il suffit de toutes les énumérer.

configuration 1
X H X X V M

configuration 2
X H X X M V

configuration 3
X V X X H M

configuration 4
X V X X M H

configuration 5
X M X X H V

configuration 6
X M X X V H

Nous avons donc 6 combinaisons possibles pour placer 3 personnes sur 3 sièges. En les énumérant, nous venons de dénombrer toutes les configurations possibles.

On peut même dénombrer des configurations plus précises. Par exemple, toutes celles où nous sommes assis à côté de Mirdoun et puis celles où nous ne le sommes pas.

Parmis les 6 configurations, nous nous retrouvons à côté de Mirdoun 2 fois. Dans les 4 configurations restantes, nous ne nous retrouvons pas à côté de Mirdoun.
Nous avons donc 2 chances sur 6 de nous retrouver à côté de Mirdoun et 4 chances sur 6 de ne pas l'être.

> Dans le monde des probabilités, on appelle un événement, un ensemble de résultats correspondant à une proposition. Dans notre cas, la porposition est "se retrouver assis à côté de l'impitoyable Mirdoun" et les resultats sont les configurations 3 et 4.

> L'ensemble de tous les résultats possibles correspondant à l'expérience aléatoire est appelé l'univers.

On peut dire que la probabilité l'événément "se retrouver assis à côté de l'impitoyable Mirdoun" est de 2/6 que l'on peut simplifier par 1/3 ou environ 33,33%.
L'événement contraire est "ne pas se retrouver assis à côté de l'impitoyable Mirdoun" est de 4/6 soit 2/3 ou environ 66,66%.

> Un événément étant certain à une probabilité de 1.

On est certain dans notre situation que nous allons nous asseoir à la table. On peut donc dire que l'événement "s'asseoir à la table" est un événement certain et sa probabilité est de 1.

> Pour faciliter la suite du raisonnement, nous allons rennomer les différents événements par une lettre.
>
> - "se retrouver assis à côté de l'impitoyable Mirdoun" => M (comme Mirdoun)
> - "ne pas se retrouver assis à côté de l'impitoyable Mirdoun" => PM (comme Pas Mirdoun)
> - "s'asseoir à la table" => S (comme S'asseoir)

Lorsque l'on s'asseoit la table, on peut distinquer deux cas possibles :

- "se retrouver assis à côté de l'impitoyable Mirdoun"
- "ne pas se retrouver assis à côté de l'impitoyable Mirdoun"

On peut donc dire que l'événement "s'asseoir à la table" = "se retrouver assis à côté de l'impitoyable Mirdoun" + "ne pas se retrouver assis à côté de l'impitoyable Mirdoun"

> La somme de la probabilité d'un événement et de la probabilité de son événement contraire vaut toujours 1 car il s'agit d'un événémenent certain.

> S = P + PM
>
> - S = 1
> - P = 2/6
> - PM = 4/6
>
> On a donc P + PM = 1

Il est facile de déterminer PM en connaissant seulement M. En effet PM = 1 - M.
On a donc : PM = 1 - 2/4 => PM = 4/6.

On retrouve le résultat obtenu lorsque nous avions dénombrer toutes les configurations possibles.

## Résumé

- probabilité d'un événément c'est le nombre de résultats correspondant à cette événement diviser par le nombre total de configurations possibles
- proba certaine vaut 1
- proba événément A + proba contraintre de événement A = 1

///////

Résumé de toutes les notions
Intro sur cas cartes déterminer le proabibilité d'obtenir une paire de 10 ou plus lors de la distribution des cartes

Sachant qu'il y a 52 cartes et qu'on en reçoit 2 aléatoirement

# Combinatoire autour de la table

exo simple combinatoire

table de 6 max 3 déjà placés et 3 nouveaux qui au niveau de 3 sièges libre

X L X X L L

parmis les 3 qui arrivent, il y a le top reg du moment et vous ne voulez surtout pas qu'il soit à votre gauche comme à votre droite

Quelle est la proba de l'éviter
en étape
-> nb de combinaison possible
-> nb de combinaison possible avec lui a côté
-> nb de combinaison sans lui à côté

avec + sans = total

avec / total = proba avec
sans / total = proba sans

Enumération pour tout montrer

puis même cas sans énumération

intro sur carte avec exo et piste de reflexion
