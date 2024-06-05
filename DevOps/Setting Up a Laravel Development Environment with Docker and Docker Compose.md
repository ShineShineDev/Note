### Setting Up a Laravel Development Environment with Docker and Docker Compose: A Step-by-Step Tutorial



### Create a Laravel Project

- `First, create a new Laravel project or use an existing one. If you don’t have a Laravel project yet, you can create one using Composer.`

  ```cmd
  > composer create-project --prefer-dist laravel/laravel laravel-docker
  cd laravel-docker
  ```

  

### Create Dockerfile

- `Create a` **`Dockerfile`** `in the root of your Laravel project. This file will define the PHP environment for your Laravel application.`

  ```ini
  # Dockerfile
  FROM php:8.1-fpm
  
  # Set working directory
  WORKDIR /var/www
  
  # Install dependencies
  RUN apt-get update && apt-get install -y \
      build-essential \
      libpng-dev \
      libjpeg-dev \
      libfreetype6-dev \
      locales \
      zip \
      jpegoptim optipng pngquant gifsicle \
      vim \
      unzip \
      git \
      curl
  
  # Clear cache
  RUN apt-get clean && rm -rf /var/lib/apt/lists/*
  
  # Install PHP extensions
  RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
  
  # Install Composer
  COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
  
  # Copy existing application directory contents
  COPY . /var/www
  
  # Copy existing application directory permissions
  COPY --chown=www-data:www-data . /var/www
  
  # Change current user to www
  USER www-data
  
  # Expose port 9000 and start php-fpm server
  EXPOSE 9000
  CMD ["php-fpm"]
  ```





### Create Docker Compose File

- `Create a` **`docker-compose.yml`** `file in the root of your Laravel project. This file will define the web server, database, and other services required by your Laravel application.`

  ```ini
  # docker-compose.yml
  version: '3.8'
  services:
    app:
      build:
        context: .
        dockerfile: Dockerfile
      image: laravel-app
      container_name: laravel_app
      restart: unless-stopped
      working_dir: /var/www
      volumes:
        - ./:/var/www
        - ./docker/php/local.ini:/usr/local/etc/php/conf.d/local.ini
      networks:
        - laravel
  
    webserver:
      image: nginx:alpine
      container_name: laravel_webserver
      restart: unless-stopped
      ports:
        - "8000:80"
      volumes:
        - ./:/var/www
        - ./docker/nginx/conf.d:/etc/nginx/conf.d
      networks:
        - laravel
      depends_on:
        - app
  
    db:
      image: mysql:5.7
      container_name: laravel_db
      restart: unless-stopped
      environment:
        MYSQL_ROOT_PASSWORD: secret
        MYSQL_DATABASE: laravel
        MYSQL_USER: laravel
        MYSQL_PASSWORD: secret
      volumes:
        - dbdata:/var/lib/mysql
      networks:
        - laravel
  
  networks:
    laravel:
      driver: bridge
  
  volumes:
    dbdata:
      driver: local
  ```

  

  ### Configure Nginx

  - `Create an Nginx configuration file in` **`docker/nginx/conf.d`** `directory.`
  
    ```ini
    # docker/nginx/conf.d/default.conf
    server {
        listen 80;
        index index.php index.html;
        server_name localhost;
        error_log  /var/log/nginx/error.log;
        access_log /var/log/nginx/access.log;
        root /var/www/public;
    
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }
    
        location ~ \.php$ {
            include fastcgi_params;
            fastcgi_intercept_errors on;
            fastcgi_pass app:9000;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_script_name;
        }
    
        location ~ /\.ht {
            deny all;
        }
    }
    
    ```



### Configure PHP

- `Create a PHP configuration file in` **`docker/php`** `directory.`

  ```ini
  ; docker/php/local.ini
  memory_limit = 512M
  upload_max_filesize = 100M
  post_max_size = 100M
  max_execution_time = 300
  	
  ```

  

### Start Docker Containers

- `With everything set up, you can now start the Docker containers using Docker Compose.`

  ```cmd
  docker-compose up -d
  ```





### Access Laravel Application

- `Your Laravel application should now be running at` **`http://localhost:8000`**. `You can also access the MySQL database on port 3306 with the credentials defined in the` **`docker-compose.yml`** `file.`





### Run Laravel Migrations

- `To set up the database schema, run the Laravel migrations.`

  ```cmd
  docker-compose exec app php artisan migrate
  ```

  

### Summary

> `You've now set up a Laravel development environment using Docker and Docker Compose. This setup includes a PHP-FPM container for running Laravel, an Nginx container for serving the application, and a MySQL container for the database. This setup can be extended with more services as needed for your development.`
