# 📊 Fiche de Combat — Limites, Continuité, Convexité, Composée

> **Bac blanc — Terminale Maths Spé**
> Quatre chapitres en un parce qu'ils s'enchaînent dans tous les exos d'étude de fonction.

---

## ⚡ Carte des réflexes

| Tu vois ça dans l'énoncé... | Tu déclenches... |
|---|---|
| « Calculer $\lim f(x)$ » avec FI | Méthode "lever la FI" : factoriser par le terme dominant (§I.4) |
| FI avec exp | Croissances comparées (§I.5), factoriser par $e^x$ |
| FI avec racine carrée | Forme conjuguée (§I.4) |
| « Montrer que $f(x) = k$ admet une unique solution » | TVI + monotonie = théorème de la **bijection** (§II.3) |
| « Donner une valeur approchée à 10⁻ⁿ près » | Méthode de balayage à la calculatrice (§II.4) |
| « Étudier la convexité de $f$ » | Calculer $f''$ et étudier son signe (§III) |
| « Point d'inflexion » | $f''$ s'annule en changeant de signe (§III.3) |
| Suite $u_{n+1} = f(u_n)$ converge vers $L$ | Théorème du point fixe → **TOUJOURS citer la continuité de $f$ en $L$** (cf. fiche suites) |
| Dériver $f(x) = u(x)^n$, $\sqrt{u(x)}$, $e^{u(x)}$, etc. | Formule de la composée (§IV.3) |

---

## I. Limites

### 1. Définitions essentielles (à comprendre, pas à apprendre formellement)

**Limite infinie en $+\infty$ :** $\lim_{x \to +\infty} f(x) = +\infty$ signifie que f(x) devient aussi grand qu'on veut quand x devient suffisamment grand.

**Limite finie en $+\infty$ (asymptote horizontale) :** $\lim_{x \to +\infty} f(x) = L$ signifie que la droite $y = L$ est asymptote horizontale à $\mathcal{C}_f$ en $+\infty$.

**Limite infinie en un point a (asymptote verticale) :** $\lim_{x \to a} f(x) = \pm\infty$ signifie que la droite $x = a$ est asymptote verticale à $\mathcal{C}_f$.

**Limite à droite / à gauche** : on note $\lim_{\substack{x \to a \\ x > a}} f(x)$ ou $\lim_{x \to a^+} f(x)$ pour la limite à droite, idem à gauche. Quand les deux limites diffèrent, on précise toujours de quel côté.

⚠️ **Réflexe rédaction :** quand on étudie une limite en un point qui annule un dénominateur, **toujours étudier les deux côtés** (gauche et droite). Le signe peut changer.

### 2. Limites des fonctions usuelles (à connaître par cœur)

**Puissances :**
- $\lim_{x \to +\infty} x^n = +\infty$ pour tout $n \geq 1$
- $\lim_{x \to -\infty} x^n = +\infty$ si $n$ pair, $-\infty$ si $n$ impair
- $\lim_{x \to \pm\infty} \dfrac{1}{x^n} = 0$
- $\lim_{x \to 0^+} \dfrac{1}{x^n} = +\infty$
- $\lim_{x \to 0^-} \dfrac{1}{x^n} = +\infty$ si $n$ pair, $-\infty$ si $n$ impair

**Racine :**
- $\lim_{x \to +\infty} \sqrt{x} = +\infty$
- $\lim_{x \to 0^+} \dfrac{1}{\sqrt{x}} = +\infty$

**Exponentielle :**
- $\lim_{x \to +\infty} e^x = +\infty$ ; $\lim_{x \to -\infty} e^x = 0$
- $\lim_{x \to +\infty} e^{-x} = 0$ ; $\lim_{x \to -\infty} e^{-x} = +\infty$

**Logarithme :** (voir fiche exp/ln)
- $\lim_{x \to +\infty} \ln x = +\infty$ ; $\lim_{x \to 0^+} \ln x = -\infty$

### 3. Limites et opérations (les FI à connaître)

**Les 4 formes indéterminées (FI) :**
$$+\infty - \infty \quad ; \quad 0 \times \infty \quad ; \quad \dfrac{\infty}{\infty} \quad ; \quad \dfrac{0}{0}$$

**Cas non FI (où on conclut directement) :**

*Somme :*
- $L + L' = L + L'$ (cas trivial)
- $L + (\pm\infty) = \pm\infty$
- $(+\infty) + (+\infty) = +\infty$
- $(-\infty) + (-\infty) = -\infty$
- $(+\infty) + (-\infty) = $ **FI**

*Produit :*
- $L \times L'$ trivial
- $L \times (\pm\infty)$ : signe selon $L$, attention si $L = 0$ → **FI**
- $(\pm\infty) \times (\pm\infty)$ : règle des signes

*Quotient :*
- $L / L'$ trivial si $L' \neq 0$
- $L / (\pm\infty) = 0$
- $(\pm\infty) / L = \pm\infty$ selon le signe de $L$
- $L / 0$ : selon le signe de $0^+$ ou $0^-$
- $\dfrac{\infty}{\infty}$ et $\dfrac{0}{0}$ : **FI**

⚠️ **Piège classique :** $\dfrac{L}{0}$ n'est PAS une FI, mais nécessite l'étude du signe de $0^+$ vs $0^-$. Toujours préciser.

### 4. Méthode pour lever une FI (LA méthode officielle)

**Règle générale :** transformer l'expression pour faire disparaître l'indétermination.

