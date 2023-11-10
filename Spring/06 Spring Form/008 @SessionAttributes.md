## @SessionAttributes

```java
//model/Product.java
class Product implements Serializable{
    private static final long serialVersionUID = 1l;
    private List<String> list;    
    public Product(){
        list = new ArrayList<>();
    }
    public List<String> getList(){
        return list;
    }
    public int  getCount(){
        return list.size();
    }   
}
------------------------------------------------------------------------------------------------------------
    
//controller/ProductController.java
@Controller 
@RequestMapping("product")
@SessionAttributes("card")   
class ProductController{
    
    /**
    * method : Get
    * url : http://localhost:8080/product
    * view will bet : /jsp/product.jsp
    */
    void index (){}
  
    @ModelAttribute("card")
    Product loadProduct(){
        return new Product();
    }    
}
------------------------------------------------------------------------------------------------------------
    
//controller/AddCardItemController.java
@Controller 
@RequestMapping("product/card")
class AddCardItemController{
    
    /**
    * method : Post
    * url : http://localhost:8080/product/card/add-item
    * view will bet : /jsp/product.jsp
    */
    @PostMapping("add-item") 
    String addCardItem(@RequestParam  String name,@SessionAttribute Product card ) {
        card.add(name);
        return "product";
    }   
}
---------------------------------------------------------------------------------------------------------------

//controller/ClearCardItemController.java
@Controller 
@RequestMapping("product/card")
@SessionAttributes("card")   
class ClearCardItemController{
    
    /**
    * method : Post
    * url : http://localhost:8080/product/card/clear-item
    * view will bet : /jsp/product.jsp
    */
    @PostMapping("clear-item") 
    String addCardItem(@RequestParam  String name,@SessionStatus session ) {
        session.setComplete();
        return "product";
    }   
}    
---------------------------------------------------------------------------------------------------------------
    
//jsp/product.jsp
<form action="product/card/add-item" method="post">
    <input type="text" name="name" />
    <input type="submit" value="add" />
</form> 
    
<form action="product/card/clear-item" method="post">
    <input type="submit" value="clear" />
</form> 
    

${sessionScope.card.count}
<c:forEach var="item" items"${sessionScope.card.list}" >
    ${item}
</c:forEach>
```















