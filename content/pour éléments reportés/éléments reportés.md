
```tasks
tag does not include #noté 
group by function    \
	if (task.start.formatAsDate() !== '') { \
	return task.start.formatAsDate() + (' | ' + task.file.filenameWithoutExtension) + (task.hasHeading ? (' > ' + task.heading) : ''); \
	if (task.heading === 'évènements de la journée') { \
return task.start.formatAsDate() + (' | ' + task.file.filenameWithoutExtension); \
} \
} \
else { \
if (task.heading === 'évènements de la journée') { \
    return task.file.filenameWithoutExtension \
} \
else { \
    return task.file.filenameWithoutExtension + (task.hasHeading ? (' | ' + task.heading) : ''); \
    } \
}
sort by filename 
sort by urgency 
sort by created 
(path includes notes quotidiennes) OR (has start date)
status.type is not DONE
status.type is not CANCELLED
hide created date
short mode
hide start date
status.name does not include info
status.name does not include location
```
___
## [[archive/2024/les dossiers onedrive/OneDrive/second_cerveau/mes notes/pris dans la boite de réception/éléments récurrents passés (non finis)|éléments récurrents passés (non finis)]]
```tasks
(is recurring) AND (starts before today) AND (has start date)
tag does not include #noté 
status.type is not DONE
status.type is not CANCELLED
sort by start
sort by filename 
sort by heading
sort by urgency
status.name does not include info
status.name does not include location
folder does not include "archive"
```