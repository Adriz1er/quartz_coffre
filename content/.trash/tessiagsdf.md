---
tags: []
échéance: 2300-01-01
priorité: 0
énergie: 0
---
```
function groupTasks(tasks) {

  // Créer un objet pour stocker les tâches groupées.

  const groupedTasks = {};

  

  // Parcourir chaque tâche.

  tasks.forEach((task) => {

    // Convertir `dependsOn` en un tableau.

    const dependsOn = Array.from(task.dependsOn);

  

    // Si la tâche n'est pas bloquée par d'autres tâches, ajouter son ID au groupe "Tâches non bloquées".

    if (dependsOn.length === 0) {

      if (!groupedTasks["Tâches non bloquées"]) {

        groupedTasks["Tâches non bloquées"] = [];

      }

      groupedTasks["Tâches non bloquées"].push(task.id);

      return;

    }

  

    // Pour chaque tâche bloquante, ajouter l'ID de la tâche bloquée au groupe correspondant.

    dependsOn.forEach((blockingTaskId) => {

      if (!groupedTasks[blockingTaskId]) {

        groupedTasks[blockingTaskId] = [];

      }

      groupedTasks[blockingTaskId].push(task.id);

    });

  

    // Si l'ID de la tâche n'est pas déjà dans un groupe, l'ajouter au groupe "Tâches bloquées".

    if (!groupedTasks[task.id]) {

      groupedTasks[task.id] = [];

    }

    groupedTasks[task.id].push(task.id);

  });

  

  // Retourner l'objet des tâches groupées.

  return groupedTasks;

}
```