# Microservices

## Microservices vs Monolith

A **Monolith** contains: Routing, Middlewares, Business Logic and Database Access to implement **_all features_** of an app while a **Microservice** contains: Routing, Middlewares, Business Logic and Database Access to implement **_only one feature_** of an app.

### Reasons for Database-Per-Service

1. To enable each service to run independently of other services
2. The Database schema/structure might change unexpectedly
3. Some services might function more efficiently with different types of Databases (SQL vs noSQL)

### Communicataion Strategies Between Services

1. **Sync** Services communicate with each other using direct requests.
2. **Async** Services communicate with each other using events.

### Event Buses
- Different implementations: RabbitMQ, Kafka, NATS
- Receives events, publishes them to listeners

## Deployment Issues

### Docker

Docker containers wrap up everything that is needed for a program + how to start and run it

### Kubernetes

A tool for running a bunch of different containers.
It is given some configuration to describe how we want our containers to run and interact with each other.

**Kubernetes Cluster:** Contains a bunch of nodes controlled by a master

# Docker

Makes it really easy to install and run software without worrying about setup or dependencies

## Docker Ecosystem

- Docker Client(CLI): Tool that we are going to issue commands to.
- Docker Server(Daemon): Tool that is responsible for creating images, running containers, etc
- Docker Machine
- Docker Hub
- Docker Images: A docker image is a template that contains the application, and all the dependencies required to run that application on Docker i.e code, runtime, system tools, system libraries and settings.
- Docker Compose

**Docker Container:** A running instance of the Docker image. i.e a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

**Namespacing** Isolating resources per process(or group of processes)
**Control Groups(cGroups)** Limit amount of resources used per process.

**Starting with a Shell**
Execute an additional command in a container: `docker exec -it <container id> <command>`: e.g `docker run -it busybox sh`
-   *docker* Reference the docker client
-   *exec* Run another command
-   *-it* Allow us to provide input to the container
-   *container id* ID of the container
-   <command> Command to execute
  
## Creating a Dockerfile
1. Specify a base image
2. Run some commands to install additional programs
3. Specify a command to run on container startup

## Tagging an image
`docker build -t josephmutua/redis:latest .`
- **-t josephmutua/redis** Tags the image
- **.** Specifies the directory of files/folders to use for the build

## Project
1. Create NodeJS web app
2. Create a dockerfile
3. Build image from dockerfile
4. Run image as container
5. Connect to web app from browser
6. 
## Basic Docker Commands
1. `docker build -t joseph/posts` Build an image based on the dockerfile in the current directory. Tag it as "joseph/posts"
2. `docker run [image id or image tag]` Create and start a container based on the provided image id or tag.
3. `docker run -it[image id or image tag][cmd]` Create and start container, but also override the default command.
4. `docker ps` Print out info about all of the running containers
5. `docker exec -it[container id][cmd]` Execute the given command in a running container.
6. `docker logs[container id]` Print out logs from the given container.

## Load Balancers and Ingress
**Load Balancer Service** Tells Kubernetes to reach out to its provider and provision a load balancer. Gets traffic into a single pod.
**Ingress/Ingress Controller** A pod with a set of routing rules to distribute traffic to other services.