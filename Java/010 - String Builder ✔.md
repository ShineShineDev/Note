### String Builder

> **`Java တွင်  Literal နဲ့ဆောက်ထားသော String မျာသည် immutable မျာဖြစ်ကြပါသည် `**
>
> **`String Builder နဲ့ဆောက်ထားသော String မျာသည် mutable မျာဖြစ်ကြပါသည်`**

- `Java တွင်  Literal နဲ့ဆောက်ထားသော String မျာသည် immutable မျာဖြစ်ကြပါသည် `

- `တည်ဆောက်ပြီးသား  String များကို String object မဆောက်ဘဲ modifie လုပ်ချင်လျှင် String Builder ကို သုံးသင့်ပါသည်`

- `String Builder တွေကို loop အတ္ငင်းမှ String တွေ ခနခန String ဆောက်ပြီး concatenating လုပ်တဲ့နေရာမှာ သုံးခြင်းအား JVM performance တတ်စေပါသည် ဘာကြောင့် ဒီလိုဘာလို့့လုပ်သင့်လည်းဆိုတော့ JVM မှာ String တစ်ခုဆောက်တိုင်း Heap Memoery ရဲ့ String pool ထဲမှာ နေရာယူနပါတယ်။  String pool ထဲ က String တွေက တစ်ခြား object တွေလို Stack Memory ပေါ်မှာ Reference လုပ်နေတာ မရှီတော့ရင် Heap Memoery ပေါက ဖျတ် GC က ဖျတ်ပစ်ပေမဲ့ String pool ထဲက String တွေက JVM နောက်ဆုံးချိနိထိ ရှီနေပါတယ် အဲ့လိုနောက်ဆုံးရှိနေအတွက် JVM performance  ကိုထိခိုက်စေပါသည်    `

- `String တွေ Builderလုပ်တဲ့နေရာမှာ StringBuilder နဲ့ StringBuffer ဆိုပြီး Constructors နှစ်ခုရှိပါတယ် နှစ်ခုလုံးက အတူတူပါပဲ ။  StringBuilder ကို Singel Thread  run တဲ့ကို နေရာမှာ သုံးသင့်ပြီး StringBuffer ကို တော့ Multi Thread   run တဲ့ကို နေရာမှာ သုံးသင့်တယ်။  StringBuilder ကို  high in performance  ဖြစ်တဲ့ Multi Thread မှာ run လိုက်ရင်  thread-safe  မဖြစ်စေဘူး  ပြီးတော့ StringBuffer ကို Single Thread မ run လိုက်ရင်လည်း မလိုအပ်ဘဲ performance ထိခိုက်စေသည်`

- `StringBuffer ကို  synchronization ကိုရပြိး StringBuilder ကတော့မရပါ`

- `StringBuilder  Constructors`

  - **`StringBuilder():`** `Constructors မှာ ဘာမှ မသတ်ဘဲ Object ဆောက်လိုက်ရင်  capacity 16 characters default ယူတယ်.`
  - **`StringBuilder(int capacity)`:**`  capacity သတ်မှတ်ပြီး Object ဆောက်လိုရင် Constructors သတ်မှတ်ချင်သလောက် Interger သတ်မှတ်ပေးနိုင်ပါတယ္`
  - **`StringBuilder(CharSequence seq)`**`:  CharSequence ပေးပြီး တစ်ခါထဲ Object ဆောက်လိုက် လို့ရတယ် .`
  - **`StringBuilder(String str)`:**  `String ပေးပြီး တစ်ခါထဲ Object ဆောက်လိုက် လို့ရတယ်  `

  

  

  

### Create String Builder Object

  ```java
  // length ဆိုတာ Charactor အရေအတွက် 
  var sb1 = new StringBuilder() 
  var sb2 = new StringBuilder(10);
  var sb3 = new StringBuilder("ABCD");
  var sb4 = new StringBuilder(sb3)
  ```



### Length method of String Builder Object

- `Length method ကိုသုံးပြီး Charactor အရေအတွက် ကြည့်လိုရတယ်`

  ```java
  var sb1 = new StringBuilder()
  var sb2 = new StringBuilder(10);
  var sb3 = new StringBuilder("ABCD");
  var sb4 = new StringBuilder(sb3)
  sb1.length(); //0
  sb2.length(); //0
  sb3.length(); //4
  sb4.length(); //4
  ```

  

  

### Capacity method 

- `Capacity ဆိုတာ characters ဘယ်နှစ်လုံးထည့်လို့ရသလည်းကိုဆိုလိုပေမဲ့ ထက်ပြိးတော့ ထည့်လိုရပါတယ်`

- ` Object ဆောက်ရာမှာ capacity မသတ်မှတ်ရင် default capacity 16 characters  ယူတယ် `

  ```java
  var sb1 = new StringBuilder() 
  var sb2 = new StringBuilder(10);
  var sb3 = new StringBuilder("ABCD");
  var sb4 = new StringBuilder(sb3)
  
  sb1.capacity(); //16
  sb2.capacity(); //10
  sb3.capacity(); //20
  sb4.capacity(); //20
  ```

  



### Capacity method 

