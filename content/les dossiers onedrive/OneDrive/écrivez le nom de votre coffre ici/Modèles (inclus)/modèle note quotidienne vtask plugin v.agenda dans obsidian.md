
```button
name Ajouter une action
type command
action QuickAdd: pour actions dans note quotidienne V.sans google agenda
```
^button-nhhy
```button
name Ajouter un projet
type command
action QuickAdd: pour projets dans note quotidienne
```
^button-13m0

___
# éléments reportés
```tasks
tag does not include #noté 
sort by filename 
sort by urgency 
sort by created 
group by function    \
	if (task.heading == 'évènements de la journée') return task.file.filenameWithoutExtension ; \
    return task.file.filenameWithoutExtension + (task.hasHeading ? (' > ' + task.heading) : '');
filter by function \
if (task.file.filenameWithoutExtension === "📥" && (task.status.type === "DONE" || task.status.type === "CANCELLED")) return false; \
if (task.start.formatAsDate() === '{{title}}') return true; \
if (task.file.filenameWithoutExtension === "{{title}}" && (task.start.formatAsDate() === '' || task.start.formatAsDate() === '{{title}}') && task.heading !== "évènements de la journée") return true; \
return false;
hide start date
status.name does not include info
status.name does not include location
hide task count
```

## notes récurrentes reportées jusqu'à ce jour
```dataview
table date(due_at) as revoir_le , repeat as se_répète_tout_les
from "" and -"roadmap"
where due_at != null AND date(due_at) <= date(0002-01-02)
sort due_at desc
```
```button
name Rafraichir
type line(37) text
action ```dataviewjs
replace [37,37]
```
^button-dhw3
```button
name Revoir les notes récurrentes reportées
type command
action Repeat: Review due notes
```
^button-y45u
___

# actions

# notes (peut-être) à revoir une fois
