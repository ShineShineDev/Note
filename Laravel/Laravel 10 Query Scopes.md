## What are scopes?

>  `A scope is a method in your model that makes it able to add database logic into your model.`



### Global scopes

- `Global scopes allow you to add constraints to all queries on a model. This way you make sure that every query on a given model has certain constraints. You can create a global scope by running the following command`

  ```php
  php artisan make:scope UserScope
  //This will create the UserScope class in the app/Scopes folde
  ```

  ```php
  //app/Scopes/UserScope.php
  <?php
  namespace App\Scopes;
  
  use Illuminate\Database\Eloquent\Builder;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Scope;
  
  class UserScope implements Scope
  {
      public function apply(Builder $builder, Model $model): void
      {
          $builder->where('active', '1');
      }
  }
  ```

  

>  `After creating the scope we should add it to our model. This can be done by overwriting the boot method. This results in every query on this model getting *WHERE active=’1’* as a constraint.`''

```php
<?php

namespace App\Models;

use App\Scopes\UserScope;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new UserScope());
    }
}
```



### Anonymous Global Scopes

- `If you have simple scopes that do not need their own class you could define an anonymous global scope using a Closure. This is also done in the boot method of the model. The *UserScope* class from the previous example could be rewritten to an anonymous global scope`

  ```php
  <?php
  
  namespace App;
  
  use Illuminate\Database\Eloquent\Builder;
  use Illuminate\Database\Eloquent\Model;
  
  class User extends Model
  {
      protected static function boot()
      {
          parent::boot();
          static::addGlobalScope('active', function (Builder $builder) {
              $builder->where('active', '1');
          });
      }
  }
  ```

  

### Removing a global scope

- `It is possible to remove a global scope if you have a certain query that you want to execute without the global scope.`

- `There are two ways to remove a global scope, depending on if it is an anonymous global scope or not.`

- `To remove a global scope you can call the *withoutGlobalScope* method with the class name of the scope as a parameter.`

  ```php
  User::withoutGlobalScope('App\Scopes\UserScope')->get();
  ```

- `For an anonymous global scope, you can call the same method, but with the name of the anonymous global scope as the first parameter.`

  ```php
  User::withoutGlobalScope('active')->get();
  ```

  `Removing multiple global scopes is possible as well using the *withoutGlobalScopes* method.`



### Local scopes

- `Local scopes make it able to define standard sets of constraints that are easily reusable. This comes in handy if we only want to get male users, for example.`

  ```php
  <?php
  
  namespace App;
  
  use Illuminate\Database\Eloquent\Model;
  
  class User extends Model
  {
      public function scopeIsMale($query)
      {
          return $query->where('is_male', 'm');
      }
  }
  ```

- `After defining one or more local scopes they could be used by calling the scope method on the model. Chaining of scope methods is possible.`

  ```php
  $user = User::isMale()->orderBy('created_at')->get();
  ```

  

### Dynamic local scopes

- `Dynamic local scopes work in exactly the same way as a normal local scope. The only difference is that a dynamic local scope accepts parameters.`

  ```php
  <?php
  
  namespace App;
  
  use Illuminate\Database\Eloquent\Model;
  
  class User extends Model
  {
      public function scopeIsMale($query, $isMale)
      {
          return $query->where('is_male', $isMale);
      }
  }
  ```

- `You can pass the parameter when calling the scope`

  ```php
  $user = User::IsMale('m')->orderBy('created_at')->get();
  ```

  