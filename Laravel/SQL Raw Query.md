### SQL Raw Query

```php
//Data Insert With Raw SQL
Route::get('/insert/{spidey}/{ok}',functions($title,$body){
    DB::insert('insert into post(title,body) value (?,?)',[$title,$body]):
}):

//Data Read With Raw SQL
Route::get('read/{1}',function($id){
    $result = DB::select('select * FROM post WHERE id =$id (?)',[$id]):
    foreach($result as $data){
        echo $data ->title 
    }
}):

//Data Update  With Raw SQL
Route::('/update/{title}/{2}',function($title,$id){
    $return = DB:: update('update post set title = ? WHERE = ?', ['$title','$id']):
    echo $return:
})

//Data Delete  With Raw SQL
Route::get('/delect',function(){
    $result = DB::delete('delete'):
}):              
```

