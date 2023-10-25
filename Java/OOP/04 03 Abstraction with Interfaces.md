##  Abstraction with Interfaces

> `Interface တွေက abstraction တွေကိုဆောင်ရွက်နိုင်တဲ့အရာဖြစ်တယ်`
>
> `Interface တွေက class object တွေကို အပြင်ကိုထုတ်ပြီးပေးသုံးစေချင်တဲ့ အရာတွေကို define လုပ်တဲ့နေရာမှာသုံးသင့်တယ်`
>
> `Interface က သေးစိတ် Detail Implement မပါလို့  Abstract ထက် ပို၍ Abstraction ဖြစ်တယ်`
>
> `Interface ကို inheritance hierarchy မတူတဲ့ class တွေကို ပုံစံတူပါတဲ့ဆိုတဲ့  type(Abstraction type ) တစ်ခုအနေနဲ့ သုံးလို့ရသောကြောင့် Polymorphism ကိုရစေတယ်(type တွေကြားထဲမှာ bridge ပုံစံ)`
>
> `Inheritance Hierarchy မတူတဲ့ object တွေကြားထဲမှာ သူတို့တွေကို တူပါတယ်ဆိုတဲ့နေရာမှာသုံးတယ်`
>
> 

- `Interface တွေက 100% abstract entity တွေဖြစ်တယ်`
- `Class တွေက interface ကို implement  လုပ်ထားမည်ဆိုလျှင်  အဲ့ဒီ class တွေရဲ့  object တွေက interface ကို type အနေနဲ့သုံးလို့ရတယ်`
- `Class တွေက class တွေအချင်းချင်း တစ်ခုပဲ extends လုပ်လို့ရပေမဲံ  interface တွေကိုတော့ တစ်ခုထက်မက implement လုပ်လို့ရတယ်  `
- `Inheritance Hierarchy မတူတဲ့နေရာမှာ စုပြီးသုံးဖို့ Interfaceကိုသုံး `
- `Interface ကို Extend လုပ်သော class သည် Concrete class ဖြစ်ပါက Abstract method များကို Override လုပ်ရမည်`
- `Interface ကို Extend လုပ်သော class သည် Abstract class ဖြစ်ပါက Abstract method များကို Override မလုပ်လည်း ရတယ် ဒါပေမဲ့ သုကို Extend ထက်လုပ်ထားသော classများသည် Concrete class ဖြစ်ပါက Override လုပ်ရမည်`
- `Interface တွင် method နဲ့ variable များသည် public ဖြစ်သောကြောင့် သူကို implements လုပ်ေသာ subclass များei  scope သည် public အနည်းဆုုံးဖြစ်ရမည် `





### Write  Variable in  Interfaces

- `interface တွေရေးတော့မည်ဆိုလျှင် Interface keyword သုံးရတယ်`

- `Interface တွေကို ဘာလုပ်လို့ ရတယ်ဆိုတဲ့အနေနဲံသုံးသင့်တယ်(eg.RunAble,WorkAble)`

- `Interface တ္ငင်  variable များ သည် final အနေနဲ့ မရေးလည်း final(reassign လုပ်လို့မရပါ)များဖြစ်သလို့ static(Object မဆောက်ဘဲ  ခေါ်လို့ရ) မရေးလည်း static ဖြစ်သာကြောင့် interface တွင် public static final ပဲရေးလို့ရတယ် `

  - `final အနေနဲ့ မရေးလည်း final ဖြစ်`
  - `static အနေနဲ့ မရေးလည်း static ဖြစ်`
  - `public အနေနဲ့ မရေးလည်း  public ဖြစ်`

- `Interface တ္ငင် Instance variable များ ရေးလို့မရ`

  ```java
  public class InerfaceDemo{
      public static void main(String[] args){
       	System.out.println(MyInterface.value);
          System.out.println(MyInterface.NOT_FINAL);
          System.out.println(MyInterface.FINAL_VALUE);
          MyInterface.NOT_FINAL  = 10; //error
      }
  }
  
  interface MyInterface{
      int value = 1;
      public static int NOT_FINAL = 5;
      public static final int FINAL_VALUE = 10;
  }
  ```



### Write Method in  Interfaces

> `Interface တွင် method များသည် public အနေနဲံရေးမထားလည်း public ဖြစ်သည် ( Interface  များသည် object  များကိုအပြင်ထုတ်ပြီး သုံးလို့ရအောင် စုပေးထားတဲ့အတွက် public ဖြစ်တယ် )`

- `Interface တ္ငင် Instance variable များ ရေးလို့မရသောကြောင် Constructure Method များ ရေးလို့မရ`

- `Interface တ္ငင် Instance method  များ ရေးလို့မရပါ`

- `static method များသည် ရေးလို့ရ`

- `abstract method များသည် ရေးလို့ရ`

