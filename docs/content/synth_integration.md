# ∫ Intégration — Synthèse

> **Bac Spé Maths · Terminale**
> Intégrales, propriétés, aires, valeur moyenne, IPP.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| « Calculer `∫_a^b f(t) dt` » | Trouver une primitive F, calculer `F(b) − F(a)` |
| « Aire sous la courbe » (f ≥ 0) | `∫_a^b f(t) dt` en u.a. |
| « Aire entre `C_f` et `C_g` » | `∫_a^b [g(x) − f(x)] dx` avec f ≤ g |
| Décomposer avec point intermédiaire `c` | **Relation de Chasles** |
| « Valeur moyenne sur [a,b] » | `(1/(b−a)) · ∫_a^b f(t) dt` |
| Produit (`x·e^x`, `x·ln x`, `x·sin x`) | **Intégration par parties (IPP)** |
| « Montrer que `∫ ≥ 0` » | Positivité / croissance de l'intégrale |

---

## 🎯 Méthodes-clés

**Définition (f continue ≥ 0 sur [a,b])**
- `∫_a^b f(t) dt` = aire entre l'axe Ox, `C_f`, et les droites `x=a` et `x=b`, en **unités d'aire**.
- Variable muette : `dt = dx = du`.

**Théorème fondamental**
> Si f continue sur [a,b], alors `F(x) = ∫_a^x f(t) dt` est dérivable et `F'(x) = f(x)`.

**Calcul d'une intégrale**
$$\int_a^b f(t)\,dt = F(b) - F(a) = [F(t)]_a^b$$

avec F **primitive quelconque** de f.

**Propriétés**

| | |
|---|---|
| Linéarité | `∫(αf + βg) = α∫f + β∫g` |
| Chasles | `∫_a^b = ∫_a^c + ∫_c^b` |
| Inversion | `∫_a^b f = −∫_b^a f` |
| Positivité | si `f ≥ 0` sur [a,b] alors `∫_a^b f ≥ 0` |
| Croissance | si `f ≤ g` sur [a,b] alors `∫_a^b f ≤ ∫_a^b g` |

**Aire entre deux courbes**
- Sur `[a,b]` avec `f ≤ g` :
$$\mathcal{A} = \int_a^b [g(x) - f(x)]\,dx$$
- ⚠️ Toujours **vérifier qui est au-dessus** (étudier le signe de `g−f`).
- Si signe variable : découper avec Chasles.

**Valeur moyenne**
$$\mu = \frac{1}{b-a}\int_a^b f(t)\,dt$$

**Intégration par parties (IPP)**
$$\int_a^b u'(t)\,v(t)\,dt = [u(t)\,v(t)]_a^b - \int_a^b u(t)\,v'(t)\,dt$$

**Quand utiliser l'IPP ?** : produit `polynôme × exp/log/trig`.
- `∫ x·e^x dx` → poser `v = x` (à dériver), `u' = e^x` (à intégrer)
- `∫ x·ln(x) dx` → poser `v = ln(x)`, `u' = x`
- `∫ ln(x) dx` (astuce) → poser `v = ln(x)`, `u' = 1`

🎯 **Règle pour choisir** : `v` = ce qui se simplifie en dérivant ; `u'` = ce qui s'intègre facilement.

**Intégrale d'une fonction négative**
- Si `f ≤ 0` : `∫_a^b f ≤ 0` et `aire = −∫_a^b f`
- Si f change de signe : `aire = ∫_a^b |f|` (découper selon le signe)

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Calcul | `∫_a^b f = [F]_a^b = F(b) − F(a)` |
| Linéarité | `∫(αf + βg) = α∫f + β∫g` |
| Chasles | `∫_a^c + ∫_c^b = ∫_a^b` |
| Aire entre courbes | `∫(g − f) dx`, f ≤ g |
| Valeur moyenne | `(1/(b−a)) ∫_a^b f` |
| IPP | `∫u'v = [uv] − ∫uv'` |

---

## ⚠️ Pièges classiques

- Calculer `∫_a^b f` quand `a > b` sans inverser : signe faux
- Aire entre courbes : oublier de vérifier qui est au-dessus → résultat **négatif**
- IPP : mauvaise affectation de `u'` et `v`. Règle : `v` se simplifie en dérivant
- Oublier que la valeur moyenne se divise par `b − a`
- Pour une fonction de signe variable : `∫f` ≠ aire — utiliser `|f|`
- Confondre primitive et intégrale (l'une dépend de x, l'autre est un nombre)

---

## ✅ Check-list bac

- [ ] J'ai indiqué l'unité d'aire (u.a.) le cas échéant
- [ ] Pour aire entre courbes : signe de `g − f` étudié
- [ ] IPP : choix de `u'` et `v` justifié, `[uv]_a^b` calculé proprement
- [ ] Valeur moyenne : division par `b − a` n'oubliée
- [ ] Si f de signe variable : Chasles + valeur absolue pour calculer une aire
- [ ] Sens des bornes (a < b) ou inversion explicitée
