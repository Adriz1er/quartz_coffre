
```dataview
table
from "" and -"reportés" and -"projets partagés" and -"Notes Quotidiennes" and -"Modèles (inclus)" and -"archives" and -"horizon" and -"inclus" and -"projets" and -"habitudes" and -"notes de contenu"
where !contains(tags, "projet") and (due_at = null or repeat = null)
where file.name != "👤"
where file.name != "📥"
where file.name != "index" 
where file.name != "boîte de réception" 
where file.name != "projets actifs" 
where file.name != "éléments reportés" 
where file.name != "liste des notes récurrentes reportées" 
where file.name != "éléments en attente" 
where file.name != "Idées, problèmes et projets aléatoires"
where file.name != "éléments non concretisables"
where file.name != "liste d'actions suivantes"
where file.name != "feuilles volantes"
where file.name != "projets partagés"
where file.name != "page d'accueil téléphone"
where file.name != "Notes pour horizon"
where file.name != "nouveaux intrants"
where file.name != "éléments récurrents passés (non finis)"
where file.name != "Spaces"
where file.name != "#projet"
where file.name != "patch note pour modèle de coffre pour pratiquer GTD"
```
## Notes quotidiennes de plus d'un mois
```dataview
table
from "Notes Quotidiennes"
where date(file.name, "yyyy-MM-dd").month < date(today).month and date(file.name, "yyyy-MM-dd").day < date(today).day and date(file.name, "yyyy-MM-dd").year <= date(today).year or date(file.name, "yyyy-MM-dd").year < date(today).year
```
## Notes pour horizon
```dataview
table
from "horizon"
```
## Notes pour projets partagés
```dataview
table
from "projets partagés"
```