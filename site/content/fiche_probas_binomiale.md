# 🎲 Fiche de Combat — Dénombrement, Probabilités & Loi Binomiale

> **Bac blanc — Terminale Maths Spé**
> Trois chapitres en un, dans l'ordre logique : compter → probabilités simples → modèle répété (binomiale).

---

## ⚡ Carte des réflexes

| Tu vois ça dans l'énoncé... | Tu déclenches... |
|---|---|
| « De combien de façons », « combien de codes/comités/mains » | **Dénombrement** : tableau ordre/répétition (§I) |
| « Tirer **simultanément** k éléments parmi n » | **Combinaison** $\binom{n}{k}$ direct |
| « Sachant que… » | **Proba conditionnelle** $P_A(B)$ (§II) |
| « Au moins un… », « aucun… » | Souvent **événement contraire** : $P(\bar A) = 1 - P(A)$ |
| « On répète n fois de manière indépendante » | **Loi binomiale** $\mathcal{B}(n,p)$ (§III) |
| « Au seuil de 95 %, 99 %… » | Intervalle de fluctuation (§IV) |
| « Est-elle sûre à 99 % d'avoir au moins… » | Calcul direct $P(X \geq k)$ vs seuil (§IV.1) |
| « Plus petit/grand entier k tel que P(X≤k)≥… » | Tableau de valeurs cumulées (§IV.2) |

---

## I. Dénombrement : compter sans lister

### 1. L'algorithme mental (les 2 questions à se poser)

Avant **toute** formule, pose-toi ces deux questions dans cet ordre :

