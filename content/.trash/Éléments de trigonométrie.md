---
aspiration:
  - mathématiques du signal
---
#### I. Définitions
###### 1. Cercle trigonométrique

Définition : Un **cercle trigonométrique** est un cercle de rayon 1, orienté dans le sens positif (sens inverse des aiguilles d’une montre) et rapporté à un repère orthonormé.

Appelons A le point de coordonnées (1 ; 0).

Tout point M de ce cercle peut être considéré comme l’extrémité d’un arc
AM auquel correspond un angle orienté θ.

Un angle se mesure **en radians** ou en degrés.
![[Pasted image 20230911213744.png]]
###### 2. Le radian

 
Le radian est la mesure d’un angle au centre associé à un arc de
longueur 1 sur le cercle trigonométrique. On le note rad.
 
 
Le périmètre d’un cercle de rayon 1 est égal à
2 π×rayon = 2 π.
 
 
Donc un tour complet du cercle correspond à
un angle de 2 π rad.
 

en radians| 0| $\frac{\pi}{6}$| $\frac{\pi}{4}$| $\frac{\pi}{3}$| $\frac{\pi}{2}$|$\pi$|$2\pi$|1
--|--|--|--|--|--|--|--|--
en degrés| 0| 30°| 45°| 60°| 90°| 180°| 360°| ≈57,3°
Tout angle est défini à 2k π près (k ∈Z), c’est à dire à k tours près.
La **mesure principale** d’un angle orienté est l’unique mesure qui
est comprise dans l’intervalle ] – π ; π ].
###### 3. Cosinus, sinus et tangente d’un réel
 
Le réel θ, considéré comme mesure en radians d’un angle,
définit un seul point M sur le cercle trigonométrique.
À l’aide de ce point M, on définit cos θ et sin θ.
 
 
Définitions : cos θ est égal à l’abscisse du point M
sin θ est égal à l’ordonnée du point M
 
Pour tout réel θ ≠ $\frac{\pi}{2}$ + k π k∈Z, cos θ ≠ 0 on définit **tan** θ **=** $\frac{\sin\theta}{\cos \theta}$
tan θ correspond au coefficient directeur de la droite (OM).

Propriétés : 
∀ t ∈R $\leq cos(t) \leq sin(t) \leq$
cos²(t) + sin²(t) = 1
1 + tan²(t) = $\frac{1}{\cos ^{2}t}$ $t \neq \frac{\pi}{2}+k \pi k \in \mathbb{Z}$
#### II. Angles remarquables
![[Pasted image 20230911215644.png]]

$\theta$|0|$\frac{\pi}{6}$|$\frac{\pi}{4}$|$\frac{\pi}{3}$|$\frac{\pi}{2}$|$\pi$
--|--|--|--|--|--|--
$\tan \theta$|0|$\frac{\sqrt{ 3 }}{3}$|$1$|$\sqrt{ 3 }$||0

#### III. Quelques formules de trigonométrie

###### 1. Relations avec des angles associés : Pour tout réel x, on a :
![[Pasted image 20230911220321.png]]

###### 2. Formules d’addition

**cos(a + b) = cos a cos b – sin a sin b 
sin(a + b) = sin a cos b + cos a sin b**

**cos(a – b) = cos a cos b + sin a sin b 
sin(a – b) = sin a cos b – cos a sin b**

###### 3. Formules de linéarisation
$\cos ^{2}(a)= \frac{1+\cos 2a}{2}$
$\sin ^{2}(a)= \frac{1-\cos 2a}{2}$
4. Formules de transformation de produit en somme

**cos a cos b =** $\frac{1}{2}$ **[ cos(a + b) + cos(a – b) ]**

**sin a sin b = $\frac{1}{2}$ **[ cos(a + b) – cos(a – b) ]**

**sina cos b =** $\frac{1}{2}$ **[ sin (a + b) + sin(a – b) ]**

 
Elles servent lors de calculs d’intégrales et de primitives.
Utile pour les formules de modulation d’amplitude
 
##### R 113 – TD 1 Trigonométrie : angles et angles associés

**Exercice 1 cercle trigonométrique et mesure principale**

1. Donner une mesure des angles dessinés sur le cercle.
    En préciser aussi la mesure principale.
2. Placer les angles suivants sur le cercle trigonométrique :

 
 $\phi$ 1 =   $\phi$ 2 =   $\phi$ 3 = 
 
3. Déterminer la mesure principale des angles suivants :

 
θ 1 =  θ 2 =  θ 3 = 
 
**Exercice 2 angles associés et angles remarquables**

1. Compléter le tableau suivant avec les valeurs exactes en s’aidant du cercle trigonométrique.

 
 $\phi$ 5π 6 7π 6 9π 6 71π 4 512π 3
 
 
 $\phi$ =
 
 
sin( $\phi$) =^
 
 
cos( $\phi$) =
 
 
tan( $\phi$) =
 
 
Mesure
principale
 
##### 2. Quelle est la valeur exacte de cos

 
2019π
 
##### 4 ?

_La calculatrice ne doit être utilisée que pour des divisions._



^




R113 Mathématiques du signal TD 1 Trigonométrie : angles et angles associés (2/2)

**Exercice 3 lecture du cos et sin sur le cercle**

Soit  $\phi$ ∈0 ;  .

1. Tracer où lire la valeur de sin( $\phi$), cos( $\phi$) et tan( $\phi$).
2. Placer sur le cercle trigonométrique
     $\phi$ −  −  $\phi$  $\phi$ + 5π  $\phi$ + 

 $\phi$ − π −  $\phi$ −   $\phi$ +  −  $\phi$ − (^) π.

3. Écrire les expressions suivantes en fonction de ± cos(ωt) ou de
    ± sin(ωt) en s’aidant du cercle trigonométrique. Entourer la bonne réponse.

cost  = + cos(ωt) ou – cos(ωt) ou + sin(ωt) ou – sin(ωt)

cos^ t  π! = + cos(ωt) ou – cos(ωt) ou + sin(ωt) ou – sin(ωt)

sin t  π! = + cos(ωt) ou – cos(ωt) ou + sin(ωt) ou – sin(ωt)

sin t  = + cos(ωt) ou – cos(ωt) ou + sin(ωt) ou – sin(ωt)

cos^ t  π! = + cos(ωt) ou – cos(ωt) ou + sin(ωt) ou – sin(ωt)

Pour s’entraîner

**Exercice complémentaire**

1. Déterminer les valeurs exactes de sin( $\phi$), cos( $\phi$) et tan( $\phi$) pour  $\phi$ = , puis  $\phi$ = 

##### 2. Quelle est la valeur exacte de sin 

 
2020π
 
##### 6 ?

 $\phi$


R113 Mathématiques du signal TD 2 Trigonométrie : formules et équations (1/2)

##### R 113 – TD 2 Trigonométrie : formules et équations

**Exercice 1 transformation de produit en somme de cos (** **_filtrage_** **)**

1. Écrire sous la forme d’une somme d’expressions du type A cos(Bt + C) avec C ∈]−π ; π].

E 1 = 5 cos(8π t) cos $3 \frac{\pi}{2}$t 
formule addition : $$5 \times \frac{1}{2}\left[ \cos \left( 8 \pi t+ \frac{3 \pi}{2}t \right)+\cos\left( 8 \pi t- \frac{3\pi}{2} t \right) \right]$$
$$\frac{5}{2}\left[ \cos \left( \frac{\left( 16 \pi t+ {3 \pi}t \right)}{2} \right)+\cos\left( \frac{16 \pi t- {3\pi}}{2} t \right) \right]$$

E 3 =8 sin² $\frac{\pi}{3}$t
$$8 \left( \frac{\left( 1-\cos \frac{2\pi}{3} \right)}{2} \right)$$
$$=4-4 \cos \frac{2\pi}{2}$$
E 2 = 3 cos (9 t) 
$$3 \frac{1+ \cos 18t}{2}$$
$$=\frac{3}{2} +\frac{3}{2} \cos 18t$$
E 4 =10 sin(3π t) sin $\frac{3\pi}{5}$ 
$$10 \times-\frac{1}{2} \left[ \cos \left( 3 \pi + \frac{3\pi}{5} \right)- \cos\left( 3 \pi- \frac{3\pi}{5} \right) \right]$$
$$-5 \left[ \cos \left( 3 \pi + \frac{3\pi}{5} \right)- \cos\left( 3 \pi- \frac{3\pi}{5} \right) \right]$$
$$-5 \cos \left( 3\pi+ \frac{3\pi}{5} \right)+ 5\cos \left( 3\pi-\frac{3\pi}{5} \right)$$
relation d'angles associés on a que $-\cos x=\cos (\pi+x)$
$$-5 \cos \left( 4\pi+ \frac{3\pi}{5} \right)+ 5\cos \left( 3\pi-\frac{3\pi}{5} \right)$$
2. Écrire 5 sin(3π t) cos $\frac{\pi}{2}$t sous la forme d’une somme de 2 signaux sinusoïdaux du type A sin(Bt + C), puis d’une somme de 2 signaux sinusoïdaux du type A cos(Bt + C)
$$5\frac{1}{2} \left[ \sin\left( 3\pi+ \frac{\pi}{2} \right) + \sin\left( 3\pi- \frac{\pi}{2} \right) \right]$$
$$\frac{5}{2}\left[ \sin\left( \frac{7\pi}{2}t \right) +\sin\left( \frac{5\pi}{2}t \right) \right]$$
comme $\sin\theta=\cos\left( \theta- \frac{\pi}{2} \right)$


3. Écrire D cos(2π f 1 t) cos(2π f 2 t) sous la forme d’une somme de 2 signaux
    sinusoïdaux du type A cos(Bt + C)
$$\frac{D}{2}[\cos (2\pi  (f_{1}+f_{2})t) +\cos (2\pi (f_{1}t - f_{2})t)]$$
**Exercice 2 Utilisation des formules cos(a** ± **b)**
Écrire chaque expression à l’aide de cos(t) et/ou sin(t).
- A = cos 2t +$\frac{\pi}{6}$ – cost −$\frac{\pi}{3}$
on peut utiliser les formules d'addition :
$$\left( \cos2t \cos \frac{\pi}{6} - \sin 2t \sin \frac{\pi}{6} \right)- \left( \cos t \cos \frac{\pi}{3}+\sin t \sin \frac{\pi}{3} \right)$$

- B = 4 sin t − + sin 2t +

