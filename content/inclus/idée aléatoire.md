```dataviewjs
dv.taskList(dv.pages('"" and -#inclus and -#noté').file.tasks
.where(t => ['I'].includes(t.status)) 
.sort(() => Math.random() - 0.5)
.limit(1));
```