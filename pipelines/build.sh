
## Partie Pour aller plus loin ##
echo "Identification des dépendances obsolètes"
pnpm outdated --format json > reports/outdated-dependencies.json
# pnpm up --latest

echo "Identification des dépendances vulnérables"
pnpm audit --json  > reports/vulnerable-dependencies.json   
# pnpm audit --fix
## Partie Pour aller plus loin ##

echo "Installation des dépendances du projet"
pnpm install

echo "Type checking" 
pnpm vue-tsc --noEmit

echo "Installation des dépendances du projet"
pnpm vite build

echo "Analyse statique"
pnpm eslint .
