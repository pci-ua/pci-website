# PC[i] Site web

[![App CI (test)](https://github.com/pci-ua/pci-website/actions/workflows/test.yml/badge.svg)](https://github.com/pci-ua/pci-website/actions/workflows/test.yml)

### Contribution


### Installation 

Pour déployer localement le projet :

#### Pré-requis
Assurez vous d'avoir  
 - docker-compose v1.29.2 ou plus
 - docker v18.09.1 ou plus
 - make v4.2.1 ou plus

Ainsi qu'aucun autre serveur écoutant sur le port 8080 de votre machine

#### Setup
```bash
git clone https://github.com/pci-ua/pci-website.git
cd pci-website/
cp .env.example .env
# éditer le .env si vous en avez besoin
make start
```

#### Reload

Pour build manuellement l'application une fois :
```bash
make build
```

Pour lancer le build automatique après chaque modification :
```bash
make auto-build
```

Puis accessible via [http://localhost:8080/](http://localhost:8080/)

### Validiter

Pour vérifier que vos modification respecte bien toutes normes :
```bash
make check
```
