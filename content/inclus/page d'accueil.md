
```button
name Créer un nouveau projet
type command
action Créer une nouvelle note
```
^button-6f1n
```button
name Saisir un élément en attente
type command
action QuickAdd: saisir un élément en attente
```
^button-nqst
```button
name Créer une note récurrente reportée
type command
action Commander: créer une note récurrente reportée
```
^button-iq3y
```button
name Créer une note reportée
type command
action Commander: créer une note reportée
```
^button-sriz
```button
name Créer une note pour une horizon
type command
action Commander: créer une note pour une horizon
```
^button-xmxj
```button
name Créer une note de contenu
type command
action Create Note in Folder: contenu
```
^button-vesa
```button
name Créer une archive
type command
action Commander: créer une archive
```
^button-mhai
## projets
```dataview
table échéance, priorité, énergie
from "projets" or "les dossiers onedrive/OneDrive/écrivez le nom de votre coffre ici/roadmap" and -"Modèles (inclus)" and -"écrivez le nom de votre coffre ici (version sans google agenda)"
sort choice(date(échéance) != null, date(échéance), choice(priorité != null, priorité, choice(énergie != null, reverse(énergie), 0)))
```
## nouveaux intrants

```tasks
tag does not include #noté 
tag does not include #inclus 
sort by urgency 
sort by created reverse
sort by filename 
sort by heading
hide created date
( (status.name includes idée) AND \
( (starts before today) OR (starts on today) OR (no start date) ) ) OR \
( ( (status.name does not include en attente) AND (status.name does not include non-concrétisable) AND (status.type is not CANCELLED) AND (status.type is not DONE)) AND (no start date) AND (filename includes 📥))
path does not include Notes Quotidiennes
```
___
## éléments récurrents passés (non finis)
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
```button
name Notes reportées récurrentes
type command
action Repeat: Review due notes
```
^button-y45u