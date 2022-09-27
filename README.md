<div align="center" style="text-align: center;">

<img
	src="https://projetcohesion.info/assets/icon.png"
	alt="PC[i]"
	width="120"
		/>
<h1 color="teal" style="color: teal;"> Site web </h2>


[![App CI (test)](https://github.com/pci-ua/pci-website/actions/workflows/test.yml/badge.svg)](https://github.com/pci-ua/pci-website/actions/workflows/test.yml)

<h1>⠀</h1>
</div>

### Présentation

Projet pour le site de PC[i] : https://projetcohesion.info
 | | |
 |-|-|
 | <img src="https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png" width="16" height="16" alt="Logo npm" /> | npm |
 | <img src="https://nodejs.org/static/images/favicons/favicon-32x32.png" width="16" height="16" alt="Logo NodeJS"/> | NodeJS |
 | <img src="https://vuejs.org/logo.svg" width="16" height="16" alt="Logo VueJS"/> | VueJS |
 | <img src="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon.ico" width="16" height="16" alt="Logo bootstrap"/> | Bootstrap |

### Utilisation

0. Pré-requis
   | App | Version min. |
   |-----|--------------|
   | NodeJS | v18.9 |
   | npm | v8.19 |

1. Installation
   ```bash
   npm i -g http-server
   npm i
   ```

2. Build
   ```bash
   npm run build
   ```

3. Lancement serveur
   ```bash
   http-server dist/
   ```

4. Auto-build _optionnel_
   ```bash
   while inotifywait .; do npm run build && sleep 1; done
   ```
   _requiert `apt install inotify-tools`_

### Workflow

 1. Installation dépendances
 2. Build du site
 3. Vérification de la validité celon W3C
 4. Déploiement sur github pages

### Contribution
