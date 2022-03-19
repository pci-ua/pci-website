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
```bash
docker container exec pci-website_pc-web-front_1 npm run-script build
```


Puis accessible via [http://localhost:8080/](http://localhost:8080/)