# 📈 Exponentielle & Logarithme — Synthèse

> **Bac Spé Maths · Terminale**
> Deux fonctions réciproques — apprendre l'une, c'est savoir l'autre par symétrie.

---

## ⚡ Carte des réflexes

| Tu vois ça… | Tu déclenches… |
|---|---|
| `e^A = e^B` | `A = B` (exp injective) |
| `ln A = ln B` (A,B>0) | `A = B` (ln injective) |
| `e^A < e^B` | `A < B` (exp croissante) |
| `ln A < ln B` (A,B>0) | `A < B` (ln croissante) |
| `e^x = a` (a>0) | `x = ln a` |
| `ln x = a` | `x = e^a` |
| Dériver `e^{u(x)}` | `u'(x)·e^{u(x)}` |
| Dériver `ln(u(x))` | `u'(x)/u(x)` (avec u>0) |
| `e^x / x^n`, `x^n·e^{-x}` | Croissances comparées (exp gagne) |
| `ln(x)/x^n`, `x^n·ln(x)` | Croissances comparées (puissance gagne) |

---

## 🎯 Méthodes-clés

**Exponentielle — l'essentiel**
- Définie sur ℝ, **strictement positive**, `(e^x)' = e^x`
- `e^0 = 1`, `e^1 = e ≈ 2,72`
- ⚠️ **Jamais** `e^x = 0` ou `e^x ≤ 0`. C'est faux.
- `lim_{x→+∞} e^x = +∞`, `lim_{x→−∞} e^x = 0`
- Tangente en 0 : `y = x + 1` (donne `e^x ≥ x + 1`)

**Logarithme — réciproque de exp**
- Défini sur `]0 ; +∞[`
- `ln(e^x) = x` pour tout x ; `e^{ln x} = x` pour x > 0
- `ln 1 = 0`, `ln e = 1`
- `(ln x)' = 1/x`
- `lim_{x→0^+} ln x = −∞`, `lim_{x→+∞} ln x = +∞`
- Tangente en 1 : `y = x − 1` (donne `ln x ≤ x − 1`)

**Propriétés algébriques (à connaître par cœur)**

| Exp | Ln |
|---|---|
| `e^{a+b} = e^a · e^b` | `ln(ab) = ln a + ln b` |
| `e^{a−b} = e^a / e^b` | `ln(a/b) = ln a − ln b` |
| `e^{−a} = 1/e^a` | `ln(1/a) = −ln a` |
| `(e^a)^n = e^{na}` | `ln(a^n) = n·ln a` |

⚠️ `ln(a+b)` **ne se simplifie pas**. Aucune formule.

**Croissances comparées (la hiérarchie en +∞)**
> **exp >> puissances >> ln**

- `lim e^x / x^n = +∞` pour tout n
- `lim x^n · e^{-x} = 0` pour tout n
- `lim ln(x) / x^n = 0` pour tout n > 0
- `lim x^n · ln(x) = 0` en 0+ pour tout n > 0

**Inéquations à inconnue en exposant**
Exemple : `0,85^n < 0,6`
- Prendre `ln` : `n · ln(0,85) < ln(0,6)`
- ⚠️ `ln(0,85) < 0` ⇒ **changer le sens** : `n > ln(0,6)/ln(0,85) ≈ 3,14`
- ⇒ plus petit entier : **n = 4**

**Étude de `f(x) = e^{u(x)}` ou `f(x) = ln(u(x))`**
1. Domaine (pour ln : il faut `u(x) > 0`)
2. Dérivée : `u'·e^u` ou `u'/u`
3. Signe de f' = signe de u' (car `e^u > 0` toujours, et `u > 0` pour ln)
4. Tableau de variations + limites

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Dérivée exp composée | `(e^{u})' = u' · e^u` |
| Dérivée ln composée | `(ln u)' = u'/u` |
| Limite remarquable ln | `lim_{x→0} ln(1+x)/x = 1` |
| Limite remarquable exp | `lim_{x→0} (e^x − 1)/x = 1` |
| Inégalité tangente | `e^x ≥ x+1` ; `ln x ≤ x−1` |

---

## ⚠️ Pièges classiques

- Écrire `e^x = 0` (impossible — exp > 0)
- Oublier que `ln` exige son argument **strictement positif**
- Confondre : `ln` transforme produit→somme ; `exp` transforme somme→produit
- Inéquation avec `ln(q)` quand `q < 1` : **inverser le sens**
- Mal dériver `e^{u(x)}` : oublier le `u'(x)` devant
- Croissances comparées invoquées à tort : seulement si on n'arrive **pas** à conclure par factorisation

---

## ✅ Check-list bac

- [ ] J'ai vérifié le domaine avant d'utiliser ln
- [ ] J'ai justifié l'injectivité (« exp est strictement croissante donc injective »)
- [ ] Pour les croissances comparées : ne pas les invoquer si une factorisation simple suffit
- [ ] Tangente en 0 (exp) ou en 1 (ln) : valeur de la pente correctement calculée
- [ ] Étude complète : domaine, limites, dérivée, signe, tableau, asymptotes
