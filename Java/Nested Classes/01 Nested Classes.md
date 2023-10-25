##  Nested Classes



### What is

- Java တွင် class တစ်ခုအတွင်း အခြားသော Class များရေးသားနိုင်ပြီး ငုင်းတိုအား Nested Classes ဟုခေါ်ကြပါတယ်
- Nested Classes များအား Static နှင် non-static ဟု နှစ်မျိုးနှစ်စားခွဲခြားနိုင်ပြီး  ၊ Static အမျိုးအစား အား Static  Nested Classes ဟုခေါ်ဆိုပြီး Non-static အမျိုးအစားများ Inner Class ဟုခေါ်ဆိုပါသည်။
- Nested Classes များသည် ငုင်းအား ထည့်သွင်းရေးသားထားသော class များei member တစ်မျိူးဖြစ်ပါသည်။
- Java ဘာသာရပ်တွင် Block အတွင်း လည်း Class များအား ရေးသားနိုင်ပြီး ငုင်းတို့အား Local class ဟုခေါ်ပါသည်။



### Advantage 

- တစ်နေရာတည်းတွင် အသုံးပြုနေေသာ Class များအား သဘောတရားအရ အုပ်စုဖွဲ့ထားနိုင်ခြင်း 
- အကယ်၍  Class တစ်ခုသည် အခြားသော Class တစ်ခုတည်း အတွက်သာ အသုံးဝင်အောင် ရေးသားထားသည် ဆိုပါက အဆိုပါ Class အား အသုံးပြုနေေသာ အတွင်း ထည့်သွင်း ရေးသားထားသင့်သည် ။ဤကဲ့သို့ရေးသား ထားခြင်း အားဖြင့် ငုင်း(လည်ကောင်း) Class နှစ်ခုအား တစ်နေရာထဲတ္ငင် စုစည်းထားနိုင်ပြီး ဆက်သွယ်မှု့အား မြန်ဆန်အောင် ဆောင်ရွက်ပေးနိုင်ပါသည်။
- Encapsulation အားပိုမိုမြင့်မားအောင် ဆောင်ရွက်နိုင်စေခြင်း
- အကယ်ဤ Class A နှင် Class B ei Private member အားဆက်သွယ်အသုံးပြရန်လိုအပ်သည့်အခါမျိူးတွင် Class A အး Class B အတွင်းတွင် Nested Class အနေနှင် ရေးသားပြိး private member များ အသုံးပြုစေနိုင်ပါသည် ။ ထို့အပြင် Class A အား Class B အတ္ငင်းထည့်၍ ရေးသားထားနိုင်သောကြောင့် Class A အား ပြင်ပမှ ဖုန်းကွယ်ထားနိင်ပါသည်။ ထို့အပြင် Class A အား Class  B အတွင်းထည့်ဤ ရေးသားထားနိုင်သောကြောင့် Class A အားပြင်ပမှ ဖုန်းကွယ်ထားနိုင်ပါသည်။
- ဖတ်ရူရလွယ် ကူစေပြီး ပြုင်ပြင်ထိမ်းသိမ်းမှု့ဆိုင်ရာအား တိုးတက်စေနိုင်ပြီး သေငယ်သော Class များအား အသုံးပြုနေသာ Top Level Class အတွင် Nested Class အနေနှင့် ရေးသားထားပါက အသုံးပြုနေသော  Source Code  များအား အလွယ်တကူ ကြည့်နိုင်သောကြောင့် ပြုပြင်ပြောင်လည်းရာ လွယ်ကူစေနိုင်ပါသည်





### Write  Nested Class

- Outer class ကနေဆောက်လိုက်တဲ့ Instance Object တွေရဲ့ Member တွေကို  Nested Class က Access လုပ်စရာမလိုအပ်ရင် Static Nested Class နဲ့ရေးသင့်ပြီး ။

- Outer class ကနေဆောက်လိုက်တဲ့ Instance Object တွေရဲ့ Member တွေကို  Nested Class က Access လုပ်စရာ လိုအပ်ရင် Non-Static Nested Class(Inner Class) နဲ့ရေးသင့်ပါတယ်။

  ```java
  public class Demo{
      public static void main(){
          
      }
      public void showMessage(){
          System.out.printLn("Form Static nested class");
      }
      //Static Nested Class
      public static class InnerSttic{
          public void showMessage(){
              System.out.printLn("Form Static nested class");
          }
      }
      //Inner Class
      public class Inner{
          public void showMessage(){
              System.out.printLn("Form Inner class");
          }
      }
  }
  ```

  

  

### Access Nested Class

- Outer class ရဲ့ static method က Static Nested Class ကိုပဲခေါ်လို့ရပြီး  Outer class ရဲ့  Instance ကတော့ Static Nested Class ကိုရော Non-Static Nested Class(Inner Class)  နှစ်ခုလုံးကိုခေါ်လို့ရပါတတယ်။

  ```java
  public class Outer{
      
      //Static Method
      public static void main(){
          InnerStatic obj1 = new InnerStatic();
          obj1.showMessage();
          
          Inner obj2 = new Inner(); //error because static method can't call Instance Innner Class
          obj2.showMessage();
      }
      //Instance Method
      public void showMessage(){
          InnerStatic obj1 = new InnerStatic();
          obj1.showMessage();
          
          Inner obj2 = new Inner();
          obj2.showMessage();
       }
      //Static Nested Class
      public static class InnerStatic{
          public void showMessage(){
              System.out.printLn("Form Static nested class");
          }
      }
      //Inner Class
      public class Inner{
          public void showMessage(){
              System.out.printLn("Form Inner class");
          }
      }
  }
  
  
  //Outer ရဲ့ Nested Class များကို  နောက်ထပ် ပြင်ပမှ ခေါ်ယူသုံးခြင်း
  public class NestedDemo{
      public static void main(){
          
          //Stitc Nested Class
          Outer.InnerStatic obj1 = new Outer.InnerStatic();
          obj1.showMessage();
          
          //Inner Class
          Outer.Inner obj2 = new Outer().new Inner();
          obj2.showMessage();
          
          //Inner Class another way
          Outer outer = new Outer();
          Outer.Inner obj3 = outer.new Inner();
      }
  }
  ```

  



