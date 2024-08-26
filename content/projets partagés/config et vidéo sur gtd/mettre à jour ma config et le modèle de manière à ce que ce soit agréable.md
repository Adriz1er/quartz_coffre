---
tags: 
- projet
priorité: 6
échéance: 
---

- [x] mettre à jour le modèle #inclus  [repeat:: every 2 weeks on Tuesday]   2024-02-27]  [completion:: 2024-03-09]
# mettre à jour le modèle  
- [x] [[corriger note quotidienne]]  [completion:: 2024-04-01] #inclus
- [X] mettre boite de réception sans qu'elle démarre par le bas sur le modèle  [completion:: 2024-04-20] #inclus
- [X] Mettre modèle en dataview mode et passer note revue hebdomadaire également #inclus   [completion:: 2024-04-26]
- [x] soient terminés #inclus  [completion:: 2024-07-08]
	- [[mettre des éléments dans agenda sur obsidian]]
	- [[corriger note quotidienne]]
	- [[les dossiers onedrive/OneDrive/second_cerveau/mes notes/pris dans la boite de réception/faire une version sans google agenda|faire une version sans google agenda]]
	- [[remettre à niveau macro revue hebdomadaire]]
	- [[les dossiers onedrive/OneDrive/second_cerveau/mes notes/pris dans la boite de réception/importer tout les trucs sur le modèle pour élements reportés et récurrents|importer tout les trucs sur le modèle pour élements reportés et récurrents]]
- [?] Vérifier favoris #inclus
- [!] faire test complet #inclus

