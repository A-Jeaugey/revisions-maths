# ∫ Fiche de Combat — Intégration

> **Bac blanc — Terminale Maths Spé**
> Suite directe de la fiche primitives : intégrales, propriétés, aire entre courbes, valeur moyenne, IPP.

---

## ⚡ Carte des réflexes

| Tu vois ça dans l'énoncé... | Tu déclenches... |
|---|---|
| « Calculer $\int_a^b f(t)\,dt$ » | Trouver une primitive $F$, calculer $F(b) - F(a)$ (§I.2) |
| « Aire sous la courbe » (fonction positive) | $\int_a^b f(t)\,dt$ en u.a. (§I.1) |
| « Aire entre $\mathcal{C}_f$ et $\mathcal{C}_g$ » | $\int_a^b [g(x) - f(x)]\,dx$ avec $f \leq g$ (§III.4) |
| « Décomposer $\int_a^b$ avec un point intermédiaire $c$ » | **Relation de Chasles** (§II.2) |
| « Valeur moyenne de $f$ sur $[a\,;\,b]$ » | $\dfrac{1}{b-a}\int_a^b f(t)\,dt$ (§III.5) |
| Intégrale avec un produit ($x \cdot e^x$, $x \cdot \ln x$, etc.) | **Intégration par parties** (§IV) |
| « Montrer que $\int \geq 0$ » ou « comparer deux intégrales » | Positivité / croissance de l'intégrale (§III.3) |

---

## I. Définition et théorème fondamental

### 1. Définition (cas d'une fonction continue positive)

**Cadre** : soit $f$ une fonction continue et **positive** sur $[a\,;\,b]$ avec $a \leq b$.

**Définition** : l'**intégrale de $a$ à $b$ de $f$**, notée $\displaystyle\int_a^b f(t)\,dt$, est l'**aire** du domaine compris entre :
- l'axe des abscisses,
- la courbe de $f$,
- les droites verticales $x = a$ et $x = b$,

exprimée en **unités d'aire** (u.a.).

**Notations équivalentes** (la variable $t$ est dite "muette") :
$$\int_a^b f(t)\,dt = \int_a^b f(x)\,dx = \int_a^b f(u)\,du$$

🎯 **Conséquence visuelle** : pour une fonction positive, l'intégrale donne l'aire géométrique. Quand $f$ peut être négative, l'aire géométrique vaut $\int_a^b |f(t)|\,dt$ (à découper selon le signe de $f$).

### 2. Théorème fondamental (LE théorème central)

🎯 **À CONNAÎTRE** : soit $f$ une fonction continue positive sur $[a\,;\,b]$. La fonction $F$ définie sur $[a\,;\,b]$ par :
$$F(x) = \int_a^x f(t)\,dt$$

est dérivable sur $[a\,;\,b]$, et $F'(x) = f(x)$ pour tout $x \in [a\,;\,b]$.

**Autrement dit** : $F$ est **la primitive de $f$ qui s'annule en $a$** ($F(a) = 0$).

### 3. Calcul de l'intégrale via une primitive (LA formule à utiliser)

🎯 **FORMULE CENTRALE** : pour calculer une intégrale, on cherche une primitive et on utilise :

$$\boxed{\int_a^b f(t)\,dt = \left[F(t)\right]_a^b = F(b) - F(a)}$$

où $F$ est **n'importe quelle** primitive de $f$ sur un intervalle contenant $[a\,;\,b]$.

⚠️ **Pourquoi "n'importe quelle"** : deux primitives diffèrent d'une constante, donc $F(b) - F(a)$ est indépendant du choix.

### 4. Exemples chiffrés

**Exemple 1** : $\displaystyle\int_0^6 (2t + 1)\,dt$.
Primitive de $f(t) = 2t + 1$ : $F(t) = t^2 + t$.
$$\int_0^6 (2t+1)\,dt = [t^2 + t]_0^6 = (36 + 6) - 0 = 42$$

**Exemple 2** : $\displaystyle\int_{-1}^2 (x^2 + 4x + 7)\,dx$.
Primitive : $G(x) = \dfrac{1}{3}x^3 + 2x^2 + 7x$.
$$\int_{-1}^2 (x^2 + 4x + 7)\,dx = G(2) - G(-1) = \left(\dfrac{8}{3} + 8 + 14\right) - \left(-\dfrac{1}{3} + 2 - 7\right) = 30$$

