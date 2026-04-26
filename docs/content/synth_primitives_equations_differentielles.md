# 📐 Primitives & Équations Différentielles — Synthèse

> **Bac Spé Maths · Terminale**
> Lecture inverse de la dérivation + EDO du 1er ordre.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| « Déterminer une primitive » | Lecture inverse du tableau (§I) |
| « Vérifier que F est une primitive de f » | Calculer F' et vérifier `F'(x) = f(x)` |
| `u'(x)·e^{u(x)}` | Primitive : `e^{u(x)}` |
| `u'(x)·u(x)^n` | Primitive : `u(x)^{n+1}/(n+1)` |
| `u'(x)/u(x)` | Primitive : `ln\|u(x)\|` |
| « Résoudre `y' = ay` » | `y = C·e^{ax}` |
| « Résoudre `y' = ay + b` » | `y = C·e^{ax} − b/a` |
| « Résoudre `y' = ay + φ(x)` » | Trouver une solution particulière P, puis `f − P` vérifie `y' = ay` |
| Condition `f(x_0) = y_0` | Substituer pour trouver C |

---

## 🎯 Méthodes-clés

**Primitive — définition**
> F est primitive de f sur I ⇔ F dérivable et `F'(x) = f(x)` sur I.

- Toute fonction continue admet des primitives
- Deux primitives diffèrent d'une **constante**
- ⇒ infinité de primitives, mais **une seule** vérifiant `F(x_0) = y_0`

**Tableau des primitives usuelles**

| f(x) | Primitive F(x) |
|---|---|
| `x^n` (n≠−1) | `x^{n+1}/(n+1)` |
| `1/x` (x>0) | `ln(x)` |
| `e^x` | `e^x` |
| `e^{ax+b}` | `(1/a)·e^{ax+b}` |
| `cos(x)` | `sin(x)` |
| `sin(x)` | `−cos(x)` |
| `1/√x` (x>0) | `2√x` |

**Formes remarquables (à reconnaître)**

| Forme | Primitive |
|---|---|
| `u'·u^n` | `u^{n+1}/(n+1)` |
| `u'·e^u` | `e^u` |
| `u'/u` (u>0) | `ln(u)` |
| `u'/(2√u)` | `√u` |
| `u'/u²` | `−1/u` |

🎯 **Astuce** : si tu vois la dérivée d'une « brique » devant la « brique », c'est une forme remarquable.

**Équation différentielle linéaire — 3 cas**

**Cas 1 : `y' = ay`**
$$y(x) = C \cdot e^{ax}, \quad C \in \mathbb{R}$$

**Cas 2 : `y' = ay + b`**
- Solution particulière constante : `y_p = −b/a`
- Solution générale : `y(x) = C·e^{ax} − b/a`

**Cas 3 : `y' = ay + φ(x)` (avec φ donnée)**
1. Trouver une solution particulière `y_p` (souvent suggérée par l'énoncé)
2. La solution générale : `y(x) = y_p(x) + C·e^{ax}`
3. (Vérifiable : `y − y_p` vérifie `(y−y_p)' = a(y−y_p)`)

**Trouver C avec une condition initiale `f(x_0) = y_0`**
- Substituer dans la solution générale, résoudre en C
- Solution unique vérifiant cette condition

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Solutions de `y' = ay` | `y = C·e^{ax}` |
| Solutions de `y' = ay + b` | `y = C·e^{ax} − b/a` |
| Primitive de `1/(ax+b)` | `(1/a)·ln\|ax+b\|` |
| Primitive de `(ax+b)^n` | `(ax+b)^{n+1}/(a(n+1))` |

---

## ⚠️ Pièges classiques

- « Résoudre » = trouver **toutes** les solutions (avec la constante), pas une seule
- Oublier la constante `C` dans la solution générale
- `1/x` a pour primitive `ln(x)` **uniquement si x > 0** — sinon `ln|x|`
- `y' = ay + b` : la solution particulière est `−b/a` (le **signe moins**)
- Mélanger primitive et dérivée : toujours vérifier en dérivant
- Forme `u'·e^u` : oublier que la primitive est `e^u` (pas `e^u / u'`)

---

## ✅ Check-list bac

- [ ] J'ai bien indiqué « C ∈ ℝ » dans la solution générale
- [ ] Pour `y' = ay + b` : j'ai cité la solution particulière constante `−b/a`
- [ ] Pour vérifier une primitive : j'ai dérivé F et trouvé f
- [ ] Domaine de validité (ex. ln nécessite `u > 0`) précisé
- [ ] Condition initiale : C calculé proprement, solution unique annoncée
