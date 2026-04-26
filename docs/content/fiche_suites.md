# 📘 Fiche de Combat — Les Suites Numériques

> **Bac blanc — Terminale Maths Spé**
> Tout ce qui peut tomber, classé par type de question. Méthodes + pièges + exemples chiffrés.

---

## ⚡ Carte des réflexes (à lire avant l'épreuve)

| Tu vois ça dans l'énoncé... | Tu déclenches... |
|---|---|
| `Un+1 = a·Un + b` (avec b ≠ 0) | Suite arithmético-géométrique → point fixe + suite auxiliaire |
| « Montrer que Un ≤ … pour tout n » | Récurrence (presque toujours) |
| `Un+1 = f(Un)` + question sur la limite | Convergence monotone PUIS théorème du point fixe |
| `(-1)^n`, `sin(n)`, `cos(n)` dans Un | Théorème des gendarmes |
| `Un > qqch qui tend vers +∞` | Théorème de comparaison (minoration) |
| Pourcentage d'évolution (+12 %, -3 %) | Coefficient multiplicateur (×1,12 ; ×0,97) |
| `e^n / n^k` ou `n^k · e^(-n)` | Croissances comparées |
| Forme **explicite** Un = f(n) | Calcul direct de limite |
| Forme **récurrente** Un+1 = f(Un) | Passage obligatoire par un théorème |

---

## I. Identification & outils de base

### 1. Reconnaître une suite arithmétique (SA)

**Forme :** `Un+1 = Un + r` ⇔ `Un = U0 + n·r`

**Méthode pour prouver qu'une suite est arithmétique :**
- Calculer `Un+1 − Un` et montrer que ça vaut une constante réelle `r` **indépendante de n**.
- ⚠️ Ne JAMAIS se contenter de calculer `U1 − U0` et `U2 − U1`. Ça suggère, ça ne prouve pas.

**Exemple chiffré :**
Soit `Un = 3n + 5`. Alors `Un+1 − Un = 3(n+1)+5 − (3n+5) = 3`. Donc (Un) est SA de raison 3 et premier terme U0 = 5.

### 2. Reconnaître une suite géométrique (SG)

**Forme :** `Un+1 = q·Un` ⇔ `Un = U0 · q^n`

**Méthode :** Calculer `Un+1 / Un` (sous condition `Un ≠ 0`) et montrer que c'est une constante `q`.

**Exemple chiffré :**
Soit `Un = 4 · 2^n`. Alors `Un+1 / Un = (4·2^(n+1)) / (4·2^n) = 2`. Donc (Un) est SG de raison 2.

### 3. Sommes — formules à connaître par cœur

| Somme | Formule |
|---|---|
| `1 + 2 + … + n` | `n(n+1)/2` |
| `1 + 2 + … + n²` *(bonus pour réflexes)* | `n(n+1)(2n+1)/6` |
| Somme de termes consécutifs d'une **SA** | `(nb de termes) × (1er + dernier)/2` |
| Somme de termes consécutifs d'une **SG** (q ≠ 1) | `(1er terme) × (1 − q^(nb termes)) / (1 − q)` |

**Piège n°1 :** « Nombre de termes » = `(dernier indice − premier indice + 1)`. Pour `U3 + U4 + … + U17`, c'est **15** termes, pas 14.

**Exemple chiffré (SG) :** `S = 1 + 2 + 4 + 8 + … + 1024`. C'est 11 termes, raison 2, premier terme 1 :
`S = 1 × (1 − 2^11)/(1 − 2) = (1 − 2048)/(−1) = 2047`.

### 4. Représentation graphique d'une suite récurrente

**Cas `Un+1 = f(Un)` (suite récurrente) :**
1. Tracer la courbe `Cf` de f.
2. Tracer la droite `y = x` (la « diagonale »).
3. Placer U0 sur l'axe des abscisses.
4. Monter verticalement jusqu'à Cf → ordonnée = U1.
5. « Rebondir » horizontalement sur `y = x` pour reporter U1 sur l'axe des abscisses.
6. Recommencer. On obtient une figure « en escalier » (si f croissante) ou « en escargot » (si f décroissante autour du point fixe).

