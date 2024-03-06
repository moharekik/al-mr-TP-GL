# Lab 4

## Objectif du TP

Approfondir l'utilisation des pipelines d'intégration et notamment les notions suivantes:
- Artifacts et cache
- Parallélisation
- Triggers
- Variables et conditions

> A la fin du TP penser à rebase afin d'avoir un historique clair.

## Pré-requis
- Créer une nouvelle branche git `lab4`
- Repartir du pipeline du lab précédent (du groupe ou issu de la correction)

> Penser à bien tester chaque étape du Lab en exécutant le pipeline. N'oubliez pas de faire des commits sur votre branche avec un nom de message de commit explicite à chaque étape.

## 1. Mise en place d'un cache

- Supprimer l'étape de récupération des dépendances, faire une installation systématique des dépendances (en utilisant `before_script`) et commencer le pipeline par le stage de build

- Ajouter un cache global sur le pipeline pour que les dépendances soient mis en cache lors de l'étape de build et réutilisées lors des autres étapes et lors de prochaines exécutions avec les mêmes dépendances. Utilisez la documentation de [GitLab CI](https://docs.gitlab.com/ee/ci/yaml/yaml_optimization.html#anchors) et pnpm pour trouver la syntaxe.

- Lancer une première fois l'exécution du pipeline avec le cache. Vérifier que l'étape de build télécharge les dépendances mais pas les stages suivants

- Lancer une deuxième fois l'exécution du pipeline pour vérifier que toutes les dépendances ne sont pas retéléchargées, quelque soit le stage

- Mettre à jour quelques dépendances, commit et push et vérifier que le cache n'est pas utilisé lorsque les dépendances ont changé

## 2. Stages et Jobs

Réorganisez votre pipeline en 2 stages:
- Build
- Quality

Le stage Build doit s'occuper de construire le package.
Le stage Quality doit permettre de faire s'exécuter le type-checking, le linter et les tests.

Par défaut les jobs à l'intérieur d'un stage s'exécutent en parallèle, modifier le pipeline pour que le linter s'exécute après le type-checking.

## 3. Variables et Conditions

- Définir un [paramètre](https://docs.gitlab.com/ee/ci/variables/) de pipeline "Version" représentant la version du package au format [SemVer](https://semver.org/). Nommer le package généré par la build de la manière suivante : {nomduprojet}_{version}.

- Modifier le pipeline pour exécuter l'analyse statique uniquement si le pipeline est lancé manuellement

- Modifier le pipeline pour exécuter les tests uniquement si l'on se trouve sur la branche main

## 4. Triggers

- Configurer le pipeline pour qu'il se [déclenche](https://crontab.guru/) tous les mardis matin à 8h (le tester d'abord avec l'heure actuelle pour vérifier qu'il se déclenche bien)

- Ajouter un trigger sur le pipeline pour qu'elle soit déclenchée à chaque fois qu'un commit est fait sur une branche qui commencera par `feature/`

- Ajouter un trigger sur le pipeline pour qu'il se délenche sur un merge request


## 5. Pour aller plus loin

- Ajouter un job de détection des packages obsolètes (cf Lab 2 partie Pour aller plus loin)
    - Créer un artifact avec le rapport
- Ajouter un job de détection des vulnérabilités (cf Lab 2 partie Pour aller plus loin)
    - Créer un artifact avec le rapport
- Ajouter des conditions pour que ces 2 jobs ne soient exécutées que lorsque le pipeline est a été déclenché de manière programmée dans le temps
- Lancer le pipeline en utilsant l'API GitLab
    - Vous pouvez utilisez pour cela un client HTTP comme l'extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) de vscode ou [curl](https://curl.se/) depuis la ligne de commande