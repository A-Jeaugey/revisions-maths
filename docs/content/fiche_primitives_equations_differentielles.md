# 📐 Fiche de Combat — Primitives et Équations Différentielles

> **Bac blanc — Terminale Maths Spé**
> Couvre primitives (lecture inverse de la dérivation) et équations différentielles ($y'=ay$, $y'=ay+b$, $y'=ay+\phi$).

---

## ⚡ Carte des réflexes

| Tu vois ça dans l'énoncé... | Tu déclenches... |
|---|---|
| « Déterminer une primitive de $f$ » | Lecture inverse du tableau (§II.1) |
| « Vérifier que $F$ est une primitive de $f$ » | Calculer $F'$ et vérifier $F'(x) = f(x)$ |
| Forme $u'(x) e^{u(x)}$, $u'(x)\cdot u(x)^n$, $u'/u$ | Reconnaître la forme remarquable (§II.2) |
| « Résoudre $y' = ay$ » | Solutions $x \mapsto Ce^{ax}$ (§III.1) |
| « Résoudre $y' = ay + b$ » | Solution particulière constante $-b/a$ + générale $Ce^{ax} - b/a$ (§III.2) |
| « Résoudre $y' = ay + \phi(x)$ » | Trouver une solution particulière P, puis $f - P$ vérifie $y' = ay$ (§III.3) |
| « Trouver la solution telle que $f(x_0) = y_0$ » | Substituer pour trouver $C$ (§III, méthode condition initiale) |

---

## I. Définitions fondamentales

### 1. Équation différentielle

Une **équation différentielle** est une égalité reliant une fonction inconnue $y$, ses dérivées successives $y'$, $y''$, ..., et éventuellement la variable $x$ et d'autres fonctions.

**Résoudre une équation différentielle**, c'est trouver **TOUTES** les fonctions solutions vérifiant l'égalité.

⚠️ **Attention** : "résoudre" = trouver toutes les solutions. Pas juste une.

**Exemples :**
- $y' = x^3$ et $y' - y = 1$ : équations du **1er ordre** (interviennent $y$ et $y'$).
- $y'' + y' = 2x$ : équation du **2nd ordre** (interviennent $y$, $y'$, $y''$).

🎯 **Au bac** : tu rencontreras quasi exclusivement des équations du **1er ordre** de la forme $y' = ay$, $y' = ay + b$ ou $y' = ay + \phi(x)$.

### 2. Primitive d'une fonction

**Définition :** $F$ est une **primitive** de $f$ sur un intervalle $I$ si $F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \in I$.

**Mnémonique :** "$F$ a pour dérivée $f$, donc $f$ a pour primitive $F$."

**Lien avec les équations différentielles :** trouver une primitive de $f$, c'est résoudre l'équation $y' = f$.

### 3. Trois propriétés fondamentales (à connaître par cœur)

**Propriété 1 :** toute fonction **continue** sur $I$ admet des primitives sur $I$.

**Propriété 2 :** deux primitives de $f$ sur $I$ **diffèrent d'une constante**.
$$F \text{ et } G \text{ primitives de } f \implies F(x) - G(x) = k \quad (k \in \mathbb{R})$$

**Conséquence** : une fonction continue admet une **infinité** de primitives, toutes de la forme $F(x) + k$.

**Propriété 3 (unicité avec condition initiale) :** pour tous réels $x_0$ et $y_0$, il existe une **unique** primitive $F$ de $f$ telle que $F(x_0) = y_0$.

🎯 **Réflexe bac** : quand l'énoncé donne une condition $F(x_0) = y_0$, tu sais que la primitive est **unique**. Tu calcules $F(x) = (\text{primitive générale}) + k$ et tu trouves $k$ avec la condition.

---

## II. Recherche de primitives

### 1. Primitives des fonctions usuelles (lecture inverse de la dérivation)

🎯 **À CONNAÎTRE PAR CŒUR** :

| Fonction $f$ | Une primitive $F$ | Intervalle |
|---|---|---|
| $f(x) = a$ | $F(x) = ax$ | $\mathbb{R}$ |
| $f(x) = x$ | $F(x) = \dfrac{1}{2}x^2$ | $\mathbb{R}$ |
| $f(x) = x^2$ | $F(x) = \dfrac{1}{3}x^3$ | $\mathbb{R}$ |
| $f(x) = x^n$ ($n \in \mathbb{N}^*$) | $F(x) = \dfrac{1}{n+1}x^{n+1}$ | $\mathbb{R}$ |
| $f(x) = \dfrac{1}{x}$ | $F(x) = \ln x$ | $]0\,;\,+\infty[$ |
| $f(x) = \dfrac{1}{x^2}$ | $F(x) = -\dfrac{1}{x}$ | $]-\infty\,;\,0[$ ou $]0\,;\,+\infty[$ |
| $f(x) = e^x$ | $F(x) = e^x$ | $\mathbb{R}$ |
| $f(x) = \dfrac{1}{2\sqrt{x}}$ | $F(x) = \sqrt{x}$ | $]0\,;\,+\infty[$ |
| $f(x) = \cos x$ | $F(x) = \sin x$ | $\mathbb{R}$ |
| $f(x) = \sin x$ | $F(x) = -\cos x$ | $\mathbb{R}$ |

⚠️ **Le piège classique** : la primitive de $\sin x$ est $-\cos x$ (signe moins), et la dérivée de $\cos x$ est $-\sin x$ (idem). Ne pas inverser.

### 2. Primitives de formes remarquables (LE tableau central)

🎯 **C'EST LE TABLEAU À MAÎTRISER**. C'est la lecture inverse des formules de dérivation des composées (cf. fiche limites/composée).

| Fonction $f$ | Une primitive $F$ | Condition |
|---|---|---|
| $kf$ | $kF$ | $k$ réel |
| $f + g$ | $F + G$ | — |
| $u'(x) e^{u(x)}$ | $e^{u(x)}$ | — |
| $2u'(x) \cdot u(x)$ | $u(x)^2$ | — |
| $u'(x) \cdot u(x)^n$ | $\dfrac{1}{n+1} u(x)^{n+1}$ | $n \in \mathbb{N}$ |
| $\dfrac{u'(x)}{u(x)}$ | $\ln(u(x))$ si $u > 0$, $\ln(-u(x))$ si $u < 0$ | $u$ ne s'annule pas |
| $\dfrac{u'(x)}{u(x)^n}$ | $\dfrac{-1}{(n-1) u(x)^{n-1}}$ | $n \neq 1$ |
| $\dfrac{u'(x)}{\sqrt{u(x)}}$ | $2\sqrt{u(x)}$ | $u(x) > 0$ |
| $u'(x) \sin(u(x))$ | $-\cos(u(x))$ | — |
| $u'(x) \cos(u(x))$ | $\sin(u(x))$ | — |

🎯 **Méthode** : pour trouver une primitive d'une expression compliquée, **identifier la forme** ($u' e^u$, $u'/u$, etc.) en repérant **$u$** et **$u'$**.

### 3. Exemples chiffrés (les classiques bac)

**Exemple 1 :** primitive de $f(x) = 5x^2$ sur $\mathbb{R}$.

Application directe : $F(x) = 5 \times \dfrac{1}{3}x^3 = \dfrac{5}{3}x^3$.

**Exemple 2 :** primitive de $f(x) = x^3 + \dfrac{1}{x}$ sur $]0\,;\,+\infty[$.

Linéarité : $F(x) = \dfrac{1}{4}x^4 + \ln(x)$.

**Exemple 3 (forme $u'e^u$) :** primitive de $f(x) = 3e^{3x+1}$ sur $\mathbb{R}$.

On reconnaît $f = u' e^u$ avec $u(x) = 3x+1$ et $u'(x) = 3$. Donc $F(x) = e^{3x+1}$.

**Exemple 4 (forme $u'/u$) :** primitive de $g(x) = \dfrac{4}{3x+1}$ sur $]-1/3\,;\,+\infty[$.

On reconnaît la forme $\dfrac{u'}{u}$ avec $u(x) = 3x+1$, $u'(x) = 3$. On factorise pour faire apparaître $u'$ :
$$g(x) = \dfrac{4}{3} \times \dfrac{3}{3x+1} = \dfrac{4}{3} \times \dfrac{u'(x)}{u(x)}$$

Donc $G(x) = \dfrac{4}{3} \ln(3x+1)$.

**Exemple 5 (forme $u'e^u$) :** primitive de $h(x) = e^{3x+2}$ sur $\mathbb{R}$.

On a besoin du facteur 3 manquant. On écrit :
$$h(x) = \dfrac{1}{3} \times 3e^{3x+2} = \dfrac{1}{3} \times u'(x) e^{u(x)}$$

Donc $H(x) = \dfrac{1}{3} e^{3x+2}$.

🎯 **Méthode "forcer la forme"** : si on a $e^{ax+b}$ sans le facteur $a$, on multiplie/divise par $a$ pour forcer la forme $u'e^u$. C'est l'astuce n°1 au bac.

### 4. Méthode pour trouver une primitive (squelette)

1. **Identifier la forme** : est-ce une fonction usuelle ? Une somme ? Une forme remarquable ($u'e^u$, $u'/u$, etc.) ?
2. **Si somme** : décomposer et primitiver chaque terme (linéarité).
3. **Si forme remarquable** : identifier $u$ et $u'$, écrire la primitive correspondante.
4. **Si manque de constante** : multiplier/diviser pour forcer la forme (technique du facteur).
5. **Vérifier** : dériver $F$ pour vérifier $F' = f$ (toujours faire la vérification rapide en brouillon).

---

## III. Équations différentielles linéaires du 1er ordre

### 1. Équation $y' = ay$ (homogène)

🎯 **THÉORÈME CENTRAL** : les solutions de $y' = ay$ sur $\mathbb{R}$ sont les fonctions :
$$x \mapsto C e^{ax}$$

où $C$ est une constante réelle quelconque.

**Avec condition initiale** : pour tous $x_0$ et $y_0$ donnés, il existe une **unique** solution $f$ telle que $f(x_0) = y_0$.

**Allure des courbes** :
- Si $a > 0$ et $C > 0$ : croissante, tend vers $+\infty$ en $+\infty$.
- Si $a > 0$ et $C < 0$ : décroissante, tend vers $-\infty$ en $+\infty$.
- Si $a < 0$ et $C > 0$ : décroissante (décroissance exponentielle).
- Si $a < 0$ et $C < 0$ : croissante (vers 0 par valeurs négatives).

### 2. Équation $y' = ay + b$ (avec second membre constant, $a \neq 0$)

🎯 **THÉORÈME** : les solutions de $y' = ay + b$ sur $\mathbb{R}$ sont les fonctions :
$$x \mapsto C e^{ax} - \dfrac{b}{a}$$

où $C$ est une constante réelle.

**Décomposition à comprendre** :
- **Solution particulière constante** : $p(x) = -\dfrac{b}{a}$ (vérifie $p'(x) = 0$ et $a \cdot p(x) + b = 0$). 
- **Solutions générales** = solutions de $y' = ay$ (qui sont $Ce^{ax}$) **+ solution particulière** $-b/a$.

**Méthode systématique** :
1. Calculer la solution particulière constante $p = -\dfrac{b}{a}$.
2. Écrire la solution générale : $y(x) = Ce^{ax} + p = Ce^{ax} - \dfrac{b}{a}$.
3. Si une condition initiale est donnée, déterminer $C$.

### 3. Équation $y' = ay + \phi(x)$ (avec second membre fonction)

🎯 **MÉTHODE** : on procède de manière **analogue** à $y' = ay + b$, mais avec une solution particulière qui est une fonction $P(x)$ (et plus une constante).

**Étapes** :
1. **Trouver (ou vérifier) une solution particulière** $P$ de l'équation. Souvent l'énoncé la donne et demande de vérifier.
2. **$f$ est solution** $\iff$ **$f - P$ est solution de $y' = ay$**.
3. Donc $f(x) - P(x) = Ce^{ax}$, soit $f(x) = Ce^{ax} + P(x)$.
4. Si une condition initiale est donnée, déterminer $C$.

**Justification (à savoir reproduire en exo)** :

Si $f$ et $P$ sont deux solutions de $(E) : y' = ay + \phi$, alors :
- $f' = af + \phi$
- $P' = aP + \phi$

En soustrayant : $f' - P' = a(f - P)$, soit $(f - P)' = a(f - P)$.

Donc $f - P$ est solution de $y' = ay$, donc de la forme $Ce^{ax}$.

### 4. Tableau récapitulatif des équations différentielles

🎯 **À MÉMORISER COMME UNE TABLE** :

| Équation | Solutions générales | Méthode |
|---|---|---|
| $y' = f$ | $y = F + C$ avec $F$ primitive de $f$ | Trouver une primitive |
| $y' = ay$ | $y(x) = Ce^{ax}$ | Direct (formule) |
| $y' = ay + b$ ($a \neq 0$) | $y(x) = Ce^{ax} - \dfrac{b}{a}$ | Sol. particulière constante $-b/a$ + sol. générale |
| $y' = ay + \phi(x)$ | $y(x) = Ce^{ax} + P(x)$ avec $P$ sol. particulière | Trouver/vérifier $P$, ajouter $Ce^{ax}$ |

### 5. Méthode "trouver la solution telle que $f(x_0) = y_0$"

C'est la dernière étape récurrente au bac.

**Étapes** :
1. Écrire la solution générale (avec $C$).
2. Substituer $x_0$ : $f(x_0) = y_0$ donne une équation en $C$.
3. Résoudre pour trouver $C$.
4. Réécrire la solution finale avec la valeur trouvée de $C$.

---

## IV. Exemples chiffrés complets (les exos type bac)

### Exemple 1 : équation $y' = ay$ avec condition initiale

**Énoncé** : résoudre $(E) : y' = -4y$ sur $\mathbb{R}$. Déterminer la solution $f$ telle que $f(2) = 1$.

**Étape 1 — Solutions générales** : les solutions sont $y(x) = Ce^{-4x}$ avec $C \in \mathbb{R}$.

**Étape 2 — Condition initiale** : $f(2) = 1$ donne $Ce^{-8} = 1$, soit $C = e^{8}$.

**Étape 3 — Conclusion** : $f(x) = e^8 \times e^{-4x} = e^{8 - 4x}$.

### Exemple 2 : équation $y' = ay$ avec point sur la courbe

**Énoncé** : déterminer la solution $g$ de $(E) : y' = -4y$ dont la courbe passe par $A(1\,;\,-3)$.

**Solution** : $g(1) = -3$ donne $Ce^{-4} = -3$, soit $C = -3e^4$.

Donc $g(x) = -3e^4 \times e^{-4x} = -3e^{4-4x}$.

### Exemple 3 : équation $y' = ay + b$

**Énoncé** : soit $(E) : y' = 2y + 6$.
1. Déterminer une solution particulière de $(E)$.
2. En déduire toutes les solutions de $(E)$.
3. Déterminer la solution dont la courbe passe par $(1\,;\,4)$.

**Q1** : la solution particulière constante est $p(x) = -\dfrac{b}{a} = -\dfrac{6}{2} = -3$.

**Q2** : les solutions sont $y(x) = Ce^{2x} - 3$ avec $C \in \mathbb{R}$.

**Q3** : la courbe passe par $(1\,;\,4)$ donne $f(1) = 4$, soit $Ce^{2} - 3 = 4$, donc $Ce^2 = 7$ et $C = 7e^{-2}$.

**Conclusion** : $f(x) = 7e^{-2} \times e^{2x} - 3 = 7e^{2x-2} - 3$.

### Exemple 4 : équation $y' = ay + \phi(x)$

**Énoncé** : soit $(E) : y' = 2y + e^{3x}$.
1. Vérifier que $g : x \mapsto e^{3x}$ est solution de $(E)$.
2. Montrer que $f$ est solution de $(E)$ $\iff$ $f - g$ est solution de $(E') : y' = 2y$.
3. En déduire l'ensemble des solutions de $(E)$.

**Q1** : $g(x) = e^{3x}$ donc $g'(x) = 3e^{3x}$. On vérifie :
$$2g(x) + e^{3x} = 2e^{3x} + e^{3x} = 3e^{3x} = g'(x) \checkmark$$
Donc $g$ est solution de $(E)$.

**Q2** : $f$ solution de $(E)$ $\iff$ $f' = 2f + e^{3x}$.
Comme $g$ est solution : $g' = 2g + e^{3x}$.
Soustraction : $f' - g' = 2(f - g)$, soit $(f - g)' = 2(f - g)$.
Donc $f - g$ est solution de $(E') : y' = 2y$. ✓

**Q3** : les solutions de $(E')$ sont $x \mapsto Ce^{2x}$. Donc $f - g$ est de cette forme :
$$f(x) - g(x) = Ce^{2x} \iff f(x) = Ce^{2x} + e^{3x}$$

L'ensemble des solutions de $(E)$ est $\{x \mapsto Ce^{2x} + e^{3x} \mid C \in \mathbb{R}\}$.

---

## V. Diagramme de décision

```
Tu lis l'énoncé. Quel type de problème ?
│
├── "Déterminer une primitive de f" ?
│       ├── f est usuelle → tableau §II.1
│       ├── f est une somme → linéarité, primitiver chaque terme
│       └── f a une forme remarquable → identifier u et u', tableau §II.2
│           └── Manque un facteur ? → multiplier/diviser pour forcer la forme
│
├── "Vérifier que F est une primitive de f" ?
│       └── Calculer F' et vérifier F'(x) = f(x)
│
├── "Résoudre y' = ay" ?
│       └── Solutions : x ↦ Ce^(ax)
│
├── "Résoudre y' = ay + b" ?
│       ├── Solution particulière constante : -b/a
│       └── Solutions : x ↦ Ce^(ax) - b/a
│
├── "Résoudre y' = ay + φ(x)" ?
│       ├── Trouver/vérifier une solution particulière P
│       ├── f - P solution de y' = ay donc f - P = Ce^(ax)
│       └── Solutions : x ↦ Ce^(ax) + P(x)
│
└── "Trouver la solution telle que f(x₀) = y₀" ?
        ├── Écrire la solution générale (avec C)
        ├── Substituer x₀ : équation en C
        └── Résoudre pour C, conclure
```

---

## VI. Anatomie d'un exo bac type "Équations différentielles" (sessions 2024-2025)

🎯 **Pattern récurrent confirmé sur 6 sujets analysés** (Métropole 2024 J1, J2, 2025 J1, J2, septembre 2025, Amérique du Nord 2025 J1). Les ED tombent **dans presque tous les sujets** depuis 2024.

### Forme 1 : QCM Vrai/Faux (Métropole 2024 J1)

🎯 **Pattern observé** : on donne $f(x) = 5xe^{-x}$ et l'équation $(E): y' + y = 5e^{-x}$. On demande si $f$ est solution.

**Méthode** : dériver $f$, calculer $f' + f$, vérifier l'égalité avec le membre de droite.

**Calcul type** :
- $f(x) = 5xe^{-x}$
- $f'(x) = 5e^{-x} + 5x \cdot (-e^{-x}) = 5e^{-x}(1 - x)$
- $f'(x) + f(x) = 5e^{-x}(1-x) + 5xe^{-x} = 5e^{-x}$ ✓

L'affirmation "$f$ vérifie $(E)$" est **VRAIE**.

### Forme 2 : exo dédié aux ED en partie d'un problème (très fréquent)

**Pattern observé sur Métropole 2024 J2 (chlore piscine), Métropole 2025 J1 (posidonie), Métropole sept 2025 J1 (glycémie), Amérique du Nord 2025 J1.**

**Structure type** :

```
Partie A — Suite récurrente discrète (modèle discret)
└── Étude d'une suite u_{n+1} = f(u_n) (récurrence, encadrement, convergence)

Partie B — Modèle continu via équation différentielle (BASCULE !)
├── Q1. "Vérifier qu'une fonction donnée est solution d'une certaine équation"
├── Q2. "Soit (H) : y' = ay l'équation homogène. Résoudre (H)."
├── Q3. "En déduire les solutions de (E) : y' = ay + b ou y' = ay + φ(x)"
├── Q4. "Trouver la solution telle que f(0) = ... ou avec C = ..."
├── Q5. (étude de la fonction obtenue : limites, variations, asymptote)
└── Q6. (parfois : intégrale ou valeur moyenne sur cette fonction)
```

### Les 5 questions-types qui reviennent à TOUS les bacs

#### Q1 — "Vérifier que $g$ est solution de $(E)$"

**Méthode** : calculer $g'$, calculer le membre de droite avec $g$, vérifier l'égalité.

**Exemple Métropole sept 2025 (glycémie)** : "Soit $u(t) = t e^{-0{,}4t}$. Vérifier que $u$ est solution de $(E) : y' + 0{,}4y = e^{-0{,}4t}$."

**Calcul** :
- $u'(t) = e^{-0{,}4t} + t \cdot (-0{,}4)e^{-0{,}4t} = e^{-0{,}4t}(1 - 0{,}4t)$
- $u'(t) + 0{,}4 u(t) = e^{-0{,}4t}(1 - 0{,}4t) + 0{,}4t e^{-0{,}4t} = e^{-0{,}4t}$ ✓

#### Q2 — "Résoudre l'équation homogène $(H) : y' = ay$ ou $y' + ay = 0$"

⚠️ **Attention au piège** : $y' + ay = 0$ est équivalent à $y' = -ay$. Solutions : $y(x) = Ce^{-ax}$ (avec un signe **moins**).

**Exemple Métropole sept 2025** : $(H) : y' + 0{,}4 y = 0 \iff y' = -0{,}4 y$. Solutions : $y(t) = Ce^{-0{,}4t}$.

#### Q3 — "En déduire les solutions de $(E)$"

**Méthode** : combiner solution particulière (donnée ou trouvée) + solution générale de l'homogène.

🎯 **Pattern** : si $u$ est solution particulière de $(E)$ et que les solutions de $(H)$ sont $Ce^{ax}$, alors les solutions de $(E)$ sont $f(t) = u(t) + Ce^{ax}$.

**Exemple Métropole sept 2025** : sol. particulière $u(t) = te^{-0{,}4t}$, sol. de $(H)$ : $Ce^{-0{,}4t}$. Donc solutions de $(E)$ : $f(t) = te^{-0{,}4t} + Ce^{-0{,}4t}$.

#### Q4 — "Déterminer la solution avec une condition initiale"

**Pattern type** : "Trouver $C$ tel que $f(0) = 0{,}9$" ou "tel que $\mathcal{C}_f$ passe par $A$".

**Méthode** : substituer, résoudre, conclure.

#### Q5 — "Étude de la fonction solution"

🎯 **C'est là où ED bascule sur étude de fonction**. On t'a donné une expression de $f$, et on enchaîne :
- Calculer $f'$
- Étudier les variations
- Calculer les limites en $\pm\infty$
- Déterminer une asymptote (souvent $y = -b/a$ pour les équations $y' = ay + b$)
- Étudier la convexité
- Parfois : calculer $\int_0^T f(t)\,dt$ ou la valeur moyenne (cf. fiche intégration)

### Variante sophistiquée : "changement de fonction" (Métropole 2025 J1, posidonie)

🎯 **Pattern avancé** : on te donne une équation $(E_1)$ non-linéaire ou pas de la forme $y' = ay + b$. On pose $g = 1/f$ (ou autre transformation) et on demande de montrer que $g$ vérifie une équation différentielle plus simple $(E_2)$.

**Exemple bac (Métropole 2025 J1, posidonie) :**
- $(E_1) : y' = 0{,}02 y(15 - y)$ (non-linéaire, pas au programme direct)
- On pose $g = 1/f$.
- Question : "Montrer que $g$ est solution de $(E_2) : y' = -0{,}3 y + 0{,}02$" (linéaire, classique).

**Méthode** : dériver $g = 1/f$ → $g'(t) = -\dfrac{f'(t)}{f(t)^2}$, puis substituer $f'(t) = 0{,}02 f(t)(15 - f(t))$ et simplifier.

**Astuce** : ces exos décomposent le difficile en étapes guidées. On n'a **jamais** à inventer la transformation soi-même au bac.

### Exemple complet : Métropole 2025 J1 (posidonie)

**Contexte** : modélisation de la croissance d'algues posidonies sur 20 hectares.

**Partie B (squelette)** :
1. $f$ vérifie $(E_1) : y' = 0{,}02 y(15 - y)$ (non-linéaire).
2. On pose $g(t) = 1/f(t)$.
3. **Q :** Montrer que $g$ est solution de $(E_2) : y' = -0{,}3 y + 0{,}02$. → Calcul direct via dérivation.
4. **Q :** Donner les solutions de $(E_2)$. → Solution particulière $\dfrac{0{,}02}{0{,}3} = \dfrac{1}{15}$. Solutions : $g(t) = Ce^{-0{,}3t} + \dfrac{1}{15}$.
5. **Q :** En déduire $f(t) = \dfrac{15}{14e^{-0{,}3t} + 1}$. → Utiliser $f = 1/g$ et la condition initiale $f(0) = 1$.

🎯 **Cette structure tombe à 70% sur le bac** quand l'exo contient des ED. La transformation de fonction est l'astuce-clé.

### Sujets analysés (pour ta culture)

| Sujet | Contexte | Type d'ED |
|---|---|---|
| **Métropole 2024 J1** | QCM | $y' + y = 5e^{-x}$ (vérification) |
| **Métropole 2024 J2** | Chlore piscine | $y' = -0{,}08y + q$ (équation $y' = ay + b$ classique) |
| **Métropole 2025 J1** | Posidonie | $(E_1)$ non-linéaire → $(E_2) : y' = -0{,}3y + 0{,}02$ via transformation $g = 1/f$ |
| **Métropole 2025 J2** | (étude fonction sans ED principale) | - |
| **Métropole sept 2025 J1** | Glycémie | $(E) : y' + 0{,}4y = e^{-0{,}4t}$ via décomposition avec $u(t) = te^{-0{,}4t}$ |
| **Amérique du Nord 2025 J1** | Manège (freinage) | ED + étude fonction + IPP |

🎯 **Tu as 80% de chances d'avoir une ED à ton bac blanc**. Le pattern le plus fréquent : équation $y' = ay + b$ ou $y' = ay + \phi$, avec une fonction donnée à vérifier en solution particulière.

---

## VII. Check-list de relecture

- [ ] Pour une primitive, j'ai vérifié en dérivant : $F'(x) = f(x)$.
- [ ] Pour une forme remarquable, j'ai bien identifié $u$ et $u'$ avant d'écrire la primitive.
- [ ] Pour $\dfrac{u'}{u}$, j'ai vérifié que $u$ ne s'annule pas sur l'intervalle.
- [ ] Pour $u'e^u$ ou $u'\sin u$, j'ai pensé à **multiplier/diviser** par la constante manquante si nécessaire.
- [ ] Pour $y' = ay$, j'ai bien écrit $Ce^{ax}$ (et pas $Ce^x$).
- [ ] Pour $y' = ay + b$, j'ai ajouté la solution particulière $-\dfrac{b}{a}$ (avec le **signe moins**).
- [ ] Pour une condition initiale, j'ai bien substitué et résolu pour $C$.
- [ ] Pour $y' = ay + \phi$, j'ai bien justifié que $f - P$ est solution de $y' = ay$.

---

## VIII. Anti-sèche : les pièges classiques du correcteur

1. **Oubli du signe moins dans $-b/a$** : la solution particulière de $y' = ay + b$ est $-b/a$ et pas $b/a$. Erreur n°1.

2. **Primitive de $\sin x$ confondue avec dérivée** : la primitive de $\sin x$ est $-\cos x$. Tu as bien souvent écrit $\cos x$ par réflexe. Vérifier en dérivant.

3. **Forme $u'e^u$ sans le facteur $u'$** : pour $f(x) = e^{3x+2}$, la primitive n'est PAS $e^{3x+2}$ mais $\dfrac{1}{3}e^{3x+2}$ (il faut diviser par $u' = 3$).

4. **Forme $\dfrac{u'}{u}$ avec $u$ négatif** : si $u(x) < 0$, la primitive est $\ln(-u(x))$ (avec la valeur absolue ou le moins). Souvent écrit $\ln u$ qui n'a pas de sens.

5. **Solution générale avec un seul terme** : pour $y' = ay + b$, écrire $y = Ce^{ax}$ tout court est faux. Il manque le $-b/a$.

6. **Confusion entre $y' = ay$ et $y' = a$** : le premier donne $Ce^{ax}$ (exponentielle), le second donne $ax + C$ (affine). Ne pas confondre.

7. **Constante $C$ oubliée** : ne JAMAIS oublier le $+ C$ dans une primitive, ni le $C$ dans la solution générale d'une ED. Si l'énoncé demande "toutes les solutions", $C$ est obligatoire.

8. **Vérification en dérivant non faite** : pour les primitives, toujours vérifier en dérivant. Ça prend 10 secondes et évite les erreurs bêtes.

9. **Confusion ordre dans IPP** : pas de panique, l'IPP est dans la fiche intégration.

10. **Oubli de l'intervalle de validité** : pour $\ln$, $1/x$, $\sqrt{x}$, toujours préciser l'intervalle où la primitive est définie.

---