⚠️ **Piège classique :** Les variations de **f** ne donnent **PAS** les variations de la suite (Un) dans une suite récurrente. Une fonction f croissante peut générer une suite croissante OU décroissante selon U0.

**Cas `Un = f(n)` (suite explicite) :** Là OUI, les variations de f sur `[0 ; +∞[` donnent directement les variations de (Un).

---

## II. Suites arithmético-géométriques (SAG)

**Forme :** `Un+1 = a·Un + b` avec `a ≠ 1` et `b ≠ 0`.

### Réflexe « pourcentage »
- Augmentation de **+12 %** → coefficient `× 1,12`
- Diminution de **−3 %** → coefficient `× 0,97`
- « Une ville perd 8 % de sa population puis en gagne 200 » → `Un+1 = 0,92·Un + 200`

### Algorithme de résolution (méthode « point fixe »)

**Étape 1 — Trouver le point fixe C**
Résoudre l'équation `x = a·x + b` :
$$C = \dfrac{b}{1 − a}$$

**Étape 2 — Introduire la suite auxiliaire**
Poser `Vn = Un − C`.

**Étape 3 — Démontrer que (Vn) est géométrique**
Calculer `Vn+1` :
```
Vn+1 = Un+1 − C
     = a·Un + b − C
     = a·Un + b − (b/(1−a))    [on remplace C]
     = a·(Un − C)              [factorisation à faire proprement]
     = a·Vn
```
Donc (Vn) est géométrique de raison `a` et de premier terme `V0 = U0 − C`.

**Étape 4 — Forme explicite de Un**
- `Vn = V0 · a^n`
- `Un = Vn + C = V0 · a^n + C`

### Exemple chiffré complet

Soit `U0 = 3` et `Un+1 = 0,5·Un + 2`. Trouver Un en fonction de n.

1. **Point fixe :** `x = 0,5x + 2` ⇒ `0,5x = 2` ⇒ `C = 4`.
2. **Auxiliaire :** `Vn = Un − 4`, donc `V0 = 3 − 4 = −1`.
3. **Géométrique :** `Vn+1 = Un+1 − 4 = 0,5·Un + 2 − 4 = 0,5·(Un − 4) = 0,5·Vn`. ✅
4. **Explicite :** `Vn = −1 × 0,5^n` donc `Un = 4 − 0,5^n`.

**Vérif :** U0 = 4 − 1 = 3 ✅. U1 = 4 − 0,5 = 3,5. Et `0,5×3 + 2 = 3,5` ✅.

