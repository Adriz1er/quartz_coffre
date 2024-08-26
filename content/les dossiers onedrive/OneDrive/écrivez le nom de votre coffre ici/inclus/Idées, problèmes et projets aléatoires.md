```button
name Afficher un projet aléatoirement
type command
action Advanced Random Note: projet
color blue
```
^button-jm6f
```dataviewjs
dv.taskList(dv.pages('"" and -#inclus and -"Modèles (inclus)" and -#noté').file.tasks
.where(t => ['I'].includes(t.status)) 
.sort(() => Math.random() - 0.5)
.limit(1));
```
```button
name rafraichir
type line(8) text
action ```dataviewjs
replace [8,8]
```
```dataviewjs
dv.taskList(dv.pages('"" and -#noté and -"Modèles (inclus)" and -#inclus').file.tasks
.where(t => ['!'].includes(t.status)) 
.sort(() => Math.random() - 0.5)
.limit(1));
```
```button
name rafraichir
type line(20) text
action ```dataviewjs
replace [20,20]
```