1. **L'ordre compte-t-il ?** (est-ce que (Arthur, Zoé) est différent de (Zoé, Arthur) ?)
2. **Y a-t-il répétition ?** (est-ce qu'on peut prendre 2 fois le même élément ?)

Selon les réponses, tu tombes dans une case du tableau :

| Outil | Ordre ? | Répétition ? | Formule | Exemple type |
|---|---|---|---|---|
| **p-uplet** | OUI | OUI | $n^p$ | Code de cadenas (4 chiffres parmi 10) → $10^4$ |
| **Arrangement** $A_n^k$ | OUI | NON | $\dfrac{n!}{(n-k)!}$ | Podium de course (3 médaillés parmi 10) |
| **Permutation** | OUI | NON, on prend tout | $n!$ | Ranger 5 livres différents sur une étagère |
| **Combinaison** $\binom{n}{k}$ | NON | NON | $\dfrac{n!}{k!(n-k)!}$ | Tirer une main de 5 cartes ; former un comité |

### 2. Mnémotechnique pour le choix de l'outil

**Le test du "swapping"** : prends deux éléments dans ton résultat et inverse-les.
- Si ça change le résultat (podium, code) → **Arrangement** $A_n^k$ (ordre compte).
- Si ça ne change rien (équipe de foot, main de cartes) → **Combinaison** $\binom{n}{k}$.

**Mots-clés à repérer pour la combinaison** :
- "**Simultanément**" → 99 % du temps, c'est $\binom{n}{k}$.
- "Lot", "groupe", "équipe", "comité", "poignée".
- "Sans ordre précis".

### 3. Propriétés des combinaisons (à connaître par cœur)

**Symétrie :** $\binom{n}{k} = \binom{n}{n-k}$
*(choisir qui vient = choisir qui reste sur la touche)*

**Cas particuliers :**
- $\binom{n}{0} = \binom{n}{n} = 1$
- $\binom{n}{1} = \binom{n}{n-1} = n$

**Relation de Pascal :** $\binom{n-1}{k-1} + \binom{n-1}{k} = \binom{n}{k}$
*(c'est ce qui permet de construire le triangle de Pascal)*

### 4. Exemples chiffrés des 4 outils

**p-uplet :** Combien de codes de 4 chiffres (de 0 à 9) ?
→ $10^4 = 10\,000$.

**Arrangement :** Podium de 3 médaillés parmi 8 athlètes ?
→ $A_8^3 = \dfrac{8!}{5!} = 8 \times 7 \times 6 = 336$.

**Permutation :** Ranger 5 livres distincts ?
→ $5! = 120$.

**Combinaison :** Choisir 2 délégués parmi 30 élèves (l'ordre ne compte pas) ?
→ $\binom{30}{2} = \dfrac{30 \times 29}{2} = 435$.

### 5. Le piège type bac : "tirage simultané vs successif"

⚠️ **Lire HYPER attentivement** :
- "Tirage **simultané** de k boules" → ordre ne compte pas → **combinaison**.
- "Tirage **successif sans remise** de k boules" → ordre compte → **arrangement**.
- "Tirage **successif avec remise** de k boules" → ordre compte + répétition → **p-uplet** ($n^k$).

---

## II. Probabilités : arbres et conditions

### 1. Définitions de base

**Probabilité conditionnelle** : probabilité que B se réalise **sachant que** A est déjà réalisé.

$$P_A(B) = \dfrac{P(A \cap B)}{P(A)} \quad \text{(avec } P(A) \neq 0\text{)}$$

**Formule de l'intersection** (l'inverse de la précédente) :

$$P(A \cap B) = P(A) \times P_A(B)$$

C'est cette formule qu'on utilise sur un **arbre pondéré** : on multiplie les probas le long d'un chemin.

### 2. Arbre pondéré (les règles)

**Règles d'or :**
1. La somme des probas qui partent d'un même nœud vaut **toujours 1**.
2. Pour calculer $P(A \cap B)$ : on suit le chemin et on **multiplie** les probas des branches.
3. Pour calculer $P(B)$ : on **somme** tous les chemins qui finissent par B (c'est la formule des probas totales).

**Exemple type d'arbre :**
```
              ┌── B  (proba P_A(B))     → P(A∩B)  = P(A) × P_A(B)
        A ───┤
       /      └── B̄  (proba P_A(B̄))    → P(A∩B̄) = P(A) × P_A(B̄)
P(A)  /
 ────┤
P(Ā) \
       \      ┌── B  (proba P_Ā(B))     → P(Ā∩B)  = P(Ā) × P_Ā(B)
        Ā ───┤
              └── B̄  (proba P_Ā(B̄))    → P(Ā∩B̄) = P(Ā) × P_Ā(B̄)
```

### 3. Formule des probabilités totales

Si A₁, A₂, …, Aₙ forment un **système complet d'événements** (= partition de l'univers : ils sont incompatibles deux à deux et leur union vaut Ω), alors pour tout événement B :

$$P(B) = P(A_1 \cap B) + P(A_2 \cap B) + \dots + P(A_n \cap B)$$

ou de façon équivalente :

$$P(B) = P(A_1) \times P_{A_1}(B) + P(A_2) \times P_{A_2}(B) + \dots$$

**Cas le plus fréquent au bac (système {A, Ā}) :**
$$P(B) = P(A \cap B) + P(\bar A \cap B) = P(A) P_A(B) + P(\bar A) P_{\bar A}(B)$$

### 4. La probabilité conditionnelle "à l'envers" (cas type bac)

🎯 C'est LA question classique du bac : on a un arbre qui commence par A, mais on te demande $P_B(A)$ (B est à l'arrivée, A au départ — il faut "remonter le temps").

**Énoncé prototypique :** "Sachant que le test est positif, quelle est la proba que le patient soit malade ?" (alors que l'arbre commence par malade/non malade).

**Procédure en 3 étapes :**

**Étape 1 — Calculer $P(A \cap B)$** : suis le chemin A puis B sur l'arbre, multiplie les probas.

**Étape 2 — Calculer $P(B)$** : somme tous les chemins qui finissent par B (formule des probas totales).

**Étape 3 — Appliquer la définition** :
$$P_B(A) = \dfrac{P(A \cap B)}{P(B)}$$

**Exemple chiffré (test médical) :**
- Une maladie touche 2 % de la population : $P(M) = 0{,}02$.
- Le test est positif chez 95 % des malades : $P_M(T) = 0{,}95$.
- Le test est positif chez 3 % des non-malades (faux positifs) : $P_{\bar M}(T) = 0{,}03$.

Question : sachant que le test est positif, quelle est la proba d'être malade ? → calculer $P_T(M)$.

1. $P(M \cap T) = P(M) \times P_M(T) = 0{,}02 \times 0{,}95 = 0{,}019$.
2. $P(T) = P(M) P_M(T) + P(\bar M) P_{\bar M}(T) = 0{,}019 + 0{,}98 \times 0{,}03 = 0{,}019 + 0{,}0294 = 0{,}0484$.
3. $P_T(M) = \dfrac{0{,}019}{0{,}0484} \approx 0{,}392$.

**Interprétation contre-intuitive :** même avec un test positif, il n'y a que 39 % de chances d'être réellement malade. C'est ça le piège bac : on attend souvent qu'on commente le résultat.

### 5. Indépendance

Deux événements A et B sont **indépendants** ssi :

$$P(A \cap B) = P(A) \times P(B)$$

De façon équivalente : $P_A(B) = P(B)$ (savoir que A est réalisé ne change pas la proba de B).

⚠️ **Piège classique :** ne JAMAIS confondre **incompatibles** ($A \cap B = \emptyset$, donc $P(A \cap B) = 0$) et **indépendants** ($P(A \cap B) = P(A) P(B)$). Ce sont **deux notions complètement différentes**.

### 6. Variable aléatoire (rappels rapides)

Une variable aléatoire X associe une valeur numérique (un gain, un score) à chaque issue.

**Espérance** (moyenne théorique sur un grand nombre de répétitions) :
$$E(X) = \sum_{i} p_i \times x_i$$

**Variance** (mesure de la dispersion) :
$$V(X) = \sum_{i} p_i \times (x_i - E(X))^2 = E(X^2) - [E(X)]^2$$

**Écart-type** :
$$\sigma(X) = \sqrt{V(X)}$$

**Interprétation :** plus σ est grand, plus les valeurs de X sont étalées autour de la moyenne E(X).

---

## III. La Loi Binomiale $\mathcal{B}(n, p)$

### 1. Justification "juridique" (point n°1 de ton PDF, à connaître MOT POUR MOT)

🎯 **Si on te demande "Justifier que X suit une loi binomiale", tu DOIS écrire ces 3 points (sinon tu perds 0,5 à 1 point direct) :**

> 1. **On répète n fois** une épreuve de Bernoulli (deux issues : Succès et Échec).
> 2. Les épreuves sont **identiques** (même proba de succès) et **indépendantes** (le résultat d'une épreuve n'influence pas les suivantes — souvent justifié par "tirage avec remise").
> 3. **X est la variable aléatoire qui compte le nombre de succès** sur les n répétitions.
>
> Donc X suit la loi binomiale $\mathcal{B}(n, p)$ avec n = … et p = …

### 2. Formule centrale

$$P(X = k) = \binom{n}{k} \times p^k \times (1-p)^{n-k}$$

**Décomposition de la formule (à comprendre, pas juste à réciter) :**
- $\binom{n}{k}$ : nombre de façons de placer les k succès parmi les n épreuves (l'ordre des succès est indifférent).
- $p^k$ : probabilité d'avoir k succès.
- $(1-p)^{n-k}$ : probabilité que les n−k autres soient des échecs.

### 3. Paramètres de la loi

| Indicateur | Formule |
|---|---|
| Espérance | $E(X) = np$ |
| Variance | $V(X) = np(1-p)$ |
| Écart-type | $\sigma(X) = \sqrt{np(1-p)}$ |

**Interprétation graphique :**
- E(X) correspond à la **barre la plus haute** sur l'histogramme de la distribution (à $\pm 1$ près).
- σ donne la "largeur" du pic : plus σ est grand, plus l'histogramme est étalé.

### 4. Gérer les inégalités (la calculette donne $P(X \leq k)$)

🎯 **Sur Numworks (et la plupart des calculatrices), la fonction de base donne $P(X \leq k)$ (binomcdf). Tu dois savoir tout ramener à ça :**

| Ce que tu cherches | Comment le calculer |
|---|---|
| $P(X \leq k)$ | Direct (binomcdf) |
| $P(X = k)$ | binompdf, ou $P(X \leq k) - P(X \leq k-1)$ |
| $P(X < k)$ | $P(X \leq k-1)$ *(car X est entier !)* |
| $P(X > k)$ | $1 - P(X \leq k)$ |
| $P(X \geq k)$ | $1 - P(X \leq k-1)$ |
| $P(a \leq X \leq b)$ | $P(X \leq b) - P(X \leq a-1)$ |

⚠️ **Le piège n°1 :** la transition < / ≤ utilise le fait que **X est à valeurs entières**. Donc $X < k \iff X \leq k-1$. Si tu oublies le "−1", tu perds toujours 0,5 point.

**Exemple chiffré :** $X \sim \mathcal{B}(20\,;\,0{,}3)$. Calculer $P(X \geq 8)$.
→ $P(X \geq 8) = 1 - P(X \leq 7) = 1 - \text{binomcdf}(20\,;\,0{,}3\,;\,7) \approx 1 - 0{,}772 = 0{,}228$.

---

## IV. Questions techniques type bac

### 1. "Est-elle sûre au seuil de 99 % d'avoir au moins k succès ?"

**Énoncé type (de ton PDF) :** "Le nombre d'élèves dans la classe d'Alice suit la loi $\mathcal{B}(36\,;\,0{,}92)$. Est-elle sûre au seuil de 99 % d'avoir au moins 29 élèves ?"

**Méthode (3 étapes) :**
1. Identifier la proba à calculer : "au moins 29" → $P(X \geq 29)$.
2. La transformer pour la calculatrice : $P(X \geq 29) = 1 - P(X \leq 28)$.
3. Comparer au seuil et conclure.

**Rédaction type :**
> $P(X \geq 29) = 1 - P(X \leq 28) \approx 0{,}993$.
> Comme $0{,}993 > 0{,}99$, **oui**, Alice est sûre au seuil de 99 % d'avoir au moins 29 élèves.

### 2. "Plus petit entier k tel que $P(X \leq k) \geq$ …"

🎯 **C'est la question d'inversion classique. Méthode officielle = tableau de valeurs cumulées.**

**Rédaction type (à reproduire systématiquement) :**

Pour trouver le plus petit entier $k$ tel que $P(X \leq k) \geq 0{,}95$ :

> À l'aide de la calculatrice, on dresse un tableau des valeurs de $P(X \leq k)$ :
>
> | $k$ | … | 14 | 15 | 16 | … |
> |---|---|---|---|---|---|
> | $P(X \leq k)$ | … | 0,887 | 0,940 | 0,963 | … |
>
> On observe que $P(X \leq 15) = 0{,}940 < 0{,}95$ et $P(X \leq 16) = 0{,}963 \geq 0{,}95$.
> Donc le plus petit entier $k$ tel que $P(X \leq k) \geq 0{,}95$ est $k = 16$.

⚠️ **Crucial :** tu DOIS montrer **la ligne avant** ET **la ligne après** le seuil. Si tu donnes juste la valeur trouvée, tu n'as pas prouvé que c'est bien la **plus petite** qui dépasse le seuil → perte de point.

### 3. Astuce Numworks pour les tableaux

Au lieu de chercher dans le menu Graphique/Tableau (lent), passe directement par : **menu Probabilités → Binomiale → entre n et p**. Tu as accès aux valeurs $P(X = k)$ et $P(X \leq k)$ pour tous les k. Tu n'as plus qu'à recopier les 2 lignes (avant/après le seuil) sur ta copie.

### 4. Intervalle de fluctuation centré au seuil $1 - \alpha$ (le boss final)

**Objectif :** trouver un intervalle $[a\,;\,b]$ tel que $P(a \leq X \leq b) \geq 1 - \alpha$.

**Définitions de a et b (formellement) :**
- $a$ = le **plus petit** entier tel que $P(X \leq a) > \dfrac{\alpha}{2}$.
- $b$ = le **plus petit** entier tel que $P(X \leq b) \geq 1 - \dfrac{\alpha}{2}$.

⚠️ **Attention aux symboles d'inégalité :**
- Pour **a** : strict (>) sur $\alpha/2$.
- Pour **b** : large (≥) sur $1 - \alpha/2$.
- C'est une bizarrerie de la définition officielle, ne pas l'oublier.

**Rédaction type :**

Soit $X \sim \mathcal{B}(98\,;\,0{,}77)$, $\alpha = 0{,}01$. Déterminer un intervalle de fluctuation centré au seuil 99 %.

> On cherche le plus petit entier $a$ tel que $P(X \leq a) > 0{,}005$ :
>
> | $k$ | … | 65 | 66 | … |
> |---|---|---|---|---|
> | $P(X \leq k)$ | … | 0,004 | 0,007 | … |
>
> Donc $a = 66$.
>
> On cherche le plus petit entier $b$ tel que $P(X \leq b) \geq 0{,}995$ :
>
> | $k$ | … | 86 | 87 | … |
> |---|---|---|---|---|
> | $P(X \leq k)$ | … | 0,994 | 0,997 | … |
>
> Donc $b = 87$.
>
> L'intervalle de fluctuation centré au seuil 99 % est $[66\,;\,87]$.

**Si on demande des fréquences** (et non des nombres), on divise par n : $I = \left[\dfrac{a}{n}\,;\,\dfrac{b}{n}\right]$.

### 5. Vérification d'un intervalle donné (variante)

**Énoncé type :** "Vérifier que l'intervalle [15 ; 38] est un intervalle de fluctuation au seuil 95 % de $X \sim \mathcal{B}(\dots)$."

**Méthode (à NE PAS confondre avec la méthode active) :**
1. Calculer $P(X \leq 14)$ — c'est la queue gauche (avant 15). Vérifier qu'elle est ≤ $\alpha/2 = 0{,}025$.
2. Calculer $P(X > 38) = 1 - P(X \leq 38)$ — c'est la queue droite (après 38). Vérifier qu'elle est ≤ $\alpha/2 = 0{,}025$.
3. Si les deux queues sont sous le seuil, l'intervalle est valide.

⚠️ **Piège :** ne pas se planter dans le passage "intervalle [15 ; 38]" → "queue gauche = $P(X \leq 14)$" (et pas $P(X < 15)$ qui revient au même mais demande de bien gérer les inégalités). Idem à droite.

### 6. Trouver p sur un diagramme en barres (rare mais peut tomber)

**Si on te donne un histogramme et qu'on te demande de retrouver p** :
1. Identifier la barre la plus haute → c'est l'espérance E(X) (à $\pm 1$ près).
2. Résoudre $E(X) = np$ → $p = E(X) / n$.

**Reconnaître σ graphiquement :** σ correspond à la "demi-largeur" du pic principal de l'histogramme. Un σ petit = pic étroit ; σ grand = pic étalé.

---

## V. Stratégie globale : quel outil pour quelle question ?

```
Tu lis l'énoncé. Que demande-t-on ?
│
├── "Combien de façons / combien de codes / combien de mains" ?
│       └── DÉNOMBREMENT : tableau ordre/répétition (§I)
│           ├── Ordre + répétition  → n^p
│           ├── Ordre + sans répét. → A_n^k (ou n! si on prend tout)
│           └── Pas d'ordre         → C(n,k) = "coefficient binomial"
│
├── "Quelle est la probabilité que…" + arbre / "sachant que" ?
│       └── PROBAS CONDITIONNELLES (§II)
│           ├── Direct : suivre le chemin sur l'arbre, multiplier
│           ├── Probas totales : somme des chemins finissant par B
│           └── À l'envers (P_B(A)) : 3 étapes — intersection, total, ratio
│
├── "On répète n fois de manière indépendante" ?
│       └── LOI BINOMIALE (§III)
│           ├── Justifier les 3 points obligatoires
│           ├── P(X = k), P(X ≤ k), P(X ≥ k) → calculatrice
│           └── E(X) = np, σ = √(np(1-p))
│
└── "Au seuil de 95 %", "intervalle de fluctuation" ?
        └── INTERVALLE DE FLUCTUATION (§IV)
            ├── Active : tableau, trouver a et b
            └── Vérification : queues gauche/droite ≤ α/2
```

---

## VI. Anatomie d'un exo bac type "Probas + Binomiale" (sessions 2024-2025)

🎯 **Pattern récurrent ULTRA stable confirmé sur 8+ sujets** (Métropole 2024 J1/J2, 2025 J1/J2, septembre 2025, Amérique du Nord 2025 J1/J2, Asie 2025). **L'exercice 1 de probabilités est devenu un standard depuis 2024**.

### Le schéma classique de l'EXO 1 (depuis 2024)

🎯 **Pattern observé sur quasi TOUS les sujets** :

```
Énoncé : situation concrète (groupes sanguins, satisfaction client, sport, etc.)
│
├── Partie A — Probabilités conditionnelles (arbre pondéré)
│   ├── Q1. Calculer une probabilité simple ou conditionnelle (lecture d'arbre)
│   ├── Q2. Probabilité totale : P(B) = somme des chemins
│   ├── Q3. Probabilité conditionnelle inverse (Bayes-like)
│   └── Q4. Évènements indépendants (vérifier P(A∩B) = P(A)·P(B))
│
├── Partie B — Loi binomiale
│   ├── Q5. "X = nombre de succès sur n personnes"
│   │       → JUSTIFIER que X suit B(n, p) en récitant les 3 points
│   ├── Q6. Calculer P(X = k), P(X ≤ k), P(X ≥ k)
│   ├── Q7. Calculer E(X) et l'interpréter
│   └── Q8. (parfois) Plus petit n tel que P(X ≥ 1) ≥ 0,95 — équation à résoudre
│
└── Partie C (depuis 2024) — Somme VA + Bienaymé-Tchebychev (cf. fiche dédiée)
    ├── Linéarité de E
    ├── Variance/écart-type d'une somme
    └── Inégalité de B-T pour majorer une probabilité
```

### Les 8 questions-types qui reviennent à TOUS les bacs

#### Q1 — "Calculer une probabilité simple via arbre"

**Méthode** : lecture directe de l'arbre. $P(A \cap B) = P(A) \times P_A(B)$ (chemin d'une branche).

#### Q2 — "Calculer $P(B)$ via les probabilités totales"

**Méthode** : $P(B) = P(A \cap B) + P(\bar{A} \cap B) = P(A) P_A(B) + P(\bar{A}) P_{\bar{A}}(B)$.

🎯 **Réflexe** : à chaque "Calculer la probabilité de l'événement final $B$" → probas totales.

#### Q3 — "Calculer $P_B(A)$ (probabilité conditionnelle inverse)"

**Méthode** :
$$P_B(A) = \dfrac{P(A \cap B)}{P(B)}$$

🎯 **Reconnaître** : si l'arbre est construit avec $A$ en haut puis $B$, demander $P_B(A)$ = inverser.

#### Q4 — "Justifier que $X$ suit la loi binomiale $\mathcal{B}(n, p)$"

🎯 **MÉTHODE OBLIGATOIRE — RÉCITER LES 3 POINTS** :

**Rédaction-type** :
> On répète $n$ fois la même expérience de Bernoulli :
> 1. **L'expérience a 2 issues** : succès ($S$) avec probabilité $p$, et échec ($\bar{S}$) avec probabilité $1-p$.
> 2. **Les $n$ épreuves sont identiques et indépendantes** (justifier l'indépendance : tirages avec remise, populations grandes, etc.).
> 3. **$X$ compte le nombre de succès**.
>
> Donc $X$ suit la loi binomiale $\mathcal{B}(n, p)$.

⚠️ **NE JAMAIS sauter cette justification**. C'est 1 point garanti.

#### Q5 — "Calculer $P(X = k)$, $P(X \leq k)$, $P(X \geq k)$"

**Calcul direct** ou **calculatrice** :
- $P(X = k)$ : `binomFdp(n, p, k)` ou formule.
- $P(X \leq k)$ : `binomFRép(n, p, k)`.
- $P(X \geq k) = 1 - P(X \leq k-1)$.

⚠️ **Conversion entier** : pour $X$ entier, $P(X < k) = P(X \leq k-1)$ et $P(X > k) = P(X \geq k+1)$.

#### Q6 — "Calculer l'espérance $E(X)$ et l'interpréter"

**Formule directe** : $E(X) = np$.

**Interprétation** :
> Sur un grand nombre de répétitions de cette expérience, on s'attend en moyenne à $np$ succès.

#### Q7 — "Trouver le plus petit $n$ tel que $P(X \geq 1) \geq 0{,}95$"

🎯 **Méthode** : transformation puis résolution d'équation.

**Rédaction-type** :
> $P(X \geq 1) = 1 - P(X = 0) = 1 - (1-p)^n$.
>
> $P(X \geq 1) \geq 0{,}95 \iff 1 - (1-p)^n \geq 0{,}95 \iff (1-p)^n \leq 0{,}05$.
>
> Comme $0 < 1 - p < 1$, $\ln$ est croissante mais on multiplie par un négatif :
> $n \ln(1-p) \leq \ln(0{,}05) \iff n \geq \dfrac{\ln(0{,}05)}{\ln(1-p)}$ (inversion par négatif).
>
> Application numérique : $n \geq ...$ donc $n = ...$.

#### Q8 — "Bascule vers somme VA + Bienaymé-Tchebychev"

🎯 **Pattern depuis 2024** : la dernière partie introduit une nouvelle variable $Y_n = X_1 + ... + X_n$ ou $M_n = \dfrac{S_n}{n}$, et demande d'appliquer B-T.

→ Voir **fiche sommes VA + B-T** §VI pour le pattern complet.

### Sujets analysés (pour ta culture)

| Sujet | Contexte | Notions principales |
|---|---|---|
| **Métropole 2024 J1** | Satisfaction client TV | Arbre + binomiale + somme VA + B-T |
| **Métropole 2024 J2** | Examen école | Arbre + binomiale (classique) |
| **Métropole 2025 J1** | Groupes sanguins (A, B, AB, O) | Arbre + binomiale + B-T (groupe O = 0,38) |
| **Métropole 2025 J2** | Centre multisports week-end | Arbre + binomiale + somme VA |
| **Métropole sept 2025** | (probas dans un autre exo) | - |
| **AmN 2025 J1** | Pattern complet | Arbre + binomiale + somme VA + B-T |
| **AmN 2025 J2 secours** | Standards d'avant 2024 | Arbre + binomiale (sans B-T) |
| **Asie 2025** | (loi binomiale + B-T) | Arbre + binomiale + B-T |

🎯 **Tu as 100% de chance d'avoir un exo de probabilités au bac blanc**. Format probable : exo 1 avec arbre → binomiale → somme VA + B-T. **Si ton bac blanc inclut B-T**, le pattern complet est dans la fiche sommes_va.

### Astuces générales sur les probas au bac

1. **Toujours faire l'arbre au brouillon** — même si l'énoncé n'en demande pas.
2. **Justifier l'indépendance ou la non-indépendance** dès qu'il y a tirages multiples (avec/sans remise).
3. **Citer les 3 points pour la binomiale** — c'est obligatoire pour 1 point.
4. **Pour "au moins un"** : passer par l'événement contraire ($P(\geq 1) = 1 - P(= 0)$).
5. **Pour les inégalités strictes/larges** : convertir en inégalités sur entiers.
6. **Vérifier la cohérence** : une probabilité est entre 0 et 1, une espérance peut être négative ou positive.
7. **Calculatrice à mode examen activé** : utiliser `binomFdp` et `binomFRép` pour gagner du temps.

---

## VII. Check-list de relecture

- [ ] Pour le **dénombrement** : j'ai bien posé les 2 questions (ordre ? répétition ?) avant de choisir l'outil.
- [ ] Pour la **binomiale**, j'ai bien justifié les **3 points** (n épreuves, identiques + indépendantes, X compte les succès).
- [ ] Pour les **inégalités** sur X : j'ai pensé à la conversion "X est entier" (ex. $X < k \iff X \leq k-1$).
- [ ] J'ai NE PAS confondu **indépendants** ($P(A \cap B) = P(A) P(B)$) et **incompatibles** ($A \cap B = \emptyset$).
- [ ] Pour les **probas totales**, j'ai bien sommé TOUS les chemins qui finissent par l'événement.
- [ ] Pour le **plus petit/grand entier k**, j'ai donné **la ligne avant ET la ligne après** dans mon tableau.
- [ ] Pour l'**intervalle de fluctuation** : j'ai utilisé > pour a et ≥ pour b (les bonnes inégalités).
- [ ] J'ai **interprété** les résultats demandés (pas juste donné un nombre).

---

## VIII. Anti-sèche : les "trucs de salope" du correcteur

1. **"Au moins un" / "aucun"** : passer par l'événement contraire.
   - "Au moins un succès" sur n épreuves : $P(X \geq 1) = 1 - P(X = 0)$.
   - C'est presque toujours plus rapide que de calculer la somme des cas.

2. **Tirage simultané / successif** : LIRE en entier avant de choisir entre combinaison et arrangement. Un mot-clé peut tout changer.

3. **Inégalité stricte vs large dans l'intervalle de fluctuation** : > pour a, ≥ pour b. C'est asymétrique. Ne pas l'oublier.

4. **Calculatrice qui donne 0** : si tu obtiens $P(X = k) = 0$ et que tu n'as visiblement pas un événement impossible, c'est probablement un dépassement (k trop grand ou n trop grand). Vérifie aussi tes paramètres.

5. **Question piège "espérance" mal interprétée** : E(X) n'est PAS le résultat le plus probable. C'est la moyenne **sur un grand nombre de répétitions**. Bien le formuler.

6. **Faux indépendance** : si on tire 2 cartes successivement sans remise, les tirages NE SONT PAS indépendants (la 2ème dépend de la 1ère). Si avec remise, oui. Le mot "remise" est crucial.

---

*Bon courage Arthur 🎯*