**Limite directe :** comme `0 < 0,5 < 1`, `lim 0,5^n = 0`, donc `lim Un = 4`. (Et 4, c'est le point fixe — pas un hasard, voir §V.6.)

---

## III. Variations (monotonie)

### Les 4 méthodes (à choisir selon la tête de Un)

**Méthode 1 — Signe de `Un+1 − Un` (la méthode universelle)**
- Si `Un+1 − Un > 0` pour tout n → croissante
- Si `Un+1 − Un < 0` pour tout n → décroissante
- Si `Un+1 − Un = 0` → constante

**Méthode 2 — Quotient `Un+1 / Un` comparé à 1** *(seulement si tous les Un > 0)*
- Si `Un+1/Un > 1` → croissante
- Si `Un+1/Un < 1` → décroissante
- 🎯 **Très efficace** pour les suites avec puissances ou produits (ex : `Un = n!/2^n`).

**Méthode 3 — Forme explicite `Un = f(n)`**
Étudier les variations de f sur `[0 ; +∞[` (dérivée, signe). Les variations de f → variations de Un.

**Méthode 4 — Cas particuliers SA / SG**
| Suite | Sens de variation |
|---|---|
| SA, raison r > 0 | Croissante |
| SA, raison r < 0 | Décroissante |
| SG `Un = q^n`, q > 1 | Croissante |
| SG `Un = q^n`, 0 < q < 1 | Décroissante |
| SG `Un = q^n`, q < 0 | **Ni l'un ni l'autre** (signes alternés) |

**Méthode bonus — Récurrence**
Si on conjecture `Un+1 ≥ Un` mais qu'on ne sait pas le prouver directement, on peut prouver par récurrence que `P(n) : Un+1 ≥ Un`. Très utile quand `Un+1 = f(Un)` avec f croissante.

### Exemple chiffré (méthode 2)

Soit `Un = n / 2^n` pour n ≥ 1. Étudier les variations.
```
Un+1 / Un = [(n+1)/2^(n+1)] × [2^n / n]
          = (n+1) / (2n)
```
Pour n ≥ 2 : `(n+1)/(2n) < 1` ⇔ `n+1 < 2n` ⇔ `n > 1`. ✅
Donc (Un) est décroissante à partir de n = 2. (Pour n=1 : U1 = 1/2, U2 = 2/4 = 1/2, égaux.)

---

## IV. Raisonnement par récurrence

### Structure de rédaction IMPÉRATIVE

Soit P(n) la propriété : **« [énoncer la propriété en français mathématique]** ».

**1. Initialisation**
- On vérifie P(n₀) (souvent n₀ = 0 ou 1).
- Calcul explicite des deux membres → conclusion : « P(n₀) est vraie ».

**2. Hérédité**
- « Soit n ≥ n₀ un entier. Supposons que P(n) est vraie (Hypothèse de Récurrence, **HR**). Montrons que P(n+1) est vraie. »
- Calcul / raisonnement.
- Conclusion : « Donc P(n+1) est vraie. La propriété est héréditaire. »

**3. Conclusion**
- « D'après le principe de récurrence, P(n) est vraie pour tout entier n ≥ n₀. »

⚠️ **Les 3 erreurs à éviter (correcteurs friands) :**
- Oublier l'initialisation (« on suppose qu'au rang 0 c'est évident »).
- Confondre HR (`P(n) vraie`) et conclusion (`P(n+1) vraie`).
- Écrire la conclusion sans mentionner « principe de récurrence ».

### Les 3 cas classiques d'hérédité

#### Cas 1 : Démontrer une **égalité** (formule explicite)
On part de la définition par récurrence donnée par l'énoncé, et on injecte l'HR.

**Exemple :** `U0 = 2`, `Un+1 = 2Un + 1`. Montrer que `Un = 3·2^n − 1`.
- Init : `3·2^0 − 1 = 3 − 1 = 2 = U0` ✅
- Hérédité : suppose `Un = 3·2^n − 1`. Alors :
  ```
  Un+1 = 2Un + 1 = 2(3·2^n − 1) + 1 = 3·2^(n+1) − 2 + 1 = 3·2^(n+1) − 1 ✅
  ```

#### Cas 2 : Démontrer une **inégalité** (encadrement, majoration, minoration)
On part de l'HR (l'inégalité au rang n), et on applique des opérations successives à chaque membre pour faire apparaître Un+1.

**Exemple :** `U0 = 0`, `Un+1 = √(Un + 2)`. Montrer que `0 ≤ Un ≤ 2` pour tout n.
- Init : `0 ≤ 0 ≤ 2` ✅
- Hérédité : suppose `0 ≤ Un ≤ 2`. On veut `0 ≤ Un+1 ≤ 2`.
  ```
  0 ≤ Un ≤ 2
  ⇒ 2 ≤ Un + 2 ≤ 4         (on ajoute 2)
  ⇒ √2 ≤ √(Un + 2) ≤ 2     (racine carrée croissante sur ℝ⁺)
  ⇒ √2 ≤ Un+1 ≤ 2
  ```
  Et comme `√2 > 0`, on a bien `0 ≤ Un+1 ≤ 2` ✅

#### Cas 3 : Suite récurrente `Un+1 = f(Un)` avec f monotone
On applique f à l'HR. **Attention au sens** :
- f **croissante** : `a ≤ Un ≤ b` ⇒ `f(a) ≤ f(Un) ≤ f(b)` (sens conservé)
- f **décroissante** : `a ≤ Un ≤ b` ⇒ `f(b) ≤ f(Un) ≤ f(a)` (sens inversé)

---

## V. Limites et théorèmes de convergence

### 1. Limites usuelles à savoir par cœur

