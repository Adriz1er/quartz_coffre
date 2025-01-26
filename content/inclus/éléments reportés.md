
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
(path includes Notes Quotidiennes) OR (has start date)
status.type is not DONE
status.type is not CANCELLED
hide created date
short mode
hide start date
status.name does not include info
status.name does not include location
```
___
### éléments récurrents passés (non finis)
```tasks
(is recurring) AND (starts before today) AND (has start date)
tag does not include #noté 
tag does not include #inclus
status.type is not DONE
status.type is not CANCELLED
sort by urgency
sort by filename 
sort by heading
status.name does not include info
status.name does not include location
```