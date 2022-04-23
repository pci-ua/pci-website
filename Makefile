default:
	echo "No default command set"


start:
	docker-compose up -d --build

stop:
	docker-compose down

build:
	docker-compose exec pc-web-front npm run build

auto-build:
	docker-compose exec pc-web-front npm run auto-build

check: check-syntax

check-syntax:
	docker-compose exec pc-web-front npm run lint