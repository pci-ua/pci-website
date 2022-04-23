# PC[i] Site web

### Contribution


### Setup 

Pour déployer localement le projet :

#### Requirements
 - docker-compose 1.29.2  or newer

#### Setup
```bash
git clone https://github.com/pci-ua/pci-website.git
cd pci-website/
docker-compose up --build -d
```

#### Reload

Pour build manuellement l'application une fois :
```bash
docker container exec pci-website_pc-web-front_1 npm run-script build
```

Pour lancer le build automatique après chaque modification :
```bash
docker container exec pci-website_pc-web-front_1 npm run-script auto-build
```

Puis accessible via [http://localhost:8080/](http://localhost:8080/)