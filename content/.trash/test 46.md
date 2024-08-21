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
if (task.start.formatAsDate() === '2024-03-29') return true; \
if (task.file.filenameWithoutExtension === "2024-03-29" && (task.start.formatAsDate() === '' || task.start.formatAsDate() === '2024-03-29') && task.heading === "action" && task !== "éléments reportés") return true; \
return false;
hide start date
```



___
## éléments de la journée

```button
name ajouter des éléments à l'agenda
type command
action Commander: éléments dans agenda
replace [35,41]
```
^button-qoc7