**Exercice 3 cos(), sin() et tan()**
Soit ω tel que cos² $(\omega)$ = $\frac{3}{5}$
1. Déterminer les valeurs exactes de sin(ω) et tan(ω).
2. Quelles conclusions peut-on tirer si on sait que ω ∈  ;  ?
**Exercice 4 équations trigonométriques**
Résoudre cos(3x) = cos $\frac{2\pi}{3}$
 
  a) Donner les solutions dans R. $$3x=\frac{2\pi}{3}+2k\pi\text{ ou }3x=-\frac{2\pi}{3}+2k\pi$$
 $$x=\frac{2\pi}{9}+\frac{2k\pi}{3} \text{ ou }-\frac{2\pi}{9}+\frac{2k\pi}{3}$$

 
b) Donner les solutions dans [− π ; π]. 
$$$$
 
1. Résoudre tan(5x) = 1 a) Donner les solutions dans R.
$1=\tan(\frac{\pi}{4})$
$$x=\frac{\pi}{5}+\frac{2k\pi}{5} \text{ ou } \frac{1}{5}+\pi+2k\pi$$

 
b) Donner les solutions dans [0 ; 2 π].
 

R113 Mathématiques du signal TD 2 Trigonométrie : formules et équations (2/2)

Pour s’entraîner

**Exercice complémentaire 1**

 
Écrire C = 5 sin 2t + + 4 cost − à l’aide de cos(t) et/ou sin(t).
 
**Exercice complémentaire 2**

1. Résoudre cos(4t) = √ dans R, puis dans [− π ; π].
2. Soit  $\phi$∈R. Compléter : cos(3x) = cos ( $\phi$) ⇔ x =

 
sin(3x) = sin ( $\phi$) ⇔ x =
 
 
tan(3x) = tan ( $\phi$) ⇔ x =
 
3. Résoudre cos(5t) = − cost + dans R, puis dans [0 ; 2 π].

Pour aller plus loin

**Exercice complémentaire 3**

1. Écrire 3 sin(ω 1 t) cos(ω 2 t) sous la forme d’une somme de 2 signaux sinusoïdaux du type
    A cos(Bt + C)
2. Même question que précédemment pour M cos(ω 1 t) cos(ω 2 t).

**Exercice complémentaire 4**
Résoudre (E1) 2cos²(t) – 4√ 2 cos(t) – 5 = 0 (E2) 2 cos(3t) − 2 sin(3t) = 1.


R113 Mathématiques du signal Chapitre 2 Généralités sur les signaux **(1/4)**

#### Chapitre 2 : Généralités sur les signaux

#### I. Définition d’un signal

###### 1. Fonction ou signal

 On appelle **fonction réelle d’une variable réelle** une relation numérique qui, à un
réel x associe au plus une image notée g(x).

 Un **signal** est une fonction dont la variable est le temps t.

Exemples : s 1 (t) = 3 cos(2t + 1) s 2 (t) = 

###### 2. Ensemble de définition

L'ensemble de définition de la fonction g, noté D g est l'ensemble des réels t pour
lesquels g(t) est défini.

Exemples : D= D=

###### 3. Représentation graphique d’une fonction – graphe d’un signal

On trace l’ensemble des points (t ; g(t)) pour t décrivant D g.

C’est la courbe représentative de g, elle a pour équation y = g(t).

s 1 (t) = 3 cos(2t + 1) s 2 (t) =  s 3 (t) = | t | s 4 (t) =

 
⎩
 
 
⎪
 
 
⎨
 
 
⎪
 
 
⎧0 si t  
 
 

^
1 si  t 
0 si t 
 
 
1
 
 
^12 
 
 
y = s 1 (t) y = s 2 (t) y = s 3 (t)
 
 
y = s 4 (t)
 
 
t
 
t (^) t
t t^


R113 Mathématiques du signal Chapitre 2 Généralités sur les signaux **(3/4)**

**- t t**

 
g(t)
 
**- t**
    **t**

 
g(t)
 
**- g(t)**

#### II. Parité et symétrie

###### 1. Parité

 
 Un ensemble D est centré sur 0 si ∀t∈D – t∈D.
Exemple : ] – 4 ; 4 ] ] – 5 ; 5[ R* ] 0 ; + ∞[ R\{1}
Centré en 0?
 
 
Si D g est centré en 0 et si ∀ t ∈ Dg g(– t) = g(t) alors g est une fonction paire
La courbe représentative de g est symétrique par rapport à
 
Exemple : g(t) = t^2

 
 Si D g est centré en 0 et si ∀ t ∈ Dg g(– t) = – g(t) alors g est une fonction impaire
La courbe représentative de g est symétrique par rapport à
 
Exemple : g(t) = t^3

−∞ (^) − **t 0 t** +∞
La droite réelle

###### 2. Ensemble d’étude

Si la fonction g est paire ou impaire on peut diviser en 2 le domaine d’étude, on
déduira par symétrie le comportement de g sur le reste du domaine de définition.

 Une symétrie par rapport à l’axe des ordonnées pour une fonction paire.
Exemple : y = t sur [0 ; + ∞[ y = | t | sur R

 Une symétrie par rapport à l’origine pour une fonction impaire.

Exemple : y =  sur [0 ; + ∞[ y =  sur R

 
La symétrie par rapport
à l’axe des ordonnées
revient à tracer le
graphe de t → s(– t)
 
 
La symétrie par rapport
à l’origine revient à
tracer le graphe
de t → – s(– t)
 

 
R113 Mathématiques du signal Chapitre 3 : Signaux périodiques (1/18)
 
#### Chapitre 3 : Signaux périodiques

 
I. Période, fréquence et pulsation d’un signal périodique
II. Signaux périodiques de base
 
1. Fonction cosinus
2. Fonction sinus
3. Créneau
4. Dent de scie
**III. Les fonctions sinusoïdales A cos(** ω **t +**  $\phi$ **)**
1. Leurs caractéristiques
2. Leur graphe
**IV. Opérations sur les signaux**
1. Avance / Retard
2. Dilatation / Compression
3. Amplification / Atténuation

#### I. Période, fréquence et pulsation d’un signal périodique

 
Le signal s est périodique de période T si T est un réel positif tel que :
∀ t ∈ Ds (t + T) ∈ Ds et ∀ t ∈ Ds s(t + T) = s(t)
 
 
Il suffit d’étudier une fonction T-périodique sur un intervalle de longueur T comme
[0 ; T] ou ;. Ce qu’on observe sur cet intervalle se répète ensuite à l’infini.
On complète la courbe sur Dg par translation de vecteur T ⃗ dans un repère (0 ; ⃗ ; 	⃗).
 
 
Si t est le temps exprimé en secondes.
Motif élémentaire
 
La **période** T de la fonction
périodique est exprimée en
secondes.
La période est le temps
que met une oscillation

###### complète.

 
La fréquence de la fonction
périodique de période T est
 
###### f =

###### .

 
La fréquence est le nombre
d’oscillations par seconde (par
unité de temps t), elle est
exprimée en s -1 ou Hertz (Hz).
 
 
La pulsation de la fonction
périodique de période T est
 
###### ω = 2 π f.

 
La pulsation est la fréquence
angulaire , elle est exprimée en
radians par seconde (rad.s-1).
 

R113 Mathématiques du signal Chapitre 3 : Signaux périodiques (3/18)

#### II. Signaux périodiques de base

###### 1. Fonction cosinus

Soit cos : t → cos(t)

Ensemble de définition : Dcos = R **cos :** R **→ [ -1 ; 1]**

Périodicité : ∀t ∈ R cos(t + 2 π) = cos(t) cosinus est **périodique de période**

Parité : Dcos est centré en 0 ∀t ∈ R cos(– t) = cosinus est

Ensemble d’étude :

Dérivée : ∀t ∈ R cos’(t) = cos’( u(t) ) =

Tableau de variation :

t 0

 
π
2 π^
cos’(t) -
 
cos(t)

 
1
0
 
- 1
Représentation graphique :

 
On trace la courbe sur [0 ; π],
par symétrie par rapport à l’axe des
ordonnées on l’obtient sur [-π ; π],
puis par translation on l’obtient sur R.
 
###### 2. Fonction sinus

Soit sin : t → sin(t)

Ensemble de définition : Dsin = R **sin :** R **→ [ -1 ; 1]**

Périodicité : ∀t ∈ R sin(t + 2 π) = sin(t) sinus est **périodique de période**

Parité : Dsin est centré en 0 ∀t ∈ R sin(– t) = sinus est

Ensemble d’étude :

Dérivée : ∀t ∈ R sin’(t) = sin’( u(t) ) =

Tableau de variation :

t 0

 
π
2 π^
sin’(t) + 0 -
 
 
sin(t)
0
 
1

0

Représentation graphique :

 
On trace la courbe sur [0 ; π],
par symétrie par rapport à l’origine on
l’obtient sur [-π ; π],
puis par translation on l’obtient sur R.
 
 
Animation
https://www.geogebra.org/m/fxtxs7fw
 

R113 Mathématiques du signal Chapitre 3 : Signaux périodiques (5/18)

###### 3. Créneau

Un signal en créneau, aussi appelé signal carré, est périodique.

Il alterne régulièrement et instantanément entre deux niveaux.

Un signal en créneau de période T et de hauteur A est défini sur [0 ; T] par

s(t) = A si 0 ≤ t <^ 

###### s(t) = −A si^  ≤ t < T

t

s(t)

 
^
 
**T**

− **A**

**+ A**

**0**

###### 4. Dent de scie

Un signal en dents de scie est périodique, affine par morceaux.

t

s(t)

 
^
 
 
T
− A
 
**A**

**0**


R113 Mathématiques du signal Chapitre 3 : Signaux périodiques (7/18)

#### III. Les fonctions sinusoïdales A cos( ωt +  $\phi$)

###### 1. Leurs caractéristiques

Un signal périodique peut s’écrire comme une somme de fonctions sinusoïdales.
Toute fonction sinusoïdale peut s’écrire

-  **s(t) = A cos(2** π **f t +**  $\phi$ **)** (" forme standard ")
avec A l’amplitude, f la fréquence,  $\phi$ la phase à l’origine (en radians)

- ou **s(t) = A cos(** ω **t +**  $\phi$ **)** avec A l’amplitude, ω la pulsation,  $\phi$ la phase à l’origine,

Remarque : A>0 f>0 ω>0  $\phi$$\in]-\pi;\pi]$

**T est la période de la fonction périodique f =** $\frac{1}{T}$ **= 2** π **f**

L’ **amplitude** peut se calculer de la manière suivante : $\frac{\text{maximum - minimum}}{2}$.

La **phase à l’origine**  $\phi$ mesure le déphasage
par rapport au signal sinusoïdal parfait.
 $\phi$ est exprimé en radians.
 $\phi$ doit être compris entre -π et π.
 $\phi$ > 0 pour une avance de phase
 $\phi$ < 0 pour un retard de phase

_On imagine qu’on se promène sur les courbes de gauche à droite à partir de t = 0._

_La courbe rouge passe au niveau de 3 après la courbe noire._
La courbe rouge est en retard de phase par rapport à la courbe noire ( $\phi$ = – 1)
La courbe noire est en avance de phase

Pour calculer  $\phi$
a) On mesure l’écart de temps ∆t entre les
deux courbes.
b) On calcule la valeur absolue de la phase à
l’origine : | $\phi$ |= 2 π |Δt| f
c) On détermine le signe de  $\phi$ :
**-** pour un retard **+** pour une avance

