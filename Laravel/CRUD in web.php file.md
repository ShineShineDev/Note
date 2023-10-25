### Read

```js
//All
Route::get("/getAll",function(){
    return Post::all();
});
//Specific Row
Route::get("/find",function(){
          return Post::find(1);
});
//where()
Route::get("/where",function(){
        return Post::where('id',1)->get();   
});
//find or fail () 
Route::get("/findorfi",function(){
    return Post::findOrFial(1);
});
```





### Delete  and Destroy

```js
Route::get('/delete',function(){
    return $result = Post::find(1)->delete() ? 'right' : 'fail';
});

Route::get('/destroy',function(){
    retunr Post::destroy(1) ? 'right ' : 'fail';
});
```





### Insert

```js
//Insert
Route::get("insert",function(){
     $post = new Post();
     $post->title = "new post";
     $post->content = "new content";
     $post->save();
     return $post ? "Success insert" : "fail";
});

Route: :get("/insert",function(){
    $result = Post::create(["title"=>"insertwith mass","content"=>"content with mass"]);
    return $result   ? "Success" : "fail" ;
});

//Masss Assignment
class Post extends Mode{
   protected $filable = ['title','content'];
}
```





### Update

```php
Route::get("/update",function(){
     $result = Post::find(1);
     $result->title = "tit update with Mode easy";
     $result->content = "con update with easy M";
     return $result     ? "Success" : "fail";
});

Route::get('/update',function(){
  // $result = Post::where('id',1)->update(['title'=>"update title",'content'=>'update content']);
    $result = Post::find(1)->update(['titiel'=>'update title','content'=>'update content']);
});

*notic : Mass assigment exception
```

