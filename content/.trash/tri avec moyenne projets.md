---
aspiration: 
tag:
  - concept
cards-deck:
---

```dataview 
table échéance ,priorité, énergie, due
from "" or "les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/roadmap" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/Modèles (inclus)" and -"écrivez le nom de votre coffre ici (version sans google agenda)" 
where contains(tag, "projet") 
sort échéance-today
```