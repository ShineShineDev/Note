## Abstract 



- Abstract Class များသည် Object ဆောက်လို့မရ
- Abstract Class များသည် ရိုးရိုး class(con) တွေလုပ်လို့ရသမျှအကုန်လုပ်လို့ရတယ်(constructure တွေ instance method တွေ အကုန်ရေးလို့ရ) , Object တော့ ဆောက်လို့မရ
- ရိုးရိုး class များသည် Abstract method များရေးလို့မရ  Abstract Class မှာ Abstract method များရေးရတယ်
- Abstract method မျာရေချင်ရင် method များရဲ့ရှေ့မှာ Abstract keyword ထည့်ပေးရတယ်
- Abstract method များသည် Body မပါ
- Abstract clsss ကို Conncret class က extends လုပ်လို့ရသလို Conncret class ကိုလည်း Abstract clsss  က extends လုပ်လို့ရ Final keywrord ထည့်လိုက်ရင်တော့ extends ,overwrite လုပ်လို့မရတော့ပါ

>
>
>Final keywrord သုံးထားတဲ့ class , method များတွင် overwrite လုပ်ခွင့်မရှိပါ



- Abstract Class ကို extends လုပ်လိုက်သော class သည် Abstract Class ဖြစ်နေပါက Abstract Class မှ Abstract method များကို override လုပ်လဲ ရတယ် မလုပ်လဲရတယ် 
- Abstract Class ကို extends လုပ်လိုက်သော class သည် ရိုးရိုး Class(concrete clsss) ဖြစ်နေပါက Abstract Class မှ Abstract method များကို override လုပ်ရမည်

```java
abstract class Animal{
   void greet(){
   	System.out.println("hello");
   }
   void eat();
}

// abstract class may or may not override method from abstract class 
abstract class Cat extends Animal{
}

//concrete class must override abstract method from abstract class 
abstract class Cat extends Animal{
    void eat(){
        
    }
}
```



- Abstract Class မှာ constructure method ကို ရေးထား ရင် extends လုပ်ထားသော Abstract Class , concrete class များသည် parent class က constructure method ကို super ဖြင့် ခေါ်ပေးဖို့လိုတယ်



### Constructor Changing

