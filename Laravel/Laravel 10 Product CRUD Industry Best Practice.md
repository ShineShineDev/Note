## Products CRUD Example In Laravel 10 Industry Best Practice



###  Create a new Laravel project 

```bash
composer create-project --prefer-dist laravel/laravel product-crud-example
```



### Create a Product model

```bash
php artisan make:model Product -mcr
```

- `This command will create a `Product` model with the following files:`

  - `app/Models/Product.php`
  - `database/migrations/2023_03_25_000000_create_products_table.php`
  - `app/Http/Controllers/ProductController.php`
  - `routes/web.php`

  `The `-mcr` option will also create a migration, controller, and resourceful routes for the `Product` model.`



### Define the products table schema

```php
//database/migrations/2023_03_25_000000_create_products_table.php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
}
```





### Define the Product model

```php
//app/Models/Product.php 
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
    ];
}
```





### Define Custom Request Classes

```bash
php artisan make:request StoreProductRequest
php artisan make:request UpdateProductRequest
```

```php
//app/Http/Requests/StoreProductRequest.php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
        ];
    }
}

// app/Http/Requests/UpdateProductRequest.php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
        ];
    }

}
```





### Define the Product controller

```php
//app/Http/Controllers/ProductController.ph
<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $products = Product::all();

        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create(): View
    {
        return view('products.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreProductRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreProductRequest $request): RedirectResponse
    {
        Product::create($request->validated());

        return redirect()->route('products.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product  $product
     * @return View
     */
    public function edit(Product $product): View
    {
        return view('products.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateProductRequest  $request
     * @param  Product  $product
     * @return RedirectResponse
     */
    public function update(UpdateProductRequest $request, Product $product): RedirectResponse
    {
        $product->update($request->validated());

        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Product  $product
     * @return RedirectResponse
     */
    public function destroy(Product $product): RedirectResponse
    {
        $product->delete();

        return redirect()->route('products.index');
    }
}
```





####  Define the Product Views

- `Create the products directory inside the resources/views directory. Create the following views inside the products directory:`

- `create files:`
  -  `index.blade.php`
  - `create.blade.php`
  - `edit.blade.php`

  ```php+HTML
  //index.blade.php
  @extends('layouts.app')
  @section('content')
      <h1>Products</h1>
  
      <p>
          <a href="{{ route('products.create') }}">Create Product</a>
      </p>
  
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              @foreach ($products as $product)
                  <tr>
                      <td>{{ $product->name }}</td>
                      <td>{{ $product->description }}</td>
                      <td>{{ $product->price }}</td>
                      <td>
                          <a href="{{ route('products.edit', $product) }}">Edit</a>
  
                          <form method="POST" action="{{ route('products.destroy', $product) }}">
                              @csrf
                              @method('DELETE')
  
                              <button type="submit">Delete</button>
                          </form>
                      </td>
                  </tr>
              @endforeach
          </tbody>
      </table>
  @endsection
  ```
  
  ```js
  @extends('layouts.app')
  
  @section('content')
      <h1>Create Product</h1>
  
      <form method="POST" action="{{ route('products.store') }}">
          @csrf
  
          <div>
              <label for="name">Name:</label>
              <input type="text" name="name" id="name" value="{{ old('name') }}" required>
          </div>
  
          <div>
              <label for="description">Description:</label>
              <textarea name="description" id="description" required>{{ old('description') }}</textarea>
          </div>
  
          <div>
              <label for="price">Price:</label>
              <input type="number" name="price" id="price" value="{{ old('price') }}" step="0.01" required>
          </div>
  
          <button type="submit">Create</button>
      </form>
  @endsection
  ```
  
  ```php+HTML
  @extends('layouts.app')
  
  @section('content')
      <h1>Edit Product</h1>
  
      <form method="POST" action="{{ route('products.update', $product) }}">
          @csrf
          @method('PATCH')
  
          <div>
              <label for="name">Name:</label>
              <input type="text" name="name" id="name" value="{{ old('name', $product->name) }}" required>
          </div>
  
          <div>
              <label for="description">Description:</label>
              <textarea name="description" id="description" required>{{ old('description', $product->description) }}</textarea>
          </div>
  
          <div>
              <label for="price">Price:</label>
              <input type="number" name="price" id="price" value="{{ old('price', $product->price) }}" step="0.01" required>
          </div>
  
          <button type="submit">Update</button>
      </form>
  @endsection
  ```
  
  

### Define the product routes

```php
//web.php
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
Route::patch('/products/{product}', [ProductController::class, 'update'])->name('products.update');
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
```



### Run Project

```bash
php artisan serve
//http://127.0.0.1:8000/products
```