**Remarque à propos de sin(t) et cos(t)**
Les 2 courbes ont même amplitude 1, même période 2π.
Seule la phase à l’origine diffère. sin(t) = $$\cos\left( \frac{\pi}{2}-t \right)=\cos\left( t-\frac{\pi}{2} \right)$$

La courbe y = sin(t) peut se déduire de la courbe y = cos(t) par de phase de $\frac{\pi}{2}$.

Toute fonction sinusoïdale peut aussi s’écrire
s(t) = A sin(2 πf t +  $\phi$) ou s(t) = A sin(ω t +  $\phi$)

**Exemples :** Déterminons amplitude, période, fréquence, pulsation et phase à l’origine.
- s(t) = 4 cos(t) a pour
amplitude A = 4
période T =$2\pi$ fréquence f = $\frac{1}{2\pi}$Hz pulsation ω = $1 rad.s ^{-1}$ car $\omega=2\pi f$ $\iff \frac{\omega}{2\pi}$
phase à l’origine  $\phi$ = $0$

- s(t) = 0,9 cos(5t) a pour
amplitude A = $0,9$
période T = $\frac{2\pi}{5}$ fréquence f = $\frac{5}{2\pi}$ pulsation ω = $5rad.s^{-1}$
phase à l’origine  $\phi$ = 0

- s(t) = 3 cos(10 π t + π) a pour
amplitude A = 3
période T = $\frac{1}{5}$ fréquence f = $5$hz pulsation ω = $10 \pi rad.s ^{-1}$
phase à l’origine  $\phi$ = $\pi$

###### 2. Leur graphe
**Lecture de la phase, de l’amplitude et de la période sur le graphe**
_x_ (t) = m + A cos(2π f t +($\phi- \frac{\pi}{2}$)
x (0) = − 2

Amplitude A = $\frac{1- (-2)}{2}=1,5$


Moyenne m ($\frac{a+b}{2}$): m= $\frac{1+(-2)}{2}$

Période T = 2 Fréquence f = $\frac{1}{T}$

On détermine  $\phi$ :
Pour $t=0$, on a : $m+A \cos\phi=-2$
$-0,5+1,5 \cos \phi=-2$
$\cos \phi=\frac{-2+0,5}{1,5}=-\frac{1,5}{1,5}=-1$
$\phi=\pi+2k\pi$
Or $\phi\in ]-\pi;\pi]$
donc $\phi=\pi$

On peut dire que $x(t)=-0,5+1,5 \cos(2\pi \times 0,5t+ \phi)$
#### IV. Opérations sur les signaux
###### 1. Avance / Retard

Le graphe de **t → s(t + b)** s’obtient par translation horizontale de vecteur – b $\vec{u}$ de $C_{s}$.

Si b > 0 translation vers la gauche : version avancée de s
Si b < 0 translation vers la droite : version retardée de s
 
On parle de **déphasage**.
- Amplitude inchangée
- Période, fréquence et pulsation inchangées
- Phase à l’origine modifiée :  $\phi_{2}$  = $\phi_{1}+b$ ou $\phi_{2}=\phi_{1}+b-2\pi$
 
Le signal s(t + 0,6) est en avance par rapport à s(t).

La courbe noire est en retard par rapport à la courbe bleue.
###### 2. Offset

Le graphe de **t → s(t) + c** s’obtient par **translation verticale** de vecteur c $\vec{v}$ de C s.

 
Si c > 0 translation vers le haut
Si c < 0 translation vers le bas
##### 3. Dilatation / Compression
Le graphe de **t → s $\frac{t}{b}$**, s’obtient par dilatation horizontale à partir de C s.

Si 0 < b < 1 on parle de compression. (le temps s'accélère dans la formule)
Si b > 1 on parle de dilatation.

- Amplitude inchangée
- Phase à l’origine inchangée
- Période, fréquence et pulsation modifiées :
$T_{2}$ = $T_{1} \times b$
$f_{2}$ = $\frac{f_{1}}{b}$
$\omega_{2}$ = $\frac{\omega_{1}}{b}$


la courbe rouge s’obtient par compression de la courbe noire.
la courbe noire s’obtient par dilatation de la courbe rouge.
###### 4. Amplification / Atténuation
Le graphe de t → c s(t) s’obtient par dilatation verticale de C s.
Si c > 1 on parle d’ amplification.
Si 0 < c < 1 on parle d’ atténuation.
- Période, fréquence et pulsation inchangées
- Phase à l’origine inchangée
- Amplitude modifiée : $A_{1} \times c$
 
 
Quand l'amplitude de La courbe bleue augmente on pourrait avoir le fait que s’obtient par amplification de la noire.
La courbe noire s’obtient par atténuation de la bleue.
###### 5. Combinaisons linéaires de signaux périodiques
Soient s 1 et s 2 deux signaux périodiques.
Une combinaison linéaire de ces deux signaux est s(t) = a $s_{1}$ (t) + b $s_{2}$ (t) où a, b ∈R
c’est-à-dire une somme de multiples de ces deux signaux.

Exemples : 
8 s 1 (t) – 5 s 2 (t) 
0,6 cos(t) – $\sqrt{ 5 }$ cos$\left( \pi t+\frac{\pi}{5} \right)$

#### Propriétés :
- Si s 1 et s 2 ont la même période T alors toute combinaison linéaire de s 1 et s 2 est périodique de même période T.

Exemples : 8 cos  $$t  3 – 5 tan  $$t est 2 − périodique.
 
 
- Si s 1 et s 2 n’ont pas la même période. s 1 est T 1 − périodique et s 2 est T 2 − périodique.
o 1 er cas :
$$\frac{T_{1}}{T_{2}} ∈ Q ∃ n 1 , n 2 ∈ \mathbb{N}^{*} \text{tels que n 1 T 1 = n 2 T 2} $$
Alors toute combinaison linéaire de s 1 et s 2 est périodique de période n 1 T 1 = n 2 T 2.
(n 1 T 1 = n 2 T 2 n’est pas nécessairement la plus petite période.)
o 2 e cas : $$\frac{T_{1}}{T_{2}}$$

 
 
∉ Q
Alors toute combinaison linéaire de s 1 et s 2 n’est pas périodique.
 
**Exemple 1 :** s(t) est-il périodique?

Soit s(t) = 15 cos(3t) – 7 sin(2t).

 
Exemple 2 : r(t) est-il périodique?
Soit r(t) = 4 cos(t) – 7 cos 
 
-
√.


 
  (1/3)
 
##### R113 – TD 3 Fonctions trigonométriques

 
Exercice 1 : Propriétés caractéristiques des fonctions cos, sin, tan
1) Sachant que ce sont les fonctions cos(t), sin(t) et tan(t) qui ont été tracées, écrire
sous chaque graphique le nom de la fonction représentée.
 
 
2) Qu’est ce qui caractérise chacune des 3 fonctions?
 
Fonction Propriétés caractéristiques

 
cos(t)
 
 
sin(t)
 
 
tan(t)
 
 
3) Soit g(t) = 10 cos(7t + 3). Quelle est la bonne réponse? Justifier sa réponse.
a ) g est périodique et paire c ) g est périodique mais pas paire
b ) g est périodique et impaire d ) g n’est ni périodique, ni paire, ni impaire
 
 
Exercice 2 : Parité et périodicité de fonctions trigonométriques
Pour chacune des fonctions suivantes :
s(f) = − 4 sin  
$a(t) = 2 cos(5πt+ \frac{\pi}{3})$ 
b(ω) = 4 sin^  
c(s) = 9 tan(4s)
Déterminer
a) son ensemble de définition,
b) sa parité,
c) sa périodicité (Préciser la période des fonctions périodiques.),
d) son ensemble d’étude, en précisant comment on peut compléter la courbe sur
l’ensemble de définition.
 1. $s(f)=-4\sin\left( \frac{f}{3} \right)$
	1. $D_{s}=\mathbb{R}$
	2. $D_{s}$ est centré sur $0$ ; $S(-f)=-4 \sin\left( -\frac{f}{3} \right)$, or $\sin$ est impaire : $\sin(-x)=\sin(x)$ donc $S(-f)=4\sin\left( \frac{f}{3} \right)$, or $S(-f)=-5(f)$ donc $S$ est impaire
	3. $\omega=\frac{1}{3}$, $T=\frac{2\pi}{\omega}=\frac{2\pi}{\frac{1}{3}}=2\pi \times 3= 6\pi$
	4. Comme s est $6\pi$ périodique, il suffit de l'étudier sur $[-3\pi ; 3\pi]$, on obtient le reste  de l'étude par translation $6\pi $. Comme $s$ est impaire, on peut l'étudier sur $[0;3\pi]$, on déduira son étude sur $[-3\pi; 3\pi]$ par symétrie par rapport à l'origine
1. $a(t) = 2 cos(5πt+ \frac{\pi}{3})$ 
	1. $\mathbb{R}$
	2. centré sur 0 ; $a(-t)=2\cos\left( 5\pi(-t)+\frac{\pi}{3} \right)$, donc ni paire ni impaire
	3. $\omega=5\pi$ , on sait que $T=\frac{2\pi}{\omega}$
	4. $D\left[ 0; \frac{2}{5} \right]$
