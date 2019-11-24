# Slide ouverture

Titre prez + Nom + présentation perso

# Slide intro OUI SPA

Parler de l'OUI, de ce qu'est une SPA (UI branchée à un state qui évolue)

# Slide intro OUI x Redux

Mentioner Apollo (prez Maxence) comme lib souvent citée avec l'OUI.

Parler de la possibilité de faire ça avec d'autre lib comme Redux

Introduire la moviepage Allociné (vidéo ou iframe?) et de sa feature (userrating + want to see)

Parler de l'histo. Utilisation de React x Redux mais sans OUI. State redux devenu un peu fourbi.

Besoin de revoir le state avant de faire de nouvelle feature. Quand est-il de l'OUI ?

Au final on va parler un peu d'OUI et un peu de design de state Redux

# Slide dans le vif du sujet

Revenir sur les feature de la movie page (Userating + wantToSee). Parler du fait qu'il peut y en avoir plusieurs par page.

Afficher les deux boutons (**GIF ?**)

Lister les 4 demandes fonctionnelles

# Slide le nouveau state "all"

Code JSON de all
Toutes les lignes en dim
HL du movie (objet normalisé, id en en clé, liste fini de propriétés, TypeScript)
HL des autres movies
HL de l'opinion (mentionné la présence d'une ref vers l'ID)
HL du wts

# Slide du nouveau state "actionsPerEntity"

Code JSON de actionsPerEntity
Toutes les lignes en dim
HL du 1er movie (mentionné la presence d'une réf vers les actions)
HL du second movie (si pas d'action null mais l'objet existe quand même)
HL du 3eme movie (WTS **A dégager??**)

# Slide utilisation de ce state

Code JS
Toutes les lignes en dim
HL compo UserRating (utilise une opinion et une entité)
HL ligne connect (connection à Redux)
HL 2 lignes utiliation du compo connecté (entityId)

HL mapStateToProps boundaries (la fonction interessante)
HL ligne entity (recup de l'entité directement)
HL ligne opinionId (récup de l'id d'opinion direcetement)
HL ligne opinion (récup de l'opinion)
HL return (RAS)

# Slide recap plus transition

- Toutes les entités sont listées dans all et ont une correspondance dans actionsPerEntity
- Les composants sont découplés du state. UserRating va lire son opinion et son entité sans savoir d'où ces infos viennent ni quand elle évoluent.

On a une UI branchée à une state
Comment la faire évoluler ?

# Slide actions Redux

Liste bullet point CUD pour opinion
Parler du tryptique d'action RSF
Mentionner action FETCH: permet auusi de crééer le state initial

# Slide récap

On a des actions permettant de faire évoluer le state. Comment faire de l'OUI avec ça.

En somme, se brancher sur _REQUEST plutôt que sur _SUCCESS

# Slide UPDATE disptach

Code JS dispatch 
Toutes les lignes dim
HL boundaries dispatch
HL type (préciser que l'on est sur REQUEST)
HL payload (mentionner que le payload est partagé au sein du tryptique)


All: modifier la valeur d'opinion 
Code JS reducer
Tout dim
HL switch + case (blabla redux)
HL maj state (décrire, mentionner l'immutabilité)

Ligne: le compo UserRating reçoit la nouvelle valeur d'opinion directement

# Slide CREATE dispatch

Code js Reducer
Pas de dim
Mentionner le changement de type et de payload

# Slide CREATE

Il faut créer un nouvelle objet, le stocker dans all et le référencer dans actionsPerEntity.

PB on reférence par des id et on n'en a pas

# Slide modif payload

Code js 
Tout dim sauf transactionId
HL transactionId (rappeler partage du payload)

# Slide CREATE reducer all

Code 

# Slide CREATE reducer actionsPerEntity

Code all

# Slide CREATE success

Parler de la MAJ avec la vrai donnée
Parler de UserRating qui reçoit rien de neuf entre REQUEST et SUCCESS
L'id temporaire n'impacte pas le rendu

# Slide DELETE disptach

Code

# Slide DELETE actionPerEntity

Code
Dire qu'il suffit de marquer à null
Mais pas ouf, il faut aussi supprimer l'objet opinion (par cohérence)

# Slide DELETE all

Code

Ok mais là on a supprimer du code, comment a se passe si l'API plante

# Slide UPDATE_FAILURE

Code payload
HL oldRating

# Slide UPDATE_FAILURE all

Code 
Pas besoin de modif actionPerEntity

# Slide CREATE_FAILURE all

Rappel transactionId

Code

# Slide CREATE_FAILURE actionsPerEntity

Code

# Slide DELETE_FAILURE

Revenir en arrière, éviter de supprimer l'objet

Code isDeleted

Attention modifier le mapStateToProps

# Slide mapsStateToProps

Code
HL ligne opinion.isDeleted
Mentioner un helper

# Slide DELETE_FAILURE all

Revenir au rollback
Code isDeletedFalse
Rien d'autre à faire
Préciser qu'il faudrait nettoyer sur SUCCESS pour vraiment supprimer

# Slide conclusion

Conclusion bullet point

# Slide merci