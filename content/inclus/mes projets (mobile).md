
```dataview
table échéance, priorité, énergie
from "" and -"Modèles (inclus)/modèle templater pour boîte de réception" and -"roadmap" and -"Modèles (inclus)/modèle pour module principal"
where contains(tag, "projet")
sort choice(date(échéance) != null, date(échéance), choice(priorité != null, priorité, choice(énergie != null, énergie, 4)))
```