| Suite | Condition | Limite |
|---|---|---|
| `q^n` | q > 1 | +∞ |
| `q^n` | q = 1 | 1 |
| `q^n` | −1 < q < 1 | 0 |
| `q^n` | q ≤ −1 | **Pas de limite** (oscille) |
| `1/n`, `1/n²`, `1/√n` | — | 0 |
| `n`, `n²`, `√n` | — | +∞ |

### 2. Stratégie de calcul — LA règle d'or

> **Forme explicite → calcul direct.**
> **Forme récurrente → théorèmes (gendarmes / comparaison / convergence monotone + point fixe).**

### 3. Formes indéterminées (FI) — à connaître pour ne pas te faire avoir

Les **4 FI classiques** :
- `+∞ − ∞`
- `0 × ∞`
- `∞ / ∞`
- `0 / 0`

**NON-FI** (cas où tu peux conclure directement) :
- `+∞ + ∞ = +∞`
- `(+∞) × (nombre fini > 0) = +∞`
- `(nombre fini) / (±∞) = 0`
- `(nombre fini ≠ 0) / 0⁺ = ±∞` (selon le signe)

**Exemple FI résolue (∞/∞) :**
`lim (3n² + 5) / (n² − 7n)` → on factorise par n² au num et au dénom :
`= lim n²(3 + 5/n²) / [n²(1 − 7/n)] = (3 + 0)/(1 − 0) = 3`

### 4. Théorème des gendarmes (encadrement)

**Quand l'utiliser :** dès que tu vois `sin(n)`, `cos(n)`, `(-1)^n`, ou tout terme borné qu'on ne sait pas calculer directement.

**Énoncé :** Si pour tout n ≥ n₀ on a `Vn ≤ Un ≤ Wn` et `lim Vn = lim Wn = L`, alors `lim Un = L`.

**Rédaction type (à reproduire MOT POUR MOT) :**
> Pour tout n ≥ 1, on a `−1 ≤ sin(n) ≤ 1`, donc `(n−1)/n² ≤ Un ≤ (n+1)/n²`.
> Or `lim (n−1)/n² = 0` et `lim (n+1)/n² = 0`.
> D'après le théorème des gendarmes, `lim Un = 0`.

### 5. Théorèmes de comparaison (minoration / majoration)

🎯 **Erreur classique : on confond les deux. Clarifions une fois pour toutes :**

| Si tu sais que… | Et que… | Alors… |
|---|---|---|
| `Un ≥ Vn` (Un est **plus grand**) | `lim Vn = +∞` | `lim Un = +∞` *(Un est encore plus grand, donc tiré vers le haut)* |
| `Un ≤ Wn` (Un est **plus petit**) | `lim Wn = −∞` | `lim Un = −∞` *(Un est encore plus petit, tiré vers le bas)* |

**Mnémonique imparable :**
> **« Le grand pousse vers +∞, le petit tire vers −∞. »**
> Si tu minores Un par un truc qui explose vers +∞ → Un explose aussi.
> Si tu majores Un par un truc qui s'effondre vers −∞ → Un s'effondre aussi.

⚠️ **Ce que ça ne dit PAS :**
- Si `Un ≥ Vn` et `lim Vn = −∞` → on ne peut **rien conclure** sur Un.
- Si `Un ≤ Wn` et `lim Wn = +∞` → on ne peut **rien conclure** sur Un.

**Exemple chiffré (minoration) :** Soit `Un = n + sin(n)`. Trouver `lim Un`.
- On sait que `sin(n) ≥ −1` pour tout n.
- Donc `Un ≥ n − 1`.
- Or `lim (n − 1) = +∞`.
- D'après le théorème de comparaison (minoration), `lim Un = +∞`. ✅

### 6. Théorème de convergence monotone (TCM)

**Énoncés :**
- Toute suite **croissante et majorée** converge.
- Toute suite **décroissante et minorée** converge.

⚠️ **Attention** : ce théorème prouve l'**existence** d'une limite finie, **mais ne donne pas sa valeur**. Pour la valeur, il faut le théorème du point fixe (§V.7) ou un calcul direct.

**Cas courants :**
- (Un) croissante non majorée → `lim Un = +∞`
- (Un) décroissante non minorée → `lim Un = −∞`

### 7. Théorème du point fixe (le boss final)

