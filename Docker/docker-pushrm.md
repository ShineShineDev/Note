### Docker Push Readme
- `docker-pushrm is a Docker CLI plugin that adds a new docker pushrm (speak: "push readme") command to Docker.`
- `It pushes the README file from the current working directory to a container registry server where it appears as repo description in the webinterface.`
- `It currently supports Dockerhub (cloud), Red Hat Quay (cloud and self-hosted/OpenShift) and Harbor v2 (self-hosted).`



## Installation

- `make sure Docker or Docker Desktop is installed`
- `Download docker-pushrm` for your platform from the` [release page](https://github.com/christian-korneck/docker-pushrm/releases/latest).
- `copy it to:`
  - Windows: `c:\Users\<your-username>\.docker\cli-plugins\docker-pushrm.exe`
  - Mac + Linux: `$HOME/.docker/cli-plugins/docker-pushrm`
- on Mac/Linux make it executable: `chmod +x $HOME/.docker/cli-plugins/docker-pushrm`



 ### Usage example

```bash
$ ls
Dockerfile	README.md
$ docker login
Username: my-user
Password: ********
Login Succeeded
$ docker build -t my-user/hello-world .
$ docker push my-user/hello-world
$ docker pushrm my-user/hello-world
```



