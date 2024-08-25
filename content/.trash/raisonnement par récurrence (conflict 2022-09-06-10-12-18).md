#🌱/cours [[Cours_maths]] 

---
Le raisonnement par **récurrence** consiste à *prouver* qu'elle se vérifie :
1. **° preuve** sur un entier (généralement sur 0 ou 1)
2. **° preuve** quand *chaque fois qu'elle est* **vérifiée** sur *$n+1$* [[le raisonnement par récurrence doit avoir un principe d'hérédité]]

sert à démontrer une propriété sur **tout** les nombres appartenant à *$N$* (ou à partir d'un certain rang).
- Exemple : 
	Démontrer que (soit $n \in N$),
	$$
	1+...+n=\dfrac{n(n+1)}{2}
	$$

	==on doit nommer la fonction à démontrer==, soit $$P_n : 1+2+...+n=\dfrac{n(n+1)}{2}$$
	On commence alors l'
	 - [ ] initialisation
	: On vérifie que $P_n$ est *vraie* première valeur possible de $n$, **ici** n=0.$$P_0 = \dfrac{0(0+1)}{2}$$ soit$$0=0$$ donc $P_0$ est vraie.
		- Exemple : $P_4$ est-elle vraie ?$$P_4=1+2+3+4=\dfrac{4\times(4+1)}{2}$$comme$$1+2+3+4=10$$ et que $$\dfrac{4(4+1)}{2}=\dfrac{4\times5}{2}=10$$
		donc $P_4$ est *vraie*.

---
# Références
- cours lycée
- [Raisonnement par récurrence — Wikipédia](https://fr.wikipedia.org/wiki/Raisonnement_par_r%C3%A9currence)