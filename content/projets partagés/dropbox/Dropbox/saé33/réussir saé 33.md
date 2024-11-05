- on est région sud site D
- [!] se préparer pour point d'étape 1 semaine 40  [due:: 2024-09-30]
- [!] point d'étape 2 semaine 46  [due:: 2024-11-10]
- [!] point d'étape 3 semaine 49  [due:: 2024-12-01]

- [!] voir pour critères évaluation, point 7 du livret

- [!] faire un plan d'adressage IP complet et voir pour utiliser commandes pour avoir ce que c'est en réel ^[[[projets partagés/saé 33/réussir saé 33#^1ff16a|réussir saé 33]]]

- [!] utiliser créneaux attribuer pour travailler sur équipements
- [!] rester attentif aux messages lors de la config
- [!] utiliser pistes de réflexions (peuvent être utile tout le temps)

- [!] faire attention aux défauts des promos précédentes, point 7 du livret

- [!] voir si connaissance de 1° année pour revoir
## faire la base
- [!] avoir fic de config pour chaque équipement 
	- [!] packet tracer
		- [!] utiliser 3 réseaux internes : 192.168. 32 .0 /21 ; 172.16.32.0 /27 ; 10.10.32.0 /28 . (On a mis 32 à la place de Z Où Z = 8 pour département A , 16 pour B , 24, 32, 40 , 48)
		- [!] utiliser réseau externe : 10.200.4.0/30 (on a mis 4 à la place de x où x est num de département de 1 à 6)
		- [!] organiser les flux selon les 5 vlan suivantes:  VLan 2: connexion filaire des collaborateurs (ports 1 à 10 des commutateurs) à 20 des commutateurs) ; VLan 3: connexion filaire 11 ; VLan 4: connexion téléphonie sur IP (port 21 des commutateurs) ; VLan 6: connexion hertzienne WiFi (port 22 des commutateurs) ; VLan 7: destiné à la gestion des équipements actifs
		- [!] configurer pare-feu en outside : 10.4.109.61, en LAN 192.168.100.0/24
		- [!] ne pas inonder monde extérieur avec OSPF si on l'utilise quand config peut se faire 
		- [ ] #👤/Adrien voir comment refaire hsrp  [start:: 2024-11-05]
		- [!] faire fic de config
			- [!] noter commandes que l'on a tapé, on peut utiliser notamment do show run pour les revoir
				- [!] faire attention à mettre no shutdown
			- [!] utiliser serveur tftp pour exporter config
	- [!] tester en injectant fichiers
		- [!] avoir accès openvpn
		- [!] ne pas débrancher fibre optique sans demander au prof avant
		- [!] s'adapter aux différents équipements
			- [!] voir si site cisco peut nous aiguiller
			- [!] adapter nomenclature, n° interface, débits
				- [!] utiliser show cdp neighbors et sh ip interfaces brief ^1ff16a
			- [?] si SFP compatible
				- [!] si non utiliser commandes : service unsupported-transceiver, no errdisable detect cause gbic
			- [?] si anciennes cartes réseaux
				- [!] si oui vérifier full duplex (je pense qu'il faut le mettre)
		- [n] se connecter sur le port console  (ce qui pourrait se faire à distance) voir 4-a et 4-b dans livret de cours 4-d
			- [!] laisser débits à 9600 de l'interface série mais sinon voir 4-c dans livret
			- [!] bien se déconnecter, voir 4-c
		- [!] remettre config usine en partant de la salle
- [!] tenir compte du fait que la zone sud demande plus de créativité, que la zone est
## configurer pour les besoins des users
- [!] mettre à jour fichier config
## optimiser chemins et flux
- [!] mettre à jour fichier config
## faire en sorte que le réseau supporte le mieux possible les pannes
- [!] mettre à jour fichier config
- [!] faire redondance le plus possible
	- [!] utiliser HSRP probablement
## sécuriser équipements actifs et réseau local
- [!] mettre à jour fichier config
	- [!] identifiant et mdp en MD5 à laisser en clair dans fic de config
		- [!] voir pour réécrire à la main
	- [!] faire tunnel VPN GRE sur IPSec voir I-c
	- [!] utiliser clé voir II
	- [!] voir pour toucher aux paramètres de ssh
	- [!] voir protocole pour IP sec sur papier

## faire présentation
- [!] noter choix techniques
- [!] mettre tout les fichiers sur compte UCA
## faire la phase d'enrichissement (TOIP, wifi sous la DMZ)
- [!] utiliser trucs wifi en utilisant pdf moodle