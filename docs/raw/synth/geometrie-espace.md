# 📐 Géométrie dans l'espace — Synthèse

> **Bac Spé Maths · Terminale**
> Les 8 questions-types, dans l'ordre où elles tombent.

---

## ⚡ La check-list (8 types de questions)

1. **(ABC) forme un plan**
2. **Longueurs et coordonnées d'un milieu**
3. **Représentation paramétrique d'une droite**
4. **Équation cartésienne d'un plan**
5. **(D) orthogonale à (P) ; positions (D)/(P) et (P)/(P')**
6. **Intersection (D) ∩ (P)**
7. **Projeté orthogonal d'un point sur un plan** (« montrer que H est… » ou « déterminer les coordonnées de H »)
8. **Aires et volumes**

---

## 🎯 Méthodes-clés

**Distance · milieu**
- `AB = √[(x_B−x_A)² + (y_B−y_A)² + (z_B−z_A)²]`
- Milieu : moyenne des coordonnées

**(ABC) plan**
1. Calculer `AB` et `AC`
2. Montrer non-colinéaires (coords non proportionnelles, **un seul ratio qui diffère** suffit)
3. Conclure : « A, B, C non alignés ⇒ plan unique »

**Représentation paramétrique d'une droite (A, u)**
```
x = x_A + a·t
y = y_A + b·t      avec t ∈ ℝ
z = z_A + c·t
```
⚠️ Toujours **mentionner t ∈ ℝ**.

**Équation cartésienne d'un plan (A, n)**
- Forme : `ax + by + cz + d = 0` avec `n(a,b,c)` normal
- Injecter A pour trouver `d`

**Trouver le normal n à partir de 3 points A, B, C**
1. Calculer `AB`, `AC`
2. Résoudre `n·AB = 0` ET `n·AC = 0`
3. Fixer une coordonnée (ex. c=1) et résoudre

**(D) ⊥ (P) — 2 méthodes**
- M1 : `u_D` colinéaire à `n_P` (le plus rapide)
- M2 : `u_D ⊥` à **deux** vecteurs non colinéaires de (P)

**Positions (P) / (P')**
- Normaux colinéaires + un point de (P) sur (P') ⇒ confondus
- Normaux colinéaires sans point commun ⇒ strictement parallèles
- Normaux non colinéaires ⇒ sécants (intersection = droite)

**Intersection (D) ∩ (P)**
- Substituer la paramétrique dans la cartésienne
- Résoudre en `t`, réinjecter pour les coordonnées

**Projeté orthogonal H de M sur (P)**
1. Droite passant par M, de vecteur directeur `n_P`
2. Intersection avec (P)
3. Pour la distance : `MH = ‖MH‖`

**Aire / volume**
- Aire triangle ABC : `½ · ‖AB‖ · ‖AC‖ · sin(angle)` ou via produit vectoriel
- Volume tétraèdre : `(aire base × hauteur) / 3`

---

## 📐 Formules à mémoriser

| | Formule |
|---|---|
| Distance AB | `√[(Δx)² + (Δy)² + (Δz)²]` |
| Produit scalaire | `u·v = x x' + y y' + z z'` |
| Norme | `‖u‖ = √(x² + y² + z²)` |
| Cos(u,v) | `(u·v) / (‖u‖·‖v‖)` |
| Distance M-(P) | `\|ax_M + by_M + cz_M + d\| / √(a² + b² + c²)` |

---

## ⚠️ Pièges classiques

- Oublier `t ∈ ℝ` dans la paramétrique
- Pour (D) ⊥ (P) en méthode 2 : **deux** vecteurs nécessaires (pas un seul)
- Si 3 vecteurs **coplanaires** ⇒ pas une base
- Calcul du produit scalaire avec coordonnées négatives : signes !
- Oublier de vérifier la colinéarité des normaux avant de conclure « parallèles »

---

## ✅ Check-list bac

- [ ] J'ai distingué « Montrer que H est… » vs « Déterminer les coordonnées de H »
- [ ] J'ai cité explicitement le critère utilisé (coplanarité, orthogonalité, etc.)
- [ ] Pour les 3 points A, B, C : non-colinéarité explicitement prouvée
- [ ] Pour les plans : équation `ax+by+cz+d=0` (pas l'oubli du `+d`)
- [ ] Volume / aire : unité indiquée (u.v., u.a.)
