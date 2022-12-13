#! /bin/sh

echo "Image gateway creation"
docker build -t api-gateway -f api-gateway/Dockerfile .
echo "Image gateway create"

echo "Image catalogue creation"
docker build -t catalog -f catalog/Dockerfile .
echo "Image catalogue create"

echo "Image anime creation"
docker build -t animes -f animes/Dockerfile .
echo "Image anime create"

echo "Lancement des Conteneurs"
docker-compose up -d 
echo "Conteneurs lancés"