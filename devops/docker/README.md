# Docker

## Build
docker build --build-arg NODE_ENV=development . -t test
docker build . -t [tag] -f /path/to/Dockerfile

## Run
docker run -d tag
docker run -d -p 4000:3060 ${IMAGE_ID}

## Stop
docker stop ${CONTAINER_ID}

## Remove
docker rmi $(docker images -q)

# Dockerfile
[CMD vs RUN vs ENTRYPOINT](https://stackoverflow.com/questions/37461868/difference-between-run-and-cmd-in-a-docker-file)

- `RUN` is an image build step, the state of the container after a RUN command will be committed to the docker image. A Dockerfile can have many RUN steps that layer on top of one another to build the image.

- `CMD` is the command the container executes by default when you launch the built image. A Dockerfile can only have one CMD. The CMD can be overridden when starting a container with docker run $image $other_command.

- `ENTRYPOINT` is also closely related to CMD and can modify the way a container starts an image.