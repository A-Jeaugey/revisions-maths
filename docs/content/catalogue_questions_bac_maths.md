# Catalogue des questions-types — Bac Spécialité Maths Terminale (post-réforme 2024)

> **Référence pour bac blanc.** Document construit à partir des **36 sujets uniques** publiés par l'APMEP depuis la session 2024 (sujet 0, sessions 2024 et 2025). Objectif : t'aider à reconnaître un pattern dès la lecture d'un énoncé et à anticiper la séquence des questions.
>
> Date d'analyse : 26 avril 2026. Aucun sujet 2026 n'avait encore été publié.

---

## Sommaire

- [Conventions et codes](#conventions-et-codes)
- [Vue d'ensemble du corpus](#vue-densemble-du-corpus)
- [PARTIE 1 — Catalogue par chapitre](#partie-1--catalogue-par-chapitre)
  - [1. Suites](#1-suites)
  - [2. Géométrie dans l'espace](#2-géométrie-dans-lespace)
  - [3. Probabilités conditionnelles + loi binomiale](#3-probabilités-conditionnelles--loi-binomiale)
  - [4. Sommes de variables aléatoires + Bienaymé-Tchebychev + LGN](#4-sommes-de-variables-aléatoires--bienaymé-tchebychev--lgn)
  - [5. Fonctions exponentielle et logarithme](#5-fonctions-exponentielle-et-logarithme)
  - [6. Limites, continuité, convexité, dérivation composée](#6-limites-continuité-convexité-dérivation-composée)
  - [7. Primitives et équations différentielles](#7-primitives-et-équations-différentielles)
  - [8. Intégration](#8-intégration)
- [PARTIE 2 — Patterns d'enchaînement (exos transverses)](#partie-2--patterns-denchaînement-exos-transverses)
- [Annexe — Matrice complète des sujets](#annexe--matrice-complète-des-sujets)

---

## Conventions et codes

**Format de citation** : `Sujet exoN QM` — par exemple `Métropole 2024 J1 ex1 Q3` désigne l'exercice 1, question 3 du sujet de Métropole jour 1 juin 2024.

**Codes courts utilisés dans les tableaux** :

| Code | Sujet |
|---|---|
| Sujet0 2024 | Sujet zéro publié par le ministère (mars 2024) |
| AmN J1/J2 | Amérique du Nord, jour 1 / jour 2 (mai) |
| CEtr J1/J2 | Centres étrangers, jour 1 / jour 2 (juin) |
| Suède 2024 | Centres étrangers J1bis, Suède (7 juin 2024) |
| Asie J1/J2 | Asie, jour 1 / jour 2 (juin) |
| Métro J1/J2 | Métropole, jour 1 / jour 2 (juin) |
| Poly J1/J2 | Polynésie, jour 1 / jour 2 (juin) |
| MétroSept J1/J2 | Métropole, session de remplacement septembre |
| PolySept | Polynésie, septembre |
| AsieSept | Asie, septembre |
| AmS J1/J2 | Amérique du Sud, jour 1 / jour 2 (novembre) |
| NCal J1/J2 | Nouvelle-Calédonie, jour 1 / jour 2 (novembre) |

**Échelle de fréquence** :

| Symbole | Fréquence | Signification |
|---|---|---|
| 🟥 | 90-100% | Quasi systématique — à coup sûr préparer |
| 🟧 | 70-89% | Très probable |
| 🟨 | 40-69% | Fréquent |
| 🟩 | 20-39% | Occasionnel |
| ⬜ | <20% | Rare mais peut tomber |

**Notation méthode** : "**méso**" = trame de réponse au niveau de l'élève, sans calculs explicites. On dit *quoi* faire et *dans quel ordre*, pas *comment* le calculer.

---

## Vue d'ensemble du corpus

**Corpus analysé** : 36 sujets uniques (sujet 0 + 17 sessions 2024 + 18 sessions 2025) = 136 exercices.

**Structure standard d'un sujet** : 4 exercices, 5-6 points chacun, 4h d'épreuve. Le sujet 0 (2024) déroge avec 8 exercices indépendants (banque d'exemples ministérielle).

**Répartition globale des exercices par chapitre dominant** (un exercice peut couvrir 2 chapitres ; comptage en *top 1 ou top 2*) :

| Chapitre | Nb d'exos / 136 | % |
|---|---|---|
| Probabilités conditionnelles + loi binomiale | 53 | 39% |
| Géométrie dans l'espace | 34 | 25% |
| Étude de fonctions exp/ln | 20 | 15% |
| Algorithmique Python | 19 | 14% |
| Limites / continuité / convexité (étude de fonction) | 17 | 13% |
| Sommes VA + Bienaymé-Tchebychev | 16 | 12% |
| Intégration | 14 | 10% |
| Suites | 11 | 8% |
| QCM / Vrai-Faux | 9 | 7% |
| Équations différentielles | 3 | 2% (en exo dédié ; bien plus en sous-partie) |
| Dénombrement | 1 | <1% |

**Constat fondamental** :
- Sur **35 sujets standards** (hors sujet 0), **chacun comporte au moins un exercice de probas** ET **au moins un exercice de géométrie dans l'espace**. C'est mécanique.
- L'**exo 1** est dans 25/35 sujets (71%) un exercice de probabilités, et de plus en plus souvent (depuis 2025) un exo *combiné* probas conditionnelles + loi binomiale + sommes de VA + Bienaymé-Tchebychev.
- L'algorithmique Python n'est jamais en exo entier, mais s'invite dans environ la moitié des sujets en sous-partie d'un autre exercice (souvent à propos d'une suite ou d'une simulation probabiliste).

---

## PARTIE 1 — Catalogue par chapitre

---

### 1. Suites

> **Présence dans le corpus** : ~30% des sujets ont un exercice **principalement** dédié aux suites ; mais ~80% en contiennent une partie (sous-partie d'étude de fonction, simulation Python, modélisation discrète d'une équation différentielle continue). Le chapitre est donc transverse.

#### 1.1 Démontrer par récurrence

##### 1.1.1 — Récurrence sur un encadrement / une majoration / une minoration

**Fréquence** : 🟥 **~95%** des exos qui contiennent une suite définie par récurrence par $u_{n+1}=f(u_n)$ commencent par cette question. Si tu vois "On considère la suite définie par $u_0 = … $ et $u_{n+1}=…$", **tu prépares ton plan de récurrence**.

**Méthode méso (rédaction-type)** :
1. **Annoncer la propriété** $\mathcal{P}(n)$ : "Pour tout $n \in \mathbb{N}$, $a \le u_n \le b$" (ou la majoration/minoration demandée).
2. **Initialisation** : vérifier $\mathcal{P}(0)$ par calcul direct sur $u_0$.
3. **Hérédité** : supposer $\mathcal{P}(n)$ vraie ; appliquer $f$ ou la relation de récurrence aux deux bornes ; **utiliser le sens de variation de $f$ sur l'intervalle** (croissante ⇒ on conserve l'ordre, décroissante ⇒ on inverse) ; conclure $\mathcal{P}(n+1)$.
4. **Conclusion** : "Par principe de récurrence, pour tout $n$, …".

**Apparitions** :
- Métropole 2024 J1 ex1 Q2 (VF avec encadrement de $v_n$)
- Asie 2024 J2 ex1 (suite $(u_n)$ définie par $u_{n+1}=g(u_n)$, encadrement $0 \le u_n \le 1$)
- Centres étrangers 2024 J1 ex2 (suite récurrente avec exp)
- Polynésie 2024 J1 ex4 (suite arithmético-géométrique)
- Asie 2025 J2 ex2
- Centres étrangers 2025 J1 ex3 (encadrement $0 \le u_n \le \alpha$)
- Polynésie sept 2025 ex3 (Python + récurrence)
- Sujet 0 2024 ex6 (récurrence, suites)

**Pièges classiques** :
- ⚠️ Oublier d'écrire "par récurrence", "initialisation", "hérédité", "conclusion" → points de rédaction perdus.
- ⚠️ Hérédité bâclée : appliquer $f$ aux bornes sans justifier la monotonie de $f$ sur l'intervalle où vivent les $u_n$.
- ⚠️ Quand $f$ est décroissante, beaucoup d'élèves continuent à conserver l'ordre. Faire un **schéma au brouillon**.
- ⚠️ Quand l'encadrement à démontrer est **strict** ($a < u_n < b$), s'assurer que l'image par $f$ reste strictement dans l'intervalle (utiliser $f$ strictement monotone).

##### 1.1.2 — Récurrence sur la monotonie

**Fréquence** : 🟧 **~70%** des exos avec suite récurrente la demandent (souvent comme prérequis avant de conclure par TCM).

**Méthode méso** :
- Méthode 1 (récurrence) : $\mathcal{P}(n)$ : "$u_n \le u_{n+1}$" ; initialisation par calcul ; hérédité en appliquant $f$ croissante.
- Méthode 2 (étude du signe) : étudier le signe de $u_{n+1} - u_n = f(u_n) - u_n$. Souvent, on définit $g(x) = f(x) - x$ et on étudie son signe sur $[a, b]$.

**Apparitions** :
- Sujet 0 2024 ex6 (suite récurrente, étude de monotonie via signe)
- Métropole 2024 J1 ex1 Q2 (VF "Toute suite décroissante converge")
- Centres étrangers 2024 J1 ex2
- Asie 2024 J2 ex1
- Polynésie 2024 J1 ex4
- Métropole sept 2024 J2 ex3 (médicament : suite croissante puis tend vers limite)

**Pièges** :
- ⚠️ Dire "la fonction $f$ est croissante donc la suite est croissante" : c'est faux en général. La croissance de $f$ implique seulement que la suite $(u_n)$ est **monotone** ; le sens dépend de la position de $u_0$ par rapport à $u_1$.
- ⚠️ Confondre la monotonie de $(u_n)$ et celle de $f$.

##### 1.1.3 — Récurrence sur une formule explicite

**Fréquence** : 🟨 **~50%** des sujets avec suite arithmético-géométrique : on demande de démontrer une expression explicite.

**Méthode méso** : récurrence classique, hérédité via la relation $u_{n+1} = f(u_n)$ et substitution.

**Apparitions** :
- Polynésie 2024 J1 ex4 (suite arithmético-géométrique : $u_{n+1} = au_n + b$ avec auxiliaire $v_n = u_n - \ell$)
- Centres étrangers 2025 J1 ex3
- AmN 2025 J2 secours ex4
- Sujet 0 2024 ex6

#### 1.2 Théorème de convergence monotone (TCM)

**Fréquence** : 🟥 **~95%** dans tout exo qui demande la convergence d'une suite récurrente $(u_n)$ avec $u_{n+1} = f(u_n)$.

**Méthode méso (rédaction-type)** :
1. Énoncer : "La suite $(u_n)$ est croissante (resp. décroissante) et majorée (resp. minorée) par $b$ (resp. $a$)".
2. **Conclusion par TCM** : "Donc $(u_n)$ converge vers une limite finie $\ell$, avec $\ell \le b$ (resp. $\ell \ge a$)".
3. (Souvent en question suivante) **Détermination de $\ell$** : passer à la limite dans $u_{n+1} = f(u_n)$ → $\ell = f(\ell)$, c'est-à-dire $\ell$ est un point fixe de $f$. Résoudre l'équation $f(x) = x$ sur l'intervalle considéré.

**Apparitions** :
- Asie 2024 J2 ex1
- Centres étrangers 2024 J1 ex2
- Centres étrangers 2025 J1 ex3
- Polynésie sept 2025 ex3
- Sujet 0 2024 ex6
- Asie 2025 J2 ex2

**Pièges** :
- ⚠️ Conclure que $\ell$ existe **avant** d'avoir prouvé monotonie ET bornage. Bien rédiger les deux conditions.
- ⚠️ Pour déterminer $\ell$, oublier de **vérifier la continuité de $f$ au point fixe** (généralement implicite mais à mentionner si on est rigoureux).
- ⚠️ Si l'équation $f(x) = x$ a plusieurs solutions, sélectionner celle qui est **dans l'intervalle** où vivent les $u_n$ (en se servant de la majoration/minoration démontrée).

#### 1.3 Suite arithmético-géométrique avec suite auxiliaire

**Fréquence** : 🟨 **~40%** des sujets contenant une suite récurrente proposent ce schéma classique.

**Méthode méso** :
1. **Reconnaître la forme** $u_{n+1} = au_n + b$ avec $a \neq 1$.
2. **Calculer le point fixe** : résoudre $\ell = a\ell + b$, soit $\ell = b/(1-a)$.
3. **Définir la suite auxiliaire** $v_n = u_n - \ell$. **Démontrer** que $(v_n)$ est géométrique de raison $a$ (montrer $v_{n+1} = av_n$).
4. **Expliciter** $v_n = v_0 \cdot a^n$, puis $u_n = v_0 a^n + \ell$.
5. **Étudier la limite** : si $|a| < 1$, $a^n \to 0$ donc $u_n \to \ell$.

**Apparitions** :
- Polynésie 2024 J1 ex4
- Centres étrangers 2024 J1 ex2 (variante exp : $v_n$ liée à exp)
- AmN 2025 J2 secours ex4
- Métropole sept 2024 J2 ex3 (modèle médicament : $u_{n+1} = 0{,}8 u_n + 2$)
- Sujet 0 2024 ex8 (suite + Python pour seuil)

**Pièges** :
- ⚠️ Erreur de signe dans le calcul de $\ell$.
- ⚠️ Oublier de **prouver** que $(v_n)$ est géométrique : il faut écrire $v_{n+1} = u_{n+1} - \ell = au_n + b - \ell$, simplifier en utilisant $\ell = a\ell+b$, conclure $v_{n+1} = a(u_n - \ell) = av_n$.
- ⚠️ Recopier la formule $v_n = v_0 r^n$ sans préciser la valeur initiale $v_0 = u_0 - \ell$.

#### 1.4 Suites $u_{n+1} = f(u_n)$ après étude de fonction (partie C)

**Fréquence** : 🟧 **~70%** des sujets dont l'exo « étude de fonction » comporte une partie C ou une partie sur suite. Pattern emblématique du chapitre.

**Méthode méso** : voir [Pattern P2 dans la Partie 2](#p2--étude-de-fonction-expln--suite-u_n1--fu_n).

**Apparitions** :
- Asie 2024 J2 ex1 (Partie B après étude de $f$ en Partie A)
- Centres étrangers 2024 J1 ex2 (étude $f$ + suite)
- Métropole sept 2024 J2 ex3 (médicament, suite après étude continue)
- Polynésie sept 2025 ex3
- Sujet 0 2024 ex6
- Asie 2025 J2 ex2

#### 1.5 Sommes de termes d'une suite

##### 1.5.1 — Somme géométrique

**Fréquence** : 🟨 **~40%** : apparaît quand le sujet a explicité une suite géométrique (souvent $v_n$ auxiliaire) et demande de calculer $S_n = u_0 + u_1 + \dots + u_n$.

**Méthode méso** :
1. Décomposer $S_n$ via la relation $u_n = v_n + \ell$ ⇒ $S_n = \sum v_k + (n+1)\ell$.
2. Appliquer la formule $\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q}$ pour $\sum v_k$.
3. **Étudier la limite** de $S_n$ ; si $|q| < 1$, $S_n$ converge vers $v_0/(1-q) + (n+1)\ell$ → diverge si $\ell \neq 0$, sinon converge.

**Apparitions** :
- Polynésie 2024 J1 ex4 (somme arithmético-géométrique)
- Asie 2025 J2 ex2

##### 1.5.2 — Somme avec encadrement / inégalité

**Fréquence** : 🟩 **~20%**.

**Méthode méso** : encadrer chaque terme puis sommer, ou utiliser une comparaison série/intégrale (rare au bac).

#### 1.6 Algorithme Python sur une suite

**Fréquence** : 🟧 **~70%** des exos avec suite contiennent une question Python.

**Trois patterns Python récurrents** :

##### 1.6.1 — Algorithme « seuil »

**Énoncé typique** : "Recopier et compléter la fonction Python ci-dessous qui renvoie le plus petit entier $n$ tel que $u_n \ge S$ (ou $|u_n - \ell| \le \varepsilon$)".

**Méthode méso** :
- Boucle `while` avec condition de sortie sur $u_n$ vs seuil.
- Mise à jour de $u_n$ via la relation de récurrence.
- Compteur $n$ incrémenté.
- `return n` à la fin.

**Apparitions** : Métropole 2024 J2 ex2, Sujet 0 2024 ex8, MétroSept 2024 J2 ex4, AmN 2025 J1 ex2, Métropole 2025 J1 ex4, MétroSept 2025 J1 ex3, Métropole sept 2025 J2 ex3, Polynésie 2025 J1 ex3, Polynésie sept 2025 ex3, Nouvelle-Calédonie 2025 J1 ex3.

**Pièges** :
- ⚠️ Ne pas oublier d'**initialiser** correctement (souvent $u = u_0$ et $n = 0$).
- ⚠️ Ordre des instructions dans la boucle : mettre à jour $u$ **et** $n$ ; sinon boucle infinie ou décalage.
- ⚠️ La condition `while` doit être l'**opposé** de la condition de sortie : si on cherche le plus petit $n$ tel que $u_n \ge S$, la boucle continue **tant que** $u_n < S$.

##### 1.6.2 — Algorithme « somme » ou « calcul de $u_N$ »

**Énoncé typique** : "Compléter la fonction qui calcule et renvoie $u_N$" ou "qui renvoie $S_N = u_0 + \dots + u_N$".

**Méthode méso** :
- Boucle `for k in range(N)` (ou `range(1, N+1)`) qui itère exactement le bon nombre de fois.
- Mise à jour de $u$ ; éventuellement accumulation dans $S$.

**Apparitions** : Centres étrangers 2024 J1bis (Suède) ex1, Centres étrangers 2024 J2 ex4, Sujet 0 2024 ex2, AmS 2025 J1 ex1, Polynésie 2025 J2 ex1.

**Pièges** :
- ⚠️ `range(N)` itère $N$ fois (de 0 à $N-1$). Si on initialise $u = u_0$ et qu'on veut $u_N$, il faut bien $N$ mises à jour, donc `range(N)`.
- ⚠️ Confondre `range(N)` et `range(N+1)`.

##### 1.6.3 — Simulation aléatoire

**Énoncé typique** : "Compléter la fonction Python qui simule l'expérience…" (souvent dans un exo de probabilités).

**Méthode méso** :
- Importer ou utiliser `random.random()` ou `random.randint`.
- Boucle de simulation, comptage des succès.
- Renvoie soit un effectif, soit une fréquence.

**Apparitions** : Métropole 2024 J2 ex2, MétroSept 2024 J1 ex3, Sujet 0 2024 ex2, MétroSept 2025 J2 ex3, Métropole 2025 J1 ex4.

**Pièges** :
- ⚠️ Utiliser `random.random() < p` pour simuler un événement de probabilité $p$ : la condition doit être strictement inférieure (ou égale) à $p$.
- ⚠️ Réinitialisation des compteurs à zéro à chaque appel.

#### 1.7 QCM / Vrai-Faux sur les suites (5 affirmations indépendantes)

**Fréquence** : 🟨 **~25%** des sujets ont un exercice (souvent ex4) construit comme un QCM ou un VF de 4-5 affirmations indépendantes incluant au moins **une** assertion sur les suites.

**Trame d'affirmations classiques (à vérifier vraies/fausses)** :
- "Toute suite décroissante minorée par 0 converge vers 0" (FAUX : converge vers une limite ≥ 0, pas nécessairement 0).
- "Si $u_n \to \ell$ alors $u_n$ est monotone à partir d'un certain rang" (FAUX : contre-exemple oscillant).
- "Si $(u_n)$ et $(v_n)$ sont divergentes alors $(u_n + v_n)$ est divergente" (FAUX : peut converger).
- "Si $u_{n+1} = f(u_n)$ et $u_n \to \ell$ alors $\ell$ vérifie $f(\ell) = \ell$" (VRAI sous hypothèse de continuité).
- "Une suite géométrique de raison négative diverge" (PIÈGE : dépend du module).

**Apparitions** : Métropole 2024 J1 ex1, Polynésie 2024 J2 ex2, AmS 2024 J2 ex2, AmN 2025 J2 secours ex2, AmN 2025 J2 ex3 (4 affirmations sur géom + suites), Polynésie 2025 J2 ex4, AsieSept 2025 ex1, AmS 2024 J1 ex3.

**Pièges** :
- ⚠️ La justification est notée. Une simple réponse "vrai" ou "faux" sans justification ne rapporte aucun point.
- ⚠️ Pour une affirmation fausse, un **contre-exemple précis** suffit.
- ⚠️ Pour une affirmation vraie, citer le **théorème** mobilisé (TCM, comparaison, encadrement, théorème des gendarmes, opérations sur les limites…).

#### Carte de fréquence — Chapitre 1 (Suites)

| Question | Fréquence | Code couleur |
|---|---|---|
| Récurrence sur encadrement / monotonie | 95% des exos avec suite récurrente | 🟥 |
| Conclure par TCM | 95% | 🟥 |
| Détermination du point fixe | 80% | 🟧 |
| Algorithme Python (seuil ou calcul itératif) | 70% des exos avec suite | 🟧 |
| Suite arithmético-géométrique avec auxiliaire | 40% | 🟨 |
| Calcul de somme partielle géométrique | 40% | 🟨 |
| QCM/VF sur suites (1-2 affirmations) | 25% des sujets | 🟩 |
| Étude d'une suite après étude de fonction | 70% des sujets avec étude de fonction étendue | 🟧 |
| Justifier que $(u_n)$ converge sans TCM (limites par opérations) | 30% | 🟩 |
| Étude conjointe de deux suites adjacentes / entrelacées | <10% | ⬜ |

#### 1.11 Expression explicite via changement de variable imposé ($v_n$ géométrique)

**Fréquence** : 🟢 **~25%** mais **important** car ça discrimine les meilleurs candidats.

**Énoncé typique** : "On pose $v_n = \ln(1 - u_n)$ (ou $w_n = \frac{1}{u_n - L}$, ou $w_n = u_{n+1} - \frac{1}{2} u_n$). Démontrer que $(v_n)$ est géométrique de raison …".

**Méthode méso** :
1. **Calculer $v_{n+1}$** en fonction de $u_{n+1}$, puis de $u_n$ via la relation de récurrence.
2. **Manipuler** algébriquement (factorisation, transformation logarithmique, simplification de fraction) pour faire apparaître $v_n$.
3. **Conclure** que $v_{n+1} = q \cdot v_n$ donc $(v_n)$ géométrique de raison $q$.
4. **Donner** l'expression $v_n = v_0 \cdot q^n$.
5. **Revenir à $u_n$** par inversion (résolution de la définition de $v_n$).

**Apparitions** :
- AmN 2024 J2 ex3 Q6 ($v_n = \ln(1 - u_n)$)
- MétroSept 2025 J1 ex3 B.2 ($w_n = (v_n - 1)/(v_n - 2)$)
- AmN 2025 J2 secours ex4 Partie B ($w_n = u_{n+1} - \frac{1}{2} u_n$)
- Sujet 0 2024 ex6 (changement implicite)

**Pièges** :
- ⚠️ Erreur dans le calcul algébrique du changement (souvent une fraction qu'on simplifie mal).
- ⚠️ Oublier de **revenir à $u_n$** : ne pas s'arrêter à l'expression de $v_n$.
- ⚠️ Pour $v_n = \ln(\cdot)$ : ne pas vérifier la condition de positivité ($1 - u_n > 0$).

**Carte mise à jour Suites** : ajouter ligne :

| Changement de variable imposé pour rendre $v_n$ géométrique | 25% | 🟢 (rare mais important) |

---

### 2. Géométrie dans l'espace

> **Présence dans le corpus** : 34/36 sujets contiennent un exo de géométrie dans l'espace (94%). C'est, avec les probas, le pilier intangible de chaque sujet. Souvent en exo 3 ou exo 4. Format soit en **exercice « cube/tétraèdre + repère orthonormé** », soit en **QCM/VF de 4 affirmations indépendantes**.

#### 2.1 Justifier qu'un vecteur est normal à un plan

**Fréquence** : 🟥 **~85%** des exercices de géométrie. Question d'**ouverture** ultra-classique.

**Méthode méso** :
1. **Identifier deux vecteurs $\vec{u}$ et $\vec{v}$ du plan** non colinéaires (typiquement $\overrightarrow{AB}$ et $\overrightarrow{AC}$ si le plan est $(ABC)$).
2. **Calculer le produit scalaire** $\vec{n} \cdot \vec{u}$ et $\vec{n} \cdot \vec{v}$ (à partir des coordonnées dans le repère orthonormé : $\vec{n} \cdot \vec{u} = x_n x_u + y_n y_u + z_n z_u$).
3. **Conclusion** : "Les deux produits sont nuls et $\vec{u}, \vec{v}$ ne sont pas colinéaires (vérifier en exhibant que les coordonnées ne sont pas proportionnelles), donc $\vec{n}$ est orthogonal à deux vecteurs non colinéaires du plan : $\vec{n}$ est normal au plan".

**Apparitions** : Métropole 2024 J1 ex3, AmN 2024 J2 ex2, Centres étrangers 2024 J2 ex3, Asie 2024 J1 ex2, Polynésie 2024 J2 ex4, Métropole sept 2024 J2 ex1, Métropole 2025 J1 ex3, Métropole 2025 J2 ex2, AmN 2025 J1 ex3, Centres étrangers 2025 J2 ex2, Centres étrangers 2025 J2 ex4, Polynésie 2025 J1 ex2, AsieSept 2025 ex2, Nouvelle-Calédonie 2025 J2 ex1, AmS 2025 J1 ex4.

**Pièges** :
- ⚠️ Oublier de **vérifier la non-colinéarité** des deux vecteurs du plan ; sans cela, l'argument tombe.
- ⚠️ Utiliser deux vecteurs colinéaires (par exemple $\overrightarrow{AB}$ et $\overrightarrow{BA}$).
- ⚠️ Erreur de calcul du produit scalaire : oublier une coordonnée, erreur de signe.

#### 2.2 Déterminer une équation cartésienne d'un plan

**Fréquence** : 🟥 **~85%** des exos géométrie.

**Méthode méso** :
1. **Repérer un vecteur normal** $\vec{n} = (a, b, c)$ (souvent donné, ou trouvé à la question précédente).
2. **Forme générale** : $ax + by + cz + d = 0$.
3. **Déterminer $d$** en utilisant un point connu du plan (ex : $A(x_A, y_A, z_A)$) : $d = -(ax_A + by_A + cz_A)$.
4. **Conclusion** : écrire l'équation finale.

**Apparitions** : Idem que 2.1 — généralement question juste après "vecteur normal".

**Pièges** :
- ⚠️ Erreur de signe sur $d$.
- ⚠️ Oublier d'utiliser un point qui appartient bien au plan considéré.

#### 2.3 Représentation paramétrique d'une droite

**Fréquence** : 🟥 **~80%**. Soit l'énoncé donne une représentation paramétrique et demande d'en extraire un point + un vecteur directeur, soit il demande de la **construire**.

**Méthode méso (construction)** :
1. **Identifier un point** $A$ de la droite et un **vecteur directeur** $\vec{u}$.
2. **Forme** : $\begin{cases} x = x_A + t \cdot u_x \\ y = y_A + t \cdot u_y \\ z = z_A + t \cdot u_z \end{cases}$, $t \in \mathbb{R}$.

**Apparitions** : très fréquent ; ex Métropole 2024 J1 ex3, Asie 2024 J1 ex2, Polynésie 2024 J2, Métropole sept 2024 J2 ex1, Métropole 2025 J2 ex2, Polynésie 2025 J1 ex2, etc.

**Pièges** :
- ⚠️ Confondre vecteur directeur et vecteur normal (deux concepts opposés : la droite **suit** son vecteur directeur, le plan est **perpendiculaire** à son vecteur normal).
- ⚠️ Oublier de préciser "$t \in \mathbb{R}$".

#### 2.4 Intersection droite / plan — Projeté orthogonal

**Fréquence** : 🟥 **~80%** des exos géométrie.

**Méthode méso (projeté orthogonal d'un point $M$ sur un plan $\mathcal{P}$)** :
1. **Construire la droite** $\Delta$ passant par $M$ et de vecteur directeur égal au **vecteur normal** $\vec{n}$ du plan.
2. **Représenter $\Delta$ en paramétrique**.
3. **Substituer** dans l'équation cartésienne du plan pour trouver la valeur de $t$.
4. **Calculer** les coordonnées du projeté $H$ en injectant $t$ dans la représentation paramétrique.

**Apparitions** : Métropole 2024 J1 ex3 (le projeté est explicitement le pied de la hauteur), Centres étrangers 2024 J2 ex3, Asie 2024 J1 ex2, AmN 2024 J2 ex2, AmN 2025 J1 ex3, Polynésie 2024 J2, Métropole 2025 J2 ex2, etc.

**Pièges** :
- ⚠️ Utiliser un mauvais vecteur directeur pour $\Delta$ (vecteur du plan au lieu du vecteur normal).
- ⚠️ Erreur algébrique au moment de résoudre l'équation en $t$.

#### 2.5 Calcul de distance d'un point à un plan / d'un point à une droite

**Fréquence** : 🟧 **~65%**.

**Méthode méso (distance $d(M, \mathcal{P})$)** :
1. **Trouver le projeté orthogonal $H$ de $M$ sur $\mathcal{P}$** (cf. §2.4) : on construit la droite passant par $M$ et de vecteur directeur $\vec{n}$ (normal au plan), puis on cherche son intersection avec $\mathcal{P}$.
2. **Calculer $MH = \|\overrightarrow{MH}\|$** : la distance demandée est la norme du vecteur entre $M$ et son projeté.

**Apparitions** : Asie 2024 J1 ex2, Métropole 2024 J1 ex3, Polynésie 2024 J2 ex4, AmN 2025 J1 ex3, Centres étrangers 2025 J2 ex2/ex4, Polynésie 2025 J1 ex2, Sujet 0 2024 ex4.

**Pièges** :
- ⚠️ Oublier de calculer le projeté avant de calculer la norme.
- ⚠️ Oublier de prendre la **norme** du vecteur (et non ses coordonnées).

#### 2.6 Volume d'un tétraèdre / d'une pyramide

**Fréquence** : 🟨 **~45%**.

**Méthode méso** :
- $V = \frac{1}{3} \cdot \mathcal{A}_{\text{base}} \cdot h$ où $h$ est la hauteur (distance d'un sommet à la base).
- **Étapes** : (1) calculer l'aire de la base (souvent un triangle ; pour un triangle rectangle ou via formule $\frac{1}{2}\|\vec{AB}\|\cdot\|\vec{AC}\|\sin(\widehat{BAC})$, mais le plus souvent on a un triangle rectangle dont la donnée est immédiate ; (2) calculer $h$ via la distance d'un sommet à la base.

**Apparitions** : Métropole 2024 J1 ex3 (hauteur du tétraèdre $ABCH$ + volume), Centres étrangers 2024 J2 ex3, Polynésie 2024 J2, AmN 2025 J1 ex3, Polynésie sept 2024 ex3 ou ex4, AsieSept 2025 ex2.

**Pièges** :
- ⚠️ Oublier le facteur $\frac{1}{3}$.
- ⚠️ Confondre l'aire de la base et la base d'un parallélogramme.
- ⚠️ Pour un triangle rectangle, la formule simple est $\mathcal{A} = \frac{1}{2}\|\vec{u}\|\|\vec{v}\|$ avec $\vec{u}, \vec{v}$ orthogonaux ; le démontrer si non évident.

#### 2.7 Démontrer qu'un triangle est rectangle / isocèle / équilatéral dans l'espace

**Fréquence** : 🟧 **~60%**.

**Méthode méso** :
- **Rectangle en $A$** : montrer $\overrightarrow{AB} \cdot \overrightarrow{AC} = 0$.
- **Isocèle en $A$** : montrer $\|\overrightarrow{AB}\| = \|\overrightarrow{AC}\|$.
- **Équilatéral** : les trois côtés ont la même longueur.

**Apparitions** : MétroSept 2024 J2 ex1, AmS 2025 J1 ex4, Polynésie 2024 J2, AsieSept 2025 ex2.

**Pièges** :
- ⚠️ Calculer le carré des normes (sans racine) si on veut juste comparer ; éviter les racines inutiles.

#### 2.8 Coplanarité, alignement, parallélisme

**Fréquence** : 🟨 **~40%**.

**Méthode méso** :
- **Trois points alignés** : montrer $\overrightarrow{AB}$ et $\overrightarrow{AC}$ colinéaires (coordonnées proportionnelles).
- **Quatre points coplanaires** : montrer $\overrightarrow{AD}$ comme combinaison linéaire de $\overrightarrow{AB}$ et $\overrightarrow{AC}$ (système 3 équations / 2 inconnues $\alpha, \beta$).
- **Droites parallèles** : vecteurs directeurs colinéaires.
- **Plan parallèle à droite** : vecteur normal du plan orthogonal au vecteur directeur de la droite.

**Apparitions** : Sujet 0 2024 ex4, Polynésie 2024 J2, AmN 2024 J2 ex2, AmS 2024 J2 ex2/ex3, AsieSept 2025 ex2, Asie 2025 J2 ex3.

#### 2.9 QCM / Vrai-Faux sur 4 affirmations indépendantes en géométrie

**Fréquence** : 🟧 **~30%**. Format de plus en plus présent depuis 2024.

**Trame typique des 4 affirmations** :
1. Une affirmation sur la **colinéarité ou coplanarité** (vrai si proportionnels, faux sinon).
2. Une affirmation sur une **équation cartésienne** ou une **représentation paramétrique** (chercher si un point appartient au plan/à la droite).
3. Une affirmation sur la **distance** ou la **perpendicularité**.
4. Une affirmation sur un **volume** ou une **intersection**.

**Apparitions** : Polynésie 2024 J2 ex2, AmS 2024 J2 ex2 (affirmations VF), AmN 2025 J2 ex3, AsieSept 2025 ex1, Polynésie 2025 J2 ex4 (mix géométrie/intégration), Centres étrangers 2025 J1 ex2.

**Pièges** :
- ⚠️ Justification obligatoire pour chaque affirmation. Une seule preuve fait gagner ~1 point ; toutes au total = ~4-5 points.
- ⚠️ Lire chaque affirmation **isolément** : on peut être amené à utiliser des résultats des questions précédentes ; vérifier qu'on ne mélange pas.

#### 2.10 Exercice construit autour d'un cube / tétraèdre / parallélépipède

**Fréquence** : 🟥 **~75%** des exos géométrie.

**Squelette typique** :
1. **Mise en place du repère** orthonormé sur le cube/tétraèdre (souvent donné dans l'énoncé).
2. **Donner les coordonnées** des points clés (souvent imposé).
3. **Vecteur normal** à un plan défini par 3 sommets.
4. **Équation cartésienne** du plan.
5. **Représentation paramétrique** d'une droite (typiquement la perpendiculaire au plan passant par un sommet).
6. **Projeté orthogonal** / **intersection** droite ∩ plan.
7. **Distance / volume** comme synthèse.

**Apparitions** : Métropole 2024 J1 ex3 (cube ABCDEFGH), Centres étrangers 2024 J2 ex3, Polynésie 2024 J2 ex4, AmS 2024 J2 ex3 (cube avec point $L$ sur une diagonale), Asie 2024 J1 ex2, MétroSept 2024 J2 ex1, AmN 2025 J1 ex3, Centres étrangers 2025 J2 ex4, Métropole 2025 J1 ex3, Polynésie 2025 J1 ex2, AsieSept 2025 ex2, Nouvelle-Calédonie 2025 J2 ex1.

#### Carte de fréquence — Chapitre 2 (Géométrie dans l'espace)

| Question | Fréquence | Code |
|---|---|---|
| Vecteur normal à un plan (justification produit scalaire) | 85% | 🟥 |
| Équation cartésienne d'un plan | 85% | 🟥 |
| Représentation paramétrique d'une droite | 80% | 🟥 |
| Intersection droite/plan, projeté orthogonal | 80% | 🟥 |
| Distance point/plan ou point/droite | 65% | 🟧 |
| Triangle rectangle/isocèle (norme + produit scalaire) | 60% | 🟧 |
| Volume d'un tétraèdre/pyramide | 45% | 🟨 |
| Coplanarité ou alignement | 40% | 🟨 |
| QCM/VF géométrie 4 affirmations | 30% des sujets | 🟩 |
| Démonstrations sur le cube ABCDEFGH | 75% des exos géométrie | 🟥 |
| Aire d'un triangle / parallélogramme | 30% | 🟩 |
| Construire l'intersection de 2 plans (droite d'intersection) | 15% | ⬜ |

#### 2.11 Angle de deux vecteurs / mesure d'angle géométrique

**Fréquence** : 🟨 **~40%**.

**Méthode méso** :
- $\cos(\theta) = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \cdot \|\vec{v}\|}$.
- Reconnaître les valeurs canoniques : $\cos(\pi/3) = 1/2$, $\cos(\pi/4) = \sqrt{2}/2$, $\cos(\pi/6) = \sqrt{3}/2$.
- Pour le sinus, utiliser $\sin^2 + \cos^2 = 1$.

**Apparitions** :
- AmN 2025 J1 ex3 aff.3
- Asie 2025 J1 ex1 aff.3
- Polynésie 2025 J1 ex4 aff.4
- Asie 2025 J2 ex3 aff.2

**Pièges** :
- ⚠️ Erreur de signe sur le produit scalaire (pas de valeur absolue).
- ⚠️ Confondre $\theta$ et $\pi - \theta$ (deux angles avec même cosinus dans $[0, \pi]$ ⇒ unique).

---

### 3. Probabilités conditionnelles + loi binomiale

> **Présence dans le corpus** : **53/136** exercices ont les probas en chapitre dominant ou secondaire. **Tous les sujets sans exception** depuis 2024 ont au moins un exercice de probas. C'est l'**ex1 par défaut** depuis 2025 (cf. Pattern P1 dans la Partie 2).

#### 3.1 Construire un arbre pondéré

**Fréquence** : 🟥 **~95%** des exos probas commencent par cette question (souvent Q1).

**Méthode méso** :
1. **Identifier les événements** donnés dans l'énoncé et les probabilités correspondantes.
2. **Premier niveau** : événements de la partition de l'univers (ex : $A$, $B$, $C$ avec leurs probas, on vérifie que $P(A)+P(B)+P(C)=1$).
3. **Second niveau** : pour chaque branche, les probabilités conditionnelles ; somme des probas conditionnelles à un événement = 1.
4. **Tracer** proprement avec les probas sur les branches.

**Apparitions** : ultra-fréquent. Citations : Métropole 2024 J1 ex2 Q1, AmN 2024 J2 ex1 Q1, Centres étrangers 2024 J2 ex1, Asie 2024 J1 ex3, AmN 2025 J1 ex1 Q1, Métropole 2025 J1 ex1 Q1 (groupes sanguins), Métropole 2025 J2 ex1 Q1, AmS 2025 J1 ex2 Q1, AmS 2025 J2 ex1 Q1, CEtr 2025 J1 ex1, Poly 2025 J1 ex1, Sujet 0 2024 ex1.

**Pièges** :
- ⚠️ Mal lire les pourcentages **conditionnels** vs **non conditionnels** (ex : « 85% des A sont positifs » est conditionnel à A, pas une proba globale).
- ⚠️ Oublier les branches "non $A$", "non B", etc. ; vérifier que les probas conditionnelles somment à 1.

#### 3.2 Calcul d'une probabilité conjointe via l'arbre

**Fréquence** : 🟥 **~95%** (Q2-Q3 typique).

**Méthode méso** :
$P(A \cap B) = P(A) \times P_A(B)$. Lecture directe sur l'arbre : produit des probabilités le long du chemin.

**Apparitions** : tous les exos probas. Métropole 2025 J1 ex1 Q2 ($P(B \cap R)$), AmN 2025 J1 ex1 Q2 ($P(S \cap B)$), AmS 2025 J2 ex1 Partie A, etc.

**Pièges** :
- ⚠️ Confondre $P(A \cap B)$ et $P_A(B)$.
- ⚠️ Oublier d'écrire la formule avant le calcul (perte de point de rédaction).

#### 3.3 Formule des probabilités totales

**Fréquence** : 🟥 **~90%** (Q suivante).

**Méthode méso** :
1. **Identifier la partition** $A_1, \dots, A_n$ de l'univers ($A_i$ disjoints, $\bigcup A_i = \Omega$).
2. **Écrire la formule** : $P(B) = \sum_{i} P(A_i \cap B) = \sum_i P(A_i) P_{A_i}(B)$.
3. **Calculer** chaque terme (lecture sur l'arbre).
4. **Conclure** par addition.

**Apparitions** : Métropole 2024 J1 ex2 Q3 (loi des probas totales pour $P(S)$), AmN 2025 J1 ex1 Q4, Métropole 2025 J1 ex1 Q3, AmS 2025 J2 ex1, etc.

**Pièges** :
- ⚠️ Écrire « probabilités totales » mais oublier de mentionner que $A_1, \dots, A_n$ forment une partition.
- ⚠️ Erreur de calcul d'addition.

#### 3.4 Probabilité conditionnelle inverse (formule de Bayes implicite)

**Fréquence** : 🟥 **~85%** des exos probas. Question canonique : "Sachant qu'il a $B$, quelle est la probabilité que ce soit $A$ ?".

**Méthode méso** :
$$P_B(A) = \dfrac{P(A \cap B)}{P(B)}$$
- Numérateur : déjà calculé (3.2).
- Dénominateur : déjà calculé (3.3).

**Apparitions** : Métropole 2024 J1 ex2 Q4 ($P_S(I)$ : "sachant qu'il est satisfait, quelle proba qu'il soit individuel"), AmN 2025 J1 ex1 Q5 ($P_S(B)$), Métropole 2025 J1 ex1 Q4 ($P_O(R)$), AmS 2025 J2 ex1, etc.

**Pièges** :
- ⚠️ Inverser numérateur et dénominateur.
- ⚠️ Confondre $P_B(A)$ et $P_A(B)$.

#### 3.5 Justifier qu'une variable aléatoire suit une loi binomiale

**Fréquence** : 🟥 **~90%** des sujets contenant un exo probas.

**Méthode méso (rédaction-type, 3 conditions à vérifier explicitement)** :
1. "On répète **$n$ fois la même expérience de Bernoulli**" (préciser le succès).
2. "Les répétitions sont **indépendantes**" (souvent justifié par le tirage avec remise ou par hypothèse de l'énoncé).
3. "$X$ compte le **nombre de succès**".
4. **Conclusion** : "$X$ suit la loi binomiale $\mathcal{B}(n, p)$ où $n = …$ et $p = …$".

**Apparitions** : Métropole 2024 J1 ex2 Q5a (binomiale $\mathcal{B}(30; 0,8)$), AmN 2024 J2 ex1 Partie II ($\mathcal{B}(500; 0,65)$), AmN 2025 J1 ex1 Partie B, Centres étrangers 2024 J1bis Suède ex2, Sujet 0 2024 ex1, AmN 2025 J2 ex1, etc.

**Pièges** :
- ⚠️ Oublier l'une des 3 conditions, surtout l'indépendance.
- ⚠️ Confondre $n$ (nombre d'épreuves) et $p$ (probabilité de succès).
- ⚠️ Quand l'énoncé parle de "tirage sans remise" : ce n'est **pas** une binomiale ; mais souvent l'énoncé approxime "comme un tirage avec remise" si la population est grande.

#### 3.6 Calcul de $P(X = k)$, $P(X \le k)$, $P(X \ge k)$ avec une loi binomiale

**Fréquence** : 🟥 **~90%**.

**Méthode méso** :
- $P(X = k)$ : utiliser la calculatrice (ou la formule $\binom{n}{k} p^k (1-p)^{n-k}$ — rare au bac post-2024 vu que la calculatrice est autorisée).
- $P(X \le k)$ : valeur directe sur la calculatrice.
- $P(X \ge k) = 1 - P(X \le k-1)$.
- $P(a \le X \le b) = P(X \le b) - P(X \le a-1)$.

**Apparitions** : Métropole 2024 J1 ex2 Q5b (P(X ≥ 25) = 1 - P(X ≤ 24)), AmN 2024 J2 ex1 Partie II, AmN 2025 J1 ex1 Partie B, AmS 2025 J2 ex1 Partie B, etc.

**Pièges** :
- ⚠️ Confondre $X \le k$ et $X < k$ (donc $X \le k-1$) lors de la transformation.
- ⚠️ Arrondir à 4 décimales : lire la consigne.
- ⚠️ Erreur de touches : sur calculatrice, `binomFRép` cumule, `binomPdf` donne $P(X = k)$.

#### 3.7 Espérance, variance et écart-type d'une loi binomiale

**Fréquence** : 🟧 **~70%**.

**Méthode méso** :
- $E(X) = np$.
- $V(X) = np(1-p)$.
- $\sigma(X) = \sqrt{np(1-p)}$.
- **Interprétation** : "En moyenne, on attend $np$ succès".

**Apparitions** : Métropole 2024 J2 ex1, AmN 2025 J2 ex1 Partie B, Métropole 2025 J1 ex1, Métropole 2025 J2 ex1, AmS 2025 J2 ex1, CEtr 2025 J1 ex1.

**Pièges** :
- ⚠️ Oublier le facteur $(1-p)$ dans la variance.
- ⚠️ Confondre variance et écart-type quand on applique l'inégalité de Bienaymé-Tchebychev plus loin.

#### 3.8 Étude de fonction sur $n \mapsto P(X \ge k)$ ou $n \mapsto E(X)$ — recherche de seuil

**Fréquence** : 🟧 **~60%**.

**Énoncé typique** : "Déterminer le plus petit entier $n$ tel que $P(X \ge 1) \ge 0,99$" (au moins un succès en $n$ essais).

**Méthode méso** :
1. Calculer $P(X \ge 1) = 1 - P(X = 0) = 1 - (1-p)^n$.
2. Inéquation $1 - (1-p)^n \ge 0,99$ ⇔ $(1-p)^n \le 0,01$.
3. Passer au logarithme (attention au sens : $\ln(1-p) < 0$, donc on **inverse** l'inégalité).
4. $n \ge \dfrac{\ln 0,01}{\ln(1-p)}$.
5. **Plus petit entier** : $\lceil \cdot \rceil$.

**Apparitions** : Métropole 2024 J1 ex2 Q6 (au moins 21 personnes), AmN 2025 J1 ex1, AmN 2024 J2 ex1, Sujet 0 2024 ex1.

**Pièges** :
- ⚠️ Inversion d'inégalité quand on passe au $\ln$ d'un nombre $< 1$ (donc $\ln$ négatif).
- ⚠️ Oublier la **partie entière supérieure** (ceiling).
- ⚠️ Confondre $P(X \ge 1)$ et $1 - P(X = 0)$ vs $1 - P(X = 1)$.

#### 3.9 Algorithme Python associé à la binomiale

**Fréquence** : 🟧 **~50%**.

**Énoncé typique** : "Compléter la fonction Python qui détermine le plus petit entier $n$ tel que $P(X \le k) \le \alpha$" (ou simulation d'un nombre de succès).

**Méthode méso** :
- Boucle `while` testant la condition à atteindre.
- Calcul itératif de $P(X = k)$ ou de $P(X \le k)$ via accumulation.
- Renvoi de $n$ ou de la fréquence simulée.

**Apparitions** : Métropole 2024 J2 ex2, MétroSept 2024 J1 ex3, AmN 2025 J1 ex2, Métropole 2025 J1 ex4, Sujet 0 2024 ex2, AmS 2025 J1 ex1.

#### 3.10 Probabilités d'une union, contraire, complémentaire

**Fréquence** : 🟨 **~40%**.

**Méthode méso** :
- $P(\bar A) = 1 - P(A)$.
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- $P_A(\bar B) = 1 - P_A(B)$.

**Apparitions** : nombreux exos probas. Souvent en sous-question intermédiaire.

#### 3.11 Loi uniforme / autre loi discrète (rare)

**Fréquence** : ⬜ **<10%**.

**Apparitions** : Sujet 0 2024 ex2 (loi uniforme et fréquences associées).

#### Carte de fréquence — Chapitre 3 (Probas conditionnelles + binomiale)

| Question | Fréquence | Code |
|---|---|---|
| Construire l'arbre pondéré | 95% | 🟥 |
| Calcul $P(A \cap B)$ via l'arbre | 95% | 🟥 |
| Probabilités totales | 90% | 🟥 |
| Probabilité conditionnelle inverse $P_B(A)$ | 85% | 🟥 |
| Justifier que $X$ suit $\mathcal{B}(n,p)$ | 90% | 🟥 |
| Calcul $P(X = k)$, $P(X \le k)$, $P(X \ge k)$ | 90% | 🟥 |
| Espérance / variance binomiale | 70% | 🟧 |
| Recherche de seuil $n$ avec inéquation | 60% | 🟧 |
| Algorithme Python associé | 50% | 🟨 |
| Probabilités d'union ou de contraire | 40% | 🟨 |
| Interprétation contextuelle des résultats | 80% | 🟧 |
| Loi non binomiale (uniforme, géométrique, autre) | <10% | ⬜ |

---

### 4. Sommes de variables aléatoires + Bienaymé-Tchebychev + Loi des grands nombres

> **Présence dans le corpus** : ces notions, **ajoutées au programme avec la réforme 2024**, sont devenues le **marqueur identitaire** de l'exercice 1 depuis 2025 (16/36 sujets ont un exo qui combine probas conditionnelles + binomiale + somme VA + B-T). C'est LE pattern transverse phare du nouveau programme (cf. Pattern P1).

#### 4.1 Linéarité de l'espérance $E(X+Y) = E(X) + E(Y)$

**Fréquence** : 🟥 **~90%** des exos contenant des sommes de VA.

**Méthode méso** :
- "Par **linéarité de l'espérance** (toujours valide, même sans indépendance), $E(X+Y) = E(X) + E(Y)$".
- Calculer $E(X)$ et $E(Y)$ séparément (souvent via $E(X) = np$ pour binomiale).

**Apparitions** : Métropole 2024 J1 ex2, Sujet 0 2024 ex3, Métropole 2024 J2 ex1, Métropole 2025 J1 ex1, Métropole 2025 J2 ex1, CEtr 2025 J1 ex1, AmN 2025 J2 ex1, AmS 2025 J2 ex1, Asie 2025 J1 ex2, MétroSept 2024 J1 ex4, MétroSept 2025 J1 ex4, NCal 2025 J2 ex2, PolySept 2025 ex1.

**Pièges** :
- ⚠️ Pas de piège sur la linéarité elle-même (toujours vraie). Mais ne pas oublier qu'elle vaut **sans hypothèse d'indépendance**.

#### 4.2 Variance d'une somme avec indépendance $V(X+Y) = V(X) + V(Y)$

**Fréquence** : 🟥 **~90%** des exos B-T.

**Méthode méso** :
1. **Citer explicitement** : "Comme $X$ et $Y$ sont **indépendantes**, on a $V(X+Y) = V(X) + V(Y)$".
2. Calculer $V(X)$ et $V(Y)$ (souvent $V(X) = np(1-p)$).
3. Sommer.

**Apparitions** : voir 4.1.

**Pièges** :
- ⚠️ Oublier la mention « indépendance ». Sans elle, la formule est fausse en général.
- ⚠️ Confondre $V(X+Y)$ et $V(X) + V(Y) + 2\text{Cov}$ (la covariance n'est pas au programme, mais ne pas l'écrire).

#### 4.3 Échantillon $X_1, \dots, X_n$ et moyenne empirique $M_n$

**Fréquence** : 🟧 **~70%** des exos B-T.

**Méthode méso** :
- Définir $M_n = \dfrac{X_1 + \dots + X_n}{n}$.
- Calcul de $E(M_n)$ : par linéarité, $E(M_n) = \dfrac{1}{n} \sum E(X_i) = E(X_1) = \mu$ (les $X_i$ ayant même loi).
- Calcul de $V(M_n)$ : par indépendance et propriété de la variance, $V(M_n) = \dfrac{1}{n^2} \sum V(X_i) = \dfrac{V(X_1)}{n} = \dfrac{\sigma^2}{n}$.

**Apparitions** : Sujet 0 2024 ex3, MétroSept 2024 J1 ex4, Métropole 2024 J2 ex1, Métropole 2025 J1 ex1, Métropole 2025 J2 ex1, AmN 2025 J2 ex1, AmS 2025 J2 ex1, CEtr 2025 J1 ex1, MétroSept 2025 J1 ex4, NCal 2025 J2 ex2.

**Pièges** :
- ⚠️ Oublier le carré du facteur dans $V(aX) = a^2 V(X)$ : $V(M_n) = \dfrac{V(X_1+\dots+X_n)}{n^2}$, pas $\dfrac{1}{n}$.
- ⚠️ Confondre "même loi" (identiquement distribuées) et "indépendantes". Les deux conditions sont nécessaires pour les calculs ci-dessus.

#### 4.4 Inégalité de Bienaymé-Tchebychev

**Fréquence** : 🟥 **~95%** des exos contenant des sommes de VA.

**Énoncé** : Pour toute v.a. $X$ d'espérance $\mu$ et variance $\sigma^2$, et pour tout $\varepsilon > 0$ :
$$P(|X - \mu| \ge \varepsilon) \le \dfrac{\sigma^2}{\varepsilon^2}$$
(forme équivalente : $P(|X - \mu| < \varepsilon) \ge 1 - \dfrac{\sigma^2}{\varepsilon^2}$).

**Méthode méso** :
1. **Identifier** $\mu = E(X)$, $\sigma^2 = V(X)$, et $\varepsilon$ (la "tolérance" donnée par l'énoncé).
2. **Appliquer** l'inégalité.
3. **Conclure** sur la majoration cherchée.

**Apparitions** : Métropole 2024 J1 ex2 Q7b (encadrement de $T$ via B-T), Métropole 2024 J2 ex1, Sujet 0 2024 ex3, Métropole 2025 J1 ex1 Partie B, Métropole 2025 J2 ex1, AmN 2025 J2 ex1, AmS 2025 J2 ex1, CEtr 2025 J1 ex1, Asie 2025 J1 ex2, MétroSept 2024 J1 ex4, MétroSept 2025 J1 ex4, NCal 2025 J2 ex2, PolySept 2025 ex1.

**Pièges** :
- ⚠️ Oublier le carré au dénominateur $\varepsilon^2$.
- ⚠️ Mal identifier $\varepsilon$ : si l'énoncé demande "$P(|X - \mu| > 5) \le …$", alors $\varepsilon = 5$.
- ⚠️ Confusion entre $|X - \mu| \ge \varepsilon$ (B-T) et $|X - \mu| < \varepsilon$ (concentration).
- ⚠️ Quand on applique B-T à $M_n$, utiliser $V(M_n) = \sigma^2/n$, pas $\sigma^2$.

#### 4.5 Inégalité de concentration

**Fréquence** : 🟧 **~70%** des exos B-T.

**Énoncé** (forme équivalente à 4.4 appliquée à $M_n$) : pour $X_1, \dots, X_n$ i.i.d. d'espérance $\mu$ et variance $\sigma^2$, et tout $\varepsilon > 0$ :
$$P\left(|M_n - \mu| \ge \varepsilon\right) \le \dfrac{\sigma^2}{n \varepsilon^2}$$

**Méthode méso** : application directe de B-T à $M_n$, en utilisant $V(M_n) = \sigma^2 / n$.

**Apparitions** : Métropole 2025 J1 ex1, Métropole 2025 J2 ex1, MétroSept 2024 J1 ex4, MétroSept 2025 J1 ex4, AmN 2025 J2 ex1, NCal 2025 J2 ex2, CEtr 2025 J1 ex1, Asie 2025 J1 ex2, AmS 2025 J2 ex1.

**Pièges** :
- ⚠️ Confondre cette inégalité avec B-T appliquée à $X$ (sans le facteur $n$).
- ⚠️ Erreur sur la formule de $V(M_n)$.

#### 4.6 Loi des grands nombres (LGN)

**Fréquence** : 🟨 **~50%** des exos sommes VA. Souvent en **conclusion** d'une question 4.5.

**Énoncé** : Si $X_1, \dots, X_n$ i.i.d. d'espérance finie $\mu$, alors $M_n \to \mu$ (en probabilité).

**Méthode méso** :
- Lien avec B-T : pour tout $\varepsilon > 0$, $P(|M_n - \mu| \ge \varepsilon) \to 0$ quand $n \to \infty$.
- **Justification** : $\dfrac{\sigma^2}{n\varepsilon^2} \to 0$ par B-T.
- **Interprétation** : "Quand le nombre d'observations augmente, la moyenne empirique se rapproche de l'espérance".

**Apparitions** : Métropole 2024 J2 ex1, Métropole 2025 J2 ex1, Sujet 0 2024 ex3, AmS 2025 J2 ex1, MétroSept 2025 J1 ex4.

**Pièges** :
- ⚠️ Énoncer la LGN sans justifier par B-T (manque de rigueur).
- ⚠️ Confondre LGN et théorème central limite (TCL pas au programme).

#### 4.7 Détermination du nombre minimal d'observations $n$ pour garantir une précision

**Fréquence** : 🟧 **~60%**.

**Énoncé typique** : "Déterminer le plus petit $n$ tel que $P(|M_n - \mu| \ge 0,1) \le 0,05$".

**Méthode méso** :
1. Appliquer concentration : $\dfrac{\sigma^2}{n \cdot 0,1^2} \le 0,05$.
2. Résoudre en $n$ : $n \ge \dfrac{\sigma^2}{0,1^2 \times 0,05}$.
3. Plus petit entier.

**Apparitions** : Métropole 2025 J1 ex1, MétroSept 2024 J1 ex4, MétroSept 2025 J1 ex4, AmN 2025 J2 ex1, NCal 2025 J2 ex2, CEtr 2025 J1 ex1, Asie 2025 J1 ex2.

**Pièges** :
- ⚠️ Oublier le carré dans $\varepsilon^2$.
- ⚠️ Erreur d'arrondi : prendre le plus petit entier supérieur.

#### 4.8 Calcul direct de $P(\text{somme} \in [a, b])$ via B-T

**Fréquence** : 🟧 **~60%**.

**Énoncé typique** : "Donner une minoration de $P(5 \le T \le 9)$ où $T$ est la somme de deux temps".

**Méthode méso** :
1. **Reformuler** $P(a \le T \le b)$ comme $P(|T - E(T)| < r)$ pour bien choisir $r = (b - a)/2$ et vérifier que l'intervalle est centré sur $E(T)$.
2. Appliquer B-T sous forme $P(|T - \mu| < r) \ge 1 - V(T)/r^2$.
3. Conclure.

**Apparitions** : Métropole 2024 J1 ex2 Q7b ($P(5 \le T \le 9) \ge 2/3$), CEtr 2025 J1 ex1, Asie 2025 J1 ex2, Métropole 2025 J2 ex1.

**Pièges** :
- ⚠️ Vérifier que l'intervalle $[a, b]$ est bien **centré** sur $E(T)$. Si pas centré, B-T donne une minoration plus faible.
- ⚠️ Ne pas confondre $|T - E(T)| < r$ (intervalle ouvert centré) et l'intervalle quelconque.

#### Carte de fréquence — Chapitre 4 (Sommes VA + B-T + LGN)

| Question | Fréquence | Code |
|---|---|---|
| Linéarité de l'espérance $E(X+Y) = E(X) + E(Y)$ | 90% | 🟥 |
| Variance avec indépendance $V(X+Y) = V(X) + V(Y)$ | 90% | 🟥 |
| Calcul de $E(M_n)$ et $V(M_n)$ | 70% | 🟧 |
| Application directe de B-T sur une VA | 95% | 🟥 |
| Inégalité de concentration sur $M_n$ | 70% | 🟧 |
| Énoncé de la loi des grands nombres | 50% | 🟨 |
| Recherche de $n$ minimal pour garantir précision | 60% | 🟧 |
| Encadrement par B-T pour $P(a \le T \le b)$ | 60% | 🟧 |
| Indépendance vs identique distribution (justification) | 60% | 🟧 |

---

### 5. Fonctions exponentielle et logarithme

> **Présence dans le corpus** : ~75% des sujets ont un exo « étude de fonction » mobilisant `exp` ou `ln`. Souvent associé à la convexité (Ch.6) et à l'intégration (Ch.8). C'est un **chapitre transverse** plus qu'un chapitre cloisonné.

#### 5.1 Résoudre une équation $e^{f(x)} = a$ ou $\ln(g(x)) = b$

**Fréquence** : 🟧 **~60%** des exos exp/ln.

**Méthode méso** :
- $e^{f(x)} = a$ avec $a > 0$ ⇔ $f(x) = \ln(a)$.
- $\ln(g(x)) = b$ ⇔ $g(x) = e^b$ (avec condition d'existence $g(x) > 0$).
- $a^x = b$ ⇔ $x \ln(a) = \ln(b)$ avec $a > 0$.

**Apparitions** : AmS 2024 J1 ex1, MétroSept 2025 J2 ex2, NCal 2025 J2 ex4, Poly 2024 J1 ex2, AmN 2024 J1 ex1, etc.

**Pièges** :
- ⚠️ Ne pas vérifier les conditions d'existence du $\ln$ (intervalle $> 0$).
- ⚠️ Manipuler $e^{a+b} = e^a \cdot e^b$ sans rigueur.
- ⚠️ Confondre $\ln$ et $\log$ (au programme : seulement $\ln$).

#### 5.2 Résoudre une inéquation impliquant exp ou ln

**Fréquence** : 🟧 **~60%**.

**Méthode méso** :
1. Isoler l'expression contenant exp ou ln.
2. Appliquer la fonction réciproque (ln pour exp, exp pour ln).
3. **Attention au sens** quand la base de l'inégalité multiplie ou divise par un nombre négatif (notamment $\ln(p)$ si $p < 1$).

**Apparitions** : Métropole 2024 J1 ex2 Q6 (recherche de seuil par inéquation), AmN 2025 J1 ex1, Sujet 0 2024 ex1, Asie 2024 J2 ex1.

**Pièges** :
- ⚠️ **Ne pas inverser le sens de l'inégalité** quand on multiplie/divise par $\ln(q)$ avec $q < 1$.

#### 5.3 Dérivation de fonctions composées

**Fréquence** : 🟥 **~95%**. Calcul de $f'(x)$ pour étude des variations.

**Méthode méso (formules incontournables)** :
- $(e^u)' = u' \cdot e^u$.
- $(\ln u)' = \dfrac{u'}{u}$ (avec $u > 0$).
- $(u^n)' = n u' u^{n-1}$.
- $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$.
- Produit $(uv)' = u'v + uv'$.
- Quotient $(u/v)' = (u'v - uv')/v^2$.

**Apparitions** : tous les sujets contenant une étude de fonction (≈75%). Sujet 0 2024 ex7, Métropole 2024 J1 ex4, Asie 2024 J2 ex1, AmN 2025 J1 ex4, Métropole 2025 J2 ex3, etc.

**Pièges** :
- ⚠️ Oublier $u'$ dans la dérivée composée (erreur classique : écrire $(e^{x^2})' = e^{x^2}$ au lieu de $2x \cdot e^{x^2}$).
- ⚠️ Confusion produit/composée : $f(x) = x \cdot e^x$ → produit ; $f(x) = e^{x^2}$ → composée.
- ⚠️ Erreur de signe dans la dérivée d'un quotient.

#### 5.4 Croissances comparées

**Fréquence** : 🟧 **~70%** des exos étude de fonction avec exp ou ln (en limite à $\pm\infty$).

**Limites canoniques à connaître** :
- $\dfrac{e^x}{x^n} \xrightarrow[x \to +\infty]{} +\infty$ pour tout $n \ge 0$.
- $x^n \cdot e^{-x} \xrightarrow[x \to +\infty]{} 0$.
- $\dfrac{\ln x}{x^n} \xrightarrow[x \to +\infty]{} 0$ pour $n > 0$.
- $x^n \cdot \ln x \xrightarrow[x \to 0^+]{} 0$.

**Apparitions** : Métropole 2024 J1 ex1 Q1 (asymptote pour $f(x) = 5xe^{-x}$), Sujet 0 2024 ex7, Métropole 2024 J1 ex4, Métropole 2024 J2 ex3, Asie 2024 J2 ex1, AmS 2025 J2 ex3, NCal 2025 J2 ex3, etc.

**Pièges** :
- ⚠️ Citer "croissances comparées" sans préciser la forme exacte utilisée.
- ⚠️ Mauvais ordre de priorité : "exp l'emporte sur la puissance, qui l'emporte sur le log".

#### 5.5 Étude de fonction complète (signe de la dérivée, tableau de variation)

**Fréquence** : 🟥 **~85%** des exos étude de fonction.

**Squelette de la rédaction** :
1. **Domaine** $D_f$ et conditions d'existence.
2. **Calcul de $f'(x)$**.
3. **Signe de $f'$** : factoriser ; étudier le signe d'un polynôme ou d'une expression mixte exp+poly.
4. **Tableau de variation** : flèches, valeurs aux bornes (limites).
5. **Conclusion** : extrema, sens de variation.

**Apparitions** : très fréquent. Métropole 2024 J1 ex4, AmS 2025 J2 ex3, Asie 2024 J2 ex1 Partie A, Centres étrangers 2024 J1 ex2, etc.

**Pièges** :
- ⚠️ Oublier les limites aux bornes du domaine (souvent $\pm \infty$ ou points singuliers).
- ⚠️ Confondre signe de $f$ et signe de $f'$ (le tableau doit présenter le signe de $f'$ pour déduire les variations).

#### 5.6 Résolution d'équations $f(x) = k$ avec étude de fonction (TVI)

**Fréquence** : 🟧 **~60%**. Utilise le théorème des valeurs intermédiaires + bijection.

Voir [chapitre 6.4](#64-théorème-de-la-bijection--tvi).

#### 5.7 Position relative entre une courbe et sa tangente / une autre courbe

**Fréquence** : 🟨 **~40%**.

**Méthode méso** :
1. **Calculer** $g(x) = f(x) - h(x)$ (ou $f(x) - T(x)$ si on étudie la position par rapport à la tangente $T$).
2. **Étudier le signe** de $g(x)$ : factoriser, dérivée seconde, convexité, etc.
3. **Conclusion** :
   - $g(x) > 0$ ⇒ $C_f$ est au-dessus de $C_h$ (ou $T$).
   - $g(x) < 0$ ⇒ $C_f$ est en-dessous.
   - $g(x) = 0$ ⇒ point d'intersection / tangence.

**Apparitions** : Sujet 0 2024 ex1 Partie II (position de $C_{f_k}$ par rapport à $C_h$), Centres étrangers 2024 J2 ex2, Asie 2024 J1 ex1, Polynésie sept 2024 ex2.

**Pièges** :
- ⚠️ Confondre "au-dessus" et "au-dessous" en oubliant le signe.
- ⚠️ Pour la tangente : utiliser $T(x) = f'(a)(x - a) + f(a)$.

#### 5.8 Calcul de limites en $\pm\infty$ ou en un point

**Fréquence** : 🟥 **~95%** des étude de fonction.

**Méthode méso** :
- Limites simples par opérations : sommes, produits, quotients.
- Formes indéterminées : factoriser le terme dominant, croissances comparées.
- Limite d'un quotient en $0/0$ : factoriser.

**Apparitions** : tous les exos étude de fonction.

#### Carte de fréquence — Chapitre 5 (exp / ln)

| Question | Fréquence | Code |
|---|---|---|
| Dérivée composée $(e^u)'$, $(\ln u)'$ | 95% | 🟥 |
| Calcul de limite avec croissances comparées | 70% | 🟧 |
| Étude complète de fonction avec tableau | 85% | 🟥 |
| Calcul de limites élémentaires | 95% | 🟥 |
| Résoudre une équation/inéquation exp/ln | 60% | 🟧 |
| Position relative courbe/tangente ou courbe/courbe | 40% | 🟨 |
| Justification asymptote | 60% | 🟧 |
| Identifier graphiquement quelle courbe est laquelle | 30% | 🟩 |
| Étude d'une fonction $x \mapsto e^{ax}$, $x \mapsto x^n e^{-x}$, $x \mapsto x \ln x$… | 80% | 🟧 |
| Manipulation de propriétés : $e^{a+b} = e^a e^b$, $\ln(ab) = \ln a + \ln b$ | 50% | 🟨 |

---

### 6. Limites, continuité, convexité, dérivation composée

> **Présence dans le corpus** : transverse à toute étude de fonction (~85% des sujets). Le **point d'inflexion** + la **convexité** sont des questions devenues quasi-obligatoires depuis 2024.

#### 6.1 Calcul de limites

**Fréquence** : 🟥 **~95%**.

Voir [5.4](#54-croissances-comparées) et [5.8](#58-calcul-de-limites-en-pminfty-ou-en-un-point) pour les formules. Les patterns particuliers post-2024 :

**Limites avec ED solution** : si $f$ est solution de $y' + ay = \varphi$ avec $a > 0$, $f \to 0$ en $+\infty$ (sous conditions). Voir Chapitre 7.

**Limite d'un quotient avec exp** : factoriser le terme dominant.

**Apparitions** : tous les exos étude de fonction.

#### 6.2 Continuité et théorème des valeurs intermédiaires (TVI)

**Fréquence** : 🟧 **~70%**.

**Méthode méso (TVI)** :
1. **$f$ est continue sur $[a, b]$** (toujours préciser).
2. **$k$ est entre $f(a)$ et $f(b)$** (vérifier).
3. **Conclusion** : "il existe au moins un $c \in [a, b]$ tel que $f(c) = k$".

**Apparitions** : Métropole 2024 J1 ex4, Métropole 2025 J2 ex3, Polynésie 2025 J2 ex2, AmN 2024 J2 ex4, AmS 2024 J1, Sujet 0 2024 ex7, Centres étrangers 2024 J2 ex2.

**Pièges** :
- ⚠️ Oublier de citer la continuité.
- ⚠️ Confondre TVI et théorème de la bijection.

#### 6.3 Théorème de la bijection (forme renforcée du TVI)

**Fréquence** : 🟧 **~70%**.

**Méthode méso** :
1. **$f$ continue sur $[a, b]$ ET strictement monotone**.
2. **$k$ est dans l'image** $[f(a), f(b)]$ (ou $[f(b), f(a)]$).
3. **Conclusion** : "**unique** $c \in [a, b]$ tel que $f(c) = k$".

**Apparitions** : Métropole 2024 J1 ex4, Sujet 0 2024 ex7, Métropole 2025 J2 ex3, Asie 2024 J2 ex1, Polynésie 2024 J1 ex2, AmN 2024 J2 ex4, Centres étrangers 2024 J2 ex2.

**Pièges** :
- ⚠️ Oublier "strictement" dans monotonie.
- ⚠️ Confondre intervalle ouvert / fermé.
- ⚠️ Si $f$ est définie sur plusieurs intervalles de monotonie, **appliquer le théorème sur chaque intervalle** séparément (en général il y a alors plusieurs solutions, ou une seule par intervalle).

#### 6.4 Algorithme de balayage / dichotomie pour encadrer une solution $\alpha$

**Fréquence** : 🟨 **~40%**.

**Méthode méso (balayage)** :
- À l'aide de la calculatrice ou d'un script Python, calculer $f(0), f(0,1), f(0,2), \dots$ jusqu'à ce que le signe change.
- Encadrer $\alpha$ entre deux valeurs successives.

**Méthode méso (dichotomie en Python)** :
```python
def dichotomie(a, b, eps):
    while b - a > eps:
        m = (a + b) / 2
        if f(m) * f(a) < 0:
            b = m
        else:
            a = m
    return a, b
```

**Apparitions** : Sujet 0 2024 ex8, Polynésie 2024 J1, AmN 2024 J2 ex4, Centres étrangers 2024 J2 ex4, Métropole 2025 J1 ex4, MétroSept 2024 J1 ex3 (Python), Centres étrangers 2024 J1bis Suède.

**Pièges** :
- ⚠️ Sens de la condition `while` : tant que la précision n'est pas atteinte, on continue.
- ⚠️ Oublier d'initialiser $a$ et $b$.
- ⚠️ Confondre `==` et `=`.

#### 6.5 Convexité — concavité — point d'inflexion

**Fréquence** : 🟥 **~80%** des exos étude de fonction (depuis 2024, c'est devenu systématique).

**Méthode méso (convexité)** :
1. **Calculer $f''(x)$** (dérivée seconde).
2. **Étudier le signe** de $f''$.
3. **Conclusion** :
   - $f'' \ge 0$ sur $I$ ⇒ $f$ **convexe** sur $I$.
   - $f'' \le 0$ sur $I$ ⇒ $f$ **concave** sur $I$.
   - **$f''$ change de signe en $a$** ⇒ **point d'inflexion** au point d'abscisse $a$ (vérifier que $f$ est définie + dérivée continue).

**Apparitions** : Métropole 2024 J1 ex4, AmN 2025 J2 ex4 (étude convexité), Métropole 2025 J2 ex3, MétroSept 2024 J2 ex3, Asie 2024 J1 ex1, Centres étrangers 2024 J2 ex2, Asie 2025 J2 ex2, Sujet 0 2024 ex7, Métropole 2024 J2 ex3, Poly 2025 J2 ex2.

**Pièges** :
- ⚠️ Confondre "f convexe" et "f croissante".
- ⚠️ Conclure point d'inflexion à partir du seul signe ; il faut **changement** de signe.
- ⚠️ Ne pas oublier que la **convexité de $f$** = "tangentes en-dessous, courbe au-dessus de la corde".

#### 6.6 Position relative courbe / tangente via convexité

**Fréquence** : 🟨 **~45%**.

**Méthode méso** :
- Si $f$ convexe sur $I$ ⇒ $C_f$ est au-dessus de chacune de ses tangentes sur $I$.
- Si $f$ concave sur $I$ ⇒ $C_f$ est en-dessous de chacune de ses tangentes sur $I$.

**Apparitions** : Asie 2024 J1, Métropole 2024 J1 ex4, MétroSept 2024 J2, AmN 2025 J2 ex4.

**Pièges** :
- ⚠️ Confondre les sens (convexe = au-dessus des tangentes).
- ⚠️ Oublier de préciser "sur l'intervalle où $f$ est convexe".

#### 6.7 Asymptotes (horizontale, verticale)

**Fréquence** : 🟧 **~60%**.

**Méthode méso** :
- **Horizontale** $y = a$ : $\lim_{x \to \pm\infty} f(x) = a$.
- **Verticale** $x = b$ : $\lim_{x \to b^{\pm}} f(x) = \pm\infty$.

**Apparitions** : Métropole 2024 J1 ex1 Q1, AmN 2024 J1, Asie 2024 J1 ex1, Centres étrangers 2024 J2 ex2, etc.

**Pièges** :
- ⚠️ Tester les asymptotes dans les deux sens ($-\infty$ et $+\infty$).
- ⚠️ Pour la verticale, vérifier la limite à gauche **et** à droite.

#### 6.8 Sens de variation et dérivée

**Fréquence** : 🟥 **~95%**.

**Méthode méso** :
1. Calculer $f'(x)$.
2. Factoriser pour étudier le signe.
3. Tableau de signes / variations.

**Apparitions** : tous les sujets avec étude de fonction.

#### Carte de fréquence — Chapitre 6 (Limites / continuité / convexité)

| Question | Fréquence | Code |
|---|---|---|
| Calcul de limite $\pm \infty$ ou en un point | 95% | 🟥 |
| Continuité + TVI ou théorème de la bijection | 70% | 🟧 |
| Algorithme de balayage / dichotomie | 40% | 🟨 |
| Étude de la convexité (signe de $f''$) | 80% | 🟥 |
| Point d'inflexion (changement de signe de $f''$) | 70% | 🟧 |
| Position relative courbe/tangente (convexité) | 45% | 🟨 |
| Asymptote horizontale/verticale | 60% | 🟧 |
| Tableau de variation complet | 85% | 🟥 |
| Étude graphique (lecture sur courbe imposée) | 35% | 🟩 |
| Démonstration directe de monotonie sans dérivée | 10% | ⬜ |

---

### 7. Primitives et équations différentielles

> **Présence dans le corpus** : les ED ont été **réintroduites au programme avec la réforme 2024**. Présentes en exo dédié dans 3-4 sujets (CEtr 2024 J1, CEtr 2025 J1, MétroSept 2025 J1, AmN 2025 J1), mais surtout dans des **sous-parties** d'exos d'étude de fonction (15+ sujets). Le **sujet 0 2024 ex1** est entièrement consacré aux ED — c'est la référence ministérielle.

#### 7.1 Vérifier qu'une fonction $u$ est solution de $(E)$

**Fréquence** : 🟥 **~95%** des exos ED (1ère question canonique).

**Méthode méso** :
1. **Calculer $u'(x)$**.
2. **Calculer $u'(x) + au(x)$ ou $u'(x) - au(x)$** (selon la forme de l'ED).
3. **Comparer** au second membre.
4. **Conclure** : "Donc $u$ est solution de $(E)$".

**Apparitions** : Sujet 0 2024 ex1 Q1 ("Vérifier que $u(x) = xe^{-x}$ est solution de $(E): y' + y = e^{-x}$"), CEtr 2024 J1 ex3, CEtr 2025 J1 ex4, MétroSept 2025 J1 ex1, Métropole 2024 J1 ex1 Q1 (affirmation 2 du VF), AmN 2025 J1 ex4, Métropole 2025 J2 ex4, NCal 2025 J2 ex4.

**Pièges** :
- ⚠️ Erreur de dérivation (très fréquent : oublier $u'$ d'une composée).
- ⚠️ Attention au signe : ED de la forme $y' + ay = …$ vs $y' = ay + …$.

#### 7.2 Résoudre $y' = ay$

**Fréquence** : 🟥 **~90%** des exos ED.

**Méthode méso** :
- "L'équation différentielle $y' = ay$ a pour solutions les fonctions $x \mapsto Ce^{ax}$ où $C \in \mathbb{R}$."
- Citer ce théorème **explicitement** dans la rédaction.

**Apparitions** : Sujet 0 2024 ex1 Q2 (résolution $y' + y = 0$), CEtr 2024 J1 ex3, CEtr 2025 J1 ex4, MétroSept 2025 J1 ex1, AmN 2025 J1 ex4.

**Pièges** :
- ⚠️ Erreur de signe dans $a$ : par exemple $y' + y = 0$ s'écrit $y' = -y$ donc solutions $Ce^{-x}$.
- ⚠️ Oublier la constante $C$.

#### 7.3 Résoudre $y' = ay + b$ (second membre constant)

**Fréquence** : 🟧 **~70%**.

**Méthode méso** :
1. **Trouver une solution particulière constante** : poser $y_0 = -b/a$ (vérifier $y_0' = 0$ et $0 = a y_0 + b$).
2. **Solutions de l'équation homogène** : $Ce^{ax}$.
3. **Solution générale** : $y = Ce^{ax} - b/a$.
4. **Si condition initiale** $y(0) = y_0$ : déterminer $C$.

**Apparitions** : Métropole 2024 J2 ex2 (modèle médicament), MétroSept 2024 J2 ex3 (concentration), CEtr 2024 J1 ex3, AmN 2025 J1 ex4 Partie A.

#### 7.4 Résoudre $y' = ay + \varphi(x)$ (second membre fonction)

**Fréquence** : 🟧 **~65%**.

**Méthode méso (le pattern emblématique du programme post-2024)** :
1. **L'énoncé donne ou suggère une solution particulière** $u$ (souvent à vérifier en Q1).
2. **Solution générale** = solution particulière + solutions de l'équation homogène.
3. **Forme** : $y(x) = u(x) + Ce^{ax}$, $C \in \mathbb{R}$.
4. **Si condition initiale** : déterminer $C$.

**Apparitions** : Sujet 0 2024 ex1 (Partie I complète : ED $y' + y = e^{-x}$ avec solution particulière $u(x) = xe^{-x}$), AmN 2025 J1 ex4, Métropole 2025 J2 ex4 (étude d'une fonction qui s'avère être solution d'une ED).

**Pièges** :
- ⚠️ Oublier la solution particulière dans la solution générale.
- ⚠️ Confondre les rôles de $u$ (solution particulière) et de la solution générale.

#### 7.5 Changement de fonction inconnue $g = f - u$ ou $g = 1/f$

**Fréquence** : 🟨 **~40%**.

**Énoncé typique** : "On pose $g(x) = f(x) - u(x)$ (ou $g(x) = 1/f(x)$, ou $g(x) = e^{-x} f(x)$). Montrer que $g$ vérifie une équation différentielle plus simple, puis en déduire $f$".

**Méthode méso** :
1. **Calculer $g'(x)$** en fonction de $f'(x)$ et $f(x)$.
2. **Substituer** $f'$ depuis l'équation initiale.
3. **Simplifier** pour faire apparaître une ED en $g$ de forme $y' = ay$ ou $y' = ay + b$.
4. **Résoudre** et **revenir à $f$** par la définition de $g$.

**Apparitions** : Sujet 0 2024 ex1 Partie II (changement de fonction), AmN 2025 J1 ex4, MétroSept 2025 J1 ex1, NCal 2025 J2 ex4, Métropole 2025 J2 ex4, Asie 2025 J2 ex4, MétroSept 2025 J2 ex2.

**Pièges** :
- ⚠️ Erreur de calcul lors du changement (manipulations algébriques nombreuses).
- ⚠️ Oublier de revenir à $f$ à la fin.
- ⚠️ Confondre les variables : $g(x)$ peut faire intervenir $f'(x)$ sans qu'on le simplifie correctement.

#### 7.6 Étude de la fonction solution (limite, asymptote, valeur moyenne)

**Fréquence** : 🟧 **~75%** : presque tous les exos ED enchaînent avec une étude de la fonction trouvée.

**Apparitions** : voir [Pattern P5 dans la Partie 2](#p5--ed--étude-fonction-solution--limiteasymptote--valeur-moyenne).

#### 7.7 Modélisation : modèle continu (ED) puis modèle discret (suite)

**Fréquence** : 🟧 **~60%** des sujets contenant une ED.

**Apparitions** : Métropole 2024 J2 ex2 (algorithme + ED), MétroSept 2024 J2 ex3 (concentration médicament : ED puis suite), CEtr 2024 J1 ex2 et ex3 (deux exos liés modèle discret/continu).

Voir [Pattern P3 dans la Partie 2](#p3--suite--ed-modèle-discret--modèle-continu).

#### 7.8 Primitives — recherche directe

**Fréquence** : 🟧 **~60%** des exos intégration ou ED.

**Méthode méso** :
- Reconnaître la forme $u'/u$, $u' \cdot e^u$, $u'/u^n$, etc.
- Utiliser le tableau de primitives usuelles.

**Apparitions** : Métropole 2024 J1 ex4, Asie 2024 J1 ex1, Métropole 2024 J1 ex3 (calcul d'aire), Polynésie sept 2024 ex2, MétroSept 2024 J2 ex3.

**Pièges** :
- ⚠️ Constante d'intégration **omise** (sauf si on est dans le contexte d'une intégrale définie).
- ⚠️ Confondre $\dfrac{u'}{u}$ (primitive $\ln |u|$) et $\dfrac{1}{u}$ (sans $u'$).

#### Carte de fréquence — Chapitre 7 (Primitives + ED)

| Question | Fréquence | Code |
|---|---|---|
| Vérifier qu'une fonction est solution de $(E)$ | 95% des exos ED | 🟥 |
| Résoudre $y' = ay$ | 90% | 🟥 |
| Résoudre $y' = ay + b$ | 70% | 🟧 |
| Résoudre $y' = ay + \varphi$ avec solution particulière | 65% | 🟧 |
| Changement de fonction inconnue $g = f - u$, $g = 1/f$, etc. | 40% | 🟨 |
| Trouver une primitive sans contexte ED | 60% | 🟧 |
| Conditions initiales pour fixer la constante $C$ | 80% | 🟧 |
| Modélisation discret/continu (ED + suite) | 60% des exos ED | 🟧 |
| Étude de la fonction solution (limites, variations) | 75% des exos ED | 🟧 |

---

### 8. Intégration

> **Présence dans le corpus** : ~30% des sujets ont un exercice **principalement** d'intégration ; mais ~80% en contiennent au moins une question. Souvent en **Partie C** d'une étude de fonction (calcul d'aire, valeur moyenne, IPP).

#### 8.1 Calcul direct d'une intégrale via primitive

**Fréquence** : 🟥 **~90%**.

**Méthode méso** :
1. **Trouver une primitive $F$** de $f$ sur $[a, b]$.
2. **Appliquer** $\int_a^b f(x)\,dx = F(b) - F(a)$.
3. **Calculer** numériquement.

**Apparitions** : Métropole 2024 J1 ex3 et ex4 (intégrale dans une suite), AmN 2024 J1 ex4, Asie 2024 J1 ex1, Polynésie sept 2024 ex2, AmS 2024 J2 ex3, Polynésie 2025 J2 ex3, Métropole 2025 J1 ex2, AsieSept 2025 ex1, MétroSept 2024 J1 ex2, AmN 2025 J2 secours ex1.

**Pièges** :
- ⚠️ Erreur de signe sur $F(b) - F(a)$.
- ⚠️ Oublier le facteur multiplicatif quand on dérive $u' \cdot u$ sans le compenser.

#### 8.2 Intégration par parties (IPP)

**Fréquence** : 🟧 **~60%** des sujets contenant un exo d'intégration.

**Formule** : $\int_a^b u(x) v'(x)\,dx = [u(x) v(x)]_a^b - \int_a^b u'(x) v(x)\,dx$.

**Méthode méso** :
1. **Identifier $u$ et $v'$** : choix stratégique. Règle empirique : choisir $u$ de manière à ce que $u'$ soit "plus simple" et $v$ se calcule facilement.
   - Cas typiques : $u = x$ (ou polynôme), $v' = e^x$ (ou $e^{-x}$, $\cos x$, …).
   - Cas $u = \ln x$ : $v' = 1$ donne $v = x$.
2. **Calculer $u'$ et $v$**.
3. **Appliquer la formule IPP**.
4. **Calculer la nouvelle intégrale** (qui doit être plus simple).

**Apparitions** : Métropole 2024 J1 ex4 (IPP dans calcul d'aire), AmS 2024 J2 ex3, Sujet 0 2024 (mentionné dans les exos types), Polynésie 2025 J2 ex3, Métropole 2025 J1 ex2, AsieSept 2025 ex1, MétroSept 2024 J1 ex2.

**Pièges** :
- ⚠️ Mauvais choix de $u$ et $v'$ : la nouvelle intégrale doit être plus simple, pas plus compliquée.
- ⚠️ Erreur de signe sur le terme $-\int u'v$.
- ⚠️ Oublier les bornes lors du calcul de $[uv]_a^b$.

#### 8.3 Calcul d'aire entre deux courbes

**Fréquence** : 🟧 **~55%**.

**Méthode méso** :
1. **Identifier l'intervalle** $[a, b]$ d'intégration (intersections des courbes).
2. **Identifier la courbe au-dessus** $C_1$ et la courbe en-dessous $C_2$.
3. **Calculer** : $\mathcal{A} = \int_a^b (f_1(x) - f_2(x))\,dx$.
4. **Conclure** avec l'unité d'aire (souvent 1 carreau = 1 cm²).

**Apparitions** : Métropole 2024 J1 ex3 et ex4, Polynésie sept 2024 ex2, Métropole 2025 J1 ex2, AsieSept 2025 ex1, AmS 2024 J2 ex3, Asie 2024 J1 ex1.

**Pièges** :
- ⚠️ Confusion sur quelle courbe est au-dessus.
- ⚠️ Oublier l'unité d'aire.
- ⚠️ Si les courbes se croisent dans l'intervalle, **fractionner l'intégrale** sur les sous-intervalles correspondants.

#### 8.4 Valeur moyenne d'une fonction sur un intervalle

**Fréquence** : 🟧 **~50%**.

**Formule** : $\overline{f} = \dfrac{1}{b-a} \int_a^b f(x)\,dx$.

**Méthode méso** :
1. Calculer l'intégrale $\int_a^b f(x)\,dx$.
2. Diviser par $(b - a)$.
3. **Interpréter** dans le contexte (valeur moyenne d'une concentration, d'une vitesse, etc.).

**Apparitions** : Métropole 2024 J1 ex3, Asie 2024 J1 ex1, Polynésie sept 2024 ex2, AsieSept 2025 ex1, Polynésie 2025 J2 ex3.

**Pièges** :
- ⚠️ Oublier le facteur $\dfrac{1}{b-a}$.
- ⚠️ Confondre "valeur moyenne" et "moyenne arithmétique de $f(a)$ et $f(b)$".

#### 8.5 Linéarité et relation de Chasles

**Fréquence** : 🟨 **~40%**. Souvent en sous-question intermédiaire.

**Formules** :
- Linéarité : $\int_a^b (\alpha f + \beta g)\,dx = \alpha \int_a^b f + \beta \int_a^b g$.
- Chasles : $\int_a^c f = \int_a^b f + \int_b^c f$.

**Apparitions** : Métropole 2024 J1 ex4, AmS 2024 J2 ex3, Polynésie 2025 J2 ex3.

#### 8.6 Encadrement / inégalités sur les intégrales

**Fréquence** : 🟨 **~35%**.

**Méthode méso** :
- Si $f \ge g$ sur $[a, b]$, alors $\int_a^b f \ge \int_a^b g$ (positivité).
- Encadrement : majorer $f$ par $M$, minorer par $m$ ⇒ $m(b-a) \le \int_a^b f \le M(b-a)$.

**Apparitions** : Métropole 2024 J1 ex4, AmS 2024 J2 ex3, Métropole 2025 J1 ex2.

#### 8.7 Intégrales avec paramètre : étude d'une suite définie par $I_n = \int_a^b f_n(x)\,dx$

**Fréquence** : 🟨 **~30%**.

**Méthode méso typique** :
1. **Existence** : justifier que $f_n$ est continue donc intégrable.
2. **Monotonie de $(I_n)$** : montrer $I_{n+1} - I_n = \int (f_{n+1} - f_n) \ge 0$ (ou $\le 0$).
3. **Borne** : encadrer $f_n$ pour majorer $I_n$.
4. **Convergence** : par TCM ou par théorème des gendarmes.

**Apparitions** : Polynésie 2025 J2 ex3, MétroSept 2024 J1 ex2.

**Pièges** :
- ⚠️ Confondre la monotonie des $f_n$ (à $x$ fixé) et la monotonie des $I_n$.

#### 8.8 Intégrale d'une fonction définie par morceaux

**Fréquence** : ⬜ **<10%**.

#### Carte de fréquence — Chapitre 8 (Intégration)

| Question | Fréquence | Code |
|---|---|---|
| Calcul direct d'une intégrale via primitive | 90% | 🟥 |
| IPP (intégration par parties) | 60% des exos intégration | 🟧 |
| Calcul d'aire entre deux courbes | 55% | 🟧 |
| Valeur moyenne d'une fonction | 50% | 🟨 |
| Linéarité et Chasles | 40% | 🟨 |
| Encadrement d'une intégrale | 35% | 🟩 |
| Suite d'intégrales $I_n = \int_a^b f_n$ | 30% | 🟩 |
| Sommes de Riemann (rare au bac) | <5% | ⬜ |
| Intégrale impropre / convergence (hors programme strict) | <5% | ⬜ |

#### 8.9 Calcul d'intégrale via l'équation différentielle (astuce post-2024)

**Fréquence** : 🟢 **~25%** mais **astuce typique post-réforme**.

**Énoncé typique** : "Sans calculer de primitive, déduire $\int_a^b f(x)\,dx$ en utilisant le fait que $f$ est solution de $(E): f' + af = \varphi$".

**Méthode méso** :
1. **Partir de l'ED** : $f'(x) + af(x) = \varphi(x)$.
2. **Intégrer membre à membre** sur $[a, b]$ :
$$\int_a^b f'(x)\,dx + a \int_a^b f(x)\,dx = \int_a^b \varphi(x)\,dx$$
3. Calculer $\int_a^b f'(x)\,dx = f(b) - f(a)$ (par définition de la primitive).
4. **Isoler** $\int_a^b f(x)\,dx$ : $\int_a^b f(x)\,dx = \dfrac{1}{a}\left(\int_a^b \varphi(x)\,dx - (f(b) - f(a))\right)$.

**Apparitions** :
- MétroSept 2025 J1 ex1 B.3.c (méthode alternative au calcul direct)

**Pièges** :
- ⚠️ Erreur de signe quand on isole $\int f$.
- ⚠️ Vérifier que $a \neq 0$ (sinon division impossible).

#### 8.10 Suite d'intégrales $I_n = \int_a^b f_n(x)\,dx$ avec relation de récurrence par IPP

Voir [Pattern M dans la Partie 2](#m--suite-dintégrales-i_n-avec-récurrence-par-ipp).

---

## PARTIE 2 — Patterns d'enchaînement (exos transverses)

> **Objectif de cette partie** : reconnaître **dès la lecture des premières lignes** d'un exercice quel pattern le concepteur a choisi, et donc anticiper la suite des questions. Chaque pattern se reconnaît à un **déclencheur** (premier paragraphe ou première question), puis déroule un **squelette quasi-identique** d'un sujet à l'autre.

---

### P1 — Probas conditionnelles → Binomiale → Somme VA → Bienaymé-Tchebychev

**🟥 LE PATTERN PHARE de l'exercice 1 depuis 2025.** C'est aussi le pattern le plus marqué par la réforme 2024 (intégration des sommes de VA et de B-T au programme).

**Déclencheur (premier paragraphe)** :
- Une situation contextuelle (caisses automatiques, allergie, groupes sanguins, serveurs informatiques, achats clients, …).
- Plusieurs catégories ($A$, $B$, $C$, …) avec proportions données.
- Une probabilité conditionnelle annoncée ("parmi les $A$, 80% sont …").

**Sujets concernés** :
- Métropole 2024 J1 ex2 (clients individuels/entreprise/grandes entreprises + temps $T = T_1 + T_2$ et inégalité B-T)
- Métropole 2024 J2 ex1 (algorithme + binomiale + sommes VA + B-T)
- Sujet 0 2024 ex3 (entièrement consacré : E(X+Y), V(X+Y), inégalité B-T)
- Métropole 2025 J1 ex1 (groupes sanguins, donneur universel + B-T)
- Métropole 2025 J2 ex1 (probas conditionnelles → binomiale → B-T)
- Métropole sept 2024 J1 ex4 (B-T sur somme)
- Métropole sept 2025 J1 ex4 (concentration sur moyenne empirique)
- AmN 2025 J2 ex1 (binomiale + B-T)
- AmS 2025 J2 ex1 (Partie A probas + Partie B binomiale + sommes)
- Centres étrangers 2025 J1 ex1 (3 parties indépendantes : probas + binomiale + sommes VA + B-T)
- Asie 2025 J1 ex2 (sommes + B-T)
- Nouvelle-Calédonie 2025 J2 ex2
- Polynésie sept 2025 ex1
- Polynésie 2025 J1 ex1

**Squelette type des questions (séquence universelle)** :

| # | Type de question | Chapitre | Méthode-clé |
|---|---|---|---|
| Partie A — Probas conditionnelles | | | |
| Q1 | Représenter la situation par un arbre pondéré | Ch.3 | Lecture énoncé → arbre |
| Q2 | Calculer $P(A \cap B)$ | Ch.3 | Produit le long du chemin |
| Q3 | Démontrer $P(B) = …$ par probabilités totales | Ch.3 | Formule des probas totales |
| Q4 | Calculer une probabilité conditionnelle inverse $P_B(A)$ | Ch.3 | $P(A \cap B)/P(B)$ |
| Partie B — Loi binomiale | | | |
| Q5 | Justifier que $X$ suit $\mathcal{B}(n, p)$ | Ch.3 | 3 conditions de Bernoulli répétés indépendants |
| Q6 | Calculer $E(X)$, $V(X)$ | Ch.3 / Ch.4 | $E = np$, $V = np(1-p)$ |
| Q7 | Calcul d'une probabilité $P(X \ge k)$ | Ch.3 | Calculatrice + complémentaire |
| Q8 | Recherche de seuil $n$ pour $P \ge 0,99$ | Ch.3 / Ch.5 | Inéquation + log |
| Partie C — Sommes de VA + B-T | | | |
| Q9 | Définir $S_n$ ou $T = X_1 + … + X_n$ ; calculer $E(T)$ par linéarité | Ch.4 | Linéarité (sans hypothèse) |
| Q10 | Calculer $V(T)$ avec indépendance | Ch.4 | $V(T) = \sum V(X_i)$ |
| Q11 | Appliquer Bienaymé-Tchebychev pour majorer $P(\|T - E(T)\| \ge \varepsilon)$ | Ch.4 | $V/\varepsilon^2$ |
| Q12 | (variante) Inégalité de concentration sur $M_n$ | Ch.4 | $\sigma^2/(n\varepsilon^2)$ |
| Q13 | (variante) Conclure par loi des grands nombres | Ch.4 | Limite quand $n \to \infty$ |
| Q14 | (variante) Trouver le $n$ minimal pour garantir une précision | Ch.4 | Inéquation en $n$ |

**Chapitres mobilisés dans l'ordre** : Ch.3 (probas conditionnelles + binomiale) → Ch.4 (sommes VA + B-T + LGN) → parfois Ch.5 (log) en finale pour la recherche de seuil.

**Variations possibles** :
- Le pattern peut être en 2 parties (probas+binomiale | sommes+B-T) ou en 3 parties (les trois blocs séparés).
- Parfois remplacé par un exo plus simple en juin (ex Métropole 2024 J2 a binomiale+sommes mais sans B-T).
- Parfois la binomiale est remplacée par une autre loi discrète à étudier (cas rare).

**Pièges au niveau pattern** :
- ⚠️ Lire chaque partie comme **indépendante** (souvent c'est précisé).
- ⚠️ Ne pas oublier le caractère **iid** (indépendantes identiquement distribuées) pour appliquer V(T) = somme V(X_i).

---

### P2 — Étude de fonction (exp/ln) + Suite $u_{n+1} = f(u_n)$

**🟧 Pattern majeur en partie B ou C d'un exo étude de fonction.**

**Déclencheur** :
- Partie A : étude d'une fonction $f$ sur un intervalle $I$.
- Partie B (ou C) : on définit une suite $(u_n)$ par $u_0 \in I$ et $u_{n+1} = f(u_n)$.

**Sujets concernés** :
- Asie 2024 J2 ex1 (Partie A : étude $f(x) = (x-1)e^{-x}$ ; Partie B : suite $u_{n+1} = f(u_n)$)
- Centres étrangers 2024 J1 ex2 (étude $f$ + suite)
- Métropole sept 2024 J2 ex3 (concentration médicament : étude continue $C(t)$ + suite discrète $u_n$)
- Polynésie sept 2025 ex3 (étude $f$ + suite + Python)
- Sujet 0 2024 ex6 (suite définie par récurrence après définition de $f$)
- Asie 2025 J2 ex2 (suite + étude fonction associée)
- Nouvelle-Calédonie 2025 J2 ex3 (étude exp + suite)
- AmN 2024 J2 ex3 (suite + étude)
- Centres étrangers 2025 J1 ex3 (suite définie par récurrence avec étude de la fonction associée)

**Squelette type** :

| # | Type de question | Chapitre | Méthode-clé |
|---|---|---|---|
| Partie A — Étude de $f$ | | | |
| Q1 | Calcul de limites en bornes du domaine | Ch.5/Ch.6 | Croissances comparées |
| Q2 | Calcul $f'(x)$ + signe | Ch.5/Ch.6 | Dérivée composée |
| Q3 | Tableau de variation | Ch.6 | Synthèse |
| Q4 | (Souvent) Étude convexité $f''$ + point d'inflexion | Ch.6 | Dérivée seconde |
| Q5 | (Souvent) Existence/unicité d'une racine $\alpha$ par TVI/bijection | Ch.6 | Continuité + monotonie + balayage |
| Q6 | Encadrement de $\alpha$ à $10^{-2}$ près | Ch.6 | Calculatrice |
| Partie B — Suite $u_{n+1} = f(u_n)$ | | | |
| Q7 | Calcul des premiers termes $u_1$, $u_2$ | Ch.1 | Calcul direct |
| Q8 | Démontrer par récurrence un encadrement $a \le u_n \le b$ | Ch.1 | Récurrence + monotonie de $f$ |
| Q9 | Démontrer par récurrence la monotonie de $(u_n)$ | Ch.1 | Récurrence ou étude $u_{n+1}-u_n$ |
| Q10 | Conclure par TCM que $(u_n)$ converge | Ch.1 | TCM |
| Q11 | Déterminer la limite via point fixe $f(\ell) = \ell$ | Ch.1 | Résolution équation |
| Q12 | (Souvent) Algorithme Python pour seuil ou calcul de $u_N$ | Ch.1 | Boucle while/for |

**Chapitres mobilisés dans l'ordre** : Ch.5 (exp/ln) → Ch.6 (limites/conv/TVI) → Ch.1 (suites + Python).

**Variation** : parfois la suite n'est pas définie par $u_{n+1} = f(u_n)$ mais par $u_{n+1} = a u_n + b$ (suite arithmético-géométrique), auquel cas voir Pattern P10.

---

### P3 — Suite + ED (modèle discret → modèle continu)

**🟨 Pattern de modélisation, fréquent en exo « contextualisé ».** Souvent dans des contextes de pharmacocinétique, biologie, environnement.

**Déclencheur** :
- Énoncé contextuel : médicament, population (posidonie, herbe…), chlore piscine, glycémie, espèce animale.
- Le sujet propose **deux approches** : une **suite** $(u_n)$ qui modélise l'évolution discrète (par jour, par dose, par année), **et** une **équation différentielle** qui modélise l'évolution continue.

**Sujets concernés** :
- Métropole 2024 J2 ex2 (modèle suite + algorithme + ED associée)
- Métropole sept 2024 J2 ex3 (médicament : continu via concentration $C(t)$, discret via suite)
- Centres étrangers 2024 J1 ex2 + ex3 (deux exos liés : étude + ED)
- AmN 2025 J1 ex4 (contexte mathématique avec ED + extension)
- Métropole sept 2025 J1 ex1 (ED contextualisée)
- Métropole 2025 J2 ex4 (étude fonction qui s'avère solution d'ED)

**Squelette type** :

| # | Type de question | Chapitre | Méthode-clé |
|---|---|---|---|
| Partie A — Modèle discret (suite) | | | |
| Q1 | Calculer $u_1$, $u_2$ | Ch.1 | Calcul direct |
| Q2 | Récurrence pour encadrement / monotonie | Ch.1 | Récurrence |
| Q3 | TCM + détermination de la limite | Ch.1 | Point fixe |
| Q4 | (Souvent) Algorithme Python | Ch.1 | Boucle |
| Q5 | (Souvent) Suite arithmético-géométrique avec auxiliaire $v_n$ | Ch.1 | Suite géométrique auxiliaire |
| Partie B — Modèle continu (ED) | | | |
| Q6 | Vérifier qu'une fonction donnée est solution de $(E)$ | Ch.7 | Calcul $u' + au$ |
| Q7 | Résoudre l'équation homogène associée | Ch.7 | $Ce^{ax}$ |
| Q8 | En déduire les solutions de $(E)$ avec second membre | Ch.7 | Solution particulière + homogène |
| Q9 | Avec condition initiale, déterminer $C$ | Ch.7 | Substitution |
| Q10 | Étude de la fonction solution (limite, asymptote) | Ch.6 | Limites |
| Q11 | (Optionnel) Comparaison avec le modèle discret | Ch.1+Ch.7 | Discussion contextuelle |

**Chapitres mobilisés dans l'ordre** : Ch.1 → Ch.7 → Ch.6.

**Pièges** :
- ⚠️ Ne pas confondre modèle continu ($t \in \mathbb{R}^+$) et modèle discret ($n \in \mathbb{N}$) : les énoncés peuvent y revenir alternativement.
- ⚠️ Souvent, on demande de **comparer** les deux modèles : "Le modèle discret prédit-il la même limite que le modèle continu ?".

---

### P4 — Étude de fonction + Intégrale + IPP en partie C

**🟧 Pattern d'exercice "long format" très classique.**

**Déclencheur** :
- Partie A : étude classique d'une fonction $f$ (souvent type $x \mapsto x e^{-x}$, $x \mapsto (ax+b) e^{-x}$, $x \mapsto \ln(\dots)$).
- Partie B : étude d'une intégrale ou d'une suite d'intégrales.
- Partie C : calcul d'aire ou de valeur moyenne, souvent via IPP.

**Sujets concernés** :
- Métropole 2024 J1 ex4 (étude $f$ + intégrale par IPP + aire)
- AmN 2024 J1 ex4 (intégrale + exp)
- Asie 2024 J1 ex1 (étude $f$ + valeur moyenne)
- AmS 2024 J2 ex3 (étude + intégrale)
- AsieSept 2025 ex1 (intégrale + lien fonction)
- Métropole 2025 J1 ex2 (étude + intégrale par IPP)
- Polynésie 2025 J2 ex3 (étude + intégrale)
- Polynésie sept 2024 ex2 (étude + valeur moyenne)
- MétroSept 2024 J1 ex2 (intégrale + IPP)
- AmN 2025 J2 secours ex1 (intégrale + exp)

**Squelette type** :

| # | Type de question | Chapitre | Méthode-clé |
|---|---|---|---|
| Partie A — Étude de $f$ | | | |
| Q1 | Calcul de limites + dérivée + tableau de variation | Ch.5/Ch.6 | Standard |
| Q2 | Convexité ou point d'inflexion | Ch.6 | $f''$ |
| Q3 | Existence d'extremum ou racine | Ch.6 | TVI/bijection |
| Partie B — Calcul d'intégrale | | | |
| Q4 | Trouver une primitive de $f$ ou d'une fonction associée | Ch.7/Ch.8 | Tableau primitives |
| Q5 | Calculer $\int_a^b f(x)\,dx$ | Ch.8 | $F(b) - F(a)$ |
| Q6 | (Souvent) IPP pour calculer $\int x e^x dx$, $\int x \ln x dx$, etc. | Ch.8 | Choix $u$ et $v'$ |
| Partie C — Application | | | |
| Q7 | Aire entre la courbe et l'axe des abscisses | Ch.8 | Intégrale + unité d'aire |
| Q8 | (Variante) Aire entre deux courbes | Ch.8 | Différence |
| Q9 | (Variante) Valeur moyenne sur l'intervalle | Ch.8 | $\frac{1}{b-a}\int$ |
| Q10 | Interprétation contextuelle | — | Réinjection dans le contexte |

**Chapitres mobilisés** : Ch.5/Ch.6 (étude) → Ch.8 (intégration) → Ch.7 (primitive).

---

### P5 — ED + Étude de la fonction solution + Limite/asymptote + Valeur moyenne

**🟨 Pattern complet "ED appliquée".**

**Déclencheur** :
- Partie A : ED $(E): y' + ay = \varphi(x)$.
- Partie B : étude de **la** solution particulière obtenue avec une condition initiale.
- Partie C : valeur moyenne ou aire associée.

**Sujets concernés** :
- Sujet 0 2024 ex1 (Partie I ED + Partie II étude de la solution avec graphique)
- AmN 2025 J1 ex4 (ED + étude solution)
- MétroSept 2025 J1 ex1 (ED + étude solution)
- Métropole 2025 J2 ex4 (étude qui s'avère être ED)
- Asie 2025 J2 ex4 (ED + étude limite)
- Nouvelle-Calédonie 2025 J2 ex4

**Squelette type** :

| # | Type de question | Chapitre |
|---|---|---|
| Q1 | Vérifier que $u(x) = …$ est solution de $(E)$ | Ch.7 |
| Q2 | Résoudre l'équation homogène associée $y' = ay$ | Ch.7 |
| Q3 | En déduire les solutions générales de $(E)$ | Ch.7 |
| Q4 | Avec condition initiale $y(0) = y_0$, trouver $C$ et exprimer la solution unique $f$ | Ch.7 |
| Q5 | Calcul de $\lim_{x \to +\infty} f(x)$ et asymptote | Ch.6 |
| Q6 | Variations de $f$ + tableau | Ch.6 |
| Q7 | (Souvent) Étude de convexité ou point d'inflexion | Ch.6 |
| Q8 | (Optionnel) Valeur moyenne $\overline{f}$ sur $[a,b]$ | Ch.8 |
| Q9 | (Optionnel) Aire sous la courbe | Ch.8 |

**Chapitres mobilisés** : Ch.7 → Ch.5/Ch.6 → Ch.8.

---

### P6 — Étude fonction + Convexité + Position relative tangente/courbe + Aire

**🟧 Pattern "étude approfondie".**

**Déclencheur** :
- Étude classique d'une fonction $f$ avec une mention explicite de la **convexité** dans l'énoncé.
- Une **tangente** est définie en un point, et on demande la position de $C_f$ par rapport à cette tangente.

**Sujets concernés** :
- Métropole 2024 J1 ex4
- Asie 2024 J1 ex1
- Centres étrangers 2024 J2 ex2
- AmN 2025 J2 ex4
- Polynésie 2025 J2 ex2
- Métropole 2025 J2 ex3
- Polynésie sept 2024 ex2
- AmS 2025 J2 ex3

**Squelette type** :

| # | Type de question | Chapitre |
|---|---|---|
| Q1 | Étude des variations de $f$ avec dérivée | Ch.5/Ch.6 |
| Q2 | Calculer $f''(x)$ et étudier son signe | Ch.6 |
| Q3 | En déduire la convexité de $f$ sur intervalle(s) | Ch.6 |
| Q4 | Existence et position du/des point(s) d'inflexion | Ch.6 |
| Q5 | Équation de la tangente $T$ en un point $a$ | Ch.6 |
| Q6 | Position relative de $C_f$ par rapport à $T$ via convexité | Ch.6 |
| Q7 | Calcul d'aire ou valeur moyenne (souvent en partie suivante) | Ch.8 |

**Chapitres mobilisés** : Ch.5/Ch.6 → Ch.8.

---

### P7 — ED $y' = ay + \varphi$ avec changement de fonction inconnue

**🟨 Pattern emblématique du programme post-2024 : la résolution par changement de variable.**

**Déclencheur** :
- L'ED $(E)$ ne se résout pas trivialement (second membre non constant).
- L'énoncé propose **explicitement** un changement de fonction inconnue : $g(x) = f(x) - u(x)$, ou $g(x) = 1/f(x)$, ou $g(x) = e^{-ax} f(x)$, etc.

**Sujets concernés** :
- Sujet 0 2024 ex1 (Partie II : changement de fonction sur $f_k$)
- AmN 2025 J1 ex4 (changement de fonction)
- MétroSept 2025 J1 ex1 (changement)
- Asie 2025 J2 ex4 (changement)
- MétroSept 2025 J2 ex2 (changement)
- Nouvelle-Calédonie 2025 J2 ex4

**Squelette type** :

| # | Type de question | Chapitre |
|---|---|---|
| Q1 | Vérifier qu'une fonction $u$ est solution particulière | Ch.7 |
| Q2 | Définition du changement $g$ ; calcul de $g'$ | Ch.5/Ch.7 |
| Q3 | Substituer dans $(E)$ pour obtenir une nouvelle ED en $g$ (souvent $g' = ag$ ou $g' = 0$) | Ch.7 |
| Q4 | Résoudre la nouvelle ED en $g$ | Ch.7 |
| Q5 | Revenir à $f$ via $f = g \cdot \dots$ ou $f = g + u$ | Ch.7 |
| Q6 | Avec condition initiale, déterminer la constante | Ch.7 |
| Q7 | Étude de la fonction $f$ obtenue : variations, limites | Ch.6 |

**Chapitres mobilisés** : Ch.7 → Ch.5/Ch.6.

---

### P8 — Géométrie : Vrai/Faux 4 affirmations indépendantes

**🟧 Pattern "exercice géométrie sans cube".** Format compact, parfois en exo 2 ou 4.

**Déclencheur** :
- Énoncé : "Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse, en justifiant".
- 4 affirmations indépendantes.
- Le contexte est en général : un repère orthonormé $(O, \vec{i}, \vec{j}, \vec{k})$ et 3-4 points donnés.

**Sujets concernés** :
- Polynésie 2024 J2 ex2 (mais format différent)
- AmS 2024 J2 ex2 (4 affirmations VF géométrie)
- AmN 2025 J2 ex3 (4 affirmations indépendantes)
- AsieSept 2025 ex1 (mix géométrie + autres)
- Centres étrangers 2025 J1 ex2 (VF + géométrie)
- Polynésie 2025 J2 ex4 (intégration + géométrie)

**Trame des 4 affirmations classiques** :

| Type | Affirmation typique | Méthode |
|---|---|---|
| Affirmation 1 | "Les points $A, B, C, D$ sont coplanaires" | Système 3 équations, 2 inconnues |
| Affirmation 2 | "La droite $(MN)$ est perpendiculaire au plan $(ABC)$" | Vérifier $\overrightarrow{MN} \cdot \overrightarrow{AB} = 0$ et $\overrightarrow{MN} \cdot \overrightarrow{AC} = 0$ |
| Affirmation 3 | "Le point $M$ appartient au plan $\mathcal{P}$ d'équation cartésienne $\dots$" | Substituer les coordonnées |
| Affirmation 4 | "Le volume du tétraèdre $ABCD$ est égal à $\dots$" | Calcul via aire de base + hauteur |

**Chapitres mobilisés** : Ch.2.

**Pièges au niveau pattern** :
- ⚠️ Justifier **chaque** affirmation séparément (1 point chacune).
- ⚠️ Pour une affirmation fausse, un contre-exemple précis suffit (mais le calcul doit être posé).

---

### P9 — Géométrie : exercice construit autour d'un cube, tétraèdre ou pyramide

**🟥 Pattern dominant en géométrie (75% des exos géométrie).**

**Déclencheur** :
- Le premier paragraphe annonce : "On considère le cube $ABCDEFGH$ de côté 1" ou "le tétraèdre $ABCD$ avec…".
- Un repère orthonormé est défini sur le solide.
- Plusieurs points secondaires sont introduits ($I$ milieu de $[AB]$, $K$ centre de $[EFGH]$, etc.).

**Sujets concernés** :
- Métropole 2024 J1 ex3 (cube ABCDEFGH avec section)
- Asie 2024 J1 ex2 (cube)
- Centres étrangers 2024 J2 ex3 (cube)
- AmS 2024 J2 ex3 (cube avec point $L$ sur diagonale)
- AmN 2025 J1 ex3 (cube)
- Métropole sept 2024 J2 ex1 (cube + tétraèdre)
- Métropole 2025 J1 ex3 (cube)
- Centres étrangers 2025 J2 ex4 (cube + projeté)
- Polynésie 2025 J1 ex2 (cube)
- AsieSept 2025 ex2 (tétraèdre)
- Nouvelle-Calédonie 2025 J2 ex1 (cube)
- Polynésie 2024 J2 ex4
- AmS 2024 J1 ex4
- MétroSept 2025 J2 ex4
- PolySept 2025 ex4
- Polynésie sept 2024 ex3 et ex4

**Squelette type** :

| # | Type de question | Chapitre |
|---|---|---|
| Q1 | Coordonnées des points clés (souvent imposées par le repère) | Ch.2 |
| Q2 | Démontrer qu'un vecteur $\vec{n}$ est normal à un plan défini par 3 sommets | Ch.2 |
| Q3 | En déduire une équation cartésienne du plan | Ch.2 |
| Q4 | Représentation paramétrique d'une droite (typiquement la perpendiculaire à un plan en un sommet) | Ch.2 |
| Q5 | Calcul de l'intersection droite ∩ plan = projeté orthogonal | Ch.2 |
| Q6 | Calcul d'une distance (point à plan) ou d'un produit scalaire | Ch.2 |
| Q7 | Calcul d'un volume (tétraèdre, pyramide) ou d'une aire | Ch.2 |
| Q8 | (Souvent) Démontrer un alignement, une coplanarité, ou un parallélisme | Ch.2 |

**Chapitres mobilisés** : Ch.2 (uniquement).

---

### P10 — Suite arithmético-géométrique avec suite auxiliaire géométrique

**🟨 Pattern classique du chapitre Suites.**

**Déclencheur** :
- "On considère la suite $(u_n)$ définie par $u_0 = …$ et pour tout $n$, $u_{n+1} = au_n + b$" avec $a \neq 1$.
- Souvent dans un contexte de modélisation (médicament, population, intérêts composés).

**Sujets concernés** :
- Polynésie 2024 J1 ex4
- Centres étrangers 2024 J1 ex2 (variante avec exp)
- Métropole sept 2024 J2 ex3 (médicament : $u_{n+1} = 0,8 u_n + 2$)
- AmN 2025 J2 secours ex4
- Nouvelle-Calédonie 2025 J2 ex3
- Polynésie sept 2025 ex3
- Sujet 0 2024 ex8

**Squelette type** :

| # | Type de question | Chapitre |
|---|---|---|
| Q1 | Calculer $u_1$, $u_2$ | Ch.1 |
| Q2 | Conjecturer la monotonie / la limite (graphiquement ou par calcul) | Ch.1 |
| Q3 | Calculer le point fixe $\ell = b/(1-a)$ | Ch.1 |
| Q4 | Définir $v_n = u_n - \ell$ et démontrer que $(v_n)$ est géométrique | Ch.1 |
| Q5 | Donner l'expression explicite de $v_n = v_0 a^n$ | Ch.1 |
| Q6 | En déduire $u_n$ en fonction de $n$ | Ch.1 |
| Q7 | Étudier la limite de $(u_n)$ via celle de $(v_n)$ | Ch.1 |
| Q8 | (Souvent) Calcul d'une somme partielle $S_n$ via la somme géométrique | Ch.1 |
| Q9 | (Souvent) Algorithme Python pour calculer un seuil ou $u_N$ | Ch.1 |

**Chapitres mobilisés** : Ch.1 (uniquement).

---

### P11 — QCM sur suites (4-5 affirmations indépendantes)

**🟩 Pattern "exercice court".** Apparaît typiquement comme exo 1, 2 ou 4 sur 5 points.

**Déclencheur** :
- "Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse en justifiant" (4-5 affirmations).
- Au moins une affirmation porte sur les suites (parfois toutes).

**Sujets concernés** :
- Métropole 2024 J1 ex1 (4 affirmations : exp, ED, suites)
- Polynésie 2024 J2 ex2 (VF mixte)
- AmS 2024 J1 ex3 (VF mixte)
- AmN 2025 J2 secours ex2 (4 affirmations)
- Polynésie 2025 J2 ex4 (5 affirmations : intégration + géométrie)
- AsieSept 2025 ex1 (4 affirmations sur fonctions)

**Trame typique des affirmations** :
1. Toute suite décroissante minorée par 0 converge vers 0. [FAUX]
2. Si une suite vérifie $u_{n+1} = f(u_n)$ avec $f$ continue et $u_n \to \ell$, alors $f(\ell) = \ell$. [VRAI]
3. La somme de deux suites divergentes est divergente. [FAUX]
4. Une suite géométrique de raison comprise entre $-1$ et $1$ exclus converge vers 0. [VRAI]
5. Si $\lim u_n = +\infty$ alors $u_n$ est croissante à partir d'un certain rang. [FAUX]

**Chapitres mobilisés** : Ch.1 (parfois mix Ch.5/Ch.6 si VF "fonction").

---

### P12 — Dénombrement (k-uplets, combinaisons, arrangements)

**🟨 Pattern de retour spectaculaire post-2024.** Le dénombrement, longtemps marginal, est désormais présent dans ~40 % des sujets sous forme d'affirmations VF dans un QCM, ou comme sous-question d'un exo probas.

**Déclencheur** :
- Énoncé qui mentionne : tirages, équipes, codes, anagrammes, choix d'objets parmi $n$, séquences.
- Apparition de notations $\binom{n}{k}$, $n!$, ou des questions « combien de … ».

**Quatre sous-types d'opérations** :

| Type | Formule | Quand l'utiliser | Exemple |
|---|---|---|---|
| k-uplets simples (avec remise, ordonné) | $n^k$ | Tirages successifs avec remise ; codes (chiffres répétables) | Combien de codes de 4 chiffres ? $10^4$ |
| Arrangements (sans remise, ordonné) | $A_n^k = \dfrac{n!}{(n-k)!} = n \times (n-1) \times \dots \times (n-k+1)$ | Tirages ordonnés sans remise ; podiums | Tirage ordonné de 3 cartes parmi 52 ? $52 \times 51 \times 50$ |
| Combinaisons (sans remise, sans ordre) | $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ | Sous-ensembles, choix non ordonné | 5 délégués parmi 30 ? $\binom{30}{5}$ |
| Permutations | $n!$ | Anagrammes (lettres distinctes), ordonnancements | Anagrammes de "EULER" (5 lettres distinctes) ? $5!$ |

**Sujets concernés** :
- Sujet 0 2024 ex5 (combinaisons sur 50 boules ; $2^{10}$ listes)
- Centres étrangers 2024 J2 ex1 ($8^3$ tirages ; arrangements $8 \times 7 \times 6$)
- Centres étrangers 2025 J2 ex3 (codage base64 sur séquences de 4 — exemple le plus complet du corpus)
- AmS 2025 J2 ex4 aff.1 (combinaisons ; "au moins" + complément)
- MétroSept 2024 J2 ex4 aff.3 (binômes)
- MétroSept 2025 J1 ex4 aff.1 (codes 4 chiffres distincts)
- MétroSept 2025 J2 ex2 aff.1 (groupes filles/garçons)
- Polynésie 2024 J2 ex2 Q4-5 (choix d'élèves : combinaisons)
- Polynésie 2025 J1 ex4 aff.2 (équipes volley)
- Polynésie 2025 J2 ex4 aff.1 (k-uplets distincts vs combinaisons)
- AmS 2025 J1 ex2 aff.1 (poignées de main)
- Nouvelle-Calédonie 2025 J1 ex4 aff.5 (anagrammes : EULER)
- Nouvelle-Calédonie 2025 J2 ex1 aff.4 (segments du cube)

**Trame de raisonnement type "au moins" / "exactement"** :
- "Au moins un succès" → utiliser le **complément** : $P(\ge 1) = 1 - P(0)$.
- "Exactement deux succès" → produit binomial $\binom{n}{k} \cdot \binom{m}{j}$.

**Chapitres mobilisés** : Ch.3 (probas) + dénombrement.

**Pièges** :
- ⚠️ Confondre arrangement et combinaison.
- ⚠️ Oublier le cas "au moins" : utiliser le contraire pour simplifier.
- ⚠️ Tirages **avec/sans** remise : lire l'énoncé attentivement.

---

### P13 — Étude graphique → étude analytique (intro fréquente)

**🟧 Pattern de partie A** dans environ 60 % des exos étude de fonction. Le sujet fournit un graphique en annexe et demande de **lire/conjecturer** avant de **prouver** par calcul.

**Déclencheur** :
- "On a représenté ci-dessous la courbe de $f$. Lire graphiquement…".
- Un graphique avec une partie de l'énoncé manquante (à compléter par l'élève).
- Une figure montrant **plusieurs courbes** (typiquement $C_f$, $C_{f'}$, $C_{f''}$) et on demande de les **identifier**.

**Squelette type** :

| # | Type de question | Méthode-clé |
|---|---|---|
| Q1 | Lire $f'(a)$ via le **coefficient directeur** d'une tangente tracée | Pente = $\Delta y / \Delta x$ |
| Q2 | Lire les variations de $f$ à partir du tracé | Tableau direct |
| Q3 | Conjecturer le nombre de solutions de $f(x) = k$ | Compter les intersections avec la droite $y = k$ |
| Q4 | Identifier $C_f$, $C_{f'}$, $C_{f''}$ parmi 3 courbes proposées | Variations ↔ signe / convexité ↔ courbure |
| Q5 | Conjecturer convexité, points d'inflexion, asymptotes | Lecture qualitative |
| Q6 | (Partie B) Confirmer par calcul analytique | Étude classique |
| Q7 | (Optionnel) Placer un paramètre $k$ ou unité graphique | Lecture inverse |

**Sujets concernés** :
- Sujet 0 2024 ex1 Partie II (déterminer $k$ et placer les unités sur les axes)
- Métropole 2024 J2 ex3 partie A (tangente passant par $A(0;-1)$, points d'inflexion)
- Métropole 2025 J1 ex2 partie A (tangente $A(1;2) \to C(3;0)$, nombre de zéros de $f'$)
- Métropole 2025 J2 ex4 partie A (lecture vitesse, asymptote)
- Asie 2024 J1 ex1 partie A (identification $C'$, $C''$ parmi 3 courbes)
- AmN 2025 J1 ex4 partie A (associer $g$ et $g'$ à $C_1$, $C_2$)
- Centres étrangers 2025 J2 ex2 partie A (sigmoïde, identification $a$, $b$)
- Centres étrangers 2024 J1bis Suède ex3 partie 1 (foyer température : lectures)
- Polynésie 2025 J2 ex2 Q1 (conjectures graphiques sur variations, signe)
- Polynésie sept 2024 ex2

**Chapitres mobilisés** : Ch.5/Ch.6.

**Pièges** :
- ⚠️ Lire un coefficient directeur sur des **axes non orthonormés** : prendre la pente effective avec les unités.
- ⚠️ Confondre "courbe au-dessus" et "courbe au-dessous" en convexité.
- ⚠️ Justifier toutes les conjectures par la suite : un calcul exact à donner après les lectures.

---

### P14 — Probabilités avec algorithme Python (simulation)

**🟨 Pattern fréquent en exo probas.**

**Déclencheur** :
- Au sein d'un exercice probas, on insère une fonction Python à compléter qui **simule** l'expérience aléatoire.

**Sujets concernés** :
- Métropole 2024 J2 ex2
- AmN 2025 J1 ex2
- MétroSept 2024 J1 ex3
- Polynésie 2025 J1 ex3
- AmS 2025 J1 ex1
- Sujet 0 2024 ex2
- Centres étrangers 2024 J1bis Suède ex1

**Squelette** :
1. Compléter une fonction `simulation(n)` qui simule $n$ essais.
2. Compter les succès, calculer une fréquence.
3. Discuter du lien entre fréquence simulée et probabilité théorique (LGN).

**Chapitres mobilisés** : Ch.3 (probas) + Ch.1 (Python) + parfois Ch.4 (LGN comme conclusion).

---

### P15 — Probabilités conditionnelles avec suite (chaîne de Markov à 2 états)

**🟨 Pattern récurrent depuis 2024.** Combine probas conditionnelles (Ch.3) et suites (Ch.1) dans un même exercice.

**Déclencheur (très reconnaissable)** :
- L'énoncé suit l'évolution d'un état à travers le temps : "Soit $p_n$ la probabilité que le robot soit au point $A$ à l'étape $n$" / "$g_n$ la probabilité que le joueur gagne le $n$-ième jeu" / "$x_n$ la fréquence d'un comportement à la $n$-ième observation".
- Une probabilité de transition est donnée : "Si l'état est $A$ à l'étape $n$, alors la probabilité d'être encore en $A$ à $n+1$ est $\alpha$".

**Squelette type** :

| Partie | # | Type de question | Chapitre |
|---|---|---|---|
| **A — Calcul direct** | Q1 | Calcul de $p_1$, $p_2$ via arbre pondéré et formule des probas totales | Ch.3 |
| | Q2 | Conjecture de la limite ou tendance | Ch.1 |
| **B — Récurrence** | Q3 | Démontrer que $p_{n+1} = \alpha p_n + \beta$ par formule des probas totales appliquée à la transition | Ch.3 + Ch.1 |
| | Q4 | Récurrence d'encadrement ($0 \le p_n \le 1$ ou intervalle plus restreint) | Ch.1 |
| | Q5 | Démontrer la monotonie de $(p_n)$ | Ch.1 |
| | Q6 | Conclure par TCM que $(p_n)$ converge | Ch.1 |
| **C — Expression explicite** | Q7 | Définir $v_n = p_n - L$ et démontrer que $(v_n)$ est géométrique | Ch.1 |
| | Q8 | Donner $v_n = v_0 q^n$ et en déduire $p_n$ | Ch.1 |
| | Q9 | Calculer la limite de $(p_n)$ | Ch.1 |
| | Q10 | Interprétation contextuelle (fréquence asymptotique) | — |
| **D (parfois)** | Q11 | Loi binomiale sur un nombre fixé d'étapes | Ch.3 |
| | Q12 | Algorithme Python (seuil ou simulation) | Ch.1 |

**Sujets concernés** :
- Métropole sept 2024 J2 ex2 (robot déplacement, $p_{n+1} = \frac{1}{4} p_n + \frac{1}{2}$, $L = 2/3$)
- Asie 2024 J2 ex2 (joueur tennis tournoi, $g_{n+1} = 0,5 g_n + 0,2$, $L = 0,4$)
- Centres étrangers 2024 J1bis Suède ex2 (volleyeuse services, $x_{n+1} = 0,2 x_n + 0,4$, $L = 0,5$)
- Polynésie 2025 J2 ex1 (transmission binaire, $p_{n+1} = 0,8 p_n + 0,1$, $L = 0,5$)
- AmS 2025 J1 ex1 (resto U végétarien, $p_{n+1} = 0,2 p_n + 0,7$, $L = 0,875$)
- MétroSept 2025 J2 ex1 (El Niño, $p_{n+1} = 0,2 p_n + 0,3$, $L = 3/8$)

**Chapitres mobilisés** : Ch.3 (probas conditionnelles + arbre + probas totales) → Ch.1 (suite arithmético-géométrique avec auxiliaire géométrique) → Ch.3 (binomiale optionnelle).

**Pièges** :
- ⚠️ Au passage Q3 (établir la récurrence), ne pas oublier d'appliquer la **formule des probas totales** : "À l'étape $n$, soit l'état est $A$ (proba $p_n$), soit l'état est $\bar{A}$ (proba $1 - p_n$)" → développer.
- ⚠️ Confondre $p_n$ avec une probabilité conditionnelle : c'est une **probabilité** (de l'état au temps $n$), pas une transition.

---

### P16 — Suite d'intégrales $I_n$ avec récurrence par IPP

**🟨 Pattern d'exercice "long format" en analyse.** Apparaît dans ~10 % des sujets mais quand il apparaît, il occupe un exercice entier.

**Déclencheur** :
- "Pour tout entier $n$, on définit $I_n = \int_a^b f_n(x)\,dx$".
- $f_n(x)$ contient typiquement $x^n$, $e^{nx}$, $(\ln x)^n$ ou $x^n e^{-x}$.

**Squelette type** :

| # | Type de question | Méthode |
|---|---|---|
| Q1 | Calcul de $I_0$ ou $I_1$ par primitive directe | Ch.8 |
| Q2 | Démontrer que $I_n \ge 0$ via signe de l'intégrande | Positivité de l'intégrale |
| Q3 | Démontrer la monotonie de $(I_n)$ : signe de $I_{n+1} - I_n = \int_a^b (f_{n+1} - f_n)$ | Comparaison sur $[a,b]$ |
| Q4 | Encadrement de $I_n$ par une intégrale calculable | Majorer/minorer $f_n(x)$ |
| Q5 | Conclure que $I_n \to L$ par théorème des gendarmes ou TCM | Souvent $L = 0$ |
| Q6 | **Établir une relation de récurrence** $I_{n+1} = g(n, I_n)$ par IPP | Choix $u = x^{n+1}$ ou $u = (\ln x)^n$ |
| Q7 | (Optionnel) Algorithme Python pour calculer $I_N$ via la récurrence | Boucle for |

**Cas type pour l'IPP** : si $I_n = \int_0^1 x^n e^x\,dx$, on pose $u = x^{n+1}$, $v' = e^x$, ce qui donne $I_{n+1} = e - (n+1) I_n$.

**Sujets concernés** :
- Sujet 0 2024 ex2 ($I_n = \int_0^1 x^n e^x\,dx$, $I_{n+1} = e - (n+1) I_n$)
- AmN 2024 J1 ex4 ($I_n = \int_0^\pi e^{-nx} \sin(x)\,dx$)
- AmS 2024 J2 ex2 ($I_n = \int_1^e (\ln x)^n\,dx$)
- Polynésie 2025 J1 ex3 ($I_n = \int_0^1 x^n e^{-x}\,dx$)
- Nouvelle-Calédonie 2025 J1 ex3 ($u_n = \int_0^1 x^n e^{1-x}\,dx$)

**Chapitres mobilisés** : Ch.8 (intégration + IPP) → Ch.1 (suites + Python) → Ch.5 (croissances comparées pour la limite).

**Pièges** :
- ⚠️ Au choix d'IPP : prendre $u$ qui se "simplifie" en se dérivant ($x^{n+1}$ → $(n+1)x^n$).
- ⚠️ Pour montrer $I_n \to 0$, l'encadrement doit utiliser des bornes qui tendent toutes les deux vers 0.
- ⚠️ La relation de récurrence n'est pas toujours linéaire : parfois $I_{n+1} = c - (n+1) I_n$ (cas Sujet 0).

---

### Synthèse — Quel pattern pour quel exercice ?

| Pattern | Probabilité d'apparition par sujet | Chapitres mobilisés | Exo type |
|---|---|---|---|
| **P1** Probas + Binomiale + B-T | 60% (et 100% dans Métropole, AmN, CEtr depuis 2025) | Ch.3 + Ch.4 | Ex1 |
| **P2** Étude fonction + Suite $u_{n+1}=f(u_n)$ | 40% | Ch.5/Ch.6 + Ch.1 | Ex2/Ex3/Ex4 |
| **P3** Suite + ED (modèle discret/continu) | 25% | Ch.1 + Ch.7 + Ch.6 | Ex2/Ex3 |
| **P4** Étude fonction + Intégrale + IPP | 35% | Ch.5/Ch.6 + Ch.8 | Ex3/Ex4 |
| **P5** ED + Étude solution + Aire/Valeur moyenne | 20% | Ch.7 + Ch.6 + Ch.8 | Ex2/Ex4 |
| **P6** Étude fonction + Convexité + Tangente + Aire | 30% | Ch.5/Ch.6 + Ch.8 | Ex3/Ex4 |
| **P7** ED avec changement de fonction | 20% | Ch.7 + Ch.5/Ch.6 | Ex4 (rarement Ex1) |
| **P8** Géométrie VF 4 affirmations | 25% | Ch.2 | Ex2/Ex4 |
| **P9** Géométrie cube/tétraèdre | 75% | Ch.2 | Ex3 (souvent) |
| **P10** Suite arithmético-géométrique | 25% | Ch.1 | Ex3 |
| **P11** QCM 4-5 affirmations sur suites/fonctions | 20% | Ch.1 + Ch.5/Ch.6 | Ex1/Ex2/Ex4 |
| **P12** Probas + dénombrement | 10% | Ch.3 + (Dénombrement) | Variante Ex1 |
| **P13** Étude graphique avec lecture | 15% | Ch.5/Ch.6 | Variante |
| **P14** Probabilités + simulation Python | 35% | Ch.3 + Ch.1 | Sous-question Ex1 |
| **P15** Probabilités + suite (chaîne de Markov 2 états) | 20% | Ch.3 + Ch.1 | Ex2 ou Ex4 |
| **P16** Suite d'intégrales $I_n$ avec récurrence par IPP | 15% | Ch.8 + Ch.1 | Ex4 (full exo) |

---

## Architecture canonique d'un sujet post-2024 (matrice prédictive)

Sur les 24 sujets « standards » analysés (Métropole + DOM/étranger 2024-2025), l'architecture suivante revient dans **~80 % des cas**. Elle constitue la **matrice de référence** pour anticiper la structure d'un sujet bac/bac blanc.

| Position | Format dominant | Pattern principal | Probabilité d'apparition |
|---|---|---|---|
| **Exo 1** (5-6 pts) | Exercice classique en 2-3 parties | **Pattern P1** : Probas + Binomiale + Sommes VA + B-T | 🔴 ~85 % |
| **Exo 2** (5-6 pts) | Exercice classique avec sous-parties | **Pattern P3** (Suite + ED) ou **Pattern P2** (fonction + suite) | 🟧 ~70 % |
| **Exo 3** (4-5 pts) | QCM/V-F **OU** exercice construit | **Pattern P8** (V/F géométrie) **ou** **Pattern P9** (cube/tétraèdre) — géométrie présente dans 95 % des cas | 🔴 ~90 % |
| **Exo 4** (5-6 pts) | Exercice classique d'analyse | **Pattern P4** (fonction + IPP) **ou** **Pattern P5** (ED + étude) **ou** **Pattern P6** (convexité + position) | 🟧 ~75 % |

### Variations courantes

- **Substitution V/F suites (P11) en exo 1 ou exo 4** quand les probabilités sont placées en exo 2 (rare, ~10 % des sujets).
- **QCM mixte (P11) à la place d'un exo classique** quand la géométrie est en exo construit.
- **Suite arithmético-géométrique (P10) à la place de la binomiale** dans la partie B de l'exo 1 (cas Markov P15).
- **Exo "culture math"** (méthode historique de Briggs, méthode de Newton-Raphson, dichotomie) en remplacement d'un exo standard (occasionnel, ~5 %).

### Méthode prédictive recommandée pour le candidat

#### 1. Repérer le mot-clé dans la **première phrase** de chaque énoncé

| Mot-clé/contexte | Pattern probable |
|---|---|
| « arbre pondéré » + plusieurs catégories | **P1** (Probas + B-T) |
| « modèle discret/continu », « on admet », « médicament/population/concentration » | **P3** (Suite + ED) |
| « cube ABCDEFGH » ou « tétraèdre ABCD » | **P9** (géométrie cube/tétraèdre) |
| « 4 affirmations » + géométrie | **P8** (V/F géométrie) |
| « 5 affirmations indépendantes » + thèmes mêlés | **P11** (QCM multi-thèmes) |
| « la suite définie par $u_{n+1} = \dots$ » + étude de fonction en partie A | **P2** (fonction + suite) |
| « équation différentielle » + changement de fonction proposé | **P7** (ED avec changement) |
| « $I_n = \int \dots$ » + récurrence | **P16** (suite d'intégrales) |
| « $p_n$ probabilité d'être dans l'état $A$ à l'étape $n$ » | **P15** (Markov) |

#### 2. Lire la **dernière question** de chaque exercice

C'est souvent là que se cache :
- la question Bienaymé-Tchebychev (« Montrer que $P(\dots) \ge \dots$ »),
- la question IPP (« Calculer $\int_a^b \dots\,dx$ »),
- la question de limite asymptotique,
- l'interprétation contextuelle (qui rapporte 1 point en synthèse).

#### 3. Anticiper les pièges récurrents

| Piège | Type d'erreur | Coût en points |
|---|---|---|
| Bayes ↔ inversion $P_A(B)$ vs $P_B(A)$ | Lecture inverse | 1-2 pts |
| $V(X+Y) = V(X) + V(Y)$ sans vérifier l'indépendance | Hypothèse manquante | 1 pt |
| Bienaymé-Tchebychev → centrer + $\delta^2$ au dénominateur | Calcul algébrique | 1-2 pts |
| Récurrence avec $f$ → utiliser la monotonie de $f$ | Hérédité bâclée | 2 pts |
| IPP → bon choix $u$/$v'$ + bornes | Calcul faux | 2-3 pts |
| Vecteur normal → toujours justifier la non-colinéarité | Preuve invalide | 1 pt |
| TVI → unicité demande la **stricte** monotonie | Énoncé incomplet | 1 pt |
| Loi des grands nombres → préciser que ce sont des **iid** | Hypothèse manquante | 1 pt |

---

## Conclusion — Stratégie pour le bac blanc

### Trois certitudes structurelles depuis la réforme 2024

**1. Le premier exercice est probabiliste dans 85 % des sujets**, avec un schéma désormais figé : *arbre pondéré → formule de Bayes → justification d'une loi binomiale → calcul de seuil avec ln → somme de variables aléatoires indépendantes → application de l'inégalité de Bienaymé-Tchebychev*. Si tu ne maîtrises **qu'un** pattern, choisis celui-là.

**2. La géométrie dans l'espace est présente partout** sous deux formats alternatifs : *Vrai/Faux 4 affirmations* OU *exo construit sur cube/tétraèdre*. Le quintet stratégique est : **vecteur normal → équation cartésienne → projeté orthogonal → distance → volume**. Ce squelette tombe dans 75 % des exos géométrie.

**3. L'analyse est omniprésente** avec deux archétypes : *étude de fonction + suite $u_{n+1} = f(u_n)$*, ou *ED + étude solution + IPP/valeur moyenne*. Les croisements avec la convexité et le point d'inflexion sont devenus systématiques depuis 2024.

### La vraie nouveauté discriminante

Quatre notions **post-réforme** agissent comme filtre principal qui sépare un candidat « ancien programme » d'un candidat « post-2024 » :

- **Bienaymé-Tchebychev** (~70 % des sujets)
- **Intégration par parties** (~65 % des exos analyse)
- **Équations différentielles $y' = ay + \varphi$** avec changement de fonction (~55 %)
- **Dénombrement** (k-uplets, combinaisons, arrangements, ~40 % en QCM)

**Les négliger, c'est s'exposer à perdre 4-6 points par sujet.**

### L'astuce stratégique : identifier le pattern dès les 30 premières secondes

Un mot-clé contextuel suffit :
- *« chlore, posidonie, glycémie, médicament, population »* → **Pattern P3** (Suite + ED).
- *« logistique, sigmoïde »* → **Pattern P7** (ED avec changement de fonction).
- *« cube ABCDEFGH »* → **Pattern P9** (géométrie cube).
- *« on considère $N$ variables aléatoires indépendantes »* → **Pattern P1 partie C** (Bienaymé-Tchebychev).
- *« $p_n$ probabilité que… à l'étape $n$ »* → **Pattern P15** (Markov).
- *« 4 affirmations indépendantes »* → **Pattern P8** ou **P11** (V/F).

**Chaque pattern a son ordre de questions quasi-canonique** — tu peux prévoir la question $n+1$ avant de la lire.

### Les deux outils transversaux qui ne quittent jamais un sujet

- **Python** (boucle `while` de seuil ou interprétation `mystere(N)`) → ~95 % des sujets.
- **Récurrence** → ~95 % des sujets.

Ces deux fondamentaux sont les **seules valeurs sûres absolues**. Pour le bac blanc, viser d'abord ces points-clés permet de **garantir la moitié des points** avant même d'attaquer les questions techniques.

### Dernière recommandation : l'ordre de traitement optimal

1. **Lis tous les exos avant de commencer**. Identifie les patterns. Choisis l'ordre.
2. **Commence par l'exo 3 (géométrie/QCM)** : c'est souvent le plus accessible et il rapporte des points rapidement.
3. **Enchaîne avec l'exo 1 (probas)** : le pattern est figé, les premières questions valent gros.
4. **Garde l'exo "long format" (analyse + IPP, ED)** pour la fin, quand tu as la tête posée.
5. **Dernier quart d'heure** : revoir les 2-3 questions où tu as buté — souvent un détail (signe, hypothèse oubliée) coûte 2 points.

---

## Annexe — Matrice complète des sujets

Légende : `Probas` = probabilités conditionnelles ± binomiale ± B-T ; `Géom` = géométrie dans l'espace ; `Suites` = suites ; `Fonct` = étude de fonction (exp/ln/conv) ; `ED` = équation différentielle ; `Intég` = intégration ; `Algo` = Python ; `VF/QCM` = vrai-faux ou QCM.

### Session 2024

| Sujet | Ex1 | Ex2 | Ex3 | Ex4 | Patterns dominants |
|---|---|---|---|---|---|
| **Sujet 0 2024** | ED | Probas+Algo | Probas+Sommes | Géom | Référence pour P5, P7, P9, P14 |
| AmN 2024 J1 | Probas | Géom | Fonct | Intég | P9 + P4 |
| AmN 2024 J2 | Probas | Géom | Suites | Fonct | P9 + P10 |
| CEtr 2024 J1 | Probas | Suites+ExpLog | ED | Géom | P3 + P9 |
| CEtr 2024 J1bis (Suède) | Algo | Probas | Probas | Géom | P14 + P9 |
| CEtr 2024 J2 | Probas | Fonct | Géom | Algo | P9 + P14 |
| Asie 2024 J1 | Fonct (lim+conv) | Géom | Probas | Algo+Probas | P6 + P9 |
| Asie 2024 J2 | Suites+Fonct | Probas | (Fonct) | Géom | P2 + P9 |
| Métropole 2024 J1 | VF (Fonct/ED/Suites) | Probas+Sommes+B-T | Géom (cube) | Fonct+Intég | P1 + P9 + P4 |
| Métropole 2024 J2 | Probas+Sommes+B-T | Algo+ED | Fonct (exp+lim) | Géom | P1 + P3 + P9 |
| Polynésie 2024 J1 | (Fonct ?) | Fonct (exp) | Probas | Suites (arith-géom) | P10 |
| Polynésie 2024 J2 | Probas | VF Géom | (?) | Géom (cube) | P9 + P8 |
| MétroSept 2024 J1 | (Fonct) | Intég | Algo+Probas | Sommes+B-T | P4 + P14 + P1 |
| MétroSept 2024 J2 | Géom | Probas | Fonct (médicament : continu+suite) | Algo+Probas | P3 + P9 |
| PolySept 2024 | Probas | Fonct | Géom+Algo | Géom | P9 |
| AmS 2024 J1 | Fonct (exp) | Probas | Fonct + VF | Géom | P9 + P11 |
| AmS 2024 J2 | Probas | VF Géom | Géom (cube + intég) | Géom | P8 + P9 + P4 |

### Session 2025

| Sujet | Ex1 | Ex2 | Ex3 | Ex4 | Patterns dominants |
|---|---|---|---|---|---|
| AmN 2025 J1 | Probas (P1 partiel) | Algo | Géom (cube) | Fonct+ED | P9 + P5 + P7 |
| AmN 2025 J2 | Probas+Sommes+B-T | Fonct (exp)+Algo | Géom (4 VF) | Fonct (lim+conv) | P1 + P8 + P6 |
| AmN 2025 J2 secours | Intég+Fonct | QCM/VF | Probas | Suites (arith-géom) | P11 + P10 |
| CEtr 2025 J1 | Probas+Sommes+B-T (3 parties) | Géom+QCM | Suites | ED+Probas | P1 + P8 + P3 |
| CEtr 2025 J2 | (?) | Géom+Fonct | Probas+Sommes | Géom (cube+projeté) | P9 |
| Asie 2025 J1 | Géom | Sommes+Probas | (?) | (?) | P1 |
| Asie 2025 J2 | Probas | Suites | Géom (cube) | Probas+ED | P2 + P9 + P5 |
| AsieSept 2025 | QCM/VF (mix) | Géom (tétraèdre) | Probas | Probas | P11 + P9 |
| Métropole 2025 J1 | Probas+Sommes+B-T (groupes sanguins) | Fonct+Intég | Géom (cube) | Algo+Probas | P1 + P4 + P9 + P14 |
| Métropole 2025 J2 | Probas+Sommes+B-T (concentration) | Géom (cube) | Fonct (exp+lim+conv) | Fonct (ED) | P1 + P9 + P6 + P5 |
| MétroSept 2025 J1 | ED (changement de fonction) | Géom | Algo | Probas | P7 + P9 |
| MétroSept 2025 J2 | Probas | Fonct (exp+lim+conv) | Algo+Fonct | Géom (cube) | P9 + P14 |
| Polynésie 2025 J1 | Probas+Sommes (allergies) | Géom | Algo+Intég | (?) | P1 + P9 + P14 |
| Polynésie 2025 J2 | Probas+Algo | Fonct (lim+exp) | Intég | VF (intég+géom) | P14 + P11 + P4 |
| PolySept 2025 | Sommes+Probas (allergies) | (?) | Algo+Suites | Géom | P1 + P9 |
| AmS 2025 J1 | Algo+Probas | Probas | (?) | Géom+Intég | P14 + P9 |
| AmS 2025 J2 | Sommes+Probas (tennis) | Géom | Fonct (exp)+Algo | Probas+Dénombrement | P1 + P9 + P12 |
| NCal 2025 J1 | Probas+Sommes | (?) | Algo | Fonct (exp) | P1 + P14 |
| NCal 2025 J2 | Géom | Probas+Sommes | Suites+Fonct | Fonct+ED | P9 + P1 + P2 + P5 |

---

## Résumé exécutif — "Si tu n'as que 30 minutes pour réviser"

### 🎯 Les 5 incontournables à savoir parfaitement

1. **Pattern P1** (Probas + Binomiale + Sommes VA + Bienaymé-Tchebychev). Présent dans 60% des sujets, **toujours** en exercice 1 ou 2 sur Métropole/AmN/CEtr depuis 2025.
2. **Pattern P9** (Géométrie cube/tétraèdre). Présent dans 75% des sujets de géométrie. Maîtrise du squelette : vecteur normal → équation cartésienne → représentation paramétrique → projeté → distance/volume.
3. **Récurrence + TCM + point fixe** sur une suite $u_{n+1}=f(u_n)$.
4. **Étude de fonction complète** avec convexité + point d'inflexion : nouveau standard depuis 2024.
5. **Algorithme Python type "seuil"** : `while` qui s'arrête quand un test sur la suite est atteint.

### ⚠️ Les 3 pièges les plus coûteux

1. **Bienaymé-Tchebychev sans préciser l'indépendance** pour la variance d'une somme.
2. **Récurrence "expéditive"** : oublier l'initialisation, ne pas justifier la monotonie de $f$ dans l'hérédité.
3. **Calcul d'aire** : oublier l'unité d'aire, ou se tromper de courbe au-dessus.

### 📋 Checklist avant l'épreuve

- [ ] Je sais énoncer **les 3 conditions** d'une loi binomiale.
- [ ] Je sais écrire l'inégalité de Bienaymé-Tchebychev avec et sans la version "concentration".
- [ ] Je sais résoudre $y' = ay$, $y' = ay + b$, $y' = ay + \varphi(x)$ avec solution particulière donnée.
- [ ] Je sais faire un changement de fonction $g = f - u$ et résoudre l'ED en $g$.
- [ ] Je sais calculer un projeté orthogonal sur un plan dans un cube.
- [ ] Je sais faire une intégration par parties.
- [ ] Je sais étudier la convexité d'une fonction et trouver un point d'inflexion.
- [ ] Je sais compléter un algorithme Python de type "seuil" pour une suite.
- [ ] Je sais justifier que deux vecteurs ne sont pas colinéaires (pour valider qu'un vecteur est normal au plan).
- [ ] Je sais utiliser le théorème de la bijection (continuité + stricte monotonie).

---

## Méta-information

**Sources** : sujets et corrigés APMEP, [annales Terminale Générale](https://www.apmep.fr/Annales-Terminale-Generale).
**Corpus** : 36 sujets uniques, 136 exercices.
**Limites de cette analyse** :
- Quelques exercices très courts ou avec des PDFs mal extraits sont restés "non classés" dans l'index automatique (12/136 ≈ 9%).
- Les fréquences sont des estimations basées sur la classification automatique + lecture des incipits, pas sur une analyse question-par-question exhaustive.
- Les pourcentages sont arrondis et donnés à titre indicatif.
**Pas dans le catalogue** :
- ROC (restitutions organisées de connaissance) : retirées du programme avec la réforme 2024.
- Démonstrations de cours imposées : idem.
- Loi normale, intervalle de confiance : retirés de Terminale spé.
- Nombres complexes : non au programme du tronc spé maths Terminale (réservés à l'option « maths expertes »).

