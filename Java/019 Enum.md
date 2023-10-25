

## Enums

> **`Enums မျာကို Constant Variable အနေနဲ့ ပြောင်းလည်းဖို့မလိုတဲ့ Value အနေနဲ့ သုံးနိုင်တယ် ဉပမာ တစ်ပတ်မှာ 7 ရက်ရှိတာတို့   Month တို့ PI Value တို့ နေရာမှာသုံးလို့သင့်တယ်`** 
>
> **`Enums ဆိုတာ တကယ်တော့ Type ဖြစ်ပြီးတော့ သူ့ထဲမှာ သုံးချင်တဲ့ Object တွေကို Define လုပ်နိုင်တယ်`**
>
> **`Java 1.5 version မှာ ပါလာခဲ့ပါတယ်။ Enums များမပေါ်ခင်က Interface နဲ့သုံးခဲ့ရတယ်`**
>
> **`Type အနေနဲ့ Enums မျာကို အသုံးပြုနိုင်တယ်`**
>
> **`Java ရဲ့ Enum များသည်  interfaces တွေကို implement လုပ်လို့ရတယ် State တွေကို ပိုလိုရတယ် Behaver တွေကို ပိုလိုရတယ် Override လုပ်လို့ရပေမဲံ အများသောအားဖြင့် Constant အနေဲ့သုံးကြတာများတယ်`**
>
> **`Enum များသည် Static Constant Object ဖြစ်တဲ့အတွက် JVM မှာ  Object တစ်ခုပဲရှိပါတယ်.Object တစ်ခုပဲ ရှိချင်တယ်ဆိုရင် Singleton Pattern ကိုသုံးသင်တယ်`**

- **`An enum is a special class that represents a group of constants (unchangeable variables, like final variables).`**
- **`Enum is short for "enumerations", which means "specifically listed`"**
- **`An enum can, just like a class, have attributes and methods. The only difference is that enum constants are public, static and final (unchangeable - cannot be overridden).`**
- **`An enum cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).`**



### Before Enums vs After Enums  

- **` Enums များမပေါ်ခင်က Interface နဲ့သုံးခဲ့ရတယ်`**

  ```java
  //Before Enum
  interface DaysInterface {
      int MON = 0;
      int TUE = 1;
      int WED = 2;
      int THU = 3;
      int FRI = 3;
      int SAT = 5;
      int SUN = 6;
  }
  class BeforeEnum{
      static void showDay(int day){
          System.out.println(day);
      }
  }
  BeforeEnum.showDay(DaysInterface.MON); //0
  //BeforeEnum.showDay() ကို integer ဖြစ်ရင်ခေါ်လို့ရတယ် ဒါပေမဲ့ လိုချင်တဲ့အဖြေက 0-6 ပဲ ရလာတဲ့ အဖြေကြီးက အဆင်မပြေဘူး
  BeforeEnum.showDay(100); //100 
  
  //with Enum
  enum DaysEnum{
      MON,TUE,WED,TUH,FRI,SAT,SUN;
  }
  class UsingEnum{
      static void showDay(DaysEnum day){
          System.out.println(day);
      }
  }
  UsingEnum.showDay("MON"); //MON
  //incompatible types: java.lang.String cannot be converted to DaysEnum
  ```

  



### Crate  Enum

- **`To create an enum, use the enum keyword (instead of class or interface), and separate the constants with a comma. Note that they should be in uppercase letters`**

  ```java
  enum Level{
      LOW,MEDIUM,HIGHT;
  }
  ```



### Access

- **`Enum constants များကို dot ကို အသုံးပြု၍ ခေါ်လို့ရပါတယ် `**

- **`Enum constants များကို array အနေနဲ့ လို့ချင် values() ဆိုတဲံ Method ကိုသုံးနိုငိပါတယ်`**

  ```java
  enum Level{
      LOW,MEDIUM,HIGHT;
  }
  Level myVar = Level.MEDIUM;
  Level.values(); //Level[3] { LOW, MEDIUM, HIGHT }
  
  ```
  





### Loop Through an Enum

```java
for (Level myVar : Level.values()) {
  System.out.println(myVar);
}
```





### Instance Variable in  Enum 

- **`Enum များအတွင်း  Instance Variable များရေးနိုင်ပြီး  Private ပဲဖြစ်ရမယ် `**

- **`Enum များအတွင်း  Instance Variable ရေးလျှင်  Instance Variable  value များကို Assign လုပ်ဖို့ Constructor ဆောက်ပေးရပါမယ်။ Constructor ရေးလိုက်တာနဲ့ Constructor Default ပျက်သွားတဲ့ အတွက် Instance variable များတွက်Value များထည့်ပေးရမယ်  `**

