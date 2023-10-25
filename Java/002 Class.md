### Create Class

> `In Java, every application begins with a class name, and that class must match the filename.`

- `class keyword ဟာ Class တစ်ခုဖြစ်ကြောင်းကိုသတ်မှတ်ပေးနေတဲ့ keyword ဖြစ်ပါတယ်`
- `User ကတော့ Class Name ဖြစ်ပြီး Identifier လို့ခေါါပါတယ်`
- `{} ကတော့ Class Body ဖြစ်ပါတယ်`
- `Class တစ်ခုရေးတဲ့အခါမှာ Class Boody ကို မဖြစ် မနေရေးသားရပါမယ် `
- `Clas body ထဲမှာ ပါစေချင်တဲ့ အရာတွေကို ရေးသားရမှာဖြစ်ပါတယ်`
- `Java is case-sensitive: "User" and "user" has different meaning.`
- `Every line of code that runs in Java must be inside a class`
- `A class should always start with an uppercase first letter.`
- `The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. `

```java
class User {

}

class Post{
   Post(){} // constructure method(will auto work when create new instance or object)
   void create(){}
   String create(String name){}
   int add(int n1,int n2){ 
       return n1 + n2;
   }
}

public final class Student extends Person implements Runnable {} // Java Class တစ်ခုမှာ ရေးလို့ရသမျှ ရေးသားတဲနမူနာပုံစံဖြစ်ပါတယ်

```









