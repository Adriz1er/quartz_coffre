---
aspiration: 
tag:
  - concept
cards-deck:
---
```dataview
table échéance, priorité, énergie
from "" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/Modèles (inclus)" and -"écrivez le nom de votre coffre ici (version sans google agenda)"
where contains(tags, "projet") 
sort choice(échéance != null, date(échéance), date("2300-01-01")) 
sort choice(file.tasks.due != null, date(file.tasks.due), date("2300-01-01"))
sort choice(priorité != null, priorité, 0) desc 
sort choice(file.task.scheduled != null, date(file.task.scheduled), date("2300-01-01")) desc 
sort choice(énergie != null, énergie, 0)
```