CONTAINER_NAME="vue-front-app"

# docker build . -t $CONTAINER_NAME
# docker run --name $CONTAINER_NAME -p 8080:8080 -d $CONTAINER_NAME
# docker exec -it $CONTAINER_NAME "npm run dev -- --port 8080"

docker compose up -d
docker exec -it ${CONTAINER_NAME} npm install && \
docker exec -it ${CONTAINER_NAME} npm run dev -- --port 8080
