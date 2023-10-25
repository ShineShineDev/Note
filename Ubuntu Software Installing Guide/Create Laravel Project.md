## Create Laravel Project

> `Before you install Laravel you must install PHP & Composer & Xampp`



#### Via Composer Create-Project

```js
composer create-project --prefer-dist laravel/laravel:^7.0 blog
```



### Fixed  Error

- `if you got this err " Problem 1 phpunit/phpunit[8.5.8, ..., 8.5.11] require php ^7.2 -> your php version (8.1.2) does not satisfy that requirement." install phpunit`

  ```js
  $sudo apt install phpunit
  $ composer create-project --prefer-dist laravel/laravel:^7.0 blog //then install laravel
  ```

  


#### Via Laravel Installer

```js
composer global require laravel/installer
```

