
```button
name Revoir les projets récurrents
type command
action Repeat: Review due notes
```
^button-y45u
```dataview
table date(due_at) as revoir_le , repeat as se_répète_tout_les
from "" and -"Modèles (inclus)/modèle templater pour boîte de réception" and -"Modèles (inclus)/modèle pour module principal"
where due_at != null
sort due_at
```