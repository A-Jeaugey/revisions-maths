# 📐 Fiche de Combat — Géométrie dans l'espace

> **Bac blanc — Terminale Maths Spé**
> Structurée selon la check-list officielle de ton prof (photo du tableau) + compléments pour blinder le 20.

---

## 🎯 La check-list de ton prof (à mémoriser)

Ton prof a listé **8 types de questions** au tableau. C'est l'ordre dans lequel ils tombent presque toujours dans un exercice de géo dans l'espace :

1. **(ABC) forme un plan** → §I.3
2. **Calculer longueurs, coord d'un milieu** → §I.1-2
3. **Représentation paramétrique de droite (A, $\vec{u}$)** → §II.1
4. **Équation cartésienne de plan (A, $\vec{n}$)** → §II.2
5. **Montrer que (D) orthogonale à (P), positions (D)/(P) et (P)/(P')** → §III
6. **Intersection (D) et (P)** → §IV.1
7. **Projeté orthogonal d'un point sur un plan** (2 variantes : "Mque" ou "Dét coord") → §IV.2
8. **Aires, Volumes** → §V

⚡ **Réflexe stratégique :** quand tu vois un exercice de géo dans l'espace, scanne l'énoncé dans cet ordre. La question 7 (projeté) demande presque toujours d'utiliser les questions 3, 4 et 6 d'abord.

---

## I. Les fondations (Points & Vecteurs)

### 1. Distance entre deux points

$$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$

**Exemple chiffré :** A(1, 2, -1), B(3, 0, 2).
`AB = √[(3-1)² + (0-2)² + (2-(-1))²] = √[4 + 4 + 9] = √17`

⚠️ **Piège classique :** signe des soustractions. Quand `xA = -1`, `xB - xA = xB - (-1) = xB + 1`. Beaucoup d'élèves oublient.

### 2. Coordonnées du milieu de [AB]

$$M\left(\frac{x_A + x_B}{2}\,;\,\frac{y_A + y_B}{2}\,;\,\frac{z_A + z_B}{2}\right)$$

### 3. Montrer que (ABC) forme un plan

**Méthode imparable :**
1. Calculer `vec(AB)` et `vec(AC)`.
2. Montrer qu'ils ne sont **pas colinéaires** (coordonnées non proportionnelles).
3. Conclure : "Donc A, B et C ne sont pas alignés et définissent un plan unique (ABC)."

**Comment montrer la non-colinéarité concrètement :**
Si `vec(AB) = (a, b, c)` et `vec(AC) = (a', b', c')`, ils sont colinéaires ssi `a/a' = b/b' = c/c'` (à condition que les dénominateurs soient non nuls).
- En pratique : on cherche **un seul** rapport qui ne match pas les autres → c'est suffisant pour conclure à la non-colinéarité.

**Exemple chiffré :** A(1,0,0), B(2,1,0), C(1,1,1).
- `vec(AB) = (1, 1, 0)`, `vec(AC) = (0, 1, 1)`.
- Si colinéaires, il existe k tel que `vec(AB) = k·vec(AC)`. Or la 1ère coordonnée donne `1 = k·0 = 0` ❌. Donc non colinéaires → A, B, C définissent un plan.

### 4. Vecteurs coplanaires & bases (compléments du cours)

**Vecteurs coplanaires :** Trois vecteurs `vec(u)`, `vec(v)`, `vec(w)` sont coplanaires s'il existe des réels `a` et `b` tels que :
$$\vec{w} = a\vec{u} + b\vec{v}$$
C'est-à-dire que `vec(w)` est combinaison linéaire de `vec(u)` et `vec(v)`.

**Base de l'espace :** Trois vecteurs forment une base de l'espace **SSI ils ne sont PAS coplanaires** (il faut 3 directions indépendantes en dimension 3).

⚠️ **Red flag :** Si tu montres que 3 vecteurs sont coplanaires, ils ne forment **pas** une base. À toi de bien lire la question.

---

## II. Équations de droites et de plans

### 1. Représentation paramétrique d'une droite (A, $\vec{u}$)

Une droite est définie par **un point A** et **un vecteur directeur** `vec(u)(a, b, c)`.

**La méthode :** un point M(x, y, z) appartient à (D) ssi `vec(AM) = t·vec(u)` pour un certain `t ∈ ℝ`. D'où le système :

$$\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases} \quad (t \in \mathbb{R})$$

