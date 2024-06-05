### Deploying a PHP Web App with Docker Compose, Nginx, and MariaDB: A Complete Guide

> https://medium.com/cypik/deploying-a-php-web-app-with-docker-compose-nginx-and-mariadb-a-complete-guide-d8940f23f1de



### Create a Nginx Container

- `Create a directory for your project and navigate to it.`

  ```cmd
  mkdir ~/docker-suresh-project
  cd ~/docker-suresh-project
  ```

-  `Create a` **`docker-compose.yml`** `file for launching the Nginx container:`

  ```bash
  > nano docker-compose.yml
  ```

- `Add the following configuration to the` **`docker-compose.yml`** `file`

  ```ini
  version: "3.9"
  services:
      nginx:
        image: nginx:latest
        container_name: nginx-container
        ports:
         - 80:80
  ```

  > `This configuration ensures that the Nginx container runs on port 80. Save and close the file.`

- `Launch the Nginx container:`

  ```bash
  > sudo docker-compose up -d
  
  > sudo docker ps
  ```



> **`Docker Compose`** `is used to run multiple containers as a single service.`
>
> ` For example, suppose you had an application which required NGNIX and MySQL, you could create one file which would start both the containers as a service without the need to start each one separately.`

 

### Create a PHP Container

- `Create a directory for your PHP code inside your project.`

  ```bash
  mkdir ~/docker-suresh-project/php_code
  ```

- `Clone App`

  ```bash
  git clone https://github.com/rapidcode-technologies-private-limited/php-e-commerce.git ~/docker-suresh-project/php_code/
  ```

- `Create a Dockerfile for the PHP container.`

  ```bash
  nano ~/docker-suresh-project/php_code/Dockerfile
  ```

- ` Add the following lines to the Dockerfile`

  ```ini
  FROM php:7.0-fpm
  RUN docker-php-ext-install mysqli pdo pdo_mysql
  RUN docker-php-ext-enable mysqli
  ```

- `Create a directory for Nginx inside your project directory.`

  ```bash
  mkdir ~/docker-suresh-project/nginx
  ```

- `Create an Nginx default configuration file to run your PHP application`

  ```bash
  nano ~/docker-suresh-project/nginx/default.conf
  ```

- ` Add the following Nginx configuration to the` **`default.conf`** `file`

  ```ini
  server {  
  
       listen 80 default_server;  
       root /var/www/html;  
       index index.html index.php;  
  
       charset utf-8;  
  
       location / {  
        try_files $uri $uri/ /index.php?$query_string;  
       }  
  
       location = /favicon.ico { access_log off; log_not_found off; }  
       location = /robots.txt { access_log off; log_not_found off; }  
  
       access_log off;  
       error_log /var/log/nginx/error.log error;  
  
       sendfile off;  
  
       client_max_body_size 100m;  
  
       location ~ .php$ {  
        fastcgi_split_path_info ^(.+.php)(/.+)$;  
        fastcgi_pass php:9000;  
        fastcgi_index index.php;  
        include fastcgi_params;
        fastcgi_read_timeout 300;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;  
        fastcgi_intercept_errors off;  
        fastcgi_buffer_size 16k;  
        fastcgi_buffers 4 16k;  
      }  
  
       location ~ /.ht {  
        deny all;  
       }  
      }
  ```

  

- `Create a Dockerfile inside the` **`nginx`** `directory to copy the Nginx default config file.`

  ```bash
  nano ~/docker-suresh-project/nginx/Dockerfile
  ```

- ` Add the following lines to the Dockerfile:`

  ```ini
  FROM nginx
  COPY ./default.conf /etc/nginx/conf.d/default.conf
  ```

  - `Update the`  **`docker-compose.yml`** `file with the following contents.


  ```ini
  version: "3.9"
  services:
     nginx:
       build: ./nginx/
       ports:
         - 80:80
    
       volumes:
           - ./php_code/:/var/www/html/
  
     php:
       build: ./php_code/
       expose:
         - 9000
       volumes:
          - ./php_code/:/var/www/html/
  ```

- `Launch the containers.`

  ```bash
  cd ~/docker-suresh-project
  sudo docker-compose up -d
  
  sudo docker ps
  
  //if face error run this commands
  docker-compose down --volumes --remove-orphans
  docker system prune -a --volumes
  
  //go to running container
  sudo docker exec -it ae2828430bc0 sh
  ```



### Create a MariaDB Container

- `Edit the` **`docker-compose.yml`** `file to add an entry for a MariaDB container.`

  ```bash
  nano ~/docker-suresh-project/docker-compose.yml
  ```

- `Update the` **`docker-compose.yml`** `file with the provided MariaDB configuration.`

  ```ini
  version: "3.9"
  services:
  
    nginx:
      build: ./nginx/
      ports:
        - 80:80
      depends_on:
        - php
      volumes:
        - ./php_code/:/var/www/html/
  
    php:
      build: ./php_code/
      expose:
        - 9000
      volumes:
        - ./php_code/:/var/www/html/
  
    db:
      image: mariadb
      volumes:
        - mysql-data:/var/lib/mysql
      environment:
        MYSQL_ROOT_PASSWORD: mariadb
        MYSQL_DATABASE: ecomdb
  
  volumes:
    mysql-data:
  ```

- `Run the following command`

  ```bash
  sudo docker-compose up -d
  ```

- `Create a CLI session inside the MariaDB container`

  ```bash
  docker exec -it [db container id] /bin/sh
  ```

- `Access MariaDB as the root user.`

  ```bash
  mariadb -u root -pmariadb
  ```

- ` Create a new user for the database.`

  ```bash
      CREATE USER 'rapidcode'@'%' IDENTIFIED BY "rapidcode123";
  ```

- `Grant all privileges to the new user.`

  ```ini
  GRANT ALL PRIVILEGES ON *.* TO 'rapidcode'@'%';
  FLUSH PRIVILEGES;
  ```

- `Exit the MariaDB shell.`

  ```bash
  exit
  ```

- `Load product inventory information into the database.`

  ```ini
  cat > db-load-script.sql <<-EOF
  USE ecomdb;
  CREATE TABLE products (id mediumint(8) unsigned NOT NULL auto_increment,Name varchar(255) default NULL,Price varchar(255) default NULL, ImageUrl varchar(255) default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1;
  
  INSERT INTO products (Name,Price,ImageUrl) VALUES ("Laptop","100","c-1.png"),("Drone","200","c-2.png"),("VR","300","c-3.png"),("Tablet","50","c-5.png"),("Watch","90","c-6.png"),("Phone Covers","20","c-7.png"),("Phone","80","c-8.png"),("Laptop","150","c-4.png");
  
  EOF
  ```

- ` Run the SQL script`

  ```bash
  mariadb -u root -pmariadb < db-load-script.sql
  ```

- `Exit the MariaDB container shell`

  ```bash
  exit
  ```

  http://localhost/



### Close All Running Container

```cmd
 sudo docker stop $(sudo docker ps -q)
```



