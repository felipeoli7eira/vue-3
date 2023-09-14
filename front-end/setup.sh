IMAGE_NAME="vue3-node"
CONTAINER_NAME="frontend-vue3"

docker build -t $IMAGE_NAME .
# docker run --name $IMAGE_NAME -p 8080:8080 -d $IMAGE_NAME
docker run -it -p 8080:8080 --rm --name $CONTAINER_NAME $IMAGE_NAME
# docker exec -it $IMAGE_NAME "npm run dev -- --port 8080"