**Cas 1 : FI sous forme de somme** → la transformer en produit en factorisant par le terme prépondérant (la plus haute puissance de x pour un polynôme, $e^x$ dans une expression avec exp).

**Exemple :** $\lim_{x \to -\infty} (4x^3 + 9x^2 - 54x + 60)$ est une FI de la forme $-\infty + \infty$.

On factorise par $x^3$ :
$$x^3\left(4 + \dfrac{9}{x} - \dfrac{54}{x^2} + \dfrac{60}{x^3}\right)$$

Quand $x \to -\infty$ : la parenthèse tend vers 4, et $x^3 \to -\infty$. Donc la limite vaut $-\infty$.

**Cas 2 : FI sous forme de produit** → la transformer en somme en développant.

**Cas 3 : FI sous forme de quotient $\dfrac{\infty}{\infty}$** → factoriser numérateur et dénominateur par leur terme dominant, puis simplifier.

**Exemple :** $\lim_{x \to +\infty} \dfrac{3x^2 + 5}{x^2 - 7x}$
$$= \lim \dfrac{x^2(3 + 5/x^2)}{x^2(1 - 7/x)} = \dfrac{3}{1} = 3$$

**Cas 4 : FI avec racine carrée** → utiliser la **forme conjuguée**.

**Exemple :** $\lim_{x \to +\infty} (\sqrt{x^2 + 1} - x)$ est une FI de la forme $+\infty - \infty$.

On multiplie par la quantité conjuguée :
$$\sqrt{x^2+1} - x = \dfrac{(\sqrt{x^2+1} - x)(\sqrt{x^2+1} + x)}{\sqrt{x^2+1} + x} = \dfrac{1}{\sqrt{x^2+1} + x}$$

Quand $x \to +\infty$, le dénominateur tend vers $+\infty$, donc la limite vaut $0$.

### 5. Croissances comparées

**Théorème :**
$$\lim_{x \to +\infty} \dfrac{e^x}{x^n} = +\infty \quad \text{et} \quad \lim_{x \to -\infty} x^n e^x = 0 \quad (\text{pour tout } n)$$

🎯 **Conseil :** **NE PAS** mettre "par croissances comparées" quand c'est inutile — par exemple, on peut éviter de l'utiliser si on factorise simplement par $x^n$ ou $e^x$. **C.C. à invoquer uniquement quand il y a une exp, et que c'est strictement nécessaire pour conclure.**

**Application typique :** $\lim_{x \to +\infty} (x^3 - e^x)$ est une FI de la forme $-\infty + \infty$ (si on lit $-e^x = -\infty$).

Factoriser par $e^x$ :
$$x^3 - e^x = e^x\left(\dfrac{x^3}{e^x} - 1\right)$$

Par croissances comparées, $\lim \dfrac{x^3}{e^x} = 0$, donc la parenthèse tend vers $-1$. Et $e^x \to +\infty$. Donc la limite vaut $-\infty$.

### 6. Théorèmes d'inégalités (comparaison + encadrement)

**Théorème 1 (passage à la limite dans une inégalité) :**
Si $\forall x \in I,\, f(x) \leq g(x)$ et que les deux limites existent en $a$, alors $\lim_a f \leq \lim_a g$.

**Théorème 2 (comparaison vers $+\infty$) :**
Si $f(x) \leq g(x)$ et $\lim f = +\infty$, alors $\lim g = +\infty$.

**Théorème 3 (comparaison vers $-\infty$) :**
Si $f(x) \leq g(x)$ et $\lim g = -\infty$, alors $\lim f = -\infty$.

**Théorème 4 (gendarmes / encadrement) :**
Si $h(x) \leq f(x) \leq g(x)$ et $\lim h = \lim g = L$, alors $\lim f = L$.

**Mnémonique :** "Inégalité(s) + Limite(s) → nouvelle limite". Quand tu repères cette structure dans un énoncé, tu sais qu'il faut un théorème de comparaison.

