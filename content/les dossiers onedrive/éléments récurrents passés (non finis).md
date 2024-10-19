
```tasks
(is recurring) AND (starts before today) AND (has start date)
tag does not include #noté 
status.type is not DONE
status.type is not CANCELLED
sort by urgency
sort by filename 
sort by heading
status.name does not include info
status.name does not include location
```
## notes récurrentes reportées avant aujourd'hui 
```dataview
table date(due_at) as revoir_le , repeat as se_répète_tout_les
from "" and -"Modèles (inclus)/modèle templater pour boîte de réception" and -"Modèles (inclus)/modèle pour module principal"
where due_at != null AND date(due_at) <= date(today)
sort due_at desc
```
```button
name Revoir les projets récurrents
type command
action Repeat: Review due notes
```
^button-y45u