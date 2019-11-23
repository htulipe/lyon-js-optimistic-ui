- Présentation d'un app React/Redux
- Présentation d'un app React/Apollo





# Organisation

## Présentation globale

Team front de 4 personnes, 3 faisant du JS

Présenter l'archi JS de la refonte, son histoire
- Redux + React + Vanilla (scripts de pub et tracking, player, ...)
- Créée sur une API Rest en 2015
- Plusieurs points d'entrées mais besoin d'un état global
- Redux comme normalization du cache data/all + data/actionsPerEntity. Autre reducer reférençant.
- Refactoring + Typescript

Présenter l'archi JS de MAC
- ReactRouter + Apollo + React
- Sentry

## Retours d'xp sur différents sujets

cf [Sujets]



# Sujets 



## Userspace

React + Apollo + GraphQL

## Autres points

Ne pas trop sortir des sentiers battus:
- Ex: Le binding "::" pose problème quand passe sous typescript

Travailler à plusieurs:
- intégrer du typage (typescript ou flow)
- prettier

Optimistic UI, avantages et limitations:
- Meilleure UX car UI plus reactive
- la suppression est difficilement annulable

Redux
- normaliser le cache
- ne pas tout monter dans le state

Tracking:
- pb context vs composant React atomique
- Infos demandés en plus spécialement pour le tracking

Adoption des techno par l'équipe. Equipe assez junior, a du encaisser un
refacto de Redux + les hooks React + Typescript. Peut-être que TS n'est pas 
un bon choix au final vu que l'adoption n'est pas là ? Temps de dev 
augmenté car les developpeur galèrent avec les concepts.

userEntityLeaf sur l'API Social
Apollo dicte une certaine façon de concevoir les API. la tableau socialActions n'était clairement pas adapté au système de mise en cache d'Apollo.