- [X] envoyer le lien du modèle à Mathieu de Atypic à Samuel à Thomas et leur expliquer et chocolat_en_poudre (discord) et Juggernot et vedarkiwi (709477237820358707)  [completion:: 2024-06-01]
## mettre à jour note quotidienne pour éléments reportés que au jour de la note
- [X] changer grâce à ce que j'ai changé et le titre et la query et  [completion:: 2024-07-27]
## mettre dans toutes les requetes que le fichier ne peut pas etre dans le dossier archives
- [!] mettre des simples exclusions de dossier dans toutes les requetes et dans liste de projet
## faire une config séparée pour le contenu et pour les tâches 
- [!] sauvegarder l'ancienne où il y a les deux sur disque dur dans un dossier document
- [!] trouver les plugins et dossiers inutiles dans les deux versions et les enlever
- [!] mettre par défaut la création de note de concept
- [!] Mettre intrants du modèle et note de contenu avec images dans version contenu
- [!] voir pour faire une requete note volantes et mettre bouton en haut pour archiver note , en sélectionnant note qui :
	- n'ont pas un lien avec un projet pour projets partagés, sauf si autre condition ; pas de lien avec note quotidienne pour reporté une fois sauf autre condition
		- [!] utiliser outgoing ? voir docs dataview
	- ont archives dans leur noms
	- [!] Utiliser ça [https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/#accessing-implicit-fields-in-queries](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/#accessing-implicit-fields-in-queries) et requete pour obtenir éléments aléatoire pour ne pas inclure dans requête feuilles volantes les taches qui ont au moins un élément en attente
	- n'ont pas le tag projet (métadonnée) 
		- [!] voir liste de projet ?
	- n'ont pas due_at et repeat vide
		- [!] utiliser fonction voir doc dataview ?
	- ne pas afficher si contient tache avec date de demarrage
### faire un site pour obsidian avec quartz 4
- [X] faire tuto de Nicole von ... [How to publish your notes for free with Quartz - YouTube](https://youtu.be/6s6DT1yN4dw?si=293vGsAUahQv_pA7)  [completion:: 2024-08-23]
- [X] faire en sorte de publier le site  [completion:: 2024-08-23]
- [X] Faire en sorte d'annuler tout mes comit avec git revert puis de re commit pour pas qu'il y ait problème d'exporter et voir sur page github.io adresse dans paramètres  [completion:: 2024-08-21]
	- pour publier il faut un chmod777 dans tout les dossiers de content-cache y compris ceux cachés (ce qui ne marche pas vraiment avec seulement -tR), 
- [!] faire une page d'accueil 
- [!] changer titre
- [!] regarder pour d'autres options d'apparences  , s'inspirer de [Eilleen's (online!) Everything Notebook | Eilleen's e-Notebook](https://quartz.eilleeenz.com/) et ce qui est noté dedans
	- [!] changer icône d'onglet https://enveloppe.github.io/wikis/Quartz 
- [!] mettre fichiers recents 
- [!] utiliser plugin enveloppe pour rendre commandes dataview 
	- [ ] faire query dataview pour rendre [[boîte de réception]], liste de projets, éléments reportés (plus compliqué mais voir pour chercher dans autres notes / archives), [[liste des notes récurrentes reportées]], mettre une vue dans quand je suis occupé avec l'agenda (possible de faire ça en partageant un agenda mais sur un site je sais pas), [[éléments en attente]] 
		- [ ] mettre sur page d'accueil
- [!] changer noms de dossiers (mais pas projet partagés) 
à revoir (peut-être) récursivement : 
!![[Mettre à jour site]]
## mettre résolveur de conflit sur modèle et mettre bouton pour résoudre tout les conflits
- [X] mettre file diff sur deux versions  [completion:: 2024-08-23]

- [X] utiliser commander pour mettre bouton à gauche  [completion:: 2024-08-23]
## republier et faire tester à Thomas et Samuel et Mathieu (qui était avant à Atypic) et Maffhieu depuis toujours
- [!] Faire en sorte de mettre résolveur de conflit dans css pour ordre et file diff sur ordi

### faire version pour mobile sans agenda et changer paramètres pour version sans google agenda ^[[[faire une version sans google agenda#^2957aa]]] sachant que c'est la version qui est active #inclus
- [ ] changer macro de revue hebdomadaire différente pour cette config en changeant page agenda par commande week de day planner sachant qu'elle ouvre un nouvel onglet en faisant attention à mettre entre bons dividers #inclus
	- [ ] switcher bouton barre latérale calendrier en faisant attention à mettre entre bons dividers #inclus
- [ ] changer template note quotidienne #inclus : 
	- agenda sur obsidian : Modèles (inclus)/modèle note quotidienne vtask plugin v.agenda dans obsidian
	- google agenda : modèle note quotidienne intégration google agenda
- [ ] switcher avec vue de dossier de file tree "notes d'évènements" #inclus
- [ ] switcher modèle par défaut de note quotidienne #inclus
## refaire marcher habitudes sur toutes les configs autre que mon ordi compris modèle
- [!] se servir de celle sur mon ordi et copier et pour les versions téléphones tester sur mon téléphone

## faire en sorte avec archiver de mettre toutes les archives dans un dossier
- [!] voir avec le bas des paramètres 
## mettre les notes récurrentes reportées dans le bon dossier
- [X] utiliser même commande pour template même refactor pour notes récurrentes reportées  [completion:: 2024-08-02]
## remettre à jour les notes, puis revoir mind map, enfin la mettre en ouverture de base dans le modèle
- [!] archiver autre part tout ce qui est de la configuration 
## faire une config tablette
- [!] voir avec plugins qui sont pas sur téléphone 
## partager une fois fini
- [!] Faire en sorte de mettre résolveur de conflit dans css pour ordre et file diff sur ordi
- [!] republier
- [!] voir pour faire faire les manips de la dernière version sur la config de thomas sinon lui demander de copier ses projets et notes quotidiennes et notes d'évènements ; faire en sorte que 16 et les parents essayent 
### [[faire longue vidéo chapitrée sur GTD et sur obsidian qui serve vraiment]]
![[faire longue vidéo chapitrée sur GTD et sur obsidian qui serve vraiment]]
- [!] donner mon modèle à Gianni à Justine à Nathan et à bonclay et Robin et Mathias et à Shaheen et relancer Bastien et lola l'ancienne meuf de Thomas et jordan et Mathieu et voir avec ce dernier pour theodore et Nassim (.minfini sur discord) et whix et Marc Anthony et Chloé et Luna sur discord et LK Musen et l'intello autiste d'Apollinaire et Laurent et Luis et à Aenea et Tian (discord) et Tom et urlebop et Michel Mugot et Jeremy guibert (que je peux mettre en bêta ) et Marius de St Geniez et Maëlle Snap et Matthieu Combaz, Bénédicte et Gael de St Geniez et Gauthier et Shanatomique et Parler à Jérômy Sagnier du obsidian voir pour en même temps que Féraste le mec sur Skool dans mes mails et Hélène de St Geniez  #inclus
- [!] Envoyer modèle à theo une fois que la vidéo est faite Envoyer par message la vidéo youtube de gtd avec obsidian quand elle sera sortie à Bernard de ppp1 et Chloé ferra sur insta ; un certain nombre de gens sur discord 
	- [ ] envoyer un mail prof maths expert goyet.christopher@gmail.com
	- [ ] envoyer mail à M.Dulat philippedulat@gmail.com
	- [ ] chercher mail dans notes de prof d'anglais dans note #téléphone 
	- [ ] chercher mail du prof d'histoire #gmail
	- [!] trouver mail de M.Benoit ce qui serait facile serait par l'intermédiaire d'un autre prof #inclus
	- [>] si Sophie répond lui envoyer
	- [ ] dhioulak (insta)
	- [ ] Envoyer un message à Ismail mec du marketing d'Antoine
	- [ ] Kim qui joue du basson
- [X] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   2024-04-02]  [completion:: 2024-04-30]
- [X] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   2024-04-09]  [completion:: 2024-04-30]
- [X] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   2024-04-16]  [completion:: 2024-04-30]
- [X] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   2024-04-23]  [completion:: 2024-04-30]
- [X] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   2024-04-30]  [completion:: 2024-04-30]
- [?] vérifier que liste des projets actifs est bien en flow #inclus 
	- [ ] ouvrir projets actifs 
	- [?] aperçu des projets
		- [ ] passer curseur pour faire apparaitre
	- [ ] appuyer sur les petits carrés et flow view dans petit menu
- [ ] mettre à jour les plugins #inclus  [repeat:: every week on Tuesday]   [2024-05-07] #noté ^8dcffb
- [ ] mettre sur compresseur online et télécharger #inclus  [repeat:: every week on Tuesday]  
- [ ] copier coller nom modèle et renommer fichier obtenu #inclus  [repeat:: every week on Tuesday]   
- [ ] ouvrir page modèle #inclus  [repeat:: every week on Tuesday]   
- [ ] mettre fichier content #inclus  [repeat:: every week on Tuesday]  
- [!] mettre un message sur [channel discord de Archi-lourd](https://discord.com/channels/1050136893242753085/1105869492195692594) #inclus  [repeat:: every week on Tuesday]   

- [*] commencer [[projets partagés/Essayer de faire un plugin pour une expérience globale de GTD sur obsidian|Essayer de faire un plugin pour une expérience globale de GTD sur obsidian]]