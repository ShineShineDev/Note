### Easy Way Install composer

```js
$sudo apt install composer
```





## Another Way

#### Update  package manager

```js
> sudo apt update
```





#### Installing the required dependencies Including `php-cli`

```js
$ sudo apt install php-cli unzip curl
```





###  Download and Install Composer

- `Make sure you’re in your home directory, then retrieve the Composer installer using curl`

  ```js
  $ cd ~  //Make sure you’re in your home directory,
  $ curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
  ```

  

### Store in a shell variable

- `Using `curl`, fetch the latest signature and store it in a shell variable:`

  ```js
  $ HASH=`curl -sS https://composer.github.io/installer.sig`
  ```



### Verify that the installation script

```js
$ php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```



The following command will download and install Composer as a system-wide command named `composer`, under `/usr/local/bin`:

```bash
$ sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```



#### To test your installation

```js
$ composer
```

