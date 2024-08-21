
```dataview
table échéance, priorité, énergie
from "" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/Modèles (inclus)" 
where contains(tag, "projet")
sort choice(priorité != null, priorité, 0) desc 
```