⚠️ **Rédaction obligatoire :** toujours préciser **les deux hypothèses** (l'inégalité ET la limite) avant d'invoquer le théorème.

**Inégalités courantes pour démarrer une comparaison :**
- $-1 \leq \sin(x) \leq 1$ et $-1 \leq \cos(x) \leq 1$
- $x^2 \geq 0$ ; $|x| \geq 0$ ; $e^x > 0$ ; $\sqrt{x} \geq 0$
- $e^x \geq x + 1$ pour tout $x$

### 7. Composition de limites

**Théorème :** si $\lim_{x \to a} f(x) = b$ et $\lim_{X \to b} g(X) = c$, alors $\lim_{x \to a} g(f(x)) = c$.

**Exemple :** $\lim_{x \to +\infty} \sqrt{25 + \dfrac{1}{x^2}}$.

On décompose : $x \mapsto 25 + \dfrac{1}{x^2} \mapsto \sqrt{\cdot}$.

- $\lim_{x \to +\infty} \left(25 + \dfrac{1}{x^2}\right) = 25$
- $\lim_{X \to 25} \sqrt{X} = 5$

Donc par composition, $\lim_{x \to +\infty} \sqrt{25 + \dfrac{1}{x^2}} = 5$.

### 8. Méthode officielle "déterminer une limite"

**Deux cas possibles :**

**Cas 1 — Pas de FI :** appliquer les règles simples de calcul (somme, différence, produit, quotient), les croissances comparées, ou les théorèmes de comparaison/encadrement. **Calcul direct.**

**Cas 2 — FI :** transformer l'expression pour la lever.
- Forme de **somme** → la mettre sous forme de **produit** (factoriser par le terme prépondérant)
- Forme de **produit** → la mettre sous forme de **somme** (développer)
- Forme de **quotient** → factoriser num. et dénom. pour simplifier
- Présence de **racines carrées** → forme conjuguée

**Ne pas oublier** : indiquer la présence d'asymptotes et donner leur(s) équation(s) quand c'est demandé.

---

## II. Continuité

### 1. Définition

**Définition formelle :** $f$ est **continue en $a$** ssi $\lim_{x \to a} f(x) = f(a)$.

$f$ est **continue sur un intervalle $I$** ssi elle est continue en tout point de $I$.

**Définition graphique (interprétation à connaître) :** une fonction est continue sur un intervalle quand on peut tracer sa courbe sans lever le crayon.

⚠️ **Rédaction :** quand on parle de continuité, **toujours préciser sur quel intervalle**. C'est une propriété locale.

### 2. Continuité des fonctions usuelles

**À retenir comme acquis sans démonstration :**

> Les fonctions usuelles (polynômes, racines, exp, ln, sin, cos, fonctions construites à partir de ces dernières par somme, produit, quotient, composition) sont continues sur tout intervalle de leur domaine de définition.

C'est un **résultat à invoquer directement** quand on a besoin de la continuité dans un exo (ex. pour appliquer le TVI).

### 3. Continuité ⇒ dérivabilité ? La réciproque est fausse !

**Propriété :** si $f$ est dérivable en $a$, alors $f$ est continue en $a$.

⚠️ **Attention** : la **réciproque est fausse**. Une fonction peut être continue sans être dérivable.

**Les 2 contre-exemples à connaître :**

**Contre-exemple 1 : $|x|$ en 0**
- Continue en 0 : $\lim_{x \to 0} |x| = 0 = |0|$ ✅
- Pas dérivable en 0 :
  - $\lim_{x \to 0^-} \dfrac{|x| - 0}{x - 0} = \lim \dfrac{-x}{x} = -1$
  - $\lim_{x \to 0^+} \dfrac{|x| - 0}{x - 0} = \lim \dfrac{x}{x} = 1$
  - Les deux limites diffèrent → pas dérivable en 0 (point anguleux).

**Contre-exemple 2 : $\sqrt{x}$ en 0**
- Continue en 0
- Pas dérivable en 0 : tangente verticale (la dérivée tend vers $+\infty$).

### 4. Fonction partie entière (exemple à connaître)

**Définition :** $E(x) = n$ avec $n$ entier tel que $n \leq x < n+1$.

**Exemples :** $E(2{,}56) = 2$ ; $E(\pi) = 3$ ; $E(-5{,}6) = -6$.

⚠️ **Piège pour les négatifs :** $E(-5{,}6) = -6$ et pas $-5$ (toujours l'entier inférieur ou égal).

**Propriété graphique :** la fonction partie entière présente une **infinité de points de discontinuité** sur son domaine de définition (sauts à chaque entier).

### 5. Théorème des Valeurs Intermédiaires (TVI)

**Énoncé :** soit $f$ une fonction **continue** sur un intervalle $I$, $a$ et $b$ deux réels de $I$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un réel $c$** entre $a$ et $b$ tel que $f(c) = k$.

⚠️ Ce théorème seul nous dit qu'il existe **« au moins » une solution**. Il ne donne pas l'unicité. Pour l'unicité, on utilise le théorème de la bijection.

### 6. Théorème de la bijection (TVI + monotonie)

🎯 **C'est LE théorème central qui tombe sur tous les bacs.**

**Énoncé :** soit $f$ **continue** et **strictement monotone** sur $[a\,;\,b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique solution** sur $[a\,;\,b]$.

**Cas particulier (très fréquent) :** si $f$ est continue, strictement monotone, et $f(a)$ et $f(b)$ de **signes contraires**, alors $f(x) = 0$ admet une unique solution.

**Généralisations :**
- L'intervalle peut être $]a\,;\,b]$, $[a\,;\,b[$ ou $]a\,;\,b[$.
- Si la borne est $\pm\infty$, on remplace $f(a)$ ou $f(b)$ par les limites correspondantes.

### 7. Rédaction TYPE pour le théorème de la bijection (à recopier mentalement)

🎯 **Les 3 hypothèses à TOUJOURS citer dans la rédaction :**

> 1. $f$ est **continue** sur $[a\,;\,b]$ (ou l'intervalle considéré).
> 2. $f$ est **strictement monotone** sur cet intervalle (croissante OU décroissante, à préciser).
> 3. $k$ est **compris** entre $f(a)$ et $f(b)$ (ou les limites correspondantes).
>
> D'après le théorème de la bijection, l'équation $f(x) = k$ admet une **unique solution** sur cet intervalle.

⚠️ Si tu oublies UNE des 3 hypothèses, tu perds le point. Toutes les 3 doivent apparaître clairement.

### 8. Méthode de balayage à la calculatrice

**But :** donner une valeur approchée de la solution à $10^{-n}$ près.

**Méthode :**
1. Sur la calculatrice, créer un tableau de valeurs de $f$.
2. **Premier balayage** (pas de 1) : trouver l'intervalle de longueur 1 contenant la solution (ex. entre $-6$ et $-5$).
3. **Deuxième balayage** (pas de 0,1) : affiner sur cet intervalle (ex. entre $-5{,}3$ et $-5{,}2$).
4. **Continuer** jusqu'à la précision demandée ($10^{-2}$, $10^{-3}$, $10^{-4}$).
5. Conclure par un encadrement.

**Rédaction type :** "À l'aide de la calculatrice, on obtient $-5{,}3186 \leq \alpha \leq -5{,}3185$, donc une valeur approchée à $10^{-4}$ près est $\alpha \approx -5{,}3186$."

### 9. Exercice type complet (à l'arsenal)

**Énoncé classique :** soit $f(x) = 4x^3 + 9x^2 - 54x + 60$.
1. Variations de $f$ (tableau).
2. Montrer que $f(x) = 0$ admet une unique solution.
3. Donner une valeur approchée à $10^{-4}$ près.
4. En déduire le signe de $f$.

**Méthode (squelette) :**

**Q1 — Variations :**
- Calculer $f'(x) = 12x^2 + 18x - 54$
- Résoudre $f'(x) = 0$ : $\Delta = 18^2 - 4 \times 12 \times (-54) = 2916$, racines $-3$ et $\dfrac{3}{2}$
- Tableau de signes de $f'$ : positive sur $]-\infty\,;\,-3]$, négative sur $[-3\,;\,3/2]$, positive sur $[3/2\,;\,+\infty[$
- Calculs : $f(-3) = 195$ et $f(3/2) = 51/4 = 12{,}75$
- Limites : $\lim_{-\infty} f = -\infty$ (factoriser par $x^3$), $\lim_{+\infty} f = +\infty$

**Q2 — Unique solution :**
- Sur $[-3\,;\,+\infty[$ : minimum de $f$ vaut $12{,}75 > 0$, donc $f(x) = 0$ n'a pas de solution sur cet intervalle.
- Sur $]-\infty\,;\,-3]$ : $f$ est **continue** (polynôme), **strictement croissante**, et $0$ est compris entre $\lim_{-\infty} f = -\infty$ et $f(-3) = 195$. Par le théorème de la bijection, $f(x) = 0$ admet une **unique solution** $\alpha$ sur cet intervalle.

**Q3 — Valeur approchée :** par balayage, $\alpha \approx -5{,}3186$ à $10^{-4}$ près.

**Q4 — Signe :** d'après les variations et la position de $\alpha$ :
- $f < 0$ sur $]-\infty\,;\,\alpha[$
- $f > 0$ sur $]\alpha\,;\,+\infty[$ (car $f$ vaut 195 à $-3$, et reste $> 12{,}75$ partout après)

🎯 **C'est l'exo type bac sur le TVI/bijection. Mémorise ce squelette.**

---

## III. Convexité

### 1. Définitions (à comprendre visuellement)

**Définition graphique :**
- $f$ **convexe** sur $I$ : la courbe est **en dessous** de chacune de ses cordes (et au-dessus de ses tangentes). Ça "sourit" 😊.
- $f$ **concave** sur $I$ : la courbe est **au-dessus** de chacune de ses cordes (et en dessous de ses tangentes). Ça "fait la gueule" 🙁.

### 2. Caractérisations (les outils pratiques)

**Avec la dérivée première :**
- $f$ convexe sur $I$ ⟺ $f'$ **croissante** sur $I$
- $f$ concave sur $I$ ⟺ $f'$ **décroissante** sur $I$

**Avec la dérivée seconde (LA caractérisation à utiliser au bac) :**
- $f$ convexe sur $I$ ⟺ $f''(x) \geq 0$ pour tout $x \in I$
- $f$ concave sur $I$ ⟺ $f''(x) \leq 0$ pour tout $x \in I$

🎯 **Méthode bac :** pour étudier la convexité de $f$, on calcule $f''$ et on étudie son signe.

### 3. Point d'inflexion

**Définition :** un point d'inflexion est un point où la courbe **traverse sa tangente**, c'est-à-dire où la convexité **change**.

**Caractérisation :** si $f''$ s'annule en changeant de signe en $x = a$, alors le point $(a\,;\,f(a))$ est un point d'inflexion.

⚠️ **Crucial :** $f''(a) = 0$ ne suffit PAS à dire qu'il y a un point d'inflexion. Il faut un **changement de signe** de $f''$ en $a$. (Contre-exemple : $f(x) = x^4$ a $f''(0) = 0$ mais pas de point d'inflexion en 0 puisque $f''(x) = 12x^2 \geq 0$ partout.)

### 4. Convexité des fonctions de référence

| Fonction | Convexité |
|---|---|
| $x \mapsto x^2$ | Convexe sur $\mathbb{R}$ |
| $x \mapsto |x|$ | Convexe sur $\mathbb{R}$ |
| $x \mapsto e^x$ | Convexe sur $\mathbb{R}$ |
| $x \mapsto x^3$ | Concave sur $]-\infty\,;\,0]$, convexe sur $[0\,;\,+\infty[$ |
| $x \mapsto \sqrt{x}$ | Concave sur $[0\,;\,+\infty[$ |
| $x \mapsto \ln x$ | Concave sur $]0\,;\,+\infty[$ |
| $x \mapsto \dfrac{1}{x}$ | Concave sur $]-\infty\,;\,0[$, convexe sur $]0\,;\,+\infty[$ |

⚠️ Une fonction peut avoir la **même convexité** sur deux intervalles $[a\,;\,b]$ et $[b\,;\,c]$ **sans avoir la même convexité sur $[a\,;\,c]$**. La convexité est définie sur un intervalle.

### 5. Inégalités de convexité (vues dans ton cours)

**Si $f$ est convexe sur $I$ :**
$$f\left(\dfrac{a+b}{2}\right) \leq \dfrac{f(a) + f(b)}{2}$$

**Si $f$ est concave sur $I$ :**
$$f\left(\dfrac{a+b}{2}\right) \geq \dfrac{f(a) + f(b)}{2}$$

**Interprétation :** la valeur de $f$ au milieu est inférieure (ou supérieure) à la moyenne des valeurs de $f$ aux extrémités.

**Exemples d'application :**
- $f(x) = \sqrt{x}$ concave sur $[0\,;\,+\infty[$ : $\sqrt{\dfrac{a+b}{2}} \geq \dfrac{\sqrt{a} + \sqrt{b}}{2}$
- $f(x) = x^2$ convexe sur $\mathbb{R}$ : $\left(\dfrac{a+b}{2}\right)^2 \leq \dfrac{a^2 + b^2}{2}$

### 6. Exercice type sur la convexité

**Énoncé classique :** soit $f(x) = x^4 - 5x^3 - 9x^2 + 7x - 4$. Étudier la convexité de $f$.

**Méthode :**
1. Calculer $f'(x) = 4x^3 - 15x^2 - 18x + 7$
2. Calculer $f''(x) = 12x^2 - 30x - 18 = 6(2x^2 - 5x - 3)$
3. Résoudre $f''(x) = 0$ : $\Delta = 25 + 24 = 49$, racines $x_1 = -\dfrac{1}{2}$ et $x_2 = 3$
4. Tableau de signes de $f''$ : positive sur $]-\infty\,;\,-1/2]$, négative sur $[-1/2\,;\,3]$, positive sur $[3\,;\,+\infty[$
5. Conclusion :
   - $f$ **convexe** sur $]-\infty\,;\,-1/2]$ et sur $[3\,;\,+\infty[$
   - $f$ **concave** sur $[-1/2\,;\,3]$
   - $f$ admet **deux points d'inflexion** : $\left(-\dfrac{1}{2}\,;\,f(-1/2)\right) = \left(-\dfrac{1}{2}\,;\,-\dfrac{145}{16}\right)$ et $(3\,;\,f(3)) = (3\,;\,-118)$

---

## IV. Composée de fonctions

### 1. Définition

Soit $u$ et $v$ deux fonctions telles que $u$ est définie sur $I$ à valeurs dans $J$, et $v$ est définie sur $J$. La fonction **composée** $v \circ u$ (lue "v rond u") est définie par :

$$(v \circ u)(x) = v(u(x))$$

**Exemple :** $u(x) = 2x - 3$ et $v(x) = \sqrt{x}$.
- $(v \circ u)(x) = v(u(x)) = \sqrt{2x - 3}$, définie sur $\left[\dfrac{3}{2}\,;\,+\infty[\right.$ (il faut $u(x) \geq 0$).
- $(u \circ v)(x) = u(v(x)) = 2\sqrt{x} - 3$, définie sur $[0\,;\,+\infty[$.

⚠️ $u \circ v \neq v \circ u$ en général. **L'ordre compte.**

**Associativité :** $w \circ (v \circ u) = (w \circ v) \circ u$.

### 2. Monotonie d'une composée (résultat utile)

**Règles (les retenir comme la règle des signes) :**
- $u$ et $v$ de **même monotonie** → $v \circ u$ est **croissante**.
- $u$ et $v$ de **monotonies contraires** → $v \circ u$ est **décroissante**.

**Mnémotechnique :** "même direction × même direction = positif", "directions opposées = négatif" (comme le signe d'un produit).

### 3. Dérivée d'une composée (LE théorème central)

**Théorème :** soit $u$ et $v$ deux fonctions dérivables vérifiant les conditions de définition. Alors $v \circ u$ est dérivable et :

$$\boxed{(v \circ u)'(x) = v'(u(x)) \times u'(x)}$$

**Cas particulier (déjà vu en première) :** si $f(x) = v(ax + b)$, alors $f'(x) = a \times v'(ax + b)$.

### 4. Formules de dérivation classiques (à connaître par cœur)

🎯 **Les formules que tu DOIS connaître pour le bac :**

| Forme | Dérivée |
|---|---|
| $(u^2)'$ | $2u \cdot u'$ |
| $(u^n)'$ | $n \cdot u^{n-1} \cdot u'$ |
| $\left(\dfrac{1}{u}\right)'$ | $-\dfrac{u'}{u^2}$ |
| $(\sqrt{u})'$ | $\dfrac{u'}{2\sqrt{u}}$ |
| $(e^u)'$ | $u' \cdot e^u$ |
| $(\ln u)'$ | $\dfrac{u'}{u}$ (avec $u > 0$) |
| $(\sin u)'$ | $u' \cdot \cos u$ |
| $(\cos u)'$ | $-u' \cdot \sin u$ |

### 5. Exemples chiffrés

**Exemple 1 :** $f(x) = (x^2 + x)^5$
- On pose $u(x) = x^2 + x$, donc $u'(x) = 2x + 1$
- $f = u^5$ donc $f' = 5 u^4 \cdot u' = 5(x^2 + x)^4 \cdot (2x + 1)$

**Exemple 2 :** $f(x) = e^{3x - 2}$
- $u(x) = 3x - 2$, $u'(x) = 3$
- $f' = u' \cdot e^u = 3 e^{3x - 2}$

**Exemple 3 :** $f(x) = \sqrt{x^2 + 1}$
- $u(x) = x^2 + 1 > 0$, $u'(x) = 2x$
- $f' = \dfrac{u'}{2\sqrt{u}} = \dfrac{2x}{2\sqrt{x^2 + 1}} = \dfrac{x}{\sqrt{x^2 + 1}}$

### 6. Méthode pour étudier une fonction composée

**Étapes systématiques :**
1. **Domaine de définition $D_f$** : vérifier la correspondance des intervalles ($u$ doit être à valeurs dans le domaine de $v$). Attention aux **valeurs interdites** (quotient, racine, ln).
2. **Dérivée** : appliquer la formule $(v \circ u)' = v'(u) \times u'$.
3. **Limites** : calculer **étape par étape** en respectant l'ordre de composition.
4. **Variations** : signe de $(v \circ u)'$.

### 7. Conseil de méthode

> Pour décomposer une fonction et calculer une image, bien distinguer les étapes en écrivant le schéma de décomposition. Passer de la notation avec le « $\circ$ » à la notation avec parenthèses pas à pas.

---

## V. Diagramme de décision

```
Tu lis l'énoncé. Quel chapitre est mobilisé ?
│
├── "Calculer une limite" ?
│       ├── Pas de FI → calcul direct
│       └── FI → factoriser par le terme dominant
│           ├── Polynôme → plus haute puissance de x
│           ├── Avec exp → e^x (croissances comparées si nécessaire)
│           └── Avec racine → forme conjuguée
│
├── "Montrer que f(x) = k a une unique solution" ?
│       └── Théorème de la bijection (3 hypothèses : continue, monotone, k entre f(a) et f(b))
│
├── "Donner une valeur approchée à 10⁻ⁿ près" ?
│       └── Méthode de balayage à la calculatrice
│
├── "Étudier la convexité de f" ?
│       └── Calculer f'', étudier son signe
│           └── Point d'inflexion = f'' s'annule en changeant de signe
│
├── "Suite u_{n+1} = f(u_n) converge vers L" ?
│       └── Point fixe → vérifier les 3 conditions (cf. fiche suites) : convergence, récurrence, CONTINUITÉ DE f EN L
│
└── "Dériver une fonction composée" ?
        └── Identifier u et v, appliquer (v∘u)' = v'(u) × u'
```

---

## VI. Anatomie d'un exo "étude de fonction" au bac (sessions 2024-2025)

🎯 **Données issues de l'analyse des sujets bac récents (Métropole 2024 J1/J2, Métropole 2025 J1/J2, Centres étrangers 2024, Sujet 0 2024).** Voici **exactement** ce qui tombe et **dans quel ordre**.

### Structure type d'un sujet d'analyse au bac

Un exo "étude de fonction" au bac est **toujours** structuré en parties :

- **Partie A** : étude graphique (lectures graphiques) OU étude d'une fonction auxiliaire $g$
- **Partie B** : étude analytique de la fonction principale $f$ (en utilisant les résultats de A)
- **Partie C** (optionnelle) : calcul d'aire avec une intégrale

🎯 **Le piège n°1** : ne PAS lire l'énoncé en entier avant de commencer. Souvent, la partie A donne des outils utilisés en partie B → si tu rates le lien, tu galères.

### Les 12 questions-types qui reviennent à TOUS les bacs

Voici les questions classées par fréquence dans les sujets 2024-2025, avec la méthode associée :

#### Q1 — "Lecture graphique" (très fréquent en partie A)

**Sous-questions classiques :**
- "Lire $f(a)$, $f(b)$" → lecture directe des ordonnées
- "Lire $f'(a)$" → coefficient directeur de la tangente au point d'abscisse $a$
- "Donner l'équation de la tangente $T_A$" → utiliser $y = f'(a)(x-a) + f(a)$ avec lecture graphique
- "Donner les intervalles où $f$ est convexe / concave" → repérer où la courbe est sous/au-dessus de ses tangentes
- "Le point $A$ est-il un point d'inflexion ?" → vérifier le changement de convexité graphiquement

**Méthode rédaction** : justifier chaque réponse par un raisonnement graphique court ("la tangente passe par $A(1\,;\,2)$ et $C(3\,;\,0)$, donc son coefficient directeur est $\dfrac{0-2}{3-1} = -1$, d'où $f'(1) = -1$").

#### Q2 — "Calculer la limite de $f$ en $a$" (sortie d'asymptote)

**Sous-questions classiques :**
- $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$ (limites aux bornes)
- $\lim_{x \to 0^+} f(x)$ ou en un point d'annulation du dénominateur
- "Interpréter graphiquement le résultat" → asymptote horizontale ou verticale

**Méthode** : identifier la FI éventuelle, factoriser par le terme dominant ou utiliser les croissances comparées.

🎯 **Astuce bac** : quand on demande "interpréter graphiquement", il faut **systématiquement** parler d'asymptote (horizontale si limite finie en $\pm\infty$, verticale si limite infinie en un réel).

#### Q3 — "Montrer que $f'(x) = \dots$" (forme factorisée à obtenir)

C'est la question piège classique : on te donne déjà la forme factorisée à atteindre, tu dois **prouver** qu'on l'obtient bien.

**Méthode** : dériver normalement, puis factoriser pour obtenir l'expression demandée. Si tu n'arrives pas à la factorisation, **vérifie ton calcul de dérivée** — c'est probablement une erreur de signe ou un produit oublié.

**Exemple typique (Métropole 2024 J1)** : "Montrer que $f'(x) = \dfrac{2x+1}{2x}$ pour $f(x) = x - 2 + \dfrac{1}{2}\ln(x)$."

#### Q4 — "Étudier le sens de variation de $f$"

**Méthode** :
1. Étudier le signe de $f'(x)$.
2. Pour les expressions avec exp : factoriser par $e^u$ (toujours $> 0$), le signe ne dépend que du reste.
3. Pour les expressions avec ln : penser au domaine.
4. Construire le **tableau de variations** complet avec les valeurs aux bornes.

#### Q5 — "Étudier la convexité de $f$"

**Méthode** :
1. Calculer $f''$ (souvent admis dérivable 2 fois dans l'énoncé).
2. Étudier le signe de $f''$.
3. Conclure : convexe où $f'' \geq 0$, concave où $f'' \leq 0$.
4. Donner les **points d'inflexion** (où $f''$ change de signe).

🎯 **Tombe systématiquement** dans les sujets 2024-2025. Métropole 2024 J1, Métropole 2025 J1, etc.

#### Q6 — "Montrer que $f(x) = k$ admet une unique solution $\alpha$ sur $I$"

C'est LA question avec le théorème de la bijection.

**Méthode (les 3 hypothèses obligatoires)** :
> 1. $f$ est **continue** sur $I$ (justifier : "$f$ est composée de fonctions continues, donc continue sur $I$").
> 2. $f$ est **strictement monotone** sur $I$ (utiliser le tableau de variations).
> 3. $k$ est **compris entre** $f(\text{borne gauche})$ et $f(\text{borne droite})$ (calculer ou utiliser les limites).
>
> D'après le théorème de la bijection, $f(x) = k$ admet une **unique solution** $\alpha$ sur $I$.

#### Q7 — "Donner une valeur approchée de $\alpha$ à $10^{-n}$ près"

**Méthode de balayage à la calculatrice** :
- Tableau de valeurs de $f$ avec un pas de 1, puis 0,1, puis 0,01, etc.
- Encadrer $\alpha$ entre deux valeurs successives.

**Rédaction type** : "À l'aide de la calculatrice : $f(0{,}43) < 0 < f(0{,}44)$, donc $\alpha \approx 0{,}43$ à $10^{-2}$ près."

#### Q8 — "En déduire le signe de $f$ sur $I$"

**Méthode** : utiliser les variations + la (les) racine(s) trouvée(s) en Q6.

- $f$ croissante avec $f(\alpha) = 0$ → $f < 0$ avant $\alpha$, $f > 0$ après.
- $f$ décroissante avec $f(\alpha) = 0$ → $f > 0$ avant $\alpha$, $f < 0$ après.

Construire un **tableau de signes** propre.

#### Q9 — "Étude d'une fonction auxiliaire $g$" (partie A typique)

**Pattern récurrent** : la partie A demande l'étude d'une fonction $g$ "auxiliaire". Plus tard en partie B, on découvre que $f'(x)$ contient $g(x)$ ou $g$ apparaît dans les calculs.

**Méthode** :
1. Étudier les variations de $g$ (calcul de $g'$, signe, tableau).
2. Montrer que $g(x) = 0$ admet une unique solution $\alpha$ (théorème de la bijection).
3. Donner une valeur approchée de $\alpha$.
4. **En déduire le signe de $g$** sur l'intervalle de définition.

**Comment faire le lien avec la partie B** : en B, quand on dérive $f$, on tombe sur $f'(x) = (\text{qqc strictement positif}) \times g(x)$. Le signe de $f'$ a alors le même signe que $g$, déjà étudié en A.

🎯 **Pattern bac type** : c'est exactement le schéma du sujet de Métropole 2024 J2 (avec $f(x) = x^2 + 2x - 1 + \ln(x+2)$).

#### Q10 — "Étudier la position relative de $\mathcal{C}_f$ et $T_B$"

**Méthode** :
1. Calculer $h(x) = f(x) - (\text{équation de la tangente})$.
2. Étudier le signe de $h$.
3. Conclure : $\mathcal{C}_f$ au-dessus de $T_B$ là où $h > 0$, en dessous là où $h < 0$.

🎯 **Astuce bac** : si $f$ est convexe sur $I$, alors $\mathcal{C}_f$ est **au-dessus** de toutes ses tangentes sur $I$. Si concave, en dessous. **Conclure direct** sans calcul (Métropole 2025 J1).

#### Q11 — "Suite récurrente $u_{n+1} = f(u_n)$"

**Pattern bac très fréquent** (présent dans Centres étrangers 2024, Métropole 2025 J1, Métropole 2025 sept) :

**Sous-questions classiques** :
- (a) Calculer $u_1$, $u_2$ → calcul direct.
- (b) Démontrer par récurrence que $a \leq u_n \leq u_{n+1} \leq b$ → encadrement + monotonie.
- (c) En déduire que $(u_n)$ converge → théorème de convergence monotone (croissante majorée OU décroissante minorée).
- (d) Trouver la limite $L$ → théorème du point fixe : résoudre $f(x) = x$.

🎯 **À NE PAS OUBLIER en (d)** : citer la **continuité** de $f$ en $L$ avant d'appliquer $f(L) = L$. Sinon **−0,5 à −1 point**.

#### Q12 — "Calculer une aire" (partie C optionnelle)

**Pattern** : on demande de calculer l'aire d'un domaine entre $\mathcal{C}_f$ et l'axe des abscisses, ou entre deux courbes.

**Méthode** :
- Si $f \geq 0$ sur $[a\,;\,b]$ : aire = $\int_a^b f(x)\,dx$.
- Sinon : aire = $\int_a^b |f(x)|\,dx$, mais on découpe selon le signe de $f$.
- Pour deux courbes $\mathcal{C}_f$ et $\mathcal{C}_g$ avec $f \geq g$ : aire = $\int_a^b (f(x) - g(x))\,dx$.

⚠️ Si tu n'as pas encore vu les **intégrales** ou si elles ne sont pas au programme du bac blanc, cette question peut être ignorée.

### Résumé : enchaînement type d'un exo bac

```
Partie A — Étude graphique OU fonction auxiliaire g
├── Q1. Lectures graphiques (f(a), f'(a), tangente, convexité)  [SI graphique]
└── Q9. Étude de g + signe de g                                 [SI auxiliaire]

Partie B — Étude analytique de f
├── Q2. Limites en bornes + asymptote
├── Q3. Calcul de f' (forme factorisée à obtenir)
├── Q4. Sens de variation + tableau
├── Q5. Convexité (f'') + points d'inflexion
├── Q6. f(x) = k a une unique solution (bijection)
├── Q7. Valeur approchée de α (balayage)
├── Q8. Signe de f
└── Q10. Position relative C_f et tangente

Partie B-bis ou C — Suite récurrente (très fréquent)
├── Q11a. Calcul des premiers termes
├── Q11b. Récurrence : encadrement + monotonie
├── Q11c. Convergence (TCM)
└── Q11d. Limite (point fixe avec continuité de f)

Partie C — Aire (optionnelle, si intégrales au programme)
└── Q12. Calcul d'aire entre courbe et axe / entre deux courbes
```

### Sujets analysés (pour ta culture)

- **Métropole 2024 J1** (19 juin) : étude de $f(x) = x - 2 + \dfrac{1}{2}\ln x$ — toutes les Q1-Q8.
- **Métropole 2024 J2** (20 juin) : fonction auxiliaire + $f(x) = x^2 + 2x - 1 + \ln(x+2)$.
- **Métropole 2025 J1** (17 juin) : lectures graphiques + $f$ avec ln, convexité, position relative + IPP.
- **Centres étrangers 2024** : étude $f(x) = x - \ln(x^2 + 1)$ + suite récurrente $u_{n+1} = f(u_n)$.
- **Sujet 0 2024** : famille de fonctions $f_k(x) = (k+x)e^{-x}$.

🎯 **Le pattern est ULTRA stable depuis 2024**. Tu as 90% de chances d'avoir un exo qui suit ce schéma.

---

## VII. Check-list de relecture

- [ ] Pour toute limite, j'ai vérifié si c'est une FI **avant** d'appliquer une formule.
- [ ] Pour les FI, j'ai correctement factorisé par le **terme prépondérant**.
- [ ] Je n'ai pas invoqué les croissances comparées **inutilement** (seulement quand il y a une exp et que c'est nécessaire).
- [ ] Pour appliquer le **TVI ou le théorème de la bijection**, j'ai cité **les 3 hypothèses** (continuité, monotonie, k entre les valeurs).
- [ ] J'ai bien préfixé "**continue**" + "**strictement monotone**" — pas juste "monotone".
- [ ] Pour la **convexité**, j'ai calculé $f''$ et étudié **son signe** sur l'intervalle.
- [ ] Pour un **point d'inflexion**, j'ai vérifié que $f''$ **change de signe** (et pas juste qu'elle s'annule).
- [ ] Pour une **dérivée de composée**, j'ai bien identifié $u$ et $v$ avant de dériver.
- [ ] Pour la **continuité**, j'ai précisé sur quel intervalle.
- [ ] Pour le **point fixe** d'une suite, j'ai cité la **continuité** de $f$ en $L$ (sinon $-1$ à $-2$ points).

---

## VIII. Anti-sèche : les "trucs de salope" du correcteur

1. **Continuité du point fixe oubliée** : si tu écris "donc $f(L) = L$" sans avoir mentionné que $f$ est continue, tu perds direct des points. C'est l'oubli n°1 sur les exos de suites.

2. **TVI vs bijection** : le TVI seul donne "au moins une solution". Pour l'unicité, il FAUT préciser **strictement monotone** en plus. Beaucoup d'élèves écrivent "TVI" au lieu de "théorème de la bijection".

3. **Croissances comparées invoquées à tort** : si tu peux factoriser proprement, n'invoque pas C.C. C.C. = uniquement quand exp est unique et que c'est nécessaire.

4. **Convexité confondue avec monotonie** : convexe ≠ croissante. Une fonction peut être convexe et décroissante (ex. $1/x$ sur $]0\,;\,+\infty[$).

5. **Point d'inflexion mal détecté** : $f''(a) = 0$ NE SUFFIT PAS. Vérifier le **changement de signe**.

6. **Limite d'un produit FI** : $0 \times \infty$ est une FI. NE JAMAIS écrire "$0 \times \infty = 0$". Toujours lever l'indétermination.

7. **Limite à droite/à gauche oubliée** : si on étudie $\lim$ en un point qui annule un dénominateur, **toujours étudier les deux côtés**. Le signe peut changer.

8. **Dérivée de composée bâclée** : oublier le facteur $u'$ dans $(e^u)' = u' \cdot e^u$ est la perte de point n°1. Toujours **identifier $u$ explicitement** d'abord.

9. **Lim ln x / x = 0 oubliée** : c'est une croissance comparée à connaître par cœur. Si tu écris "$\ln x / x \to \infty$", c'est une catastrophe.

10. **$x \ln x$ en $0^+$** : c'est $0$ (croissance comparée), pas $-\infty$. En plein stress, ne pas confondre avec $\ln x$ seul qui tend vers $-\infty$.

---