**Cadre d'utilisation :** suite récurrente `Un+1 = f(Un)`, on veut **la valeur** de la limite.

**Les 3 conditions OBLIGATOIRES à citer dans la rédaction :**

1. ✅ La suite (Un) **converge** (vers une limite finie L). → souvent prouvé juste avant par le TCM.
2. ✅ La suite est définie par `Un+1 = f(Un)`.
3. ✅ La fonction f est **continue** sur un intervalle contenant L. *(Souvent : f continue sur ℝ ou sur l'intervalle où vivent les Un.)*

**Conclusion :** Alors L est solution de l'équation `f(x) = x`.

**Rédaction type (à recopier mentalement le jour J) :**

> 1. (Préalable) On a montré que (Un) est croissante et majorée par 2. D'après le TCM, (Un) converge vers une limite finie L.
> 2. (Un) est définie par `Un+1 = f(Un)` avec `f(x) = √(x + 2)`.
> 3. La fonction f est continue sur `[−2 ; +∞[`, intervalle qui contient L.
> 4. D'après le théorème du point fixe, L vérifie `f(L) = L`, soit `√(L + 2) = L`.
> 5. On résout : `L² = L + 2` (avec L ≥ 0), donc `L² − L − 2 = 0`, donc `L = 2` ou `L = −1`. Comme L ≥ 0, **L = 2**.

⚠️ **Erreur classique à NE PAS faire :** appliquer le point fixe sans avoir prouvé la convergence d'abord. Si la suite diverge, l'équation `f(x) = x` peut très bien avoir des solutions, mais elles ne sont pas la limite de Un.

### 8. Croissances comparées (cas particulier)

**Au bac, on n'a le droit d'utiliser les croissances comparées QUE pour `eˣ` vs puissances de x (ou de n).**

| Forme | Limite | Mémo |
|---|---|---|
| `lim e^n / n^k` | +∞ (pour tout k) | l'exponentielle écrase tout |
| `lim n^k · e^(-n)` | 0 (pour tout k) | idem en version « 1/exp » |
| `lim ln(n) / n^k` | 0 (pour tout k > 0) | ln est encore plus lent |

**Exemple :** `lim (n³ + 2n) / e^n` → numérateur dominé par `n³`, dénom par `e^n`. Croissances comparées : `lim n³ / e^n = 0`, et `lim 2n/e^n = 0`. Donc `lim = 0`.

---

## VI. Anatomie d'un exo bac type "Suites" (sessions 2024-2025)

🎯 **Pattern récurrent confirmé sur 6+ sujets analysés** (Métropole 2024 J1/J2, 2025 J1/J2, septembre 2024/2025, Amérique du Nord 2025 J1/J2). Les suites apparaissent dans **TOUS** les sujets, sous 3 formes principales.

### Forme 1 : Suite récurrente définie par $u_{n+1} = f(u_n)$ (LE PATTERN ROI)

🎯 **Pattern observé sur** : Métropole 2024 J2 (chlore piscine), Métropole 2025 J1 (posidonie), Métropole sept 2025 J1 (glycémie discrète), Amérique du Nord 2025 J2 secours.

**Structure type** :

```
Partie A — Modèle discret (suite)
├── Q1. Calculer u_1, u_2 (vérification de compréhension)
├── Q2. "Montrer par récurrence que pour tout n, ... ≤ u_n ≤ ..."
│       → Encadrement par récurrence
├── Q3. Étudier la monotonie (signe de u_{n+1} - u_n OU récurrence)
├── Q4. "En déduire que (u_n) est convergente"
│       → TCM : monotone + bornée = convergente
├── Q5. "Déterminer la limite L de (u_n)"
│       → Point fixe : résoudre f(L) = L (avec continuité de f)
└── Q6. (parfois) Algorithme Python pour seuil de convergence

Partie B (parfois) — Modèle continu via ED ou étude de fonction
```

### Forme 2 : QCM Vrai/Faux sur les suites

🎯 **Pattern observé sur Métropole sept 2024 J1**.

**Structure type** : 5 affirmations indépendantes à dire vraies/fausses avec justification.

**Affirmations classiques** :
- "La suite $(w_n)$ définie par $w_n = u_n - L$ est géométrique." → calculer $w_{n+1}/w_n$ et vérifier que c'est une constante.
- "La suite $(u_n)$ converge." → identifier si bornée + monotone, ou utiliser gendarmes.
- "Pour tout $n$, $v_n = ...$" → récurrence ou calcul direct.
- "$\lim u_n = ...$" → calcul de limite avec croissances comparées ou gendarmes.

### Forme 3 : Suite auxiliaire géométrique (LA technique du sauveteur)

🎯 **Pattern bac classique** : on a une suite $u_{n+1} = au_n + b$ (arithmético-géométrique) et l'énoncé pose $v_n = u_n - \ell$ avec $\ell$ point fixe.

**Structure type** :
1. Q1. "Montrer que $(v_n)$ est géométrique" → calcul direct.
2. Q2. "En déduire l'expression de $v_n$ en fonction de $n$".
3. Q3. "En déduire l'expression de $u_n$".
4. Q4. "Déterminer la limite de $u_n$".
5. Q5. (parfois) Calculer une somme $\sum u_k$.

### Les 6 questions-types qui reviennent à TOUS les bacs

#### Q1 — "Montrer par récurrence que pour tout $n$, $P(n)$"

🎯 **C'est LA question fondamentale**. Pattern : encadrement, monotonie, ou formule explicite.

**Méthode (rédaction type)** :
> Soit $P(n)$ la propriété "$0 \leq u_n \leq 5$".
>
> **Initialisation** : $u_0 = 1$, donc $0 \leq u_0 \leq 5$. $P(0)$ est vraie.
>
> **Hérédité** : supposons $P(n)$ vraie pour un certain $n$, soit $0 \leq u_n \leq 5$. Montrons $P(n+1)$ : $0 \leq u_{n+1} \leq 5$.
>
> [calcul utilisant l'expression de $u_{n+1}$ et l'hypothèse de récurrence]
>
> Donc $P(n+1)$ est vraie.
>
> **Conclusion** : par récurrence, pour tout $n \in \mathbb{N}$, $P(n)$ est vraie.

⚠️ **Ne JAMAIS oublier les 3 étapes** : initialisation, hérédité, conclusion. Le correcteur les attend mot pour mot.

#### Q2 — "Étudier la monotonie de $(u_n)$"

**Méthodes au choix** :
- Calculer $u_{n+1} - u_n$ et étudier le signe.
- Si $u_n > 0$, calculer $u_{n+1}/u_n$ et comparer à 1.
- Récurrence : "$P(n) : u_n \leq u_{n+1}$".

#### Q3 — "Montrer que $(u_n)$ converge"

🎯 **Réponse standard** : appliquer le **théorème de convergence monotone (TCM)**.

**Rédaction** :
> $(u_n)$ est croissante (Q précédente) et majorée par 5 (Q précédente). D'après le théorème de convergence monotone, $(u_n)$ est convergente.

#### Q4 — "Déterminer la limite $L$ de $(u_n)$"

🎯 **Méthode point fixe** (3 conditions à citer) :
1. $(u_n)$ converge vers $L$ (déjà montré).
2. La relation $u_{n+1} = f(u_n)$ donne par passage à la limite (avec **continuité** de $f$) : $L = f(L)$.
3. Résoudre $f(L) = L$ et choisir la solution compatible avec l'encadrement.

⚠️ **Toujours vérifier que $L$ est dans le domaine** où la majoration/minoration s'applique.

#### Q5 — "Suite auxiliaire $(v_n)$ avec $v_n = u_n - \ell$ : montrer qu'elle est géométrique"

**Méthode** : calculer $v_{n+1}$ en fonction de $v_n$.
$$v_{n+1} = u_{n+1} - \ell = au_n + b - \ell$$
On choisit $\ell$ tel que $a\ell + b = \ell$ (point fixe), alors $v_{n+1} = a(u_n - \ell) = av_n$.
Donc $(v_n)$ est géométrique de raison $a$.

#### Q6 — "Algorithme Python pour seuil"

**Pattern** : compléter un script qui retourne le plus petit $n$ tel que $u_n > S$ (ou $|u_n - L| < \varepsilon$).

```python
def seuil(S):
    u = u_0  # valeur initiale
    n = 0
    while u <= S:  # condition à compléter
        u = ...  # relation de récurrence
        n = n + 1
    return n
```

### Variante : récurrence pour démontrer $u_n \leq v_n \leq w_n$ (encadrement à 3 niveaux)

🎯 **Vu sur Métropole 2024 J1** : démontrer un encadrement de 3 suites.

**Méthode** : récurrence avec propriété "$u_n \leq u_{n+1} \leq v_{n+1} \leq w_{n+1} \leq w_n$" — ce qui est plus fort qu'un simple encadrement.

### Sujets analysés (pour ta culture)

| Sujet | Contexte | Type |
|---|---|---|
| **Métropole 2024 J1** | Vrai/Faux + suite imbriquée | Encadrement à 3 niveaux par récurrence |
| **Métropole 2024 J2** | Chlore piscine | $u_{n+1} = au_n + b$ + suite auxiliaire géométrique |
| **Métropole 2025 J1** | Posidonie | $u_{n+1} = -0{,}02 u_n^2 + 1{,}3 u_n$ (récurrence non linéaire) |
| **Métropole sept 2024 J1** | QCM | 5 affirmations vrai/faux dont géométrique, gendarmes, formule explicite |
| **Métropole sept 2025 J1** | Glycémie | Suite récurrente $u_{n+1} = f(u_n)$ classique |
| **AmN 2025 J2 secours** | Suites définies par récurrence | Pattern classique récurrence + monotonie + TCM |

🎯 **Tu as 100% de chance d'avoir une suite à ton bac blanc**. Pattern le plus probable : récurrence type 3 ($u_{n+1} = f(u_n)$) avec encadrement, monotonie, TCM, point fixe.

### Schéma récap — le combo gagnant pour les suites récurrentes

```
1. u_{n+1} = f(u_n) avec u_0 donné
   ↓
2. Récurrence : montrer 0 ≤ u_n ≤ M (ou encadrement)
   ↓
3. Monotonie : étudier u_{n+1} - u_n (souvent factorisé via la récurrence)
   ↓
4. TCM : monotone + bornée = convergente vers L
   ↓
5. Point fixe : résoudre f(L) = L (avec continuité de f)
   ↓
6. Choisir L compatible avec l'encadrement
```

---

## VII. Anti-sèche : reconnaître la stratégie au premier coup d'œil

### Diagramme de décision

```
ÉNONCÉ : "Trouver lim Un"
│
├── Forme explicite Un = f(n) ?
│       └── Calcul direct (factoriser, croissances comparées si exp...)
│
├── Forme récurrente Un+1 = f(Un) ?
│       │
│       ├── Question préalable : "Montrer que (Un) est croissante/décroissante et bornée"
│       │       → C'est un signal pour TCM puis point fixe
│       │       1. Prouver la monotonie (récurrence ou Un+1 - Un)
│       │       2. Prouver la majoration/minoration (récurrence)
│       │       3. Conclure par TCM : (Un) converge vers L
│       │       4. Appliquer le point fixe : résoudre f(x) = x
│       │
│       └── Pas de question préalable ? → Chercher si Un est SA, SG ou SAG
│
└── Présence de sin/cos/(-1)^n ?
        └── Gendarmes (encadrement par des termes qu'on sait calculer)
```

---

## VIII. Check-list finale avant de rendre la copie

- [ ] J'ai bien justifié **chaque** application de théorème (gendarmes, comparaison, point fixe…)
- [ ] Pour le **point fixe**, j'ai cité les **3 conditions** (convergence, récurrence, continuité)
- [ ] Pour la **récurrence**, j'ai bien fait : init + hérédité + conclusion (les 3 étapes)
- [ ] Je n'ai pas confondu **« variations de f »** et **« variations de (Un) »** dans une suite récurrente
- [ ] Je n'ai pas dit qu'une suite était SA/SG juste sur deux termes
- [ ] J'ai vérifié le **sens des inégalités** quand f est décroissante
- [ ] Pour les **pourcentages**, j'ai bien traduit en coefficient multiplicateur
- [ ] J'ai compté correctement le **nombre de termes** dans une somme

---