---

## II. Intégrale d'une fonction continue (cas général)

### 1. Généralisation

**Propriété** : toute fonction **continue** sur un intervalle $I$ admet des primitives.

**Définition étendue** : pour une fonction $f$ continue de **signe quelconque** sur $I$ contenant $a$ et $b$ :
$$\int_a^b f(t)\,dt = F(b) - F(a)$$

⚠️ **Important** :
- $f$ peut être positive, négative, ou de signe variable.
- $a$ et $b$ peuvent être dans n'importe quel ordre ($a > b$ autorisé).

**Exemples** :
- $\displaystyle\int_5^2 (1 - t^2)\,dt = \left[t - \dfrac{1}{3}t^3\right]_5^2 = (2 - \dfrac{8}{3}) - (5 - \dfrac{125}{3}) = 36$
- $\displaystyle\int_1^2 (1 - t)\,dt = \left[t - \dfrac{1}{2}t^2\right]_1^2 = -\dfrac{1}{2}$ (négatif car $1 - t < 0$ sur $[1\,;\,2]$)

### 2. Propriétés algébriques (à connaître par cœur)

🎯 **Soit $f$ continue sur $I$, $a, b, c$ trois réels de $I$** :

**Intégrale nulle** :
$$\int_a^a f(t)\,dt = 0$$

**Inversion des bornes** :
$$\int_a^b f(t)\,dt = -\int_b^a f(t)\,dt$$

**Relation de Chasles** (la plus utilisée) :
$$\boxed{\int_a^b f(t)\,dt = \int_a^c f(t)\,dt + \int_c^b f(t)\,dt}$$

🎯 **Interprétation Chasles** : si $a < c < b$ et $f \geq 0$, c'est l'additivité des aires. Mais Chasles fonctionne aussi pour $c$ extérieur à $[a\,;\,b]$.

### 3. Linéarité de l'intégrale

🎯 **Propriété centrale** : soit $f, g$ continues sur $I$, $\alpha$ un réel :

$$\int_a^b [f(t) + g(t)]\,dt = \int_a^b f(t)\,dt + \int_a^b g(t)\,dt$$

$$\int_a^b \alpha f(t)\,dt = \alpha \int_a^b f(t)\,dt$$

**Combiné** :
$$\int_a^b [\alpha f(t) + \beta g(t)]\,dt = \alpha \int_a^b f(t)\,dt + \beta \int_a^b g(t)\,dt$$

**Exemple** : $\displaystyle\int_0^1 (2e^x + x)\,dx = 2\int_0^1 e^x\,dx + \int_0^1 x\,dx = 2[e^x]_0^1 + \left[\dfrac{1}{2}x^2\right]_0^1 = 2(e - 1) + \dfrac{1}{2} = 2e - \dfrac{3}{2}$.

---

## III. Inégalités, aire entre courbes, valeur moyenne

### 1. Positivité de l'intégrale

**Théorème** : soit $f, g$ continues sur $[a\,;\,b]$ avec $a \leq b$.

**Positivité** : si $f \geq 0$ sur $[a\,;\,b]$, alors $\displaystyle\int_a^b f(t)\,dt \geq 0$.

**Négativité** : si $f \leq 0$ sur $[a\,;\,b]$, alors $\displaystyle\int_a^b f(t)\,dt \leq 0$.

**Croissance** : si $f \leq g$ sur $[a\,;\,b]$, alors $\displaystyle\int_a^b f(t)\,dt \leq \int_a^b g(t)\,dt$.

🎯 **Réflexe bac** : pour montrer $\int \geq 0$ ou comparer deux intégrales, repérer le signe ou la position relative des fonctions.

⚠️ **Attention à l'ordre des bornes** : ces propriétés exigent $a \leq b$.

### 2. Aire entre deux courbes

🎯 **THÉORÈME CENTRAL** : soit $f$ et $g$ continues sur $[a\,;\,b]$ avec $f \leq g$ sur $[a\,;\,b]$. L'aire du domaine compris entre les courbes $\mathcal{C}_f$ et $\mathcal{C}_g$ entre $x = a$ et $x = b$ est :

$$\boxed{\mathcal{A} = \int_a^b [g(x) - f(x)]\,dx}$$

