## Install PHP 7.4 on Ubuntu 22.04 LTS Jammy Linux



####  Run system update

```js
$ sudo apt update && sudo apt upgrade
```



#### Add Ondrej PPA Repository on Ubuntu 22.04

- `We cannot install the PHP7.4 packages using the default system repository of Ubuntu 22.04 because the default version of PHP present to install in this Ubuntu version is PHP 8.1. Hence, to get the older version, add the PPA repository called **Ondrej**.`

  ```js
  sudo apt install software-properties-common
  sudo add-apt-repository ppa:ondrej/php -y
  ```

  

### Install PHP 7.4 

- `Now, we can install PHP7.4 on our Ubuntu 22.04 Linux, however, we need to mention the version number with the command otherwise the system will install the php8.1 on our system`

  ```js
  sudo apt install php7.4
  ```

  

### Install Common Extensions 

```j
sudo apt install php7.4-{cli,common,curl,zip,gd,mysql,xml,mbstring,json,intl}
//or
sudo apt-get install -y php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath
```

> PHP configurations related to Apache are stored in `/etc/php/7.4/apache2/php.ini`. You can list all loaded PHP modules with the following command:
>
> ```js
> php -m
> ```
>
> 



###  Set PHP7.4 as the default version

- `Note: This step is only needed by those who are using two versions of PHP. For example, on Ubuntu 22.04 you are using PHP 7.4 and PHP 8.1 both. Hence, to make one of them as system’s default version we can use the update-alternatives command`

  ```js
  sudo update-alternatives --config php
  ```

  > `Enter one of the “Selection” numbers of the listed PHP version that you want to make the system’s default one. For example, here 7.4 is at **1** number, `



### Uninstall PHP and remove Ondrej PPA

- `If you don’t require the PHP7.4 and Ondrej PPA anymore on your Ubuntu 22.04 then we can remove them as well. Here are the commands to follow:`

  ```js
  sudo apt autoremove --purge php7.4
  sudo add-apt-repository --remove ppa:ondrej/php -y //To remove PPA
  ```

  

 
