ping : arp ^[[[caractéristique réseaux et besoin des app#protocole ARP et fonctionnement d'un switch]]] et icpm 
ftp : tcp et ip : port 20 et 21
dhcp :  udp et ip : port67 et 68

protocole routé (exemple : ip)
fournit infoprise de décision, exploite info pour diriger trafic
protocole routage (exemple : tcp, udp)

## routage statique
mise à jour manuelle de la table de routage, souvent utilisée en complément du dynamique, et prioritaire par rapport à ce dernier

Une route par défaut est la route la moins prioritaire des routes statiques, elle a quelques intérêts :
- permet de ne pas rester bloqués au niveau d'un routeur
- simplifie la déclaration des routes
- souvent logique d'un routage statique

faire attention aux boucles
- [!] revoir p.13
- [!] revoir p.14
## ipv4
![[principe des réseaux#^23081b]]
![[caractéristique réseaux et besoin des app#^e6daa5]]
- l'adresse réseau se forme en faisant un "et logique" entre une ip du réseau et le masque ^[[[Cours ressource R201 - part1 (cahier de cours) 2parpage.pdf#page=9|Cours ressource R201 - part1 (cahier de cours) 2parpage, page 9]]]
- l'adresse de broadcast est celle où la partie hôte est toujours au maximum (bits à 1), et l'adresse du réseau c'est celle où la partie hôte est toujours nulle

![[Cours ressource R201 - part1 (cahier de cours) 2parpage.pdf#page=11|Cours ressource R201 - part1 (cahier de cours) 2parpage, page 11]]

l'ICANN
- attribue les noms de domaines et IP sur internet
- autorité de régulation sur Internet (basée en Californie)
- compétence mondiale dont les décisions s'imposent aux états
- depuis 2009 nom de domaine autre qu'en latin
l'IANA
- attribue les numéros IP aux RIR (blocs /8 ou supérieurs)
- gère la zone racine du DNS
- attribue les numéros de systèmes autonomes (protocole BGP)
- gère les numéros de protocoles et les numéros de ports TCP/UDP
RIPE NCC
- dessert l'europe et une partie de l'asie
- organisation de droit privé siégeant à Amsterdam
- affecte ses membres LIR des blocs au /22
- membres : opérateurs réseaux, fournisseurs de service Internet
- LIR affectent aux utilisateurs finaux des blocs, dont la taille correspond aux besoins immédiats et concrètement anticipés

prévision d'une saturation pour 1994/1995
- développement d'une nouvelle version ipv6 en 1998
- étude de la transition d'ipv4 vers ipv6 : double pile d'ip
- utilisation de masque non naturel en 1994 : *VLSM*
- contournement par la translation d'ip : *NAT*
- utilisation d'espaces d'adressage privées : 
	- plan d'adressage internet utilisant des ip unicast non-uniques
	- ces adresses sont utilisés ailleurs dans le monde
	- [!] compléter sur v. décryptée p.24