2. $b(\omega)=4\sin ^{2}\left( \frac{\omega}{3} \right)$
	1. $\mathbb{R}$
	2. centré sur 0 ; on sait que $\sin ^{2}=\frac{1-\cos(2a)}{2}$ , $b(\omega)= 4\left( \frac{1-\cos \frac{2\omega}{3}}{2} \right)=\left( \frac{4-4\cos \frac{2\omega}{3}}{2} \right)=2-2\cos\left( \frac{2\omega}{3} \right)$. Or $2-2\cos\left( -\frac{2\omega}{3} \right)=2-2 \cos \frac{2\omega}{3}$ $\implies$ $b(\omega)=b(-\omega)$
	3. $\omega=\frac{2}{3}$ $T=\frac{2\pi}{\frac{2\pi}{3}}$
	4. $D \left[ 0; \frac{\frac{2\pi}{\frac{2\pi}{3}}}{\frac{2}{3}} \right]$
3. $c(s)=9\tan(4s)$
	1. $c(s)$ est défini ssi $4s \neq$

Exercice 3 : caractéristiques d’un signal sinusoïdal à partir de son expression
Compléter le tableau avec l’amplitude, la période, la fréquence, la pulsation et la
phase à l’origine de ces signaux sinusoïdaux.
 
amplitude période fréquence pulsation phase à
l’origine

1. s 1 (t) = 6 cos(150 π t)

2. s 2 (t) = 9 cos50t +

s 3 (t) = 4 cos+ 

s 4 (t) = A cos^ t−

 
Exercice 4 : Détermination de la forme standard d’un signal sinusoïdal à partir de sa courbe
 
 
1) Déterminer l’expression sous la
forme standard
s(t) = A cos(2πf t +  $\phi$) + B
du signal sinusoïdal représenté ci-
contre en détaillant et justifiant
sa démarche.
 
 
2) Décrire ce signal sinusoïdal grâce à
ses caractéristiques.
 
 
Exercice 5 : Lecture des caractéristiques d’un signal
 
 
Déterminer les caractéristiques du signal dont
le graphe est ci-contre puis l’écrire sous forme
standard.
 
 
t
 
 
s(t)
 

  (3/3)

Pour s’entraîner

**Exercice complémentaire 1 :**
Déterminer l’amplitude, la période, la fréquence, la pulsation, la phase à l’origine et
l’offset de s(t) = 9 sin(70 π t) + 2

**Exercice complémentaire 2 :**
Déterminer
a) l’ensemble de définition,
b) la parité,
c) la périodicité (Préciser la période des fonctions périodiques.),
d) l’ensemble d’étude, en précisant comment on peut compléter la courbe sur
l’ensemble de définition.

des fonctions suivantes : p(t) = % cos^ t s(t) = % cos^ t+ 2 cos^ t +^ 

**Exercice complémentaire 3 :** Tracé du graphe d’une composée de valeur absolue et cos()

Soit la fonction m(t) = | cos(t) |.

 
1) Quel est l’ensemble de définition de m?
2) Tracer le graphe de la fonction cosinus sur [-2π ; 2π].
3) En déduire le graphe de la fonction m(t) sur [-2π ; 2π].
 

R113 : Mathématiques du signal **Compte rendu du TP n° 1 : Signaux périodiques**

 
L’énoncé complet du TP se trouve sur Moodle : https://lms.univ-cotedazur.fr/
 
Exercice 1 : Reconnaître des fonctions sinusoïdales

 
La fonction correspond à la courbe ... Justifications
 
 
s 1 (t) = 4 cos(t−π 3 )
 
 
s 2 (t) = cos(t+π 4 )
 
 
s 3 (t) = cos(t−π 3 )
 
 
s 4 (t) = 4 cos(3t+π 4 )
 
Exercice 2 : Signaux sinusoïdaux

 
Signal
 
 
Modification(s)
effectuée(s) pour
obtenir ce signal
 
Période Fréquence Pulsation Amplitude (^) l’originePhase à
g 1 (t) = cos(π 2 −t)
g 2 (t) = 3cos(t−π 2 )
g 3 (t) = sin(πt)
g 4 (t) =^15 cos( 3 t+π 4 )
g 5 (t) =^15 cos( 2 t+π 4 )
g 6 (t) = 3cos( 2 t+π 4 )
g 7 (t) = −3cos( 2 t+π 4 )


R113 : Mathématiques du signal **Compte rendu du TP n° 1 : Signaux périodiques**

Exercice 3 : Décrire et reconnaître des signaux

Courbe Période Fréquence Pulsation (^) (cas d’une sinusoïde pure)Amplitude^ Formule
bleue
verte
rouge
Exercice 4 : Combinaison linéaire de signaux périodiques
Signal
s 1 (t) = 18 +
31cos(π 2 t) s^2 (t) = cos
(^2) (π
2 t)^ s^3 (t) = cos
(^3) (π
2 t)^ s^4 (t) = cos(5t)^ s^5 (t) = cos
(^5) (π
2 t)^ s^6 (t) =
2
5 cos(
2π
3 t+
π
4 )^
Période
Signal s^1 (t) –^ 36 s^2 (t)^ s^1 (t) + 23 s–^ 13 s 5 (t).^3 (t) – 13 ss^1 (t) 3 (t) + 23 s–^ 36 s^2 (t) 5 (t) – 20 ss^1 (t) 4 (t) + 23 s–^ 13 s^3 (t) 5 (t)^ 4 s 2 (t) – 36 s 6 (t)
Période
Exercice 5 : Transformation de signaux
(^) par un facteur 4... amplification ... avoir subi un offset de 5
... avoir dilaté
l’échelle des temps
d’un facteur 3
... avoir retardé le
signal d’une
seconde
Expression du
nouveau signal
obtenu après ...
Caractéristiques
de s impactées


R113 Mathématiques du signal TD 4 Fonctions périodiques (1/4)

##### R113 – TD 4 Fonctions périodiques

**Exercice 1 : Reconnaître les caractéristiques d’un signal sur son graphe**

 
Pour chacun des graphes suivants préciser le type de signal, la période, la
fréquence.
le type de signal : ...........................
 
 
la période :
 
 
la fréquence :
 
 
le type de signal : ...........................
 
 
la période :
 
 
la fréquence :
 
 
le type de signal : ...........................
 
 
la période :
 
 
la fréquence :
 
 
le type de signal : ...........................
 
 
la période :
 
 
la fréquence :
 
**Exercice 2 : Reconnaître, sur un graphe, les modifications subies et leur impact**
Le signal de base est tracé en pointillé et le signal final est en noir.
Pour chacun des signaux suivants,
a) reconnaître les modifications subies par le signal de base,
b) préciser l’impact sur les caractéristiques du signal


 
R113 Mathématiques du signal TD 4 Fonctions périodiques (2/4)
 
Modification(s) : Modification(s) :

Impact(s) : Impact(s) :

Modification(s) : Modification(s) :

Impact(s) : Impact(s) :

Modification(s) : Modification(s) :

Impact(s) : Impact(s) :

Modification(s) : Modification(s) :

Impact(s) : Impact(s) :


 
R113 Mathématiques du signal TD 4 Fonctions périodiques (3/4)
 
 
Exercice 3 : Combinaison linéaire de signaux périodiques
Soit les signaux st cos 
4t   et sx 5 cos 3 x
 
1. Déterminer les périodes, fréquences et pulsations des signaux s et s.
2. Déterminer si le signal s t 2 st√ 3 st est périodique.
    Si oui, en déterminer ses période, fréquence et pulsation.
3. Déterminer si le signal st 3√ 2 stst. est périodique.
    Si oui, en déterminer ses période, fréquence et pulsation.
4. Déterminer si le signal st√ 7 cos
5t  √cos 
4t   est périodique.
    Si oui, en déterminer ses période, fréquence et pulsation.
5. Les signaux s, s et s sont représentés dans le graphique ci-dessous.

Associer chaque courbe au signal représenté.

 
Exercice 4 : Graphe des signaux avancés, retardés...
Soit s le signal en créneau unitaire ci-contre.
Représenter graphiquement les signaux suivants :
Préciser le type de modification effectuée
s(4t) s(t − 0,25)
 
 
s  1,5 s(t)
 
 
s(t + 0,5) s(t) + 1 et 0,5 s(t)
 
 
t
 
 
s(t)
 

R113 Mathématiques du signal TD 4 Fonctions périodiques (4/4)

**Exercice 5 :** Écriture d’un signal filtré sous la forme d’une somme de 2 signaux sinusoïdaux

 
1) Écrire m(t) = 8 cos
3πt  $$ cos

 $$t sous la forme d’une somme de deux
signaux sinusoïdaux écrits sous forme standard.
 
 
2) Quelles sont les caractéristiques des deux signaux que l’on additionne?
 
Pour s’entraîner

**Exercice complémentaire 1**
Le signal de base est tracé en pointillé et le signal final est en noir.
Pour chacun des signaux suivants,
a) reconnaître les modifications subies par le signal de base,
b) préciser l’impact sur les caractéristiques du signal

Modification(s) : Modification(s) :

Impact(s) : Impact(s) :

**Exercice complémentaire 2**

1. Déterminer si le signal st 6 cos 
√ 3 t   10 cos
12t  est périodique.
Si oui, en déterminer ses période, fréquence et pulsation.
2. Déterminer si le signal mt 7 sin 
6t   2 sin
t  est périodique.

 
Si oui, en déterminer ses période, fréquence et pulsation.
 
**Exercice complémentaire 3 :** Écriture sous forme standard

Soit s(t) = cos(5t) − (^) √ 3 sin(5t)
1) Déterminer a et c tels que s(t) = a cos(c) cos(5t) – a sin(c) sin(5t).
2) Écrire s(t) sous la forme standard d’un signal sinusoïdal.
**3)** Préciser toutes les caractéristiques de ce signal sinusoïdal (période, fréquence,
pulsation, amplitude, phase à l’origine)


R113 Mathématiques du signal Chapitre 4 : Fonctions réciproques des fonctions trigonométriques (1/8)

#### Chapitre 4 : Fonctions réciproques des fonctions trigonométriques

#### I. Fonctions continues strictement monotones

###### 1. Définition de la continuité

g est continue en a ∈Dg si lim→gt
 = g(a).

g est continue sur l’intervalle I si g est continue
en tout point a de I.

**La courbe d’une fonction continue se trace
sans jamais lever le crayon.**

**Exemples :**

###### 2. Définition d’une bijection

Une fonction g : E → F est dite **bijective** si pour tout élément y de F,

l'équation y = g(x) possède une unique solution,
c’est-à-dire tout élément y de F a un unique antécédent dans E.

**Exemples :**

 
y = tan(t)
 
**Autres exemples :**
 La **fonction carré** n’est pas une bijection de R dans R car
