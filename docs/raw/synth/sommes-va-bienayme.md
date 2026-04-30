# 🎲 Sommes de VA · Échantillons · Bienaymé-Tchebychev — Synthèse

> **Bac Spé Maths · Terminale**
> Suite de la fiche probas/binomiale : combinaisons linéaires de VA, échantillons, B-T, loi faible des grands nombres.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| $X_1 \sim \mathcal{B}(m,p)$, $X_2 \sim \mathcal{B}(n,p)$ indépendantes | $X_1 + X_2 \sim \mathcal{B}(m+n, p)$ |
| Calculer $E(X+Y)$ | Linéarité de $E$ — **TOUJOURS** vraie |
| Calculer $V(X+Y)$ | $V(X)+V(Y)$ **uniquement si X et Y indépendantes** |
| Échantillon de taille $n$, somme $S_n$, moyenne $M_n$ | $E(S_n)=nE(X)$, $V(M_n)=V(X)/n$ |
| Majorer $P(\|X-E(X)\| \geq \alpha)$ | **Bienaymé-Tchebychev** : $\leq V(X)/\alpha^2$ |
| Majorer $P(\|M_n-\mu\| \geq \alpha)$ ou trouver $n$ minimal | **Inégalité de concentration** : $\leq V(X)/(n\alpha^2)$ |
| « Quand $n \to +\infty$ » avec $M_n$ | Loi faible des grands nombres |
| $V(aX)$, $\sigma(aX)$ | $a^2 V(X)$ et $\|a\| \sigma(X)$ |

---

## 🎯 Méthodes-clés

**Linéarité de l'espérance (toujours vraie)**
- $E(X+Y) = E(X)+E(Y)$ (sans hypothèse d'indépendance)
- $E(aX+b) = aE(X)+b$
- $E(aX+bY) = aE(X)+bE(Y)$

**Variance d'une somme — UNIQUEMENT si indépendantes**
- $X, Y$ indépendantes ⇒ $V(X+Y) = V(X)+V(Y)$
- $V(aX) = a^2 V(X)$ et $\sigma(aX) = |a|\sigma(X)$
- $V(X+b) = V(X)$ (constante = pas de dispersion en plus)

**Stabilité de la binomiale**
> $X_1 \sim \mathcal{B}(m,p)$, $X_2 \sim \mathcal{B}(n,p)$ **indépendantes** et **même $p$**
> ⇒ $X_1 + X_2 \sim \mathcal{B}(m+n, p)$

**Échantillon $(X_1, …, X_n)$ iid de loi de $X$ ($\mu = E(X)$, $V = V(X)$)**
- $S_n = X_1 + \dots + X_n$ : $E(S_n) = n\mu$, $V(S_n) = nV$, $\sigma(S_n) = \sqrt{n}\,\sigma(X)$
- $M_n = S_n/n$ : $E(M_n) = \mu$, $V(M_n) = V/n$, $\sigma(M_n) = \sigma(X)/\sqrt{n}$

**Bienaymé-Tchebychev**
> Pour $\alpha > 0$ : $P(|X - E(X)| \geq \alpha) \leq \dfrac{V(X)}{\alpha^2}$

**Inégalité de concentration (B-T appliquée à $M_n$)**
> Pour $\alpha > 0$ : $P(|M_n - \mu| \geq \alpha) \leq \dfrac{V(X)}{n\alpha^2}$

**Loi faible des grands nombres**
> $\lim_{n \to +\infty} P(|M_n - \mu| \geq \alpha) = 0$

---

## 🛠 Recette pour minorer $P(a < X < b)$ (5 étapes)

1. **Centre + rayon** : $c = (a+b)/2$, $r = (b-a)/2$. Vérifier $c = E(X)$.
2. **Reformuler** : $\{a < X < b\} = \{|X - c| < r\}$.
3. **Contraire** : $P(a<X<b) = 1 - P(|X-c| \geq r)$.
4. **B-T** : $P(|X - E(X)| \geq r) \leq V(X)/r^2$.
5. **Conclure** : $P(a<X<b) \geq 1 - V(X)/r^2$.

Variante "trouver le plus petit $N$" : remplacer $V(X)$ par $V(X)/N$, résoudre l'inéquation, prendre l'**entier supérieur** (pas l'arrondi).

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Linéarité $E$ | $E(aX+bY) = aE(X)+bE(Y)$ |
| $V(aX+b)$ | $a^2 V(X)$ |
| $\sigma(aX)$ | $\|a\| \sigma(X)$ |
| Variance somme indépendante | $V(X+Y) = V(X)+V(Y)$ |
| Échantillon — somme | $E(S_n)=nE(X)$, $V(S_n)=nV(X)$ |
| Échantillon — moyenne | $E(M_n)=E(X)$, $V(M_n)=V(X)/n$ |
| Stabilité ℬ | $\mathcal{B}(m,p) + \mathcal{B}(n,p) = \mathcal{B}(m+n,p)$ (indép.) |
| Bienaymé-Tchebychev | $P(\|X-E(X)\| \geq \alpha) \leq V(X)/\alpha^2$ |
| Inégalité de concentration | $P(\|M_n-\mu\| \geq \alpha) \leq V(X)/(n\alpha^2)$ |

---

## ⚠️ Pièges classiques

- $V(X+Y) = V(X)+V(Y)$ **sans justifier l'indépendance** → -1 point
- $V(aX) = aV(X)$ au lieu de $a^2 V(X)$ (la variance est en carrés)
- $\sigma(aX) = a\sigma(X)$ au lieu de $|a|\sigma(X)$ (oubli de la valeur absolue)
- Confondre $V(M_n) = V(X)/n$ et $V(S_n) = nV(X)$ (somme grandit, moyenne se concentre)
- Stabilité binomiale avec **paramètres $p$ différents** → ce n'est plus une binomiale
- Oublier de **reformuler** $\{a < X < b\}$ en $\{|X-c| < r\}$ avant d'appliquer B-T
- B-T donne un **majorant** de $P(\geq)$, donc un **minorant** de $P(<)$ — ne pas inverser
- Plus petit $N$ : prendre l'**entier supérieur**, pas l'arrondi

---

## ✅ Check-list bac

- [ ] J'ai cité **explicitement** l'indépendance avant $V(X+Y)$
- [ ] $V(aX) = a^2 V(X)$ et $\sigma(aX) = |a|\sigma(X)$ (carré, valeur absolue)
- [ ] Stabilité ℬ : indépendance **ET** même $p$
- [ ] Pour B-T : centre $c = E(X)$, rayon $r$ correctement identifié
- [ ] Pour le plus petit $N$ : entier supérieur, pas arrondi
- [ ] Distinguer B-T (sur $X$) et inégalité de concentration (sur $M_n$, avec $n$ au dénominateur)
