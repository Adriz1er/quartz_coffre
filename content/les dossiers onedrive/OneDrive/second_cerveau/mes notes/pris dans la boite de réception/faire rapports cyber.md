---
tags:
  - projet
échéance: 
priorité: 0
énergie: 0
---
## faire rapport sur guillaume poupard
- [X] remettre infos que j'avais trouvées  [completion:: 2024-10-17]
## faire rapport de cyber TP2 en prenant en compte les remarques dans précédent mail de thomas armel  [due:: 2024-10-20]

- [!] utiliser liste à puces et captures pour décrire comment on peut attaqué la victime ; en veillant à bien détailler ; prendre en compte que ip a c'est pour l'attaquant -> blackbox
- [!] mettre sur coffre anki pas dans dossier anki une fois fini pour exporter vers pdf

Correction

-          Nmap

-          Ip victime nessus

-          Proftpd est un serveur ftp

-          Failles .stp et sur apache

-          Mot de passe proftpd

-          Requetes sql pour se connecter bdd

-          On met login bob et un password au hasard

-          Se connecter sur le site et on pouvait utiliser le fait que le canard était dans un dossier inscriptible

-          Utiliser exploit sur site , et injecter

-          Faire dépasser le buffer pour que ça écrive dans le valid, ce qui fait que valid est différent de 0 et permet d’accéder au root_shell

___
TP2

Grp1-TRAD

Adrien Romano

Thomas Prevost nous a donné l’autorisation :
-          d’attaquer la machine à l’adresse ip suivante : 192.168.56.106
-          et de scanner le réseau 192.168.56.0

## 1. trouver l'adresse IP de la victime

On effectue un scan du réseau avec nmap :
`nmap @adresse réseau`
![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

On effectue un `ip a` pour identifier l'adresse ip de la machine attaquante
![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

On regarde les ports qui sont ouverts (et les services qui sont associés à ses ports) dans la sortie de la commande nmap, parmi les deux adresses qui restent : 
![[Pasted image 20241016095519.png]]

>[!info]+
>On peut d'ailleurs utiliser `-p-` pour trouver tout les ports ouverts

On remarque que la machine à l'adresse 192.168.56.100 n'a aucuns ports ouverts, on en déduit que **l’adresse de la victime est 192.168.56.106**.
#### installation de *nmap*
Pour pouvoir installer *nmap* et ainsi effectuer un scan réseau par la suite, on peut procéder de la manière suivante :
1. Ouvrir un terminal
2. Mettre à jour la liste des paquets (au cas où) avec la commande : `sudo apt update`
3. Installer *nmap* avec la commande : `sudo apt install nmap`
-  vérifier que *nmap* est bien installé avec la commande : `nmap --version` 
### scan de vulnérabilités
On peut utiliser cette adresse IP pour faire un scan de vulnérabilités, on utilise pour cela le logiciel Nessus. On obtient ce résultat quand on scanne la victime :
![Une image contenant texte, capture d’écran, nombre, logicielDescription générée automatiquement](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

#### installation de Nessus
Pour installer Nessus, il faut se rendre sur [leur page web](https://www.tenable.com/downloads/nessus?loginAttempted=true), et bien sélectionner le bon fichier d'installation correspondant à notre machine, *Debian* dans notre cas :
![[Pasted image 20241016100500.png]]
Et exécuter la commande suivante :
`sudo dpkg -i [chemin du fichier d'installation de Nessus]`

>[!info]+
>Pour ne pas avoir à taper à la main le chemin du fichier d'installation de Nessus on peut ouvrir le dossier Téléchargement avec l'*Explorateur de fichiers* et faire glisser le fichier pour installer Nessus dans le terminal à l'endroit où on doit écrire son chemin

On installe ensuite Nessus de manière standard, puis en se créant un compte avec une adresse mail ; une fois que c'est fait Nessus devra encore télécharger ses fonctionnalités pour qu'il puisse effectuer un scan réseau.
### exploitation d'une faille ftp
![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg)![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg)![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg)![](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image016.jpg)

![Une image contenant texte, capture d’écran, logiciel, nombreDescription générée automatiquement](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg)![Une image contenant texte, Police, capture d’écran, algèbreDescription générée automatiquement](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg)

![Une image contenant texte, capture d’écranDescription générée automatiquement](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)

![Une image contenant texte, capture d’écran, logiciel, Page webDescription générée automatiquement](file:///C:/Users/adrie/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)



# Conclusion sur les risques