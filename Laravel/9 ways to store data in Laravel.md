## 9 ways to store data in Laravel



#### Raw SQL

- `We can use raw SQL to save the data. When I started with programming and created my first applications. I used this method.`

  ```php
  public function store(ProductRequest $request)
  {
      $name = $request->get('name');
      $price = $request->get('price');
      $description = $request->get('description');
      $active = $request->get('active');
  
      DB::raw(sprintf("INSERT INTO products VALUES (NULL, '%s','%d', '%s', '%d', NULL, NULL)", $name, $price, $description, $active));
  }
  ```

  

#### Query builder

- `We can use Query Builder for saving data in database like this`

  ```php
  public function store(ProductRequest $request)
  {
      DB::table('products')->insert([
          'name' => $request->get('name'),
          'price' => $request->get('price'),
          'description'  => $request->get('description'),
          'active'  => $request->get('active')
      ]);
  }
  ```

  

#### Model create

- `We don’t use Query Builder, but we use Eloquent Model in this way`

  ```java
  public function store(ProductRequest $request)
  {
      Product::create([
          'name' => $request->get('name'),
          'price' => $request->get('price'),
          'description'  => $request->get('description'),
          'active'  => $request->get('active')
      ]);
  }
  ```

  

  

#### New Model

- ```We can create and inject attributes to contructor```

  ```php
  public function store(ProductRequest $request)
  {
      $product = new Product([
          'name' => $request->get('name'),
          'price' => $request->get('price'),
          'description'  => $request->get('description'),
          'active'  => $request->get('active')
      ]);
      $product->save();
  }
  ```

  

#### Fill

- `We use fill method build on Eloquent`

  ```php
  public function store(ProductRequest $request)
  {
      $product = new Product();
      $product->fill([
          'name' => $request->get('name'),
          'price' => $request->get('price'),
          'description'  => $request->get('description'),
          'active'  => $request->get('active')
      ]);
      $product->save();
  }
  ```

  

  

#### $model->property

- `Firstly, we create a new object, then set values for all necessary attributes. Finally, we save and persistent data.`

  ```php
  public function store(ProductRequest $request)
  {
      $product = new Product();
      $product->name = $request->get('name');
      $product->price = $request->get('price');
      $product->description = $request->get('description');
      $product->active = $request->get('active');
      $product->save();
  }
  ```

  

#### Upsert

- `Upsert is using to save a multiple rows, but you can use it for saving 1 record`

```
Product::query()->upsert(
    [
        $request->validated()
    ]
)
```



#### FirstOrCreate / UpdateOrCreate

- `It’s not elegant ways to store data but it works`

  ```php
  Product::query()
      ->firstOrCreate($request->validated());
  Product::query()
      ->updateOrCreate($request->validated());
  ```

  

  

  

  