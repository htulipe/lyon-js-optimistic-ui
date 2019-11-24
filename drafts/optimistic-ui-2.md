Mis en place (realtivement) facile dans Apollo x Graph
Comment faire ça dans React x Redux
ça ne remplace pas un serveur défaillant
ça a des implications (fermeture d'onglet quand action pas finie)
Que faire quand l'action entraine d'autres (suppresion d'un WTS, ajout dans une liste)
Pas efficace quand besoin de validation côté serveur



L'OUI est souvent mise en avant avec Apollo x Graph car la libraire propose nativement des outils pour la mettre en place. Voyons comment faire dans une app Redux x React.

Historiquement, AC utilise RxR mais sans optimistic UI. Le state Redux avait également besoin d'un nettoyage car avait évolué au fil des demande produit en une machinerie complexe.

Comment designer son state pour l'optimistic UI

Exemple de la page "Meilleurs Films"

Plusieurs films, pour chacun on peut faire un WTS ou une note

**DEMO**

Ce que l'on veut:

- Pour chaque film (ou entité), on peut le noter (CUD) ou le mettre en envie de voir (CD)
- Les deux actions sont mutuellement exclusives
- Quand on a noté un film on ne peut plus le mettre en WTS
- Quand on note un film marqué WTS, le WTS est supprimé par le back


L'application est branchée à un state redux composé de 2 reducers:

```
const all = {
    "Movie:10568": {
        title: "Forrest Gump"
        releaseDate: "5/10/1994"
        ...
    },
    "Movie:22779": {
        ...
    },
    "Movie:9393": {
        ...
    },
    "Opinion:13ZS34": {
        value: 4,
        relatedEntity: "Movie:10568"
        ...
    },
    "WantToSee:24FD32": {
        relatedEntity: "Movie:9393"
    }
}
```

```
actionsPerEntity = {
    "Movie:10568": {
        opinion: "Opinion:13ZS34",
        wanToSee: null,
    },
    "Movie:22779": {
        opinion: null,
        wanToSee: null,
    },
    "Movie:9393": {
        opinion: null,
        wantToSee: "WantToSee:24FD32"
    }
}
```

Les composants se branchent à ce state via mapStateToProps:

```
const UserRating({ opinion, entity }) => {
    // return JSX 
}

const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId];
    return {
        entity: entity,
        opinion: opinion
    }
}

const ConnectedUserRating = connect(mapStateToProps)(UserRating);

// <ConnectedUserRating entityId="Movie:10568" />
// <ConnectedWTSButton entityId="Movie:10568" />
```


Que noter jusque là:

- Toutes les entités sont listées dans all et ont une correspondance dans actionsPerEntity
- Les composants sont découplés du state. UserRating va lire son opinion et son entité sans savoir d'où ces infos viennent ni quand elle évoluent.


Les actions Redux:

- GET_SOCIAL_ACTIONS_FOR_ENTITIES (REQUEST/SUCCESS/FAILURE)
- CREATE_OPINION (REQUEST/SUCCESS/FAILURE)
- UPDATE_OPINION (REQUEST/SUCCESS/FAILURE)
- DELETE_OPINION (REQUEST/SUCCESS/FAILURE)



Comment faire de l'OUI simplement à partir de ça. Il faut mettre à jour le state non plus sur _SUCCESS mais sur _REQUEST. 

# MAJ d'une opinion

Le cas le plus simple:

```
disptach({
    type: UPDATE_OPINION_REQUEST, 
    payload: {
        opinionId: "Opinion:2367"
        newRating: 4,
        entityId: "Movie:12345",
    }
});
```

Modif dans "all":  aller modifier la valeur de l'opinion
Modif dans "actionsPerEntity": aucune, la relation existe déjà

```
// all
swicth(type) {
    case UPDATE_OPINION_REQUEST: {
        // Il faut évidemment créer un nouveau state, pas modifier l'existant
        state[payload.opinionId].value = payload.newRating;
    }
}
```

A ce moment, le composant ConnectUserRating reçoit directement la nouvelle valeur. Ça marche.

# Création d'une opinion

Un peu plus complexe:

```
disptach({
    type: CREATE_OPINION_REQUEST, 
    payload: {
        rating: 4,
        entityId: "Movie:12345",
    }
});
```

Il faut, dans "actionsPerEntity", aller modifier l'entrée pour "Movie:12345". Dans "all", rajouter une entrée pour la nouvelle opinion.

Oui mais l'opinion n'a pas d'id ?

```
payload: {
    rating: 4,
    entityId: "Movie:12345",
    transactionId: Math.floor(Math.random() * -100000)
}
```

```
// all
swicth(type) {
    case CREATE_OPINION_REQUEST: {
        state[payload.entityId].opinion = payload.transactionId
    }
}
```

```
// actionPerEntity
swicth(type) {
    case CREATE_OPINION_REQUEST: {
        state[payload.transactionId] = {
            value: payload.rating,
            relatedEntity: payload.entityId
        }
    }
}
```

Il faut quand même penser à MAJ le state une fois la note réellement créée.

Dans "all", supprimer l'entrée avec le faux id. En crééer une avec la donnée renvoyée par le serveur (et donc le vrai id)

Dans "actionsPerEntity", MAJ la référence à l'opinion liée à "Movie:12345" pour y mettre le vrai id.

A chaque moment (REQUEST et SUCCESS), le compo ConnectedUserRating reçoit directement la nouvelle opinion.

L'id temporaire est une tambouille interne au state et n'apparait même pas dans le mapStateToProps:

```
const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    // sur REQUEST opinionId vaut un entier négatif aléatoire mais osef. Sur SUCCESS il vaut un vrai id mais, pareil, osef
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId]; // Car le lien est fait ici
    return {
        entity: entity,
        opinion: opinion
    }
}
```

# Suppression d'une opinion

En soit, il suffit d'aller dans actionsPerEntity pour supprimer le lien à l'opinion

```
disptach({
    type: DELETE_OPINION_REQUEST, 
    payload: {
        opinionId: "Opinion:12DFE",
        entityId: "Movie:12345",
    }
});
```

```
// actionPerEntity
swicth(type) {
    case DELETE_OPINION_REQUEST: {
        state[payload.entityId].opinion = null
    }
}
```

Ça marche. C'est moche. On a, dans all, un objet opinion qui traine encore là:

```
// all
swicth(type) {
    case DELETE_OPINION_REQUEST: {
        delete state[payload.opinionId];
    }
}
```

C'est plus propre. Pas contre là on a supprimer un objet. Qu'est-ce qu'il se passe si l'appel API foire et que la suppression n'est pas réellement faite? Même question pour la création et la suppression

J'ai décidé de rollback le state à sa valeur précédente. Comment faire?

# Echec de la MAJ d'une note

Il faut garder en mémoire l'ancienne valeur dans la payload

```
payload: {
    opinionId: "Opinion:2367"
    newRating: 4,
    oldRating: 3,
    entityId: "Movie:12345",
}
```

Ce payload est accessible aux trois action REQUEST, SUCCESS et donc DELETE

Rien à faire dans "actionsPerEntity".

```
// all
swicth(type) {
    case UPDATE_OPINION_FAILURE: {
        state[payload.opinionId].rating = payload.oldRating
    }
}
```

# Echec de la création d'une note

On travaille avec le transactionId. Il faut aller supprimer l'objet dans all et supprimer sa référence dans actionsPerEntity

```
// all
swicth(type) {
    case CREATE_OPINION_FAILURE: {
        delete state[payload.transactiIon]
    }
}
```

```
// actionsPerEntity
swicth(type) {
    case CREATE_OPINION_FAILURE: {
        state[payload.entityId].opinion = null;
    }
}
```

# Echec de la suppression d'une note

Ici il faudrait éviter de supprimer l'objet dans _REQUEST. Dans all

```
// all
case DELETE_OPINION_REQUEST: {
    state[payload.opinionId].isDeleted = true;
}
```

Attention. Il faut donc penser à modifier le mapStateToProps pour lire cette info:

```
const mapStateToProps = (ownProps) => {
    const entity = state.all[ownProps.entityId];
    const opinionId = state.actionsPerEntity[ownProps.entityId].opinion;
    const opinion = state.all[opinionId];
    return {
        entity: entity,
        opinion: opinion.isDeleted ? null : opinion
    }
}
```

Ça peut être fait dans un helper `const opinion = getOpinionForEntityId(state, ownProps.entityId)` pour simplifier la chose.

```
// all
case DELETE_OPINION_FAILURE: {
    state[payload.opinionId].isDeleted = false;
}
```

Pas de modif dans actionsPerEntity Idéalement, il faut nettoyer sur SUCCESS. Supprimer dans all l'opinion supprimée et sa référence dans actionsPerEntity.

# A retenir

- C'est au final un "Optimistic State" que l'on a vu. L'UI n'a jamais été changée.
- C'est la modélisation du state qui facilite l'implem de l'OUI.
- WTS est du on/off, est plus simple à gérer. Pas d'update. Facile de rollback un état binaire.
- Ce n'est jamais aussi simple qu'on l'imagine (on a pas parlé de la contrainte WantToSee x Opinion)
- On n'échappe pas à quelques tricks (isDeleted).
- C'est beaucoup de cas par cas. 
- Ce n'est qu'une solution parmis d'autres. Autant dans la modélisation du state (actionsPerEntity pourrait être fusionner dans les objets de all) que dans la façon d'implem l'OUI dans le state (on pourrait imaginer une solution à base d'undo/redo).