par exemple − 4 ∈ R et n’admet pas d’antécédent dans R.
La fonction carré n’est pas une bijection de R dans R+ car
par exemple 4 ∈ R+ et admet deux antécédents distincts dans R (2 et − 2).

La fonction carré est une bijection de R+ dans R+ car
tout nombre réel positif _b_ admet un unique antécédent positif.

 
La fonction carré est également une bijection de R− dans R+ car
tout nombre réel positif b admet un unique antécédent négatif.
 
 La **fonction exponentielle** est une bijection de R dans ]0;+ ∞[.

 La **fonction cosinus** n’est pas une bijection de R dans [-1;1] car par exemple
1 admet plus d’un antécédent : tout nombre du type 2 k π (k ∈ Z) est un antécédent de 1.
La **fonction cosinus** est une bijection de [0 ; π] dans

#### [-1;1].


R113 Mathématiques du signal Chapitre 4 : Fonctions réciproques des fonctions trigonométriques (3/8)

###### 3. Théorème et définition de fonction réciproque

Théorème : Si g est continue et strictement croissante ou bien strictement décroissante
sur l’intervalle I alors g établit une bijection de I sur g(I).

Définition : Si g est une bijection de I sur g(I) alors on peut définir la fonction
réciproque de g : g−^1 bijection de g(I) sur I.
t ∈ g(I) y ∈ I
y = g^ −^1 (t) t = g(y)

Exemple : Soit g(t) = t².

g est continue et strictement croissante de

On peut définir g −^1 notée √ par :

t ∈ [0 ; + ∞ [ y ∈^
y = √t ⇔ t =^

 
⇔ I^ g(I)^
g^ −^1
 
g

###### 4. Propriétés de la bijection réciproque g^ −^1

 ∀ **t** ∈ **I g – 1 ( g(t) ) = t** ∀ **t** ∈ **g(I) g**^ **(g** −^1 **(t)) = t**

 g – 1 est strictement monotone de même sens de variation que g.

 
 g – 1 est continue.
 Les courbes de g et g – 1 sont symétriques par rapport à la droite y = t.
 
 
y = t²
y = t
 
y = √t


 
R113 Mathématiques du signal Chapitre 4 : Fonctions réciproques des fonctions trigonométriques (5/8)
 
#### II. Fonction arctangente : arctan

- La fonction tangente réalise une bijection de ; dans R

car elle est continue, strictement croissante et tan ;; 

- Sa bijection réciproque est notée **arctan** : **y = arctan(t) t = tan(y)**
t ∈ R y ∈;

**arctan associe, à tout réel t, l’angle**  $\phi$ **(en radians) compris entre –**  $$ **et**  $$ **dont la tangente vaut t.**

Valeurs remarquables :

arctan(0) = arctan(1) = arctan √ 3 = arctan √!! =

⇔

 
 2 ; 2  R
arctan
 
 
tan
∀t∈
 
 

;
 
 

 arctan(tan(t)) = t
∀t∈R tan(arctan(t)) = t
 
 
Propriétés de la fonction arctan :
 arctan : R → 
 
 

;
 
 

 est continue et strictement croissante.
 Parité : arctan(− t) = − arctan(t) arctan est
 
 **Dérivée** : arctan’(t) = # $ ²# ∀t ∈ R **[arctan(u(t))]’ =** &

 
'(

) $ &(
²^
 
 **Limites** : (^) → $lim arctan t  (^) → ,lim arctan t 
 **Courbe :**
 **Composée de cos, sin avec arctan :**
∀t ∈ R cos( arctan(t) ) = -#
#$²
sin( arctan(t) ) = -(
#$²

####  Utilisations de arctan : calcul de l’argument d’un nombre complexe, intégration

 
Une vidéo intéressante à
propos de arctangente :
https://www.youtube.com/w
atch?v=XB2tFUD1rKU
 

 
R113 Mathématiques du signal Chapitre 4 : Fonctions réciproques des fonctions trigonométriques (7/8)
 
#### III. Fonction arccosinus : arccos

- La fonction cosinus réalise une bijection de [0 ; π] dans [−1;1]
car elle est continue, strictement décroissante et cos([0 ; π]) = [−1;1].
- Sa bijection réciproque est appelée arccosinus, notée **arccos
arccos associe, à t** ∈ **[** − **1 ; 1], l’angle**  $\phi$ **(en radians) compris entre 0 et** π **dont le cosinus vaut t.**

 
Propriétés de la fonction arccos :
 arccos est continue et strictement décroissante sur [ − 1 ; 1].
 Pas de parité car le domaine de définition n’est pas centré sur 0
 Dérivée : arccos’(t) = -,#
#, ²
 
∀t ∈ R **[arccos(u(t))]’ =** ,&

 
'(

 
- ), &(
²^
Valeurs remarquables : arccos (0) = 
arccos(1) = 0 arccos√! = . arccos# = ! arccos√ = /
arccos(−1) = π arccos√! =^0 . arccos# = ! arccos√ = !/

 0 ; π (^) [−1;1]
arccos
cos (^) ∀t ∈ [0 ; π] arccos(cos(t)) = t
∀t ∈ [−1 ;1] cos(arccos(t)) = t

..

#### IV. Fonction arcsinus : arcsin

- La fonction sinus réalise une bijection de ; dans [−1;1]
car elle est continue, strictement croissante et sin ; = [−1;1].
- Sa bijection réciproque est appelée arcsinus, notée **arcsin
arcsin associe, à t** ∈ **[** − **1 ; 1], l’angle**  $\phi$ **(en radians) compris entre**  $$ **et**  $$ **dont le sinus vaut t.**

 
Propriétés de la fonction arcsin :
 arcsin est continue et strictement croissante sur [ − 1 ; 1].
 Parité : arcsin(− t) = − arcsin(t) arcsin est impaire.
 Dérivée : arcsin’(t) = -#
#, ²
 
∀t ∈ R **[arcsin(u(t))]’ =** &

 
'(

 
- ), &(
²^
Valeurs remarquables : arcsin (0) = 0
arcsin(1) =  arcsin √! = ! arcsin# = . arcsin√ = /

 2 ; 2  [−1;1]^

arcsin

 
sin
∀t ∈ ; arcsin(sin(t)) = t
 
∀t ∈ [−1 ;1] sin (arcs in (t)) = t

..


R113 Mathématiques du signal TD 5 Fonction arctangente (1/2)

### R 113 – TD 5 Fonction arctangente

**Exercice 1 :** Reconnaître les courbes de fonctions usuelles

Reconnaître les courbes des fonctions cos, sin, tan, arccos, arcsin et arctan parmi les
courbes ci-dessous :

____________ ____________ ____________ ____________

____________ ____________ ____________ ____________

**Exercice 2 :** Équations et calculs avec arctan()

1) Calculer :
arctan( 1 ) = arctan √ 2  =
arctan √ 3  = arctan tan
^  =

2) Résoudre les équations suivantes :

 
arctan( t ) = − arctan(  $\phi$ ) =^ 
 
3) Résoudre l’équation suivante : tan(t) = 8

**Exercice 3 :** tan() et arctan()

Déterminer l’ensemble de définition et calculer la dérivée de m(t) = arctan( 5t^3 − 8).

**Exercice 4 :** Détermination d’angles dont le cos et le sin sont connus

1) Déterminer  $\phi$ tels que cos( $\phi$) =  et sin( $\phi$) =  (^) 
2) Déterminer  $\phi$ tels que cos( $\phi$) = −  et sin( $\phi$) =^ 


R113 Mathématiques du signal TD 5 Fonction arctangente (2/2)

**Exercice 5 :** Un circuit électrique soumis à deux tensions

Un circuit électrique est soumis à deux tensions : 3 cos(2π f 0 t) et 4 sin(2π f 0 t).
On cherche à écrire la tension somme S(t) = 3 cos(2π f 0 t) + 4 sin(2π f 0 t) sous la

forme standard d’un signal sinusoïdal A cos(2π f 0 t +  $\phi$) avec A > 0,  $\phi$ ∈ [ − π ; π].

**Pour trouver la valeur de A et de**  $\phi$ **, on va procéder par étapes.**

1) Décomposer A cos(2π f 0 t +  $\phi$) en utilisant une formule d’addition.
_On doit obtenir A cos(2π f 0 t) cos(_  $\phi$ _) – A sin(2π f 0 t) sin(_  $\phi$ _) = 3 cos(2π f 0 t) + 4 sin(2π f 0 t)._

2) Par identification dans la relation précédente, on obtient :

_relation 1_ : A cos( $\phi$) = _relation 2_ : A sin( $\phi$) =

3) Déduire des relations 1 et 2 la valeur de tan( $\phi$).

4) En déduire  $\phi$.

5) Déduire des relations 1 et 2, qu’on élève au carré, la valeur de A², puis celle de A.

6) Conclure avec l’écriture de S(t) sous la forme standard d’un signal sinusoïdal.

**Exercice 6 :** Détermination de l’amplitude et la phase de fonctions sinusoïdales

1) Déterminer A > 0 et  $\phi$ ∈ [ − π ; π] tels que 5 cos(6t) – 7 sin(6t) = A cos(6t +  $\phi$)

2) Déterminer A > 0 et  $\phi$ ∈ [ − π ; π] tels que − 5 cos(7t) – 8 sin(7t) = A cos(7t +  $\phi$)

Pour s’entraîner
**Exercice complémentaire 1**

1) Résoudre les équations : arctan( t ) =^  tan 
2t +^  = √ 3

2) Calculer la dérivée des fonctions suivantes :
a. a(t) = tan( − 3t² )
b. b(t) = arctan( − 5t^3 + 2t − 3).

3) Soit g(t) = tan( arctan( t ) ).
a. Déterminer l’ensemble de définition de g.
b. Tracer le graphe de la fonction g.

4) Soit h(t) = arctan( tan( t ) ).
a. Déterminer l’ensemble de définition de h.
b. Tracer le graphe de la fonction h.

**Exercice complémentaire 2**

1) Déterminer  $\phi$ tels que cos( $\phi$) =  et sin( $\phi$) =^ 

2) Déterminer  $\phi$ tels que cos( $\phi$) = −  et sin( $\phi$) = − (^) 


 
R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques (1/16)
 
#### Chapitre 5 : Équations de droite et signaux non périodiques

**I. Équations de droite**

**II. Fonction définie par morceaux**

**III. Causalité et support temporel**

**IV. Signaux de base**

1. Fonction rectangle ou porte
2. Impulsion de Dirac
3. Fonction triangle
4. Échelon unité
5. Rampe unité