⚠️ **Identifier la courbe la plus haute** : c'est $g$ qui est au-dessus, $f$ en dessous. Si l'inégalité s'inverse à un point, **découper avec Chasles**.

🎯 **Réflexe bac** : "courbe du haut moins courbe du bas". Toujours.

### 3. Valeur moyenne d'une fonction

**Définition** : la **valeur moyenne** de $f$ sur $[a\,;\,b]$ (avec $a \leq b$) est :
$$\mu = \dfrac{1}{b-a} \int_a^b f(t)\,dt$$

**Théorème de la moyenne** : il existe un réel $c \in [a\,;\,b]$ tel que $f(c) = \mu$, c'est-à-dire :
$$\int_a^b f(t)\,dt = (b - a) \times f(c)$$

**Interprétation graphique** (pour $f$ positive) : l'aire sous la courbe entre $a$ et $b$ est égale à l'aire d'un rectangle de largeur $(b-a)$ et de hauteur $\mu = f(c)$.

🎯 **Réflexe bac** : si l'énoncé parle de "valeur moyenne" sans plus de précision, c'est cette définition.

---

## IV. Intégration par parties (IPP)

### 1. Théorème

🎯 **FORMULE À CONNAÎTRE PAR CŒUR** :

Soit $u$ et $v$ deux fonctions dérivables sur $[a\,;\,b]$, avec $u'$ et $v'$ continues. Alors :

$$\boxed{\int_a^b u'(t) \cdot v(t)\,dt = \big[u(t) \cdot v(t)\big]_a^b - \int_a^b u(t) \cdot v'(t)\,dt}$$

**Notation abrégée** :
$$\int_a^b u'v\,dt = [uv]_a^b - \int_a^b uv'\,dt$$

### 2. Quand utiliser l'IPP ?

🎯 **Indicateur** : quand on a un **produit** dans l'intégrale, dont aucune primitive directe ne saute aux yeux. Exemples typiques :
- $\int x \cdot e^x\,dx$ → poser $u' = e^x$, $v = x$
- $\int x \cdot \ln x\,dx$ → poser $u' = x$, $v = \ln x$
- $\int x^2 \cdot e^x\,dx$ → poser $u' = e^x$, $v = x^2$
- $\int (\ln x)\,dx$ → poser $u' = 1$, $v = \ln x$

### 3. Choix de $u'$ et $v$ : la règle d'or

🎯 **Critère** : on choisit $u'$ et $v$ tels que :
- **$u'$ a une primitive simple** ($u$ doit être facile à calculer).
- **$v'$ est plus simple que $v$** (en dérivant, on simplifie).

**La nouvelle intégrale $\int uv'\,dt$ doit être plus simple que la précédente.**

⚠️ **Si on se trompe de choix** : on tombe sur une intégrale plus compliquée. Inverser $u'$ et $v$ et réessayer.

### 4. Exemple détaillé

**Énoncé** : calculer $\displaystyle\int_0^1 x e^x\,dx$.

**Choix** :
- $u'(x) = e^x \Rightarrow u(x) = e^x$
- $v(x) = x \Rightarrow v'(x) = 1$

