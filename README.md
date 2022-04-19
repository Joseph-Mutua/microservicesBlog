# BASIC DOCKER COMMANDS
1. `docker build -t joseph/posts` Build an image based on the dockerfile in the current directory. Tag it as "joseph/posts"
2. `docker run [image id or image tag]` Create and start a container based on the provided image id or tag.
3. `docker run -it[image id or image tag][cmd]` Create and start container, but also override the default command.
4. `docker ps` Print out info about all of the running containers
5. `docker exec -it[container id][cmd]` Execute the given command in a running container.
6. `docker logs[container id]` Print out logs from the given container.