**V. Opérations sur les signaux**

1. Avance / retard
2. Offset
3. Dilatation / compression
4. Amplification / atténuation

#### II. Equations de droite

**(d) est définie par 2
points**

(d) passe par **2 points**
A et B :

A(;y) et B( ;y )

 
Propriété fondamentale : Un point appartient à une droite si et
seulement si ses coordonnées vérifient l’équation de cette droite.
 
 
Si  = , la droite (d) est verticale
Son équation réduite est x = 
 
 
On détermine, pour la droite (d), son équation réduite (y = ... ou x = ...) ou une équation
cartésienne (a x + by + c = 0)
 
 
Sinon  
Son équation réduite est y = m x + p
 
 
m = –
 
 
p =  – 
 
 
vecteur directeur :
u⃗^1 
 
 
vecteur directeur :
u⃗^01 
 
 
ordonnée à
l’origine
 
 
coefficient
directeur ou
pente
 
**(d) est définie par un point et un vecteur
directeur**

(d) passe par **le point** A(;y) et adme t

u⃗−ab comme **vecteur directeur**

**(d) est définie par un point et le coefficient
directeur**

(d) passe par **le point** A(;y) et a comme
**coefficient directeur m.**

 
vecteur directeur :
u⃗m^1 
 
 
vecteur directeur :
u⃗−ab
 
 
Une équation
cartésienne est
a x + b y + c = 0
si b ≠ 0 : m="#
 
$=−% (^) &–'(&
**Son équation
réduite est**
y = **m** _x_ + **p
p =**  – 
Remarque : Toute équation réduite peut se transformer en équation cartésienne et réciproquement.


 
R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques (3/16)
 
Trois méthodes pour déterminer une équation de droite non parallèle à l’axe des ordonnées

 
(d) est définie par 2 points A et B (d) est définie par un point A^
et un vecteur directeur u⃗
 
 
(d) est définie par un point (;y)
et le coefficient directeur m.
 
 
u⃗
 
 
Propriété : Deux droites non verticales
sont parallèles si et seulement si elles ont
le même coefficient directeur.
 
y = **m** _x_ + **p** avec **m** =)–)**
**a** **_x_** **+ by + c = 0**

-^ +⃗−-,^ donc^

 
y = m x + p avec m =
A∈(d) donc
 
 
A( ; )
B( ; )
 
 
u⃗ 
 
 
A( ; )
 
 
A( ; )
 
**Question clickers**

**Quelle est l’équation réduite de cette droite?**

 
A) y = – 4 t – 10
B) y = 2,5 t – 10
C) y = – 4 t + 10
D) y = 4 t – 10
E) y = 2,5 t + 10
F) y = 4 t + 10
G) y = 4 t
H) y = – 10
I) y = 2,5
 

R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques **(5/16)**

#### II. Fonction définie par morceaux

Une fonction définie par morceaux est telle qu’on peut découper son ensemble de
définition en plusieurs intervalles tels que, dans chacun d’eux, la fonction prend une
certaine expression.

Exemples : s 3 (t) = | t | = .t si t ^0
− t si t < 0

s 4 (t) =

⎩

⎪

⎨

⎪

⎧0 si t < −

 
7
8
1 si−^78 ≤ t ≤^78
0 si t > +^78
 
 
Rappel à propos de la valeur absolue | |
| t | = si t ≥ 0
| t | = si t < 0
 
Exemples : | 4 | = | − 5 | = | 0 | =

#### III. Causalité et support temporel

 
 Un signal causal est un signal nul pour t < 0 : s(t) = 0 ∀ t < 0
Un signal causal n’a de valeurs non nulles que pour t ∈ R+.
 
 Un signal **anticausal** est un signal nul pour t > 0. **s(t) = 0** ∀ **t > 0**

La causalité amène la décomposition générale d’un signal quelconque en deux parties :
partie causale et partie anticausale

s+(t) = .s(t) si t ^0
0 si t < 0

s−(t) = =

 
0 si t > 0
s(t) si t  0 s(t) = s
 
+(t) + s−(t)

Signal causal Signal anticausal Signal quelconque


R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques **(7/16)**

####  On appelle support temporel , l’ensemble des temps t pour

#### lesquels le signal s(t) est défini et non nul.

Le support temporel de ce signal est

####  Un signal est dit à support borné s’il est nul en dehors d’un

#### intervalle borné : ∃ t 1 , t 2 ∈R tels que s(t) = 0 ∀ t ∉ [t 1 ; t 2 ].

Le support temporel de ce signal est Il est à support

Remarques :
Les signaux rencontrés en pratique sont causaux et à support temporel borné.

Exemple : s 5 (t) = >

 
0 si t < 1
1 si 1 ≤ t ≤ 2
0 si t > 2
 
Les signaux à support non borné ou non causaux sont des signaux théoriques. Ils sont
utilisés pour illustrer certains phénomènes ou par commodité de calculs.
Exemple : s 1 (t) = 3 cos(2t + 1)

 
1
 
 
−^12 12
 
#### IV. Signaux de base

###### 1. Fonction rectangle ou porte (signal à support borné)

La fonction rectangle ou porte, centrée La fonction rectangle centrée en 0 de largeur T

en 0 de largeur 1 est notée rect ou Π. est notée rectT ou ΠT. : rectT (t) = rect CB

rect : R → R rectT : R → R

Π : t →

⎩

⎪

⎨

⎪

⎧0 si t < −

 
7
8
1 si−^78 ≤ t ≤^78
 
0 si t > +

 
7
8
 
ΠT : t →

⎩

⎪

⎨

⎪

⎧

L’aire sous la courbe de rect vaut 1. L’aire sous la courbe de rectT vaut T.

(^) y = Π(t) (^) y = Π 2 (t)
(^1 1)
−^12 12 −C 8 = -1 1 = C 8
y =^78  2 (t)
y = D 8 EF (t)
1,5
− (^1) −^13 13 − 1
Aire = 2 (^) 0,5
Aire = 1


R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques **(9/16)**

La fonction rectangle centrée en k de largeur T :

rectBHC = ΠBHC →

⎩

⎪

⎨

⎪

⎧0 si t < k−

 
C
8
1 si k−C 8 ≤ t ≤ k+C 8
 
0 si t > k+C 8

**Remarques :**

Une fonction rectangle est à support borné.

Les fonctions rectangles sont très utilisées en traitement du signal : filtrage, fenêtrage

 
k − C 8
 
 
ΠBCH
 
 
1
 
 
k k + C 8 t^
 
 
T
 
###### 2. Impulsion de Dirac

**On peut voir l’impulsion de Dirac comme la limite d’une fonction rectangle :**

**Représentation graphique**

Par convention, on représente une impulsion de Dirac
δ(t) par une **flèche verticale** placée en t = 0 de
longueur proportionnelle à la constante de
pondération : 1 pour δ(t).

 
Aire = 1
 
 
lim
C→L
 
 
7
Crect 
 
 
B
C = δ(t)
 
 
1
TrectN
 
 
t
TO^
 
(^1) Aire = 1
0 t
δ(t)


 
R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques (11/16)
 
 
Définition pratique de l’impulsion de Dirac :
δ(t) n’est pas une fonction.
C’est un objet à valeur infinie en un point et à valeur nulle partout ailleurs.
Définition très simplifiée :
L’impulsion de Dirac est le signal noté δ défini par δ(t) = .1 si t = 0
0 sinon
 
**Impulsion de Dirac Impulsion de Dirac ............. Impulsion de Dirac .............**

δ(t) = .0 sinon 1 si t = 0 δ(t + t 0 ) = .1 si t = − tL
0 sinon

 
δ(t − t 0 ) = .1 si t = tL
0 sinon
 
Remarque : C’est la forme de base d’un signal en fréquences.

 
1
 
 
0
 
 
1
 
(^0) t 0
1
t (^) − t 0 0
δ(t)
t
δ(t)
t
δ(t)

###### 3. Fonction triangle (signal à support borné)

 
La fonction Triangle centrée en 0 de La fonction triangle centrée en 0 de largeur T est
largeur 2 est Λ : R → R ΛT : R → R
 
Λ : t → >

 
1+t si −1 ≤ t ≤ 0
1−t si 0 ≤ t ≤ +1
0 sinon
 
ΛT : t → R

1+^8 Ct si −C 8 ≤ t ≤ 0

 
1−C^8 t si 0 ≤ t ≤C 8
0 sinon
 
 
On peut écrire Λ(t) = 1− | t | si | t | ≤ 1
0 sinon
 

R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques **(13/16)**

#### 4. Échelon unité

L’échelon unité (fonction de Heaviside) est une fonction discontinue définie par :

 
H(t) = 1 si t ≥ 0
H(t) = 0 sinon
 
Remarque : L’échelon est utilisé pour rendre causal un signal s(t) non causal,
via la multiplication x(t) = s(t)H(t).

Exemple : s(t) = 15 cos(3t) – 7 sin(2t) x(t) = s(t)H(t)

#### 5. Rampe unité

La rampe unité est une fonction continue définie par :

 
r(t) = t si t ≥ 0
r(t) = 0 sinon
 
#### V. Opérations sur les signaux

Soit C s la représentation graphique de la fonction s dans le repère (0 ; S⃗ ; T⃗).

###### 1. Avance / retard

**Translation horizontale** comme cela a été vu pour les signaux périodiques.

###### 2. Offset

**Translation verticale** comme cela a été vu pour les signaux périodiques.


R113 Mathématiques du signal Chapitre 5 : Équations de droite et signaux non périodiques **(15/16)**

###### 3. Dilatation / compression

Le graphe de **t → s** ,U s’obtient par dilatation **horizontale** à partir de C s.

Si **0 < b < 1** on contracte le graphe de s le long de l’axe des abscisses :

il s’agit d’une

Si **b > 1** on étire le graphe de s le long de l’axe des abscisses :

il s’agit d’une

**s 2 (t) est obtenu par de s 1 (t). s 2 (t) est obtenu par de s 1 (t).**

**s 1 (t) s 2 (t) s 1 (t) s 2 (t)**

###### 4. Amplification / atténuation

Le graphe de **t → c s(t)** s’obtient par dilatation **verticale** à partir de C s.

Si **c > 1** On « étire » le graphe de s verticalement.

il s’agit d’une

Si **0 < c < 1** On « rétrécit » le graphe de s verticalement.

il s’agit d’une

**s 2 (t) est obtenu par de s 1 (t).**

L’amplitude du signal

