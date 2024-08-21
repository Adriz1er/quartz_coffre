
```dataviewjs
dv.taskList(dv.pages('"" and -"les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici" and -#noté').file.tasks
.where(t => ['I'].includes(t.status)) 
.sort(() => Math.random() - 0.5)
.limit(1));
``` 
