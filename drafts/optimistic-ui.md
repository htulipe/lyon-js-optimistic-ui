
# Principe technique

Une SPA c'est une UI connecté à un état applicatif. Cet état évolue en fonction des actions utilisateur et l'UI se met à jour en fonction des valeurs de l'état. Par exemple quand on affiche une fiche film sur AC, on affiche un module de notation. Si l'utilisateur a noté le film, le module le reflète. Le module est interactif est permet à l'utilisateur de créer/modifier/supprimer sa note.

Diagramme:
- Etat inital: note de 3
- Action utilisateur
- Etat final: note de 4

L'action utilisateur est très probablement un appel API. C'est donc une action qui prendra un temps indeterminé et dont l'issue est aussi indéterminée (pour des raisons évidentes).

Diagramme:
- Action utilisateur
- Appel API
- Attente
- Réponse (succès ou erreur)

L'approche UI "naïve" est de coller à ce flow:

- Action utlisateur
- Appel API
- Loading state (bouton grisé, spinner, ...)
- Attente
- Réponse API (succès ou erreur)
- Etat final du module de notation (succès ou erreur)

Ça marche bien et c'est simple à mettre en place d'un point de vue tech. MAIS, on peut faire une meilleure UX. En effet, si l'on est confiant sur le fait que l'API va répondre OK (ce qui est très souvent le cas) on peut très bien supprimer l'état de chargement:

- Action utilisateur
- Appel API
- Etat final succès
- Attente
- Réponse (succès ou erreur)
- Etat sucess erreur



# Conséquences techniques

L'optmisitic UI est avant tout possible grâce à l'utilisation d'un cache applicatif (redux par exemple). Le state est idéalement normalisé.

La question de l'optimistic UI est donc de mettre à jour plus tôt son cache applicatif. Cela implique de pouvoir:

- Ecrire dans le cache sans avoir la réponse de l'API. Souvent cela revient à mimer les résultats de l'API
- Rollback la MAJ du state en cas d'erreur (différences entre ajout/modification/suppression)
- Enrichir le state de donnée supplémentaires à la réponse de l'API (une date d'enregistrement pas exemple)

## Ecrire dans l'état applicatif sans avoir la réponse de l'API

Le cas lu plus simple est la mise à jour d'objets existant comme par exemple mettre une note. Créér ou supprimer des objets devient plus compliqué surtout à partir du moment où l'on a des listes.

Une approche est de mimer la response de l'API. Dans le cas de Redux avec 3 actions REQUEST, SUCCESS, FAILURE on met dans REQUEST un "faux" payload, identique au vrai. Il suffit de brancher les reducer REQUEST sur les reducer SUCCESS est on est bon (voire on peut supprimer les reducer SUCCESS).

On peut aussi simplement écrire directement dans son état applicatif ce qui permet de s'abstraire de l'aspect de l'API. A ce moment les reducer REQUEST et SUCCESS ne sont plus les mêmes. C'est le cas sur www x Redux, *exemple d'ajout d'opinion*, *exemple de modification d'opinion*


Sur Apollo, il faut tout le temps mimer la response API. On peut donner une "optimisticResponse" pour chaque mutation émise.

Cela implique de connaitre la structure exacte de l'API ce qui est un peu problématique avec Apollo qui demande beaucoup d'info pour maintenir son cache. Par exemple il faut donner dans l'OR le typename et l'id des objets retournés. Cela implique que le front ait connaissance de ces informations.

Apollo refusera de MAJ son cache si l'OR n'est pas valide.

Aussi Apollo ne mettra pas vos liste à jour. *Exemple sur MAC, la modale d'ajout de film ne mettra pas la liste en overlay à jour*. Il faut dire à Apollo comment mettre à jour les queries qu'il a en cache (en l'occurrence une liste de films). Cela ce fait avec le param "update" de mutation.

## Rollback le state en cas d'erreur


# Question

Est-ce qu'Apollo refuse de MAJ avec une OR non valide.
Comment Apollo gère le cas d'erreur avec les OR.



# Autres points à arborer

En conclusion, les cas où ça marche pas:


Shopping cart pas en optimistic UI
Liste MAC filtrées et triées, impossible de faire de l'OUI car overlay modal + logique métier avancée de tri


mdxdeck