L’amplitude du signal

 
s 1 (t)
s 2 (t)
 

R113 Mathématiques du signal TD 6 Droites : équations et tracés (1/3)

##### R113 – TD 6 Droites : équations et tracés

**Exercice 1 Déterminer l’équation d’une droite à partir de sa représentation**

Par lecture graphique, donner une équation réduite de chacune des droites ci-dessous.

**Exercice 2 Déterminer l’équation d’une droite sans le graphique**

On considère, dans un repère orthogonal du plan, les points 3 ; 0, ; 3 **,**  
6 ; 
  et

 
1 ;^ **.**

**1. Considérons une droite définie par deux points.**
    a. Déterminer les équations réduites des droites ( _AB_ ) et ( _CD_ )_._
       En déduire une équation cartésienne de chacune d’entre elles.
    b. Déterminer l’ordonnée du point d’intersection de la droite ( _AB_ ) et de l’axe des ordonnées.
    c. Déterminer l’abscisse du point d’intersection de la droite ( _CD_ ) et de l’axe des abscisses.
    d. Le point _C_ appartient-il à la droite ( _AB_ )? Justifier.
    e. ( _AB_ ) et ( _CD_ ) sont-elles parallèles?
**2. Considérons une droite définie par un point et un vecteur directeur.**
    a. Déterminer l’équation réduite de la droite _(d)_ passant par le point 4 ; 7 et de vecteur
       directeur ⃗   $$.

 
b. Déterminer l’équation cartésienne de la droite ( d’ ) passant par le point F (2 ; 7) et parallèle
à la droite ( CD ).
 

R113 Mathématiques du signal TD 6 Droites : équations et tracés (2/3)

**Exercice 3 Tracer une droite connaissant son équation**

Dans le repère orthonormé ci-dessous, tracer les droites définies par leur équation :

1.   : " # 3 $  1
2.   ∶ " # 2 $ ' 5
3.   $$ : 4 $ ' 3 "  6 # 0
4.   : " # 3
5.   : $ # 5

Pour s’entraîner

**Questions complémentaires**

1. Dans le repère ci-dessous, la droite donnée a pour équation :

 
a "# 4 $ ' 2 b "# $ ' 1 c "# $ ' 1 d "#$ ' 4
 

R113 Mathématiques du signal TD 6 Droites : équations et tracés (3/3)

2. Par lecture graphique, donner une équation réduite de chacune des droites tracées dans le repère ci-
    dessous. _Attention à l’échelle du graphique!_

3. Soient les droites  (^) ∶ " # $ – 3 et   ∶ " #  $ '^.
Le point W4 ;   appartient-il à  (^) ? à  ?

4. Dans un repère orthonormé, on donne les points _A_ 1 ; 6) et _B_ (2 ; 4).
    Le coefficient directeur de la droite (AB) est :

a) (^)  $$
b)  $$ c) ^  $$ d)  $$

5. La droite parallèle à la droite d’équation " # 2 $ – 1 et passant par le point _C_ (2 ; 4) admet pour
    équation :
       a) "#$ ' 2 b) " # 2 $ – 8 c) "#$ – 1 d) "# 2 $
6. Déterminer les équations des droites ci-dessous :


R113 Mathématiques du signal TD 7 Signaux non périodiques (1/6)

**R113 – TD 7 Signaux non périodiques
Exercice 1 Signaux et transformations**
On définit un signal  comme étant une fonction du temps (), où   ℝ.
1) Voici la représentation graphique de la fonction  :
a) Quel est le support temporel du signal ?
b) Le signal  est-il à support borné?
c) Le signal  est-il causal?

2) On définit 8 signaux sk,  1,.. .8, comme étant des transformations du signal _s_ :
() =  (  1) () =  ()  1 () = ( + 5) () = (2)

() = ( ) () =    $$() = 2 () () =  ()

 
Pour chacun des 8 graphes ci-dessous :
a) Déterminer le signal sk représenté.
b) Préciser la transformation géométrique réalisée sur le graphe de .
c) Préciser, si possible, le nom de la transformation du signal correspondante.
Graphe A Graphe B
 
 
^
Graphe C Graphe D
 
 
^
Graphe E Graphe F
 
 
Graphe G Graphe H
 

 
R113 Mathématiques du signal TD 7 Signaux non périodiques (2/6)
Exercice 2 Fenêtrage
Soient les signaux s et p ci-contre :
 
 
Tracer en rouge le signal s(t) = s(t)×p(t)
 
 
et en bleu le signal s(t) = s(t)×Π !.
 
 
Exercice 3 Représenter une impulsion de Dirac et donner son expression
1) Représenter graphiquement :
a) δ(t – 2) b) 3 δ(t + 4)
 
 
c)  $$ δ ( f – 5) +  $$ δ(f + 5) d)  δ(f – 3) – 4 δ(f – 1)
 
 
2) Pour chaque graphe, déterminer l’expression représentée en fonction de δ.
Graphe A Graphe B Graphe C Graphe D
 
 
3) Suivant le cas, préciser l’expression de g 1 ou l’écriture de g 2 en fonction de δ.
 
 
a) g 1 (f) = 3 δ(f – 5) b) g 2 (t) = "#6 , si t = #2 0 , sinon
 
1

(^0 3) t
3
2
− (^2 0) f
2
0
− 2
− (^4 4) f
0
4
8
− (^3) − (^2 2 3) f
y = s(t)
y = p(t)


R113 Mathématiques du signal TD 7 Signaux non périodiques (3/6)
**Exercice 4 Propriétés de l’impulsion de Dirac**
Entourer la ou les bonnes réponses en justifiant.
1) À quoi est égal s(t) δ(t)?
a) s(0) b) s(t) δ(0) c) s(0) δ(t) d) s(t)

2) À quoi est égal s(t) δ(t – t 0 )?
a) s(t 0 ) b) s(t 0 ) δ(t – t 0 ) c) s(t 0 ) δ(t) d) s(t) δ(t 0 )

**Exercice 5 Fonctions triangle et porte**
Représenter graphiquement :
1) La fonction Triangle centrée en 0 de largeur 6. 2) La fonction Porte centrée en 2 de largeur 4.

 
3) 4 Π( ^ - )
4) # 3 ∧/(# 2 )
 
**Exercice 6 Échantillonnage dans le temps**

Soit un signal s(t) donné par sa
représentation graphique.

1) Tracer en bleu
s(t) δ(t + 4)

2) Tracer en rouge

 
g(t) = s(t) 1(t # k)
 
 
3
 
 
453
 

R113 Mathématiques du signal TD 7 Signaux non périodiques (4/6)

**Exercice 7 Fonction affine par morceaux**
1) Déterminer, suivant les intervalles, l’expression de la fonction  représentée ci-dessous.

2) Lecture d’image :

 
a) Lire l’image de 2 par .
b) Déterminer (#2).
 
**Exercice 8 Fonction définie par morceaux**

Soit _s_ , la fonction définie sur [–1 ; 8] par _s_ (t) = 6

1 , sur 9– 1 ; 39

 # 3 , sur 93 ; 69
# + , sur 96 ; 8<
1) Calculer (#1), (3), (6) et (8).

2) À partir des résultats précédents, tracer la fonction _s_ dans le repère ci-dessous.

 
3) Recherche d’antécédent(s) :
a) Déterminer le(s) antécédent(s) de # 2 par .
b) Résoudre (=) = 2.
Valider graphiquement sa réponse.
 

R113 Mathématiques du signal TD 7 Signaux non périodiques (5/6)
**Exercice 9 Parité et fonctions**

1) On considère la fonction _h_ , impaire, définie
sur [-3 ; 3].
a) Compléter la courbe représentative de _h_.
b) Donner l’expression de la fonction _h_ sur
[-3 ; 3].

2) Étudier la parité́ des fonctions suivantes :
a) >() = # 4 ?@ 

 
b) >() = 2 AB 5C +D
c) >(=)= =# 4= + 5
d) >(=) = = # 3 AB(=)
 
Pour s’entraîner

**Exercice A**
Soit la représentation graphique de la fonction _s_ :

_1) A propos de la fonction s :_
a) Quelle est l’expression de la fonction _s_?
b) Quels sont les points nécessaires à la construction
du graphe de _s_? Préciser leurs coordonnées.

_2) De nouvelles fonctions :_
a) Représenter graphiquement, ci-après, les fonctions gk dans les repères donnés.
b) Préciser la transformation géométrique du graphe de _s_ utilisée.
c) Décrire si possible comment le signal _s_ (t) est modifié pour obtenir chaque signal g k(t).

 
() = () + 3
Signal : _______________
 
 
() = ( – 1 )
Signal : _______________
 
 
Transformation géométrique :
______________________________
 
 
Transformation géométrique :
______________________________
 

R113 Mathématiques du signal TD 7 Signaux non périodiques (6/6)

 
() = E
 
 

2 F^
Signal : _______________
 
 
() = ( + 2 )
Signal : _______________
 
 
Transformation géométrique :
______________________________
 
 
Transformation géométrique :
______________________________
 
 
() = ( 3 )
Signal : _______________
 
 
() =  ()
Signal : _______________
 
 
Transformation géométrique :
______________________________
 
 
Transformation géométrique :
______________________________
 
 
 $$() =
 
 
1
3 ()^
Signal : _______________
 
 
() =
 
 
5
3 ()^
Signal : _______________
 
 
Transformation géométrique :
______________________________
 
 
Transformation géométrique :
______________________________
 
**Exercice B** Faire la question 1 de l’exercice 9 en supposant la fonction _h_ paire.


R113 : Mathématiques du signal **Compte rendu du** TP n°2 : Arctan, droites et signaux non périodiques

Exercice 1 : arctan et tan

 
Déterminer les réels x tels que
arctan(tan(x)) = x tan(arctan(x)) = x
 
Exercice 2 : Équations contenant arctan

Résoudre les équations suivantes :
(E1) arctan( 5 t) =  3 (E 3 ) arctan(2x 7 ) =  4

 
(E 2 ) arctan( 8 t) =  2 (E 4 ) arctan(x 7 ) = 
 
Exercice 3 : Droites et points

 
Déterminer les équations des droites
 
 
(d 1 )
 
 
(d 2 )
 
 
(d 3 )
 
 
(d 4 )
 
À l’aide des équations obtenues, déterminer les coordonnées des points

- A : point d’intersection de (d 1 ) et (d 2 ) • B : point d’intersection de (d 2 ) et (d 4 )

 
L’énoncé complet du TP se trouve sur Moodle : https://lms.univ-cotedazur.fr/
 

