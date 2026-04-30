# 📊 Limites · Continuité · Convexité · Composée — Synthèse

> **Bac Spé Maths · Terminale**
> Les 4 chapitres qui s'enchaînent dans toute étude de fonction.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| Limite avec FI | Lever la FI : factoriser le terme dominant |
| FI avec exp | Croissances comparées, factoriser par `e^x` |
| FI avec racine | Forme conjuguée |
| « f(x) = k a une unique solution » | TVI + monotonie = théorème de la **bijection** |
| « Valeur approchée à 10⁻ⁿ près » | Balayage à la calculatrice |
| « Étudier la convexité » | Calculer `f''`, étudier son signe |
| « Point d'inflexion » | `f''` s'annule en **changeant de signe** |
| `U_{n+1} = f(U_n)` converge vers L | Point fixe ⇒ citer la **continuité** de f en L |
| Dériver `(u^n)`, `√u`, `e^u`, `ln u` | Formules de la composée |

---

## 🎯 Méthodes-clés

**Limites — formes indéterminées**

Les **4 FI** : `+∞ − ∞`, `0 × ∞`, `∞/∞`, `0/0`.

**Méthode pour lever une FI** : transformer pour faire disparaître l'indétermination.
- Polynôme : factoriser par le terme de plus haut degré
- Racine : multiplier par la quantité conjuguée
- Avec exp : croissances comparées
- Avec ln : croissances comparées (puissance gagne)

⚠️ `L/0` n'est PAS une FI mais nécessite l'étude de `0^+` vs `0^-`.

**Théorème des gendarmes**
> Si `h(x) ≤ f(x) ≤ g(x)` et `lim h = lim g = L`, alors `lim f = L`.

**Théorèmes de comparaison**
- `f ≥ g` et `lim g = +∞` ⇒ `lim f = +∞`
- `f ≤ g` et `lim g = −∞` ⇒ `lim f = −∞`

**Continuité**
- f continue en `a` ⇔ `lim_{x→a} f(x) = f(a)`
- Toute fonction dérivable est continue (réciproque fausse)
- Polynômes, exp, ln, racines : continues sur leur domaine

**TVI (théorème des valeurs intermédiaires)**
> Si f continue sur `[a,b]` et `k` entre `f(a)` et `f(b)`, alors `f(x) = k` admet **au moins** une solution dans `[a,b]`.

**Bijection (TVI + stricte monotonie)**
> Si f continue **et strictement monotone** sur `[a,b]`, alors `f(x) = k` admet **une unique** solution.

⚠️ TVI seul = au moins une. Pour l'unicité : **strictement monotone** obligatoire.

**Convexité — par f''**
- `f''(x) ≥ 0` sur I ⇒ f convexe sur I (courbe au-dessus des cordes)
- `f''(x) ≤ 0` sur I ⇒ f concave sur I
- Point d'inflexion : `f''` s'annule **en changeant de signe**

⚠️ Convexe ≠ croissante. Une fonction peut être convexe et décroissante (ex. `1/x`).

**Tangente en a**
$$y = f'(a)(x - a) + f(a)$$
- Convexe : courbe **au-dessus** des tangentes
- Concave : courbe **en-dessous** des tangentes

**Composée — dérivée**
$$(g \circ u)' = u' \cdot (g' \circ u)$$

| Forme | Dérivée |
|---|---|
| `(u(x))^n` | `n · u'(x) · (u(x))^{n−1}` |
| `√(u(x))` | `u'(x) / (2√(u(x)))` (avec u > 0) |
| `e^{u(x)}` | `u'(x) · e^{u(x)}` |
| `ln(u(x))` | `u'(x)/u(x)` (avec u > 0) |
| `1/u(x)` | `−u'(x)/(u(x))²` |

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Asymptote horizontale | `lim_{x→±∞} f(x) = L` ⇒ `y = L` AH |
| Asymptote verticale | `lim_{x→a} f(x) = ±∞` ⇒ `x = a` AV |
| Croissances comparées | exp >> puissances >> ln |
| Limite usuelle | `lim_{x→0} sin(x)/x = 1` |
| Convexité | `f'' ≥ 0` ⇒ f convexe |

---

## ⚠️ Pièges classiques

- TVI vs bijection : ne pas oublier « strictement monotone » pour l'unicité
- `f'' ≥ 0` strict ou large ? Pour le **point** d'inflexion, il faut un **changement de signe**
- Convexité ≠ monotonie (cf. `1/x`)
- Dériver une composée : oublier le `u'(x)` est l'erreur n°1
- Pour `√u` ou `ln u` : vérifier `u > 0` (ou `u ≥ 0` pour la racine, mais pas pour la dérivée)
- Croissances comparées : ne pas les utiliser si une factorisation simple suffit

---

## ✅ Check-list bac

- [ ] FI identifiée + méthode adaptée (factorisation, conjugué, croissances comparées)
- [ ] Pour TVI / bijection : continuité **et** monotonie citées explicitement
- [ ] Point d'inflexion : f'' change de signe (pas juste « s'annule »)
- [ ] Tangente : équation complète `y = f'(a)(x−a) + f(a)`
- [ ] Composée : `u'(x)` jamais oublié
- [ ] Domaine de validité (ln u > 0, dénominateur ≠ 0) toujours précisé
