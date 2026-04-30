# 📘 Suites — Synthèse

> **Bac Spé Maths · Terminale**
> Tout ce qui peut tomber, version éclair.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| `U_{n+1} = a·U_n + b` (b≠0) | Suite arithmético-géométrique → point fixe + suite auxiliaire |
| « Montrer que U_n ≤ … » | Récurrence (presque toujours) |
| `U_{n+1} = f(U_n)` + question sur la limite | TCM puis théorème du point fixe |
| `(-1)^n`, `sin(n)`, `cos(n)` dans U_n | Théorème des gendarmes |
| `U_n > qqch qui → +∞` | Comparaison (minoration) |
| Pourcentage (+12 %, −3 %) | Coeff multiplicateur (×1,12 ; ×0,97) |
| `e^n / n^k`, `n^k·e^{-n}` | Croissances comparées |
| Forme **explicite** U_n = f(n) | Calcul direct de limite |
| Forme **récurrente** U_{n+1} = f(U_n) | Passage obligatoire par un théorème |

---

## 🎯 Méthodes-clés

**SA / SG — reconnaître**
- SA : `U_{n+1} − U_n = r` (constante) ⇒ `U_n = U_0 + nr`
- SG : `U_{n+1}/U_n = q` (constante) ⇒ `U_n = U_0·q^n`
- ⚠️ Toujours montrer indépendance de n, **jamais sur 2 termes**.

**SAG (`U_{n+1} = aU_n + b`)**
1. Point fixe : `C = b/(1−a)`
2. `V_n = U_n − C` est géométrique de raison `a`
3. `U_n = (U_0 − C)·a^n + C`

**Récurrence — rédaction obligatoire**
- **Init** : vérifier P(n_0)
- **Hérédité** : « Soit n ≥ n_0. Supposons P(n). Montrons P(n+1) »
- **Conclusion** : « Par principe de récurrence, P(n) vraie pour tout n ≥ n_0 »

**TCM (théorème de convergence monotone)**
> Toute suite croissante et majorée (resp. décroissante et minorée) converge.

⚠️ Donne l'**existence** de la limite, **pas sa valeur**.

**Point fixe — 3 conditions à citer**
1. (U_n) converge vers L (déjà prouvé par TCM)
2. (U_n) définie par `U_{n+1} = f(U_n)`
3. f **continue** en L (préciser l'intervalle)

⇒ L vérifie `f(L) = L`. Résoudre, choisir L compatible avec l'encadrement.

**Gendarmes**
- Si `V_n ≤ U_n ≤ W_n` et `lim V_n = lim W_n = L` alors `lim U_n = L`.
- Réflexe : dès qu'on voit `sin(n)`, `cos(n)`, `(-1)^n`.

**Comparaison**
- `U_n ≥ V_n` et `lim V_n = +∞` ⇒ `lim U_n = +∞` (le grand pousse vers +∞)
- `U_n ≤ W_n` et `lim W_n = −∞` ⇒ `lim U_n = −∞` (le petit tire vers −∞)

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Somme entiers | `1+2+…+n = n(n+1)/2` |
| Somme SA | `(nb termes)·(premier+dernier)/2` |
| Somme SG (q≠1) | `U_0·(1−q^{n+1})/(1−q)` |
| Limite `q^n`, q>1 | `+∞` |
| Limite `q^n`, −1<q<1 | `0` |
| Limite `q^n`, q≤−1 | **pas de limite** |
| Croissances comparées | `e^n/n^k → +∞`, `n^k·e^{-n} → 0`, `ln(n)/n^k → 0` |

---

## ⚠️ Pièges classiques

- Variations de **f** ≠ variations de **(U_n)** dans une suite récurrente
- Nombre de termes dans `U_3 + … + U_17` : **15** (pas 14)
- Récurrence sans conclusion finale = 0 point
- Point fixe sans avoir prouvé la convergence d'abord = 0
- Sens des inégalités quand f est décroissante (s'inverse)

---

## ✅ Check-list bac

- [ ] Récurrence en 3 étapes (init / hérédité / conclusion)
- [ ] Pour le point fixe : convergence + récurrence + **continuité** explicitement citées
- [ ] Théorèmes (gendarmes, comparaison, TCM) justifiés ligne par ligne
- [ ] Pourcentages traduits en coefficient multiplicateur
- [ ] Vérifier que la limite L est dans le domaine de validité
