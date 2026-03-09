# crack_RNG

## Description
Ce projet regroupe des scripts Node.js pour reproduire la génération d'un portefeuille Bitcoin testnet basée sur un générateur pseudo-aléatoire déterministe, puis tenter de retrouver une adresse cible par brute force.

## Contenu
- `generator.js` : génère une clé privée, une clé publique compressée, une adresse testnet et un WIF à partir d'un `timestamp` et d'un `salt`.
- `bruteforce.js` : explore des combinaisons de paramètres pour retrouver une adresse cible.
- `code_page.js` : version packagée d'un code source utilisée comme référence.
- `node.js` : script utilitaire autour du LCG pour construire un secret hexadécimal à partir d'un identifiant de requête.

## Prérequis
- Node.js 18+ recommandé
- npm

## Installation
```bash
npm install
```

## Utilisation
Générer un portefeuille :
```bash
node generator.js <salt> <timestamp>
```

Exemple :
```bash
node generator.js demo 1700000000000
```

Lancer le brute force :
```bash
node bruteforce.js
```

Générer un secret depuis un request id :
```bash
node node.js 9611afc8
```

## Avertissement
Ce dépôt est un projet d'analyse et de démonstration. Ne pas utiliser ce mécanisme pour protéger de vrais fonds.
