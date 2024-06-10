### Pull the PostgreSQL Docker Image

```sh
docker pull postgres
```



### Run the PostgreSQL Container

```sh
> docker run --name my_postgres_db -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```



### Connecting to the PostgreSQL Database

```sh
docker exec -it my_postgres_db bash

psql -U postgres //connect to PostgreSQL
```



### Persistent Storage

```sh
docker run --name my_postgres_db -e POSTGRES_PASSWORD=mysecretpassword -v my_dbdata:/var/lib/postgresql/data -d postgres
```



### Accessing PostgreSQL from the Host

- `You can expose the PostgreSQL port (5432 by default) to the host by mapping it.`

```sh
docker run --name my_postgres_db -e POSTGRES_PASSWORD=mysecretpassword -v my_dbdata:/var/lib/postgresql/data -p 5432:5432 -d postgres
```



### Using Docker Compose

```ini
#docker-compose.yml
version: '3.8'
services:
  db:
    image: postgres
    container_name: my_postgres_db
    environment:
      POSTGRES_PASSWORD: mysecretpassword
    volumes:
      - my_dbdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"
volumes:
  my_dbdata:
```

Start the service

```sh
docker-compose up -d
```



