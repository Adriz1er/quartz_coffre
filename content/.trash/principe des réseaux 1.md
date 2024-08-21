---
tag:
---
Les réseaux sont des systèmes composés de liens qui permettent de relier des entités en respectant des règles de communication, exemple : réseau postal, réseau téléphonique
Les réseaux sont utiles au quotidien : apprendre, communiquer, travailler, se divertir.

Il existe des réseaux de tailles diverses : réseaux domestiques, grands réseaux, réseaux mondiaux.
Il y a différents éléments d'un réseau : périphériques, supports et services. Il y a des périphériques finaux et des périphériques intermédiaires (switch, commutateurs LAN etc...), il y a des supports de transmission (cuivre, fibre, sans fil)

il existe plusieurs topologies des réseaux (entre ordinateurs).
Il y a une topologie logique (vers l'internet)

Il existe différents types de réseaux :
- réseau local LAN (local area network)
- réseau étendu WAN (wide area network)
- réseau métropolitain MAN
- réseau local sans fil étendu WLAN
## définition des règles
identification de l'expéditeur et du destinataire, utilisation d'une langue et d'une syntaxe commune, vitesse et rythme de l'élocution, option de remise de message

Le modèle de référence TCP/IP rend les protocoles indépendants de la technologie, il divise la fonction "communiquer" en sous fonctions où chaque fonctionnalité est définie par une couche du modèle.
Les unités du protocole (PDU) forment une capsule globale et à la réception on décapsule

Le serveur DHCP donne les adresses IP de chaque machine automatiquement, le serveur connait alors adresses IP valides à distribuer sur le réseau. Le serveur fournit 
- le masque sous réseau permet à l'ordinateur de savoir si il va passer par le réseau local ou pas
- la passerelle par défaut
- l'adresse des deux serveurs DNS. Le serveur DNS est généralement différent du DHCP, que cette machine interroge lors d'une requête 

ICMP sert à communiquer des informations en pouvant envoyer des messages d'erreurs

trace rt utilise TTL (nombre de routeurs parcourus), les adresses IP sont renvoyés pat les différents routeurs

#### lire les règles
Lire une adresse IP :
— ipconfig /allpour Windows5
— ip address showouifconfigpour LinuxLire table de routage :
— netstat -rpour Windows/Linux
— ip route showsous LinuxAssigner une adresse :
— ip  address  add  192.168.1.1/24  dev  eth0(dans votre cas, les adresses se nomment h1-eth0,etc) sous Linux—  Euh.... avec l’interface graphique pour Windows ;-)
Retirer une adresse :
— ip address del 192.168.1.1/24 dev eth0sous Linux—  Euh.... avec l’interface graphique pour Windows ;-)
Transformer une machine en routeur (= l’autoriser `a faire passer les—  echo 1>/proc/sys/net/ipv4/ipforwardAjouter/Retirer une entr ́ee (par défaut) dans la table de routage :
—  ip route add 10.0.0.1/24 via 192.168.1.1
—  ip route del 10.0.0.1/24
—  ip route add default via 192.168.1.1
Test de connectivité et test de route :
—  ping 192.168.1.1
—  traceroute 192.168.1.1
### structure d'une adresse IP
séparée en 2 parties : numéro de réseau, numéro d'hôte ; l'adresse IPv4 est composé d'une partie réseau, d'une partie hôte, et d'un masque de sous réseau 
Le masque de sous réseau sert à identifier la partie réseau et la partie hôte d'une adresse IPv4 ^280eee

Adresse de diffusion (broadcast) adresse qu'utilise un hote pour joindre tous les autres, les bits du numéro d'hôte (2° partie de l'adresse IP)
## rôle des principaux éléments
### commutateur switch
- éléments actifs permet de connecter les différents périphériques finaux d'un réseau local
- adresses matérielles (MAC) pour identifier les périphériques finaux du réseau. Elle est hexadécimal et en 48 bits
caractéristiques : 
- nombre de ports dispo
- debit de données
- débit de transfert

mais ne sait pas gérer les adresses IP, pas comme le
### routeur
élément actif qui permettant des réseaux d'IP différents
## différentes couches
### couches applicatives
![[processus#^98babb]]
Agent utilisateur : interface entre l'utilisateur et le réseau. Implémente simultanément l'interface utilisateur et le protocole de niveau applicatif

Les processus s'envoient/recevoient des messages au travers de sockets.
Sockets analogues à des boîtes aux lettres dans les systèmes. TCP possède un accusé de réception, et pas UDP. Et les deux sont utiles pour des applications spécifiques (par exemple vidéo c'est du type d'UDP)

Une page web contient des objets (texte, image, applet java...), et chacun peut être accessible via une URL et une URI (pour le serveur).
Le client est alors celui qui envoie des requêtes et affiche les objets.
Le http 1.0 permet d'envoyer au plus un objet, alors que le 1.1 en permet plusieurs par défaut.

Catégories d'erreur 
- 1xx informations
- 2xx succès
- 3xx redirection
- 4xx erreur client
- 5xx erreur serveur

message post : quand les pages incluent des informations à remplir par utilisateur
méthode get : ? dans url signifie que à chaque paramètre il faut mettre "&"

Le http 2.0 permet de charger d'autres pages de manière à prévoir où on va cliquer
#### DNS
Il permet d'associer un nom avec les chiffres de l'IP
### couche transport
2 services :
- fiable : TCP, avec une socket par client
- non fiable UDP, avec une socket partagée entre les clients

communique source et destination
Pour identifier un programme sur une machine (ce qui est utile quand il y a plusieurs services sur un serveur), il faut :
- l'adressage de la machine -> adresse IP
- adresse du programme -> numéro de port (qui se trouve dans l'en-tête de couche), SP est le port source -> fournit l'adresse de retour, DP est le port de destination (adresse locale du processus applicatif)
ne garantie pas les délais ni le débit

Pour ne pas qu'il y ait de blocage, on met un *tampon* (réservoir d'octets) qui est utilisé à la fois par la source et le transport entre la couche transport et application qui est appelé socket.
Avec commandes netstat on a $l$ pour listen
#### UDP
UDP est utilisé par 10% du trafic mondial. UDP ne vérifie pas si c'est envoyé, mais à la réception il y a segment et l'en-tête qui va être transformé par une fonction de hachage va être envoyé où il y a :
- port source 
- port destination
- longueur
- somme de contrôle

puis on vérifie que le message n'est pas transformé
#### TCP
on retrouve le socket de [[#UDP]]. récupère les pertes avec des accusés de réceptions et si pertes il va réduire son débit (controle de congestion). Si il constate que l'application du destinataire n'arrive pas à consommer alors il va réduire aussi son débit.

structure du segment TCP :
- port source 2 octets
- port destination 2 octets
- des drapeaux : U, A, P, R, S, F
	- A : *ack*, acquittement
	- S : synchronisation
	- F: fin

ouverture de connexion (triple poignée de main)
étape 1 : client envoie un segment avec drapeau SYN
étape 2 : serveur reçoit SYN et répond avec SYN et ACK
étape 3 : client répond avec ACK

une socket contient un buffer pour émission des données. Les données peuvent circuler dans les 2 sens, TCP transporte des octets et donc tous les numéros de séquence/ack sont en octets
numéro de séquence correspond au premier octet et numéro d'acquittement correspond au numéro du prochain octet attendu dans l'autre sens (par l'autre utilisateur), ce qui forme un accusé de réception. 
Un appareil sait qu'il y a une perte quand il y a un *trou* dans le numéro de séquence

TCP envoie dans l'ordre, il garde en mémoire avant d'envoyer
#### contrôle de congestion
envoie un nombre $w$ de paquets avant de recevoir un accusé de réception

permet à l'émetteur d'augmenter ou réduire au besoin le nombre $w$, grace à l'accusé de réception
### couche réseau
achemine des paquets entre un émetteur et un récepteur ; la couche  réseau est implantée dans chaque machine et dans chaque routeur internet
deux *functions* importantes :
- détermination du chemin : route prise par les paquets de la source à la destination dépend de l'algorithme de routage, qui est définit sur toutes les machines
- commutation de paquets : choix de l'interface de sortie d'un routeur en fonction de la destination du paquet (utilise les informations de routage pour choisir en fonction des interfaces d'entrées)

routeurs ne gardent pas l'état sur les connexions de bout en bout
les paquets (datagrammes) sont commutés uniquement en fonction de leur adresse (IP) de destination

Protocole de routage a pour but de déterminer le bon chemin (séquence de routeurs) au travers du réseau pour toutes les destinations. Les problèmes de ces algorithmes est un problème de graphe :
- les noeuds du graphe sont les routeurs
- les liens du graphe les liens physique
	- les liens ont des coûts : délai, prix, niveau de congestion

Globale :
- tous les routeurs connaissent la topologie (le graphe) complet avec le coût des liens
	- échange des informations de topologie entre voisins
	- calcul des chemins effectué indépendamment par chaque noeud
	- classe d'algorithme à "état de lien"

décentralisé :


#### le routage hiérarchique
un autre protocole de routage pour ne pas avoir des millions de d'entrées dans le tableau. On divise internet, on execute un protocole entre plusieurs grand administrateur : un routage inter-AS ; on parle de routage intra-AS quand c'est sous les administrateurs.
ça limite les tables de routage au sous-groupe.

Les adresses IP privées sont des adresses qui ne sont pas routés par défaut, mais on peut configurer des routeurs pour les accepter ; peut servir à faire différents réseau en modifiant les IP.

Les machines et les routeurs sont des noeuds, les canaux de communication qui connectent les noeuds adjacents le long d'un chemin (filaire ou pas).
Point à point doit être *géré*
On peut partager le canal de généralement trois manières :
- partitionnement du canal (division de fréquences, ou temporel)
- accès aléatoire ^[[[deux exemples d'accès aléatoires]]]
- chacun son tour (avec système de token)