**Application IPP** :
$$\int_0^1 x e^x\,dx = [x e^x]_0^1 - \int_0^1 e^x \cdot 1\,dx$$
$$= (1 \cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$$

### 5. Exemple type bac (Métropole 2025 J1) : $\int_1^e x \ln x\,dx$

**Énoncé** : montrer que $\displaystyle\int_1^e x \ln x\,dx = \dfrac{e^2 + 1}{4}$.

**Choix** :
- $u'(x) = x \Rightarrow u(x) = \dfrac{1}{2}x^2$
- $v(x) = \ln x \Rightarrow v'(x) = \dfrac{1}{x}$

**Application IPP** :
$$\int_1^e x \ln x\,dx = \left[\dfrac{1}{2}x^2 \ln x\right]_1^e - \int_1^e \dfrac{1}{2}x^2 \cdot \dfrac{1}{x}\,dx$$
$$= \left(\dfrac{1}{2}e^2 \cdot 1 - 0\right) - \dfrac{1}{2}\int_1^e x\,dx$$
$$= \dfrac{e^2}{2} - \dfrac{1}{2}\left[\dfrac{1}{2}x^2\right]_1^e = \dfrac{e^2}{2} - \dfrac{1}{4}(e^2 - 1) = \dfrac{2e^2 - e^2 + 1}{4} = \dfrac{e^2 + 1}{4}$$

✅ Réponse vérifiée.

---

## V. Diagramme de décision

```
Tu lis l'énoncé. Quel type de problème ?
│
├── "Calculer ∫_a^b f(t) dt" ?
│       ├── f a une primitive immédiate → F(b) - F(a) directement
│       ├── f = somme → linéarité, calculer chaque terme
│       ├── f a une forme remarquable → primitive via §II.2 fiche primitives
│       └── f est un produit (x·e^x, ln x, etc.) → IPP
│
├── "Aire sous la courbe (f positive)" ?
│       └── ∫_a^b f(t) dt
│
├── "Aire entre C_f et C_g" ?
│       ├── Identifier laquelle est au-dessus (g)
│       ├── ∫_a^b [g(x) - f(x)] dx
│       └── Si l'ordre s'inverse → découper avec Chasles
│
├── "Décomposer en plusieurs intégrales" ?
│       └── Relation de Chasles : ∫_a^b = ∫_a^c + ∫_c^b
│
├── "Valeur moyenne de f sur [a, b]" ?
│       └── μ = (1/(b-a)) ∫_a^b f(t) dt
│
├── "Comparer deux intégrales / montrer ≥ 0" ?
│       └── Positivité / croissance de l'intégrale (§III.1)
│
└── "Produit dans l'intégrale (x e^x, x ln x, etc.)" ?
        └── IPP : choisir u' simple à primitiver, v' simple en dérivant
```

---

## VI. Anatomie d'un exo bac type "Intégration" (sessions 2024-2025)

🎯 **Pattern récurrent confirmé** : sur les sujets 2024-2025, l'intégration apparaît **dans presque tous les sujets d'analyse**, soit en partie C d'un problème d'analyse, soit dans un calcul d'aire ou de valeur moyenne.

### Forme 1 : "Calcul d'aire avec IPP" en fin d'étude de fonction

**Pattern observé sur Métropole 2025 J1, Amérique du Nord 2025 J2, Métropole 2024 (sujets multiples).**

**Structure type** :

```
Partie A — Lectures graphiques (tangente, convexité)
Partie B — Étude analytique de f (limites, variations, convexité)
Partie C — Calcul d'aire avec intégrales
├── Q1. Justifier l'équation d'une tangente T_B
├── Q2. (souvent) "À l'aide d'une IPP, montrer que ∫... = ..."
├── Q3. Calculer l'aire A du domaine entre C_f et T_B (ou autre)
└── Conclusion : valeur exacte en u.a.
```

### Forme 2 : "Valeur moyenne" (Métropole sept 2025 J1)

**Pattern observé** : après une étude de fonction modélisant une grandeur physique (glycémie, concentration de produit, etc.), on demande la **valeur moyenne** sur un intervalle.

### Forme 3 : "Calcul direct d'intégrale" (questions intermédiaires)

**Pattern fréquent** : on donne une primitive ou une fonction, on demande $\int_a^b$ direct.

### Les 7 questions-types sur l'intégration

#### Q1 — "Calculer $\int_a^b f(t)\,dt$" avec primitive immédiate

**Méthode** :
1. Identifier $f$ et trouver une primitive $F$.
2. Calculer $F(b) - F(a)$.

**Exemple bac type** : $\int_0^6 (2t + 1)\,dt = [t^2 + t]_0^6 = 42$.

#### Q2 — "À l'aide d'une intégration par parties, montrer que..."

🎯 **Pattern bac classique** (Métropole 2025 J1).

**Énoncé type** : "À l'aide d'une intégration par parties, montrer que $\int_1^e x \ln x\,dx = \dfrac{e^2 + 1}{4}$."

**Méthode (rédaction type)** :

> On pose $u'(x) = x$ et $v(x) = \ln x$.
> Alors $u(x) = \dfrac{1}{2}x^2$ et $v'(x) = \dfrac{1}{x}$.
>
> Par IPP :
> $$\int_1^e x \ln x\,dx = \left[\dfrac{1}{2}x^2 \ln x\right]_1^e - \int_1^e \dfrac{1}{2}x^2 \cdot \dfrac{1}{x}\,dx$$
>
> $= \left(\dfrac{e^2}{2} \cdot 1 - \dfrac{1}{2} \cdot 0\right) - \dfrac{1}{2} \int_1^e x\,dx$
>
> $= \dfrac{e^2}{2} - \dfrac{1}{2}\left[\dfrac{x^2}{2}\right]_1^e = \dfrac{e^2}{2} - \dfrac{e^2 - 1}{4} = \dfrac{2e^2 - e^2 + 1}{4} = \dfrac{e^2 + 1}{4}$ ✓

⚠️ **Toujours bien noter $u'$, $u$, $v$, $v'$ avant d'appliquer la formule.** Les correcteurs vérifient.

#### Q3 — "Calculer l'aire $\mathcal{A}$ du domaine délimité par $\mathcal{C}_f$, une tangente $T$ et $x = a$, $x = b$"

🎯 **LA question la plus fréquente** au bac sur les intégrales.

**Méthode (squelette)** :
1. **Identifier la position relative** : $\mathcal{C}_f$ au-dessus ou en dessous de $T$ ? (Souvent vu en partie B via la convexité.)
2. **Écrire l'aire** :
   - Si $\mathcal{C}_f$ au-dessus : $\mathcal{A} = \int_a^b [f(x) - (\text{équation de } T)]\,dx$
   - Sinon, l'inverse.
3. **Calculer** en utilisant la linéarité et les intégrales déjà calculées (souvent l'IPP de Q2).
4. **Conclure** avec une valeur exacte en u.a.

**Exemple bac (Métropole 2025 J1)** :

Soit $T_B : y = 2x - e$. La courbe $\mathcal{C}_f$ est au-dessus de $T_B$ sur $[1\,;\,e]$ (convexité).

$$\mathcal{A} = \int_1^e [f(x) - (2x - e)]\,dx$$

On décompose par linéarité, puis on utilise les intégrales calculées dans les questions précédentes (souvent $\int_1^e x \ln x\,dx$ et $\int_1^e x(\ln x)^2\,dx$ admis ou calculés).

#### Q4 — "Calculer la valeur moyenne de $f$ sur $[a\,;\,b]$"

🎯 **Pattern observé Métropole sept 2025 J1** (glycémie).

**Énoncé type** : "Calculer la glycémie moyenne lors des 6 heures qui suivent le repas."

**Méthode** :
1. **Définition** : $\mu = \dfrac{1}{b-a} \int_a^b f(t)\,dt$.
2. **Calculer l'intégrale** (souvent via IPP, comme dans Métropole sept 2025 J1 où l'IPP donnait $\int_0^6 f(t)\,dt = -23{,}75 e^{-2{,}4} + 8{,}75$).
3. **Diviser par $(b-a)$** pour obtenir la valeur moyenne.

**Astuce (Métropole sept 2025 J1, question astucieuse)** : "En remarquant que $f$ est solution de $(E)$, expliquer comment on aurait pu obtenir ce résultat autrement." → Si $f' = af + g$, alors $\int_a^b f' = \int_a^b (af + g)$, soit $f(b) - f(a) = a \int_a^b f + \int_a^b g$. On en déduit $\int_a^b f$ sans IPP.

#### Q5 — "Aire entre deux courbes $\mathcal{C}_f$ et $\mathcal{C}_g$"

**Méthode** : $\mathcal{A} = \int_a^b |f(x) - g(x)|\,dx$, en découpant si l'inégalité s'inverse.

#### Q6 — "Utiliser la relation de Chasles"

**Pattern** : décomposer $\int_a^b$ en $\int_a^c + \int_c^b$ pour gérer un changement de signe ou une fonction définie par morceaux.

#### Q7 — "Linéarité de l'intégrale"

**Pattern** : on demande $\int_a^b (\alpha f + \beta g)\,dx$ avec $\int_a^b f$ et $\int_a^b g$ calculées avant.

### Sujets analysés (pour ta culture)

| Sujet | Contexte | Type d'intégration |
|---|---|---|
| **Métropole 2024 J1** | Étude fonction + tétraèdre | Calcul direct d'intégrale |
| **Métropole 2024 J2** | Piscine chlore | ED + intégrale |
| **Métropole 2025 J1** | Étude $f$ avec ln et tangente | **IPP** + aire avec linéarité |
| **Métropole sept 2025 J1** | Glycémie | **Valeur moyenne** + IPP |
| **Amérique du Nord 2025 J1** | Manège freinage | ED + IPP en partie C |
| **Amérique du Nord 2025 J2 (secours)** | Convexité + analyse | **IPP** centrale |

🎯 **Tu as 90% de chances d'avoir un calcul d'intégrale et 60% de chances d'avoir une IPP** à ton bac blanc.

### Astuces générales pour gérer les intégrales au bac

1. **Toujours calculer en valeur exacte** (pas en décimal arrondi) sauf demande explicite.
2. **Vérifier la primitive en dérivant** en brouillon avant de finaliser.
3. **Utiliser les résultats admis** : si l'énoncé dit "on admet que $\int = \dots$", utiliser directement sans recalculer.
4. **Décomposer par linéarité** dès qu'il y a une somme dans l'intégrale.
5. **Pour l'IPP** : choisir $u'$ et $v$ tels que la nouvelle intégrale soit **plus simple**. Si la nouvelle est plus compliquée, **inverser** les rôles.
6. **Pour l'aire** : ne jamais oublier de mettre la **courbe du haut moins la courbe du bas** (sinon résultat négatif = erreur).

---

## VII. Check-list de relecture

- [ ] Pour calculer une intégrale, j'ai bien trouvé une **primitive** (vérifier en dérivant).
- [ ] Pour Chasles, j'ai bien décomposé en deux intégrales avec un point intermédiaire.
- [ ] Pour la linéarité, j'ai correctement séparé les termes.
- [ ] Pour l'aire entre deux courbes, j'ai identifié la **courbe du haut** et la **courbe du bas**.
- [ ] Pour la valeur moyenne, j'ai bien divisé par $(b-a)$.
- [ ] Pour l'IPP, j'ai choisi $u'$ et $v$ de telle sorte que la nouvelle intégrale soit **plus simple**.
- [ ] Pour l'IPP, j'ai bien noté $u(x)$, $u'(x)$, $v(x)$, $v'(x)$ avant d'appliquer la formule.
- [ ] J'ai vérifié les **bornes** (ordre $a < b$ pour les inégalités).
- [ ] Pour les fonctions de signe variable, j'ai pensé à découper avec Chasles si nécessaire.

---

## VIII. Anti-sèche : les "trucs de salope" du correcteur

1. **Erreur d'intégration par parties** : oublier le crochet $[uv]_a^b$ ou se tromper de signe. La formule est $[uv]_a^b - \int uv'$ (avec un MOINS).

2. **Aire négative** : une aire est toujours **positive**. Si $\int_a^b (g - f) < 0$, c'est que tu as inversé : la courbe du bas est en fait en haut. Corriger.

3. **Inversion des bornes oubliée** : $\int_b^a = -\int_a^b$. Vérifier l'ordre.

4. **Linéarité mal appliquée** : $\int (f \cdot g) \neq \int f \cdot \int g$. Le produit ne sort pas de l'intégrale. UNIQUEMENT somme et constante.

5. **Choix d'$u'$ et $v$ inversé en IPP** : si la nouvelle intégrale est plus compliquée que la précédente, c'est que tu as inversé. Pour $x \ln x$, c'est $\ln$ qu'on dérive (pas qu'on intègre).

6. **Primitive incomplète** : oublier le facteur $\dfrac{1}{a}$ pour $\int e^{ax} = \dfrac{1}{a}e^{ax}$. Erreur classique.

7. **Valeur moyenne sans division** : oublier le $\dfrac{1}{b-a}$. La valeur moyenne, ce n'est pas l'intégrale toute seule.

8. **Confondre intégrale et primitive** : l'intégrale $\int_a^b f$ est un **nombre**. La primitive $F$ est une **fonction**. Ne pas écrire "$\int_a^b f(t)\,dt = F(x)$" — c'est faux.

9. **Oubli des unités d'aire** : pour une question d'aire, conclure avec "u.a." ou la conversion réelle si l'énoncé donne une échelle.

10. **Calcul $F(b) - F(a)$ fait à l'envers** : tu fais $F(a) - F(b)$ au lieu de $F(b) - F(a)$, et tu tombes sur le résultat opposé. Vérifier l'ordre.

---

*Bon courage Arthur 🎯*
