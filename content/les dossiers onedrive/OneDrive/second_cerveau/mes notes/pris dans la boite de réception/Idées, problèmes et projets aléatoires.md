```dataviewjs
dv.taskList(dv.pages('"" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici" and -"écrivez le nom de votre coffre ici (version sans google agenda)/" and -#noté').file.tasks
.where(t => ['I'].includes(t.status))
.sort(() => Math.random() - 0.5)
.limit(1));
``` 
```button
name Rafraichir
type line(33) text
action ```dataviewjs
replace [33,33]
```
^button-3ueq
```dataviewjs
dv.taskList(dv.pages('"" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici" and -"écrivez le nom de votre coffre ici (version sans google agenda)/" and -#noté').file.tasks
.where(t => ['!'].includes(t.status))
.sort(() => Math.random() - 0.5)
.limit(1));
``` 
```button
name Rafraichir
type line(46) text
action ```dataviewjs
replace [46,46]
```
^button-4ybq

```button
name Afficher un projet aléatoirement
type command
action Advanced Random Note: projet
color blue
```
^button-jm6f