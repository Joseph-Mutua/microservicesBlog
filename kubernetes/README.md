# Kebernetes Terminology
**Kubernetes Cluster** A collection of nodes + master to manage them.
**Node** A virtual machine that  will run our containers
**Pod** More or less, a running container. A pod can run multiple containers.
**Deployment** Monitors a set of pods, makes sure they are running and starts them if they crash.
**Service** Provides an easy-to-remember URL to access a running container. 

## Deployment Commands
`kubectl get deployments` List all the running deployments
`kubectl describe deployment [depl name]` Print out the details about a specific deployment
`kubectl apply -f [config file name]` Create a deployment out of a config file
`kubectl delete deployment [depl_name]` Delete a deployment

## Updating the image used by a Deployment
1. The deployment must be using the "latest" tag in the pod spec section
2. Make an update to your code
3. Build the image
4. Push the image to docker hub
5. Run the command `kubectl rollout restart deployment [depl_name]`

## Networking with Services
**Cluster IP** Sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster
**Node Port** Makes a pod accessbile from outside the cluster. Ususally only used for dev purposes.
**Load Balancer** Makes a pod accessbile from outside the cluster. This is the right way to expose a pod to the outside world.
**External Name** Redirects an in-cluster request to a CNAME url.

## Building a Deployment
1. Build an image for the partciuclar service e.g event-bus
2. Push the image to Docker Hub
3. Create a deployment for the Event-Bus
4. Create a Cluster IP Service for Event Bus and Posts
5. wire it all UP