**Exemple chiffré :** Droite passant par A(1, 2, -1) et de vecteur directeur `vec(u) = (3, -1, 2)`.
```
x = 1 + 3t
y = 2 - t
z = -1 + 2t        avec t ∈ ℝ
```

⚠️ **À ne pas oublier :** mentionner explicitement `t ∈ ℝ` dans la rédaction. C'est un point qui se perd souvent.

### 2. Équation cartésienne d'un plan (A, $\vec{n}$)

Un plan est défini par **un point A** et **un vecteur normal** `vec(n)(a, b, c)` (orthogonal au plan).

**Méthode en 3 étapes :**
1. Écrire l'équation sous la forme `ax + by + cz + d = 0` (les coefficients a, b, c sont les coordonnées du normal).
2. Injecter les coordonnées de A pour trouver `d`.
3. Conclure.

**Exemple chiffré :** `vec(n) = (2, 1, -1)`, A(1, 1, 1).
- Équation de la forme `2x + y - z + d = 0`.
- Avec A : `2(1) + 1 - 1 + d = 0` → `d = -2`.
- Équation : **`2x + y - z - 2 = 0`**.

### 3. Si l'énoncé donne 3 points A, B, C au lieu d'un normal

Tu dois trouver `vec(n)` toi-même. Méthode :
1. Calculer `vec(AB)` et `vec(AC)`.
2. Chercher `vec(n) = (a, b, c)` tel que :
   - `vec(n) · vec(AB) = 0`
   - `vec(n) · vec(AC) = 0`
3. On obtient un système de 2 équations à 3 inconnues → on fixe arbitrairement une coordonnée (ex. c = 1) et on résout.

**Exemple chiffré :** A(1,0,0), B(0,1,0), C(0,0,1).
- `vec(AB) = (-1, 1, 0)`, `vec(AC) = (-1, 0, 1)`.
- On cherche `vec(n) = (a, b, c)` avec `-a + b = 0` et `-a + c = 0`.
- Donc `b = a` et `c = a`. En fixant `a = 1` : `vec(n) = (1, 1, 1)`.
- Équation : `x + y + z + d = 0` avec A → `1 + d = 0` → `d = -1`. Soit **`x + y + z - 1 = 0`**.

---

## III. Positions relatives & orthogonalité (la zone que ton prof a soulignée)

### 1. Montrer que (D) est orthogonale au plan (P)

**Définition :** Une droite est orthogonale à un plan ssi elle est orthogonale à TOUTES les droites du plan.

**Méthode 1 (la plus rapide) :** Montrer que le vecteur directeur `vec(u)` de (D) est **colinéaire** au vecteur normal `vec(n)` de (P).
- Concrètement : `vec(u) = k·vec(n)` pour un certain `k`.

**Méthode 2 (si pas de normal donné) :** Montrer que `vec(u)` est orthogonal à **deux vecteurs non colinéaires** du plan (par produit scalaire nul).
- ⚠️ Il faut **deux** vecteurs, pas un seul. Un seul ne suffit pas (la droite pourrait être dans le plan).

**Exemple chiffré (méthode 1) :** Droite (D) de vecteur directeur `vec(u) = (4, 2, -2)` et plan (P) : `2x + y - z + 5 = 0`.
- Normal du plan : `vec(n) = (2, 1, -1)`.
- `vec(u) = 2 · vec(n)` → colinéaires → (D) ⊥ (P) ✅

### 2. Positions de deux plans (P) et (P')

| Cas | Caractérisation |
|---|---|
| **Parallèles (confondus ou strictement)** | `vec(n)` et `vec(n')` colinéaires |
| **Sécants** | `vec(n)` et `vec(n')` non colinéaires → ils se coupent selon une **droite** |

**Pour distinguer parallèles confondus / strictement :**
- Si normaux colinéaires ET un point de (P) appartient à (P') → **confondus**.
- Si normaux colinéaires ET aucun point commun → **strictement parallèles**.

**Trouver l'intersection de deux plans sécants :**
On résout le système des 2 équations cartésiennes. On obtient une droite (sous forme paramétrique en posant l'une des variables = t).

**Exemple chiffré :** (P) : `x + y - z = 0` et (P') : `2x - y + z = 3`.
- Système : on additionne les deux équations → `3x = 3` → `x = 1`.
- En posant `z = t` (paramètre), la 1ère équation donne `y = z - x = t - 1`.
- Représentation paramétrique : `x = 1`, `y = -1 + t`, `z = t`.

### 3. Positions de (D) et (P)

Soit `vec(u)` le vecteur directeur de (D) et `vec(n)` le vecteur normal de (P).

| Cas | Caractérisation |
|---|---|
| **(D) parallèle à (P)** (incluse ou stricte) | `vec(u) · vec(n) = 0` |
| **(D) sécante à (P)** | `vec(u) · vec(n) ≠ 0` → un unique point d'intersection |
| **(D) orthogonale à (P)** | `vec(u)` colinéaire à `vec(n)` (cas particulier de sécante) |

**Pour distinguer parallèle incluse / stricte :**
- Si `vec(u) · vec(n) = 0` ET un point de (D) appartient à (P) → **incluse**.
- Si `vec(u) · vec(n) = 0` ET un point de (D) n'appartient pas à (P) → **strictement parallèle**.

### 4. Positions de deux droites (D₁) et (D₂) — les 4 cas (souvent oubliés)

🎯 **Le piège classique :** beaucoup d'élèves ne pensent qu'à 3 cas. Il y en a **4** dans l'espace.

1. **Parallèles confondues :** vecteurs directeurs colinéaires ET un point de (D₁) appartient à (D₂).
2. **Parallèles strictement distinctes :** vecteurs directeurs colinéaires MAIS aucun point commun.
3. **Sécantes :** vecteurs directeurs **non colinéaires** ET un point d'intersection unique.
4. **Non coplanaires :** vecteurs directeurs **non colinéaires** ET **aucun** point d'intersection.

⚠️ **Le cas "non coplanaires" n'existe pas en 2D**. Dans l'espace, deux droites peuvent ne pas être parallèles ET ne jamais se croiser (comme deux routes sur un échangeur autoroutier).

**Méthode pour trancher entre sécantes et non coplanaires :** quand les vecteurs directeurs sont non colinéaires, on résout le système d'intersection. S'il a une solution unique → sécantes. S'il n'en a pas → non coplanaires.

### 5. Théorème du toit (bonus pour briller)

**Énoncé :** Soient (P₁) et (P₂) deux plans qui se coupent selon une droite (Δ). Si (P₁) contient une droite (d₁) et (P₂) contient une droite (d₂) telles que **(d₁) // (d₂)**, alors la droite d'intersection (Δ) est **parallèle** à (d₁) et (d₂).

**À quoi ça sert :** trouver la **direction** de l'intersection de deux plans sans calcul, juste par identification d'un parallélisme.

---

## IV. Intersections & Projeté orthogonal (le boss final)

### 1. Intersection (D) ∩ (P)

**Méthode en 4 étapes :**
1. Prendre le système paramétrique de (D) : `x = x_A + at`, `y = y_A + bt`, `z = z_A + ct`.
2. **Injecter** ces expressions dans l'équation cartésienne de (P) : `a'(x_A + at) + b'(y_A + bt) + c'(z_A + ct) + d = 0`.
3. Résoudre l'équation pour trouver `t = t₀` (une valeur unique si (D) sécante à (P)).
4. Réinjecter `t₀` dans le système paramétrique pour obtenir les coordonnées du point d'intersection I.

**Exemple chiffré :** (D) : `x = 1 + 2t`, `y = -t`, `z = 3 + t`. (P) : `x - y + 2z - 5 = 0`.
- Injection : `(1 + 2t) - (-t) + 2(3 + t) - 5 = 0` → `1 + 2t + t + 6 + 2t - 5 = 0` → `5t + 2 = 0` → `t = -2/5`.
- Coords : `x = 1 + 2(-2/5) = 1/5`, `y = 2/5`, `z = 3 - 2/5 = 13/5`.
- Point d'intersection : I(1/5, 2/5, 13/5).

⚠️ **Piège fréquent :** ne te laisse pas paniquer par les fractions. Au bac, des `t` immondes type `-2/5` ou `17/43` sont fréquents. Si ça tombe juste, c'est bien. Si ça tombe pas juste, c'est aussi bien.

### 2. Projeté orthogonal H d'un point M sur un plan (P)

🎯 **Ton prof a noté DEUX VARIANTES distinctes** sur le tableau (« Mque » et « Dét les coord »). À toi de reconnaître laquelle on te demande.

#### Variante A : "Déterminer les coordonnées de H" (méthode active)

**Méthode en 4 étapes :**
1. Écrire la **représentation paramétrique** de la droite (Δ) passant par M et de vecteur directeur `vec(n)` (le normal du plan).
2. Injecter dans l'équation de (P) → obtenir une équation en t.
3. Résoudre pour `t = t₀`.
4. Remplacer `t₀` dans le système de (Δ) → coordonnées de H.

**Exemple chiffré complet :** M(1, 2, 3), (P) : `2x - y + z - 5 = 0`.
- Normal du plan : `vec(n) = (2, -1, 1)`.
- Droite (Δ) passant par M de vecteur directeur `vec(n)` :
  ```
  x = 1 + 2t
  y = 2 - t
  z = 3 + t
  ```
- Injection dans (P) : `2(1 + 2t) - (2 - t) + (3 + t) - 5 = 0`
  - `= 2 + 4t - 2 + t + 3 + t - 5 = 0`
  - `= 6t - 2 = 0`
  - `t = 1/3`
- Coordonnées de H : `x = 1 + 2/3 = 5/3`, `y = 2 - 1/3 = 5/3`, `z = 3 + 1/3 = 10/3`.
- **H(5/3, 5/3, 10/3)**.

#### Variante B : "Montrer que H est le projeté orthogonal de M sur (P)" (méthode de vérification)

Beaucoup plus rapide. **Tu dois prouver DEUX choses :**

1. **Appartenance :** vérifier que les coordonnées de H satisfont l'équation de (P), c'est-à-dire `H ∈ (P)`.
2. **Orthogonalité :** calculer `vec(MH)` et vérifier qu'il est **colinéaire** au vecteur normal `vec(n)` du plan.
   - *Alternative :* vérifier que `vec(MH) · vec(u) = 0` et `vec(MH) · vec(v) = 0` pour deux vecteurs non colinéaires du plan. Mais c'est plus long.

**Exemple chiffré :** M(1, 2, 3), (P) : `2x - y + z - 5 = 0`. Montrer que H(5/3, 5/3, 10/3) est le projeté de M sur (P).
- **Étape 1 (appartenance) :** `2(5/3) - 5/3 + 10/3 - 5 = 10/3 - 5/3 + 10/3 - 15/3 = 0` ✅. Donc H ∈ (P).
- **Étape 2 (orthogonalité) :** `vec(MH) = (5/3 - 1, 5/3 - 2, 10/3 - 3) = (2/3, -1/3, 1/3)`. Or `vec(n) = (2, -1, 1)`. On a `vec(MH) = (1/3) · vec(n)` → colinéaires ✅.
- Conclusion : H est bien le projeté orthogonal de M sur (P).

⚠️ **Piège :** dans la variante B, ne te lance PAS dans la méthode active de la variante A. Tu perds du temps. La vérification est faite pour être rapide.

### 3. Distance d'un point M à un plan (P)

Une fois que tu as le projeté orthogonal H, **la distance de M à (P)** est tout simplement :
$$d(M, (P)) = MH$$

Calculée par la formule de distance classique du §I.1.

**Méthode complète :**
1. Déterminer H (projeté orthogonal de M sur (P)) → §IV.2 variante A.
2. Calculer la longueur MH avec la formule de distance.
3. Conclure : `d(M, (P)) = MH`.

---

## V. Aires et Volumes (les points faciles de fin d'exo)

### 1. Aire d'un triangle

$$\mathcal{A} = \frac{\text{Base} \times \text{Hauteur}}{2}$$

⚠️ **Astuce dans l'espace :** la "hauteur" est la distance d'un sommet à la droite portant le côté opposé. Souvent, on te fait calculer cette hauteur en faisant un projeté orthogonal d'un sommet sur la droite (basé sur la même méthode qu'au §IV.2 mais sur une droite, plus rare).

### 2. Volume d'un tétraèdre

$$\mathcal{V} = \frac{1}{3} \times \text{Aire de la base} \times \text{Hauteur}$$

**🎯 Trick stratégique :** dans un tétraèdre ABCD, tu peux choisir n'importe quelle face comme "base". Si on te demande le volume :
- Choisis la base la plus simple à calculer (souvent un triangle dans un plan de coordonnées simple).
- La hauteur est alors la distance du 4ème sommet au plan de la base = projeté orthogonal du 4ème sommet sur ce plan.

**Exemple type :** Tétraèdre ABCD avec base ABC dans le plan (P).
1. Calculer l'aire de ABC (base × hauteur / 2).
2. Calculer la distance de D au plan (ABC) → c'est la longueur DH où H est le projeté orthogonal de D sur (ABC).
3. Volume = (1/3) × aire(ABC) × DH.

⚠️ **Auto-check imparable :** un volume est **toujours positif**. Si tu trouves un truc négatif, tu as foiré quelque part (signe dans une soustraction, erreur de coordonnées). **Refais.**

---

## VI. Anatomie d'un exo bac type "Géométrie dans l'espace" (sessions 2024-2025)

🎯 **Pattern récurrent confirmé sur 6+ sujets** (Métropole 2024 J1/J2, 2025 J1/J2, septembre 2025, Amérique du Nord 2025 J1/J2). La géométrie dans l'espace tombe **dans 100% des sujets**, sous deux formes principales.

### Forme 1 : Vrai/Faux (4 ou 5 affirmations) — LA PLUS FRÉQUENTE depuis 2024

🎯 **Pattern observé sur Métropole 2025 J1 (4 affirmations), Métropole 2025 J2 (4 affirmations), Amérique du Nord 2025 J1 (Vrai/Faux), Amérique du Nord 2025 J2 secours (5 affirmations).**

**Structure type** :

```
Affirmation 1 : Une représentation paramétrique de la droite (AB) est ...
Affirmation 2 : Le vecteur n est normal au plan (P) (ou à OAB)
Affirmation 3 : Les droites (D) et (D') ne sont pas coplanaires
Affirmation 4 : La distance du point C au plan (P) est égale à 2√3
(parfois Affirmation 5)
```

**Type de chaque affirmation** :
- **Affirmation paramétrique** : vérifier qu'un point appartient à une droite + que le vecteur directeur est correct (vérification colinéarité).
- **Vecteur normal** : vérifier que le vecteur est orthogonal à **2 vecteurs non colinéaires** du plan (deux produits scalaires nuls).
- **Coplanaires/non coplanaires** : poser le système d'intersection — si **incompatible**, droites non coplanaires.
- **Distance point-plan** : utiliser la formule (si donnée par le prof) OU passer par le projeté orthogonal (cf. fiche).
- **Orthogonalité de droites** : produit scalaire des vecteurs directeurs nul.

### Forme 2 : Exercice construit autour d'un cube/tétraèdre

🎯 **Pattern observé sur Métropole 2024 J1 (cube + plan + tétraèdre), Métropole 2025 J2 (deux droites sécantes), Métropole sept 2025 (cube ABCDEFGH).**

**Structure type** :

```
On considère le cube ABCDEFGH avec un point M tel que vec(BM) = vec(AB)
│
├── Q1. "Montrer que (FG) et (FM) sont perpendiculaires"
│       → Produit scalaire des deux vecteurs directeurs
├── Q2. "Montrer que les points A, M, G, H sont coplanaires"
│       → Trouver un vecteur combinaison des deux autres
├── Q3. Donner les coordonnées des vecteurs (calcul direct dans le repère)
├── Q4. Montrer qu'un vecteur est normal à un plan (2 produits scalaires nuls)
├── Q5. Donner l'équation cartésienne du plan
├── Q6. Représentation paramétrique d'une droite
├── Q7. Calculer le projeté orthogonal d'un point sur une droite/plan
└── Q8. Calculer un volume (tétraèdre) ou une aire
```

### Les 8 questions-types qui reviennent à TOUS les bacs

#### Q1 — "Donner les coordonnées des points/vecteurs"

**Méthode** : utiliser le repère $(A; \vec{AB}, \vec{AD}, \vec{AE})$ pour un cube. Lire les coordonnées en regardant les déplacements selon chaque axe.

🎯 **Réflexe** : au cube, tu as toujours un repère orthonormé naturel.

#### Q2 — "Montrer que $\vec{n}$ est normal au plan $(P)$"

**Méthode** : montrer que $\vec{n}$ est orthogonal à **deux vecteurs non colinéaires** du plan.

**Rédaction** :
> Calculons $\vec{n} \cdot \vec{AB}$ et $\vec{n} \cdot \vec{AC}$.
> $\vec{n} \cdot \vec{AB} = ... = 0$ ✓
> $\vec{n} \cdot \vec{AC} = ... = 0$ ✓
> Comme $\vec{AB}$ et $\vec{AC}$ ne sont pas colinéaires (non proportionnels), $\vec{n}$ est normal au plan $(ABC)$.

⚠️ **Toujours justifier la non-colinéarité** des deux vecteurs choisis, sinon point perdu.

#### Q3 — "Donner une équation cartésienne du plan $(P)$"

**Méthode** :
1. Trouver un vecteur normal $\vec{n}(a, b, c)$.
2. L'équation est de la forme $ax + by + cz + d = 0$.
3. Substituer les coordonnées d'un point connu pour trouver $d$.

#### Q4 — "Donner une représentation paramétrique de la droite $(AB)$"

**Méthode** :
$$\begin{cases} x = x_A + t \cdot (x_B - x_A) \\ y = y_A + t \cdot (y_B - y_A) \\ z = z_A + t \cdot (z_B - z_A) \end{cases}, \quad t \in \mathbb{R}$$

#### Q5 — "Montrer que les droites $(D)$ et $(D')$ sont sécantes/coplanaires/non coplanaires"

**Méthode (sécantes)** :
1. Vérifier que les vecteurs directeurs ne sont pas colinéaires.
2. Résoudre le système d'intersection (en posant $t$ et $s$ comme paramètres).
3. Si une solution → sécantes. Si pas de solution avec vecteurs non colinéaires → non coplanaires.

#### Q6 — "Montrer que les points $A, B, C, D$ sont coplanaires"

**Méthode** : montrer que $\vec{AD}$ est combinaison linéaire de $\vec{AB}$ et $\vec{AC}$ : trouver $\alpha, \beta$ tels que $\vec{AD} = \alpha \vec{AB} + \beta \vec{AC}$.

#### Q7 — "Calculer le projeté orthogonal $H$ de $A$ sur le plan/la droite"

🎯 **Méthode "passant par H"** (vue dans ta fiche) :
1. $H \in \text{plan}$ : ses coordonnées vérifient l'équation cartésienne.
2. $\vec{AH}$ colinéaire au vecteur normal du plan : $\vec{AH} = t \vec{n}$.
3. Substituer dans l'équation du plan, résoudre pour $t$.
4. En déduire les coordonnées de $H$.

#### Q8 — "Calculer le volume du tétraèdre $ABCD$ ou l'aire d'un triangle"

**Méthode (volume)** : $V = \dfrac{1}{3} \times B \times h$ avec $B$ = aire de base et $h$ = hauteur (distance d'un sommet au plan opposé).

**Méthode (aire)** : si triangle rectangle (à vérifier via produit scalaire = 0), $\mathcal{A} = \dfrac{1}{2} \times \text{côté}_1 \times \text{côté}_2$.

⚠️ **Auto-check** : un volume est **toujours positif**.

### Sujets analysés (pour ta culture)

| Sujet | Type | Notions |
|---|---|---|
| **Métropole 2024 J1** | Cube + plan + tétraèdre | Vecteur normal, équation plan, repré param, volume |
| **Métropole 2024 J2** | Étude tétraèdre | Produit scalaire, projeté orthogonal |
| **Métropole 2025 J1** | Vrai/Faux 4 affirmations | Repré param, vecteur normal, coplanarité, distance point-plan |
| **Métropole 2025 J2** | Cube + 2 droites sécantes | Sécantes, vecteur normal, équation cartésienne |
| **Métropole sept 2025** | Cube ABCDEFGH + projeté | Coplanaires, vecteur normal, projeté orthogonal, volume |
| **AmN 2025 J1** | Vrai/Faux | Inclut produit scalaire dans le plan (niveau Première) |
| **AmN 2025 J2 secours** | Vrai/Faux 5 affirmations | Pattern complet |

🎯 **Tu as 100% de chance d'avoir un exo de géométrie dans l'espace au bac blanc**. Format probable : Vrai/Faux 4 affirmations OU exo construit autour d'un cube avec projeté orthogonal.

### Stratégie générale Vrai/Faux

🎯 **Au Vrai/Faux, chaque affirmation = même barème**. Tu n'as pas le droit de bâcler une question.

**Méthodologie** :
1. **Lire les 4 affirmations** avant de commencer (pour repérer les notions à mobiliser).
2. **Travailler chaque affirmation indépendamment** (pas d'enchaînement).
3. **Si tu doutes** : pose un calcul concret (produit scalaire, système, etc.). Pas de "bah ça a l'air vrai".
4. **Justification obligatoire** : un "vrai" ou "faux" sans calcul = 0 point.
5. **Pour les "fausses"** : il suffit d'**un contre-exemple** ou d'**un calcul qui contredit**.

---

## VII. Diagramme de décision (par où commencer un exercice)

```
Tu lis l'énoncé. Quelle est la première chose à faire ?
│
├── On te donne 3 points → "Montrer que (ABC) forme un plan" probable (§I.3)
│
├── On te demande une équation cartésienne de plan ?
│       ├── Avec un normal → §II.2 (3 étapes)
│       └── Avec 3 points → §II.3 (calcul du normal d'abord)
│
├── On te demande une intersection ?
│       ├── (D) ∩ (P) → §IV.1 (paramétrer (D), injecter dans (P))
│       └── (P) ∩ (P') → §III.2 (résoudre le système)
│
├── On te parle de "projeté orthogonal" ?
│       ├── "Déterminer les coordonnées de H" → §IV.2 variante A (méthode active)
│       └── "Montrer que H est le projeté" → §IV.2 variante B (vérification)
│
├── On te demande une distance d'un point à un plan ?
│       └── Faire le projeté orthogonal H, puis calculer MH (§IV.3)
│
└── Question finale "calculer un volume" ?
        └── Tétraèdre : (1/3) × aire base × hauteur
            La hauteur est souvent un projeté orthogonal calculé juste avant.
```

---

## VIII. Check-list de relecture

- [ ] J'ai bien justifié que (ABC) forme un plan AVANT d'écrire son équation
- [ ] Dans toute représentation paramétrique, j'ai mis explicitement `t ∈ ℝ`
- [ ] Pour montrer (D) ⊥ (P), j'ai vérifié la **colinéarité** entre `vec(u)` et `vec(n)` (pas juste le produit scalaire)
- [ ] J'ai distingué parallèle **strictement** vs **confondue/incluse** quand c'était demandé
- [ ] J'ai bien identifié si le projeté orthogonal était à **déterminer** (méthode active) ou à **vérifier** (méthode rapide)
- [ ] J'ai pensé aux **4 cas** pour deux droites (pas seulement 3 — non coplanaires existe !)
- [ ] Mon volume est **positif** (sinon je refais)
- [ ] J'ai gardé les fractions immondes telles quelles (pas paniqué sur un `t = -2/5`)

---

## IX. Anti-sèche : les "trucs de salope" du correcteur

1. **Fractions partout :** au bac, ils mettent souvent des coords sales pour tester ta méthode, pas ton calcul. Garde les fractions, ne les arrondis pas.
2. **Choix du paramètre :** quand tu cherches l'intersection de 2 plans, le choix du paramètre (`x = t` vs `z = t`) peut changer la simplicité des calculs. Si tu galères, change de paramètre.
3. **Erreur de signe :** la cause n°1 de pertes de points dans cette partie. Recompte deux fois les soustractions de coordonnées.
4. **"Projeté orthogonal" mal lu :** lis bien si on dit "déterminer" (faire le calcul complet) ou "montrer que" (juste vérifier 2 conditions). Tu peux gagner 10 minutes là-dessus.
5. **Volume négatif :** signal d'alarme immédiat. Reprends le calcul.

---

*Bon courage Arthur 🎯 — Tu as toutes les armes pour le 19+*