### Local  Inner Class in Block Code

- Local Class အရင် Declarer လုပ်ပြီးမှ သုံးလို့ရတယ် 

- Local  Class များကို public , Private ပေးလို့မရ Final တော့ပေးလို့ရတယ်

- Local  Class ရဲဲ့ Member များကို  public , Private , Static ပေးလို့ရ 

- Local  Class  ကိုတိုင်ကိုတော့ static  ပေးလို့မရ Member များကို ရ

  ```java
  public class NestedDemo{
      public static void main(){
          
          //Stitc Nested Class
          Outer.InnerStatic obj1 = new Outer.InnerStatic();
          obj1.showMessage();
          
          //Inner Class
          Outer.Inner obj2 = new Outer().new Inner();
          obj2.showMessage();
      }
      //init Block
      {
         //အရင် Declarer လုပ်
         //public class LocalInnerClass =>  public ပေးလို့မရ 
         //private class LocalInnerClass => Private ပေးလို့မရ 
         //final class LocalInnerClass => final ပေးလို့ရ
          class LocalInnerClass{
              void  show(){}
              public void  show()1{}
              private void  show()2{}
              static void  show3(){}
          }
      }
      //ပြီးမှ သုံးလို့ရတယ် 
      new LocalInnerClass.show();
  }
  ```

  

### Anonymous Nested Class with Abstract class

- Anonymous Nested Class ဘာကြောင့်ခေါ်ရသလည်းဆိုတော့ compile လုပ်လိုက်ရင် ထို class အတွက် နာမည် သီးသန့်မရှိတော့ ပဲ $1,$2 အနေနဲ့ class file ထွက်လာသည်

- abstract class များသည် ပုံမှန်အားဖြင့် Instance ဆောက်လို့မရပေမဲ့ {} ကိုသုံးပြီး ဆောက်လို့ရသည်

  ```java
  //NestedDemo.java
  public class NestedDemo{
      
      public static void main(String[] args){   
      }
      
      static {
  
          //Anonymous Nested Class
          //abstract class များသည် ပုံမှန်အားဖြင့် Instance ဆောက်လို့မရပေမဲ့ {} ကိုသုံးပြီး ဆောက်လို့ရသည်
          Myclass2 ob2 = new Myclass2("Hi"){};         
          ob2.greet();
          
          //Anonymous Nested Class
          //Class တွင် abstract method ပါပါက {} ထဲတွင် abstract method ကို overrid လုပ်ပေးဖိုးလိုသည်
          Myclass1 ob1 = new Myclass1("Hi"){
              void doSomething(){
                  System.out.println("Hello Overrid Abstract Method" + name);
              }
          };
          ob1.greet();
          ob1.doSomething();
  
      }
  }
  
  abstract class Myclass1{
      protected String name;
      Myclass1(String name){
          this.name = name;
      }
      abstract void doSomething();
      void greet(){
          System.out.println("Hello Anonymous");
      }
  }
  
  abstract class Myclass2{
      protected String name;   
      Myclass2(String name){
          this.name = name;
      }
      void greet(){
          System.out.println("Hello Anonymous");
      }
  }
  
  
  // > javac NestedDemo.java
  // > ls
  // Myclass1.class  Myclass2.class  'NestedDemo$1.class'  'NestedDemo$2.class'   NestedDemo.class   NestedDemo.java
  
  // NestedDemo$1.class  NestedDemo$2.class များသည် နာမည်မရှိသောကြောင့် Anonymous Nested Class ဟုခေါ်နိုင်သည်
  
  ```

  



### Anonymous Nested Class with Interface class

- Anonymous Nested Class ဘာကြောင့်ခေါ်ရသလည်းဆိုတော့ compile လုပ်လိုက်ရင် ထို class အတွက် နာမည် သီးသန့်မရှိတော့ ပဲ $1,$2 အနေနဲ့ class file ထွက်လာသည်

  ```java
  public class NestedDemo{
      public static void main(String[] args){   
      }
      static {
          //Interface တွင် abstract method များဖြစ်တာကြောင့် {} ထဲတွင် abstract method ကို overrid လုပ်ပေးဖိုးလိုသည်
          MyInerFace interface1 = new MyInerFace(){
              void doSomething(){
                  System.out.println("Hello Overrid Abstract Method");
              }
          }
          interface1.doSomething();
      }
  }
  
  abstract class MyInerFace{
      abstract void doSomething();
  }
  
  $ javac NestedDemo.java 
  $ ls
  // MyInerFace.class  'NestedDemo$1.class'   NestedDemo.class   NestedDemo.java
  // NestedDemo$1 သည် နာမည်မရှိသောကြောင့် Anonymous Nested Class ဟုခေါ်နိုင်သည်
  ```

  



