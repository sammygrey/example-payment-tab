To run the app please use:

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    react-image

Why?:

-it starts the container in interactive mode, because currently react-scripts exits 
after startup which will cause the container to exit

-v ${PWD}:/app mounts the code into the container at “/app”.

Since we want to use the container version of the “node_modules” folder, 
we need to configure another volume: -v /app/node_modules. 

-p 3000:3000 is exposing port 3000

We are calling the docker image react-image because it's run using react!


