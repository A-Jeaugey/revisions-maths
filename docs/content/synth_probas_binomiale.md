# 🎲 Probabilités & Binomiale — Synthèse

> **Bac Spé Maths · Terminale**
> Dénombrement, conditionnelles, binomiale, sommes de VA, Bienaymé-Tchebychev.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| « Combien de codes / mains / comités » | Dénombrement (tableau ordre/répétition) |
| Tirer **simultanément** k parmi n | Combinaison `C(n,k)` |
| « Sachant que… » | Proba conditionnelle `P_A(B)` |
| « Au moins un », « aucun » | Événement contraire `P(Ā) = 1 − P(A)` |
| « n fois indépendamment » | Loi binomiale `B(n,p)` |
| « Plus petit k tel que P(X≤k) ≥ … » | Tableau cumulé |
| Encadrer P(\|X−E(X)\| ≥ a) | Bienaymé-Tchebychev |
| « n grand, moyenne empirique → … » | Loi des grands nombres |

---

## 🎯 Méthodes-clés

**Dénombrement — les 4 cas**

| Outil | Ordre? | Répétition? | Formule |
|---|---|---|---|
| p-uplet | OUI | OUI | `n^p` |
| Arrangement A(n,k) | OUI | NON | `n!/(n−k)!` |
| Permutation | OUI | NON, on prend tout | `n!` |
| Combinaison C(n,k) | NON | NON | `n!/(k!(n−k)!)` |

**Test du swapping** : inverser 2 éléments — si ça change le résultat → arrangement, sinon → combinaison.

**Probabilités conditionnelles**
- Définition : `P_A(B) = P(A∩B) / P(A)` (avec P(A) > 0)
- Formule des probabilités totales : `P(B) = Σ P(A_i) · P_{A_i}(B)` sur partition (A_i)
- Formule de Bayes : `P_B(A) = P(A) · P_A(B) / P(B)`
- Indépendance : `P(A∩B) = P(A)·P(B)` ⇔ `P_A(B) = P(B)`

**Loi binomiale `X ~ B(n, p)`**
- `P(X = k) = C(n,k) · p^k · (1−p)^{n−k}` pour `k ∈ {0,…,n}`
- `E(X) = np`
- `V(X) = np(1−p)`
- `σ(X) = √(np(1−p))`

**Sommes de variables aléatoires**
- `E(X+Y) = E(X) + E(Y)` toujours
- `V(X+Y) = V(X) + V(Y)` **si X et Y indépendantes**
- `E(aX + b) = aE(X) + b`
- `V(aX + b) = a²V(X)`

**Bienaymé-Tchebychev**
> Pour tout `a > 0` : `P(|X − E(X)| ≥ a) ≤ V(X)/a²`

⇒ permet de borner la proba d'écart à la moyenne sans connaître la loi.

**Loi des grands nombres (LGN)**
- `M_n = (X_1 + … + X_n)/n` (moyenne empirique de n VA iid)
- `P(|M_n − μ| ≥ ε) → 0` quand n → +∞
- Estimation : `P(|M_n − μ| ≥ ε) ≤ V(X_1)/(nε²)`

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Combinaison | `C(n,k) = n!/(k!(n−k)!)` |
| Symétrie | `C(n,k) = C(n, n−k)` |
| Pascal | `C(n,k) = C(n−1, k−1) + C(n−1, k)` |
| Binomiale moyenne | `E(X) = np` |
| Binomiale variance | `V(X) = np(1−p)` |
| Bienaymé-Tchebychev | `P(\|X−E(X)\| ≥ a) ≤ V(X)/a²` |

---

## ⚠️ Pièges classiques

- Confondre arrangement (ordre) et combinaison (sans ordre) : faire le **test du swap**
- Oublier de vérifier l'**indépendance** avant `V(X+Y) = V(X)+V(Y)`
- « Au moins un » : passer par le contraire (« aucun »)
- Mal lire l'énoncé : « tirage avec remise » = p-uplet, « sans remise simultané » = combinaison
- Confondre `P_A(B)` (sachant A) et `P_B(A)` (sachant B) → utiliser Bayes

---

## ✅ Check-list bac

- [ ] J'ai bien identifié l'outil de dénombrement (test du swapping)
- [ ] Pour la binomiale : j'ai donné les **3 paramètres** (n, p, X)
- [ ] J'ai cité l'indépendance avant d'utiliser `V(X+Y)`
- [ ] Pour Bienaymé : énoncé complet (`a > 0`, `V(X)`, sens de l'inégalité)
- [ ] Probas conditionnelles : arbre pondéré clair, somme = 1 à chaque embranchement