R113 : Mathématiques du signal **Compte rendu du** TP n°2 : Arctan, droites et signaux non périodiques

- C : point d’intersection de (d 2 ) et (d 3 )
- D : point d’intersection de (d 1 ) et (d 4 )
    - E : point d’intersection de (d 3 ) et (d 4 )
    - F : point d’intersection de (d 1 ) et (d 3 ).

Exercice 4 : Fonctions rectangle, triangle et opérations sur les signaux

1. Soit s 1 , la fonction rectangle centrée en − 10 de largeur 4.
Quelles transformations a subi la fonction rectangle rect(), centrée en 0 de largeur 1, pour obtenir s 1?

Expression du signal et modification(s) subie(s) quand on atténue s 1 par un facteur 5 :

Expression du signal et modification(s) subie(s) quand on avance s 1 de 4 :

Expression du signal et modification(s) subie(s) quand s 1 subit un offset de – 2 :

2. Soit s 2 , la fonction triangle centrée en 8 de largeur 0,5.

Quelles transformations a subi la fonction triangle Tri() centrée en 0 de largeur 2, pour obtenir s 2?

Expression du signal et modification(s) subie(s) quand on comprime s 2 par un facteur 2 :

Expression du signal et modification(s) subie(s) quand on amplifie s 2 par un facteur 5 :

Expression du signal et modification(s) subie(s) quand on retarde s 2 de 4 et on le dilate par un facteur 3 :

Exercice 5 : Signal redressé

On définit un signal g par g(t) = 4 cos(t – π 4 ). On appelle H, l’échelon unité, et r la rampe unité.

- Écrire l’expression du signal h(t) = g(t)H(t) =

 
Décrire le signal obtenu :
 
- Écrire l’expression du signal k(t) = g(t)r(t) =

 
Décrire le signal obtenu :
 

**Les principales valeurs à trouver dans les exercices complémentaires**

**TD 1 - Exercice complémentaire**

1. sin() = − 1 cos() = 0 tan() non défini sin(−) = √ cos(−) = −√ tan(−) = − 1
2. sin		 = sin 336π+ π− = sin  = √

**TD 2 - Exercice complémentaire 1**

 
C = −5√ 3 sin(t) cos(t) + 5 cos²(t) −− 2√ 2 cos( $$) − 2√ 2 sin( $$)
 
**TD 2 - Exercice complémentaire 2**

1. [  ; ]=#−; −$; −$$; −;$$;;$;%
2. Soit  $\phi$∈R. Compléter : cos(3x) = cos ( $\phi$) ⇔ x = +& avec kZ

 
sin(3x) = sin ( $\phi$) ⇔ x = (
 
 

+
 
 
&


−
 
 

+
 
 
&

 
 
avec kZ
 
 
tan(3x) = tan ( $\phi$) ⇔ x = +& avec kZ
 
3.  R=#)+&; kZ%#− +&; kZ% [  ; ]=#);););$	);$);$
);; ;;$$ ;%

**TD 2 - Exercice complémentaire 3**

1. 3 sin(ω 1 t) cos(ω 2 t) = cos *($+)t −++cos *($−)t −+
2. M cos(ω 1 t) cos(ω 2 t) = ,cos-($+)t. +,cos-($−)t.

**TD 2 - Exercice complémentaire 4**

S $=# + 2k ; kZ% S =#−
+&; kZ%#
+&; kZ%

**TD 3 - Exercice complémentaire 1 :** s(t) = 9 cos 70πt − + 2

l’amplitude la période, la fréquence, la pulsation la phase à l’origine l’offset

(^9) 	 =$ 35 70 π − +2
**TD 3 - Exercice complémentaire 2 :**
p(t) =
$
 cos

t^ s(t) =
$
^ cos

t^ +^ 2 cos

t+

^
ensemble de définition R^ R^
parité paire pas de parité
périodicité 6 – périodique 12 – périodique
ensemble d’étude [ 0 ; 3 ] [ - 6 ; 6 ]
**TD 3 - Exercice complémentaire 3 :**
Dm = R


**Les principales valeurs à trouver dans les exercices complémentaires**

 
TD 4 - Exercice complémentaire 1
Modification(s) : amplification (2 s(t)) Modification(s) : dilatation ( s(t/4) )
Impact(s) : amplitude × 2 Impact(s) : période × 4 - Fréquence/4 Pulsation/4
 
 
TD 4 - Exercice complémentaire 2
 
1. s(t) n’est pas périodique 2. m(t) est  – périodique

 
TD 4 - Exercice complémentaire 3 : Écriture sous forme standard
1) s(t) = 2 cos cos(5t) – 2 sin  sin(5t) 2) s(t) = 2 cos5 $$ +
 
pulsation ω = 5 période T =  fréquence f =  amplitude A = 2 phase à l’origine  $\phi$ = 

 
TD 5 - Exercice complémentaire 1
1)  = #√%.  = #$+ 4; 4Z%.
 
 
2) Da = R\5± 78
 +^98  ; 4:ℕ< a>(t)= −6t(1 + tan (−3t))= −6t(1 + tan (3t)).
 
 
Db = R b>(t)= A$B
 
 
CD
$D(ABEDBA)C=
 
 
A$BCD
$D(BEABD)C.
 
 
3) Dg = R
 
 
4) Dh = R\#+ k; kZ%
 
 
TD 5 - Exercice complémentaire 2
1)  $\phi$ = arctan  + 2k (kZ) 2)  $\phi$ = + arctan  + 2k
(kZ)
TD 6 - Questions complémentaires
 
1. Réponse b) K = −$ L + 1
2. d 1 : y = 10 t – 10 d 2 : y = – 3t + 10 d 3 : y = 5 d 4 : y = t
3. W∉(d 1 ) W∈(d 2 )
4. Le coefficient directeur de la droite (AB) est : c) −

## 5. réponse d) K = 2 L :

6. (d 1 ) : y = - 3 x + 2 (d 2 ) : K = L – 5

**TD 7 - Exercice A**

1) s(t)= O

 
3
3t + 6
0
 
 
si − 5 ≤ t ≤ −1
si − 1 < t < 3
si 3 ≤ t ≤ 5
 
 
t -5 -1 3 3 5
s (t) 3 3 15 0 0
 

**Dérivées usuelles Dérivées des fonctions composées associées**

 
g(x) La dérivée de g(x) g(x) La dérivée de g(x)
k (constante) 0
x 1 u [u]′=′
x n n x n−^1 (u)^ [(u)^ ]′=^ ()^ ′^
1
^ −
 
 
1
^
 
 
1
u^ 
 
 
1
u
 
 

=−
 
 
′
²^
 
 
√^
 
 
1
 
(^2) √
(^) √u √u′=
′
√
ln(| _x_ |)^1
^
ln(u) [ln (u)]′=
′
^
e _x_ e _x_ e $$ [e $$]′=^ ′^
cos( _x_ ) - sin( _x_ ) cos(u) [cos(u)]=−"#
 ()^
sin( _x_ ) cos( _x_ ) sin(u) [sin (u)]=%&"()^
tan( _x_ )
'
()*²(+) = 1 + tan²( _x_ ) tan(u)
[tan (u)]=%&"²()
=′( +/0 ())
arctan( _x_ )^1
1 +^
arctan(u) [arctan (u)]=
′
+()²^
**Primitives usuelles Primitives de fonctions composées associées**
g(x) **Une** primitive de g(x) g(x) **Une** primitive
^2 (n ≠ −1)^3 ^2 4 =
^25 '
6 + 1
7 ′()[ 7 ()]^2
(n ≠ − 1)^37 ′()[^7 ()]
(^2) 4 =^8 (^9 )
: 5
:+
−
1
^
3 −
1
4 =
1
^ −
7 ()
[ 7 ()]^3 −
7 ()
[ 7 ()]4 =
8 ( 9 )^
1
(^2) √
3
1
(^2) √
4 =√
7 ()
2 ; 7 ()
3
7 ()
2 ; 7 ()
4 =; 8 ( 9 )
1
^
3
1

4 =ln || 7
()
7 ()^
3
7 ()
7 ()4 ==
 |^8 (^9 )|^
e+ 3 e+4 =e+^7 ′()e>(+) 37 ′()e>(+)4 =^8 (^9 )^
sin () 3 sin ()4 =−cos()^7 ′()sin ( 7 ()) 37 ′()sin (^7 ())4 =−%&" (^8 (^9 ))^
cos() 3 cos()4 =?@6 ()^7 ′()cos( 7 ())^37 ′()cos(^7 ())4 ="#
 (^8 (^9 ))^
1
cos²()^
3
1
cos²()^ 4 =BC6
() 7 ′()
cos²( 7 ())
3
7 ′()
cos²( 7 ())
4 =/0
 ( 8 ( 9 ))
1
1 +²

### CDEBC6 ()^

 
7 ′()
1 + 7 ²()
 
### 3 7 ′()

 
1 + 7 ²()^ 4 =0F%/0
 (^8 (^9 ))^
 
### u désigne une fonction dérivable.


**2023 - 2024 Planning prévisionnel** R113 Mathématiques du signal

 
C (3 séances + DS) TD (12 séances) A faire pour la séance de TD suivante
 
 
1 s 36
 
 
Chap 1 Eléments de
trigonométrie +
Chap 2 Généralités sur
les signaux
 
 
2 s 37 TD 1 Trigonométrie : angles et angles associés
 
 
3 s 38Chap 3 Signaux
périodiques
 
 
TD 1 - TD 2
Trigonométrie : formules
et équations
 
 
4 s 39 TD 2 Trigonométrie : formules et équations
 
 
5 s 40 TD 3 Fonctions
trigonométriques
 
 
6 s 41 TD 3 Fonctions trigonométriques
 
 
7 s 42 TP 1 Signaux périodiques
 
 
8 s 43
 
 
Evaluation 1 +
TD 4 Fonctions
périodiques
 
 
9 s 45
 
 
Chap 4 Arctan + Chap 5
Eq de droites et signaux
non périodiques
 
 
TD 4 Fonctions
périodiques
 
 
10 s 46 TD 5 Arctan
 
 
11 s 47 TD 5 de doite+ TD 6 Equations
 
 
12 s 48 TD 6 + TD 7 Signaux
non périodiques
 
 
13 s 49 Evaluation 2 + TD 7
 
 
s 50 TD 7
 
 
TP 2 Arctan, droites...
 
 
s 2 DS
 
 
s 51
 

