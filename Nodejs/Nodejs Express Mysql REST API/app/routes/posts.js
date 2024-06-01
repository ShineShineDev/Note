exports.routes = [
  {
    path : '/posts',
    method : 'GET',
    handler : 'post@index'
  },
  {
    path : '/posts',
    method : 'POST',
    handler : 'post@add'
  },
  {
    path : '/posts/:id',
    method : 'GET',
    handler : 'post@show'
  },

  {
    path : '/posts/:id',
    method : 'PUT',
    handler : 'post@update'
  }

];
