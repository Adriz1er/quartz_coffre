---
tags:
  - projet
échéance: 
priorité: 
énergie: 
---


```aviewjs
const {update} = this.app.plugins.plugins["metaedit"].api
const {createButton} = app.plugins.plugins["buttons"

dv.table(["Name", "Status", "Project", "échéance", ""], dv.pages("#projet")
    .sort(t => t["due-date"], 'desc')
    .where(t => t.status != "Completed")
    .map(t => [t.file.link, t.status, t.project, t["échéance"], 
    createButton({app, el: this.container, args: {name: "Done!"}, clickOverride: {click: update, params: ['Status', 'Completed', t.file.path]}})])
    )
```