- `Java 9 စပြီး private concrete method များ ရေးလို့ရ`

  ```java
  public class InerfaceDemo{
      public static void main(String[] args){
       	System.out.println(MyInterface.value);
          System.out.println(MyInterface.NOT_FINAL);
          System.out.println(MyInterface.FINAL_VALUE);
          MyInterface.NOT_FINAL  = 10; //erro
      }
  }
  
  interface MyInterface{
      //static method
      static void show(){
      }
     //abstract method 
     void say();
     private void doSomething(){
         
     }
  }
  ```

> `Interface တွင် static method များသည် java 8 မှ စ၍ ရေးလို့ရလာပါသည်`





### Usage of Interface

- `Inheritance Hierarchy မတူတဲ့နေရာမှာ စုပြီးသုံးဖို့ Interfaceကိုသုံး `
- `Interface ကို Extend လုပ်သော class သည် Concrete class ဖြစ်ပါက Abstract method များကို Override လုပ်ရမည်`
- `Interface ကို Extend လုပ်သော class သည် Abstract class ဖြစ်ပါက Abstract method များကို Override မလုပ်လည်း ရတယ် ဒါပေမဲ့ သုကို Extend ထက်လုပ်ထားသော classများသည် Concrete class ဖြစ်ပါက Override လုပ်ရမည်`
- `Interface တွင် method နဲ့ variable များသည် public ဖြစ်သောကြောင့် သူကို implements လုပ်ေသာ subclass များei  scope သည် public အနည်းဆုုံးဖြစ်ရမည် `

```java
abstract class Animal{
    protected String name;
    Animal(String name){
        this.name = name;
    }
    abstract void feed(String food);
    final void greet(){
        System.out.println("Hello");
    }
}

interface DanceAble{
    void dance();
}

abstract class Elephant extends Animal{
    Elephant(String name){ super(name);}
    abstract void wash();
    void feed(String food){
        System.out.println("Eating" + food);
        System.out.println("Moor!!!");
    }
}

class AsianElephant extends Elephant implements DanceAble{
    AsianElephant(String name){
        super(name);
    }
    //abstract class ကို extend လုပ်သော class သည် concrete ဖြစ်ပါက Abstract method များကို Override လုပ်ရမည်
	void wash(){
    }
   //Inheritance ကို Extend လုပ်သော class သည် Concrete class ဖြစ်ပါက Override လုပ်ရမည်`
   public void dance(){ }  
}


// extends လုပ်ပြီး မှ implements ရေးရမည်
class Monkey extends Animal implements DanceAble{
    Monkey(String name){super(name);}
    //Abstract class ကို extend လုပ်သော class သည် concrete ဖြစ်ပါက Abstract method များကို Override လုပ်ရမည်
    void feed(String food){
        System.out.println("Kwe Kwe !" + food);
    }
    //Interface ကို extend လုပ်သော class သည် concrete ဖြစ်ပါက Abstract method များကို Override လုပ်ရမည်
    @Override
    public vodi dance(){}
}


```



### Interface and Class

- `Class can extends single class `

- `Class can implements mutiple Interface `

- `Interface can extends mutiple Interface `

- `Interface can not extends Class` 

  ```php
  interface Interface1{
      void doJob1();
  }
  interface Interface2{
      void doJob2();
  }
  //Abstract Class တွေက Abstract method ပိုင်ဆိုင်ခွင့်ရှိသောကြောင့် override မလုပ်လည်းရတယ်
  interface Interface3 extends Interface1,Interface2 {
      void doJob3();
  }
  
  class Class1 implements Interface1,Interface2 {
      public void doJob2(){};
      public void doJob2(){};
  }
  class Class2 implements Interface3 {
      public void doJob2(){}
      public void doJob2(){};
      public void doJob3(){};
  }
  ```

  

> `Abstract Class တွေက Abstract method ပိုင်ဆိုင်ခွင့်ရှိသောကြောင့် override မလုပ်လည်းရတယ်`



### Interface and Abstract

> Abstract class တွေက Object နဲ့ပတ်သက်ပြီး define လုပ်ပိုင်ခွင့်ရှိ
>
> Interface  တွေက Object နဲ့ပတ်သက်ပြီး define လုပ်ပိုင်မခွင့်ရှိ



| Methods and Variables | Abstract Method | Interface                             |
| --------------------- | --------------- | ------------------------------------- |
| instance variable     | ရေးခွင့်ရှိ       | ရေးခွင့်မရှိ                            |
| instance method       | ရေးခွင့်ရှိ       | Private Only ရေးခွင့်ရှိ                |
| Static Variable       | ရေးခွင့်ရှိ       | Public,Static,Final Only တွေရေးခွင့်ရှိ |
| Static Method         | ရေးခွင့်ရှိ       | Public Only ရေးခွင့်ရှိ                 |
| Constructor           | ရေးခွင့်ရှိ       | ရေးခွင့်မရှိ                            |
| Abstract Method       | ရေးခွင့်ရှိ       | Public Only ရေးခွင့်ရှိ                 |
|                       |                 |                                       |





- `Abstract Class တွေ က Static Method() ရေးခွင့်ရှိတယ်`
- `Abstract Class တွေ က Constructor method ရေးခွင့်ရ `



