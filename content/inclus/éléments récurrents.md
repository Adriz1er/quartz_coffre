⚠️ ne pas cocher les [[les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/inclus/éléments récurrents]] dans cette note car la récurrence ne fonctionne pas
```dataview
task
where repeat != null
where !contains(tag, "inclus")
where !contains(tag, "noté")
where start or contains(file.path, "notes quotidiennes")
sort choice(start != null, start, date(file.name))
sort due desc
sort priority desc
sort scheduled desc
where !completed
WHERE status != "-"
WHERE status != "X"
```