- `Default capacity 16 characters  ယူပေမဲ့ သူ့ထက်ကျော်သွားရင်လည်း append method ကိုသုံးပြီး ထပ်ပြီး Allocate လုပ်နိုင်တယ်`

-  `Append method တွေရဲ return type က String Builder ဖြစ်တယ်`

  ```java
  var sb1 = new StringBuilder() 
  var sb2 = new StringBuilder(10);
  var sb3 = new StringBuilder("ABCD");
  var sb4 = new StringBuilder(sb3)
  
  sb1.append("1234"); //1234
  sb2.append("1234"); //1234
  sb3.append("1245"); //ABCD1245
  sb3.append("hello123"); //ABCD1245hello123
  ```



### SubString 

- `StringBuilder ရဲ့  SubString  Method ကော String Object ရဲ့    SubString  Method ရော မူးရင် State ကို မပြောင်းပဲ String ကို ပြန်ပေးသည်`

  ```java
  var strbul = new StringBuilder("Hello Java");
  strbul ==> Hello Java
      
  strbul.substring(3); // StringBuilder Object မှာ SubString လုပ်လိုက်တယ်
  $3 ==> "lo Java"
  strbul ==> Hello Java  //မူးရင် State ကို မပြောင်း
  
  
  var str = "Hello Java" 
  str.substring(3); // String Object မှာ SubString လုပ်လိုက်တယ်
  $5 ==> "lo Java"
  jshell> str
  str ==> "Hello Java" //မူးရင် State ကို မပြောင်း
  
  
      
  ```

  





### Other method 

- `Builder Method အမျာစုးရဲ့  return type က StringBuilder ဖြစ်တာကြောင့် Method များကို နောက်ကဆက်ပြီး ရေးလို့ရတယ်`

  ```java
  var sb1 = new StringBuilder("123") 
      
  sb1.reverse(); 
  //Builder Method များရဲ့  return type က StringBuilder ဖြစ်တာကြောင့် Method များကို နောက်ကဆက်ပြီး ရေးလို့ရတယ်
  sb1.reverse().append("123").append("hello"); //1234123hello
  
  
  var sb5 = sb1.reverse();  //olleh3214321 (sb1 မူလ Value သည် String Object Method များလိုမဟုတ်ဘဲ StringBuilder Method များမှာ ပြောင်းသွားသည်(Muable))
  sb5 == sb1 //true
  sb1 //olleh3214321
  sb5 //olleh3214321
  sb5.replace(3,5,"java"); //olljava3214321
  
  
  sb6 = new StringBuilder("Hello Java");
  sb6.delete(3,6); //delete(strInde,endIndex)
  sb6 // HelJava
  sb6.deleteCharAt(2) // HeJava
  sb6 // HeJava
     
      
  var sb7 = new StringBuilder("Hello");
  sb7.insert(1,7912); //insert(startIndex,value); 
  sb7// H7912ello    
  ```

  

### Builder Pattern

- `Object ဆောက်ရာမှာ Parameter  တွေပေးချင်တဲ့အခါရှိမယ်  မပေးချင်တဲ့အခါရှိမယ် ဒီလိုမျိးအခြေအနေမှာ Constructor ကို Overload လုပ်ပြီး ရေးတာထက် Builder Pattern နဲံ ရေးတာက ပိုကောင်းတယ် `

  ```java
  //ရေးနေကြ ပုံစံ
  class Post {
      private String name;
      private String text;
      private int creator_id;
      public Post(){
      }
      public Post(String name){
      }
      public Post(String name,String text){
      }
  	public Post(String name,String text,int creator_id){
      }
  }
  Post post2 = new Post();
  Post post2 = new Post("Hi");
  Post post3 = new Post("Hi","Hello");
  Post post4 = new Post("Hi","Hello",1);
  
  
  
  //Builder Pattern
  public class BuilderDemo{
      public static void main(String[] args){
          Post post1 = PostBuilder.builder().name("hi").build(); //Parameter တစ် ခု
          Post post01 = PostBuilder.builder().name("name").text("text").build(); //Parameter နှစ်ခု
  		Post post2 = PostBuilder.builder().text("hi").build();
          
  		PostBuilderInerface post3 = PostBuilder.builder().creatorId(1); //Parameter တစ် ခု
          PostBuilderInerface post3 = PostBuilder.builder().name("hi").creatorId(1); //Parameter နှစ်ခု
      }
  }
  
  class Post {
      private String name;
      private String text;
      private int creator_id;
  	public Post(String name, String text,int creator_id, Post others){
      }
  }
  interface PostBuilderInerface {
      Post build();
  }
  class PostBuilder implements PostBuilderInerface{
      private String name;
      private String text;
      private int creator_id;
      private Post others;
      
      public PostBuilder name(String name){
          this.name = name;
          return this;
      }
      public PostBuilder text(String name){
          this.text = text;
          return this;
      }
      public PostBuilder creatorId(int id){
          this.creator_id = id;
          return this;
      }
      public static PostBuilder builder(){
          return new PostBuilder();
      }
      public Post build (){
          return new Post(name,text,creator_id,others);
      }
  }
  ```

  
