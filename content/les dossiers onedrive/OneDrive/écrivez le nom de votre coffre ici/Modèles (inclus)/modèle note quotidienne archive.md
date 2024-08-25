

```button
name +
type command
action Commander: ajouter tache dans note quotidienne
```
^button-i9ya
## éléments reportés
```dataview
task
where !contains(tag, "noté")
where start = date({{title}}) OR (file.name = this.file.name AND (contains(start, nonnull) OR contains(start,date({{title}}))))
sort created
```
## évènements de la journée
```gEvent
date: {{title}}
type: day
```

