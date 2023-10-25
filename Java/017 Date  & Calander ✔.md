### Date  & Calander Object

- **`Date Time တွေစီမံဖို့  Java တွင်  Data (java.uttil.Date) , Calander,(java.util.Calander), java.sql.Date() နဲ့ Third Party Libary ဖြစ်တဲ့ data & Time API ကို သုံးလို့ရပါတယ်` **
- **`Date(java.util.Date) သည် တစ်ကမ္ဘာလုံးက အချိန်နေနဲ့ဆိုရင် မှားနေနိုင်သောကြောင့် Date Time တွေစီမံဖို့ Date Object  ကို မသုံးပဲ Calander Object ကို သုံးသင့်ပါတယ် ။ `**
- **`Date Oject  ရဲ့ field အများစုသည် Deprecate ဖြစ်သည်`**



### Date Object

```java
//Get Date & Time 
new Date() // Sun Aug 06 09:54:17 MMT 2023
new Date(0) // Thu Jan 01 06:30:00 MMT 1970


//Check Before or After     
var d1 = new Date(); //Sun Aug 06 10:36:16 MMT 2023
var d2 = new Date(); //Sun Aug 06 10:36:28 MMT 2023
d1.after(d2); // false
d1.before(d2); //true

d1.compareTo(d2); //-1
d2.compareTo(d1); 1    

    
//Convert Date Object   to Calendar Object      
ar d1 = new Date(); //Sun Aug 06 10:44:14 MMT 2023
var cal = Calendar.getInstance();
cal.setTime(d1);
cal.getTime(); //Sun Aug 06 10:44:14 MMT 2023    
```





## 																			Calander Object

#### Get Date  & Time

```java
var cal = Calendar.getInstance();
cal.getTime();// Sun Aug 06 22:25:47 MMT 2023

```



#### Get Date

```java
var cal = Calendar.getInstance(); 
cal.get(Calendar.DATE) //6
```



#### Get Month

```java
var cal = Calendar.getInstance(); //Sun Aug 06 22:16:44 MMT 2023
cal.get(Calendar.MONTH) // 7 
```



#### Get Day Of Month

```java
var cal = Calendar.getInstance(); //Sun Aug 06 22:16:44 MMT 2023
cal.get(Calendar.DAY_OF_MONTH) // 6
```



#### Get Day Of Week

```java
var cal = Calendar.getInstance(); //Sun Aug 06 22:16:44 MMT 2023
cal.get(Calendar.DAY_OF_WEEK) // 1
```



#### Set Date & Time

```java
var cal = Calendar.getInstance();
cal.set(2023,10,06)  // တစ်လပိုင်ဆို 0 ,  နှစ်လပိုင်ဆို 1 ,
cal.getTime(); //Mon Nov 06 10:12:37 MMT 2023
```



#### Set Date

```java
var cal = Calendar.getInstance(); //Sun Aug 06 22:26:49 MMT 2023
cal.set(Calendar.DATE,10);
cal.getTime(); // Thu Aug 10 22:26:49 MMT 2023
```



#### Set Month

```java
var cal = Calendar.getInstance()
cal.get(Calendar.MONTH); // 7

cal.set(Calendar.MONTH,11);
cal.get(Calendar.MONTH); //11    
```



#### Add Date 

- `add method သည် ရက်(Date) ပေါင်းသွား လ(Month)ကိုကော  တိုးပေးသွားတယ်`
- `roll method သည် လ(Month)ကို  မတိုးပါ`

```java
var cal = Calendar.getInstance();
cal.getTime(); //Sun Aug 06 23:25:14 MMT 2023

//add method
cal.add(Calendar.DAY_OF_MONTH,28);
cal.getTime();  //Sun Sep 03 23:25:14 MMT 2023

//substract with add method
cal.add(Calendar.DAY_OF_MONTH,-28);
cal.getTime(); //  Sun Aug 06 23:25:14 MMT 2023

//roll method
cal.getTime(); //  Sun Aug 06 23:25:14 MMT 2023
cal.roll(Calendar.DAY_OF_MONTH,28);
cal.getTime(); //Thu Aug 03 23:39:10 MMT 2023

//substract with roll method
cal.getTime(); //Thu Aug 03 23:39:10 MMT 2023
cal.roll(Calendar.DAY_OF_MONTH,28);
cal.getTime(); //Sun Aug 06 23:39:10 MMT 2023


```



#### Add Month

```java
var cal = Calendar.getInstance()
cal.getTime(); //Sun Aug 06 23:45:42 MMT 2023
cal.add(Calendar.MONTH,3);
cal.getTime(); //Mon Nov 06 23:45:42 MMT 2023

//susbstract 
cal.getTime(); //Mon Nov 06 23:45:42 MMT 2023
cal.add(Calendar.MONTH,-3);
cal.getTime(); //Sun Aug 06 23:45:42 MMT 2023

```



#### Calculate Time Duration

```java
var time1 = Calendar.getInstance();
time1.getTime() //Mon Aug 07 00:00:50 MMT 2023
time1.getTimeInMillis() //1691343050535    

var time2  = Calendar.getInstance();    
time2.getTime(); // Mon Aug 07 00:02:25 MMT 2023
time2.getTimeInMillis() //1691343145790

var duration =  time2.getTimeInMillis() - time1.getTimeInMillis(); //95255

```









#### Convert String to Date

```java
import java.text.*; 

var str = "2023-08-15 19:00";
var format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
var date = format.parse(str); //Tue Aug 15 19:00:00 MMT 2023

//get Instance
date.getClass(); //class java.util.Date 
```



