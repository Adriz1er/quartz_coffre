
```button
name Ajouter une action
type command
action QuickAdd: pour actions dans note quotidienne
```
^button-huhm
```button
name Ajouter un projet
type command
action QuickAdd: pour projets dans note quotidienne
```
^button-13m0

___
## éléments reportés
```tasks
tag does not include #noté 
status.type is not DONE
status.type is not CANCELLED
sort by filename 
sort by urgency 
sort by created 
filter by function \
if (task.start.formatAsDate() === '{{title}}') return true; \
if (task.file.filenameWithoutExtension === "{{title}}" && (task.start.formatAsDate() === '' || task.start.formatAsDate() === '{{title}}') && task.heading === "action" && task.heading !== "éléments reportés") return true; \
return false;
hide start date
```
## évènements de la journée
```button
name ajouter des éléments à l'agenda
type command
action Templater: Insert Modèles (inclus)/modèle pour éléments dans agenda depuis note quotidienne.md
remove true
```
^button-0gw4
___