- **`Instance Variable များသည် ဆောက်ပြီးလျှင် ပြင်လို့မရတော့ပါ`**

  ```java
  //TestEmum.java
  class TestEmum{
      public static void main(String[] args){
      	for(Days d : Days.values()){
              showDay(d);
          }
      }
  	static void showDay(Days day){
          System.out.println(day);
          System.out.println(day.getViewName());
      }
  }
  enum Days{
      //Constructor ရေးလိုက်တာနဲ့ Constructor Default ပျက်သွားတဲ့ အတွက် Value များထည့်ပေးရမယ်  `  
      MON("Sundday"),TUE("Tuesday"),WED("Wednesday"),TUH("Tursday"),FRI("Friday"),SAT(""),SUN("Saturady"); 
      
      private String viewName;
      
      Days(String viewName){
          this.viewName = viewName;
      }
      public String getViewName(){
          return this.viewName;
      }
  }
  
  ```

  ```bash
  > javac TestEnum.java
  > java TestEmum 
  MON
  Sundday
  ,,,
  ```



### Abstract Method in Enum

- **`Enum များအတွင်း  Abstract method  များရေးနိုင်ပြီး ။ သူ့ရဲ့ Member Variable က Abstract method  များ ကို  Override လုပ်ပေးဖို့လိုပါသည်`**

- **`enum တွေထဲ  မတူညီတဲ့ Behaver လိုချင် ရင်  Interface ကို သုံးနိုင်းတယ်`**

  ```java
  //TestEmum.java
  class TestEmum{
      public static void main(String[] args){
      	for(Days d : Days.values()){
             d.absMethod();
          }
      }
  }
  enum Days{
      //Member Variable က Abstract method  များ ကို  Override လုပ်ပေးဖို့လိုပါသည်`**
      //Constructor ရေးလိုက်တာနဲ့ Constructor Default ပျက်သွားတဲ့ အတွက် Value များထည့်ပေးရမယ် 
      
      //အောက်ပါ TUE MON.. များသည် မတူညီတဲ့ Behaver 
      MON("Sundday"){
          public  void absMethod(){
              System.out.println("Today is Sunday");
          }
      },
      TUE ("Tuesday"){
          public  void absMethod(){
              System.out.println("Tuesday is Sunday");
          }
      },
      WED("Wednesday"){
          public  void absMethod(){
              System.out.println("Wednesday is Sunday");
          }
      },
      TUH("Tursday"){
          public  void absMethod(){
              System.out.println("Tursday is Sunday");
          }
      },
      FRI("Friday"){
          public  void absMethod(){
              System.out.println("Friday is Sunday");
          }
      },
      SAT(""){
          public  void absMethod(){
              System.out.println("Today is Sunday");
          }
      },
      SUN("Saturady"){
          public  void absMethod(){
              System.out.println("Today is Sunday");
          }
      };
      
      private String viewName;
      
      Days(String viewName){
          this.viewName = viewName;
      }
      public abstract void absMethod();   
      public String getViewName(){
          return this.viewName;
      }
  }
  
  > java TestEnum.java
  //Today is Sunday
  //Tuesday is Sunday
  //Wednesday is Sunday
  // ,,,
  ```

  

###  Enum with Interface

- **`An enum cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).`**

- **`enum တွေထဲ တူညီတဲ့ Behaver တွေ မတူညီတဲ့ Behaver လိုချင် ရင်  Interface ကို သုံးနိုင်းတယ်`**

  ```java
  //TestEmum.java
  class TestEmum{
      public static void main(String[] args){
      	for(Days d : Days.values()){
             d.logging();
          }
      }
  }
  
  interface DaysInerface{
      void logging();
  }
  enum Days implements DaysInerface{
      //အောက်ပါ TUE WED TUH FRI  များသည် တူညီတဲ့ Behaver  ဖြစ်သည်
      TUE("Tuesday"),
      WED("Wednesday"),
      TUH("Tursday"),
      SAT("staturday"),
      SUN("Sunday"),
      //အောက်ပါ FRI,Mon များသည် မတူညီတဲ့ Behaver ဖြစ်သည်
      FRI("Friday"){
          public  void  logging(){
              System.out.println("Happy Friday");
          }
      },
      MON("Sunday"){
          public  void logging(){
              System.out.println("Sad Sunday");
          }
      };
      
      private String viewName;
      //Constructor ရေးလိုက်တာနဲ့ Constructor Default ပျက်သွားတဲ့ အတွက် Member variable များတွက်Value များထည့်ပေးရမယ် 
      Days(String viewName){
          this.viewName = viewName;
      }
      //တူညီတဲ့ Behaver  များအတွက်
      public void logging(){
              System.out.println("Today is " + viewName);
  	}
      public String getViewName(){
          return this.viewName;
      }
  }
  > java TestEnum.java
  Today is Tuesday
  Today is Wednesday
  Today is Tursday
  Today is staturday
  Today is Sunday
  Happy Friday
  Sad Sunday
  ```

  



### Enum in a Switch Statement

```java
enum Level {
    LOW,MEDIUM,HIGH
}

public static void main(String[] args) {
    Level myVar = Level.MEDIUM;
    switch(myVar) {
        case LOW:
            System.out.println("Low level");
            break;
        case MEDIUM:
            System.out.println("Medium level");
            break;
        case HIGH:
            System.out.println("High level");
            break;
    }
}
```



### Some Enum Methods

```java
Level.valueOf("HIGHT");
//output => HIGHT
Level.valueOf("NON");
//output => Exception java.lang.IllegalArgumentException: No enum constant REPL.$JShell$39.Level.NON

Level.LOW.name();
// output => "LOW"

Level.LOW.ordinal() //return index
// output => 0

Level.LOW.toString(); //convert string
// output => "LOW"

Level low = Level.LOW;
low.getDeclaringClass();
//output => class Level
```





### Difference between Enums and Classes

- **`An enum can, just like a class, have attributes and methods. The only difference is that enum constants are public, static and final (unchangeable - cannot be overridden).`**
- **`An enum cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).`**



### Why And When To Use Enums?

- **`Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc.`**







- Chat GPT

- Micorsoft copilot

- Google Brad/Duet

- Caryon AI

- Heywire.ai

- Eightify

- Temi

- Featherty

- Interview.ai

- Opus Clip

  

