
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
if (task.file.filenameWithoutExtension === "{{title}}" && (task.start.formatAsDate() === '' || task.start.formatAsDate() === '{{title}}')) return true; \
return false;
hide start date
status.name does not include info
status.name does not include location
hide task count
```

## notes récurrentes reportées jusqu'à ce jour
```dataview
table date(due_at) as revoir_le , repeat as se_répète_tout_les
from "" and -"Modèles (inclus)/modèle templater pour boîte de réception" and -"Modèles (inclus)/modèle pour module principal"
where due_at != null AND date(due_at) <= date(<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>)
sort due_at desc
```

```button
name Revoir les notes récurrentes reportées
type command
action Repeat: Review due notes
```
^button-y45u
___
# évènements de la journée
```gEvent
date: {{title}}
type: day
```
___

# notes (peut-